# LaPEIA — ECT/UFRN

Site institucional do **Laboratório de Pesquisa, Extensão e Inovação em Astronomia (LaPEIA)**, estrutura da Escola de Ciências e Tecnologia da Universidade Federal do Rio Grande do Norte.

O projeto apresenta as quatro frentes do laboratório:

- **Titan** — Time de Astrofísica e Exoplanetologia;
- **Cometa Nordestino** — programa de extensão em Astronomia e Astronáutica;
- **Supercomputação** — infraestrutura científica em implantação;
- **Serviços do Lab** — apoio técnico, prototipagem e recursos compartilhados em implantação.

## Acesso

- Site publicado: [lapeia-ufrn.zippynewt128.chatgpt.site](https://lapeia-ufrn.zippynewt128.chatgpt.site)
- Titan: [titan.ect.ufrn.br](https://titan.ect.ufrn.br/)
- Cometa Nordestino: [cometanordestino.ect.ufrn.br](https://cometanordestino.ect.ufrn.br/)

## Tecnologias

- React 19
- Vinext / Vite
- TypeScript
- CSS responsivo, sem dependência de um framework visual

## Executar localmente

Pré-requisitos: Node.js 22 ou superior.

```bash
git clone https://github.com/EzequielASoares/Lapeia_homepage.git
cd Lapeia_homepage
npm install
npm run dev
```

Abra [http://127.0.0.1:5173](http://127.0.0.1:5173) no navegador.

## Comandos úteis

```bash
# Desenvolvimento com recarregamento automático
npm run dev

# Gerar build de produção
npm run build

# Verificar o build gerado localmente
npm run start
```

## Estrutura principal

```text
app/
  page.tsx              # Página institucional
  globals.css           # Estilos-base
  hero.css              # Capa e navegação
  innovation.css        # Galeria de inovação
  institutional.css     # Identidade institucional
  programs.css          # Estilos dos programas
  program-journey.css   # Trilha visual dos quatro módulos
public/
  images/               # Logos e imagens institucionais
```

## Conteúdo e identidade

As logos do Titan e do Cometa Nordestino estão em `public/images/`. Os banners de Supercomputação e Serviços do Lab utilizam imagens institucionais de apoio para comunicar as frentes que ainda estão em implantação.

Para atualizar textos, links ou módulos, edite principalmente `app/page.tsx`. Os estilos específicos da trilha dos programas ficam em `app/program-journey.css`.

## Licença

Este repositório contém o código do site institucional da LaPEIA/ECT/UFRN. Consulte a equipe responsável antes de reutilizar marcas, logos ou materiais institucionais.
