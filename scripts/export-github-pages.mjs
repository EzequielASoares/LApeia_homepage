import { spawn } from "node:child_process";
import { mkdir, rename, writeFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";

const port = 4173;
const root = `http://127.0.0.1:${port}`;
const publicPath = "/LApeia_homepage";

const server = spawn(process.execPath, [
  "./node_modules/vinext/dist/cli.js",
  "start",
  "--hostname",
  "127.0.0.1",
  "--port",
  String(port),
], { stdio: "inherit" });

async function getHomepage() {
  let latestError;

  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`${root}${publicPath}/`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.text();
    } catch (error) {
      latestError = error;
      await delay(150);
    }
  }

  throw latestError ?? new Error("Não foi possível iniciar a exportação estática.");
}

try {
  const html = await getHomepage();
  const githubPagesHtml = html
    .replaceAll('href="/images/', `href="${publicPath}/images/`)
    .replaceAll('src="/images/', `src="${publicPath}/images/`)
    .replaceAll('href="/favicon.svg"', `href="${publicPath}/favicon.svg"`);

  await mkdir("dist/client", { recursive: true });
  // O build usa o basePath para criar os chunks em uma subpasta. O Pages já
  // aplica esse prefixo pela URL do repositório, então os assets precisam
  // ficar na raiz do artefato publicado.
  await rename("dist/client/LApeia_homepage/_next", "dist/client/_next");
  await writeFile("dist/client/index.html", githubPagesHtml);
  console.log("GitHub Pages: página estática criada em dist/client/index.html");
} finally {
  server.kill("SIGTERM");
}
