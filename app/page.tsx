"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const StarMark = () => (
  <svg viewBox="0 0 56 56" aria-hidden="true" className="brand-mark">
    <circle cx="28" cy="28" r="24" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="28" cy="28" r="7" fill="currentColor" />
    <path d="M28 4c4.2 9.5 4.2 38.5 0 48M4 28c9.5-4.2 38.5-4.2 48 0" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="44" cy="15" r="2.5" fill="currentColor" />
  </svg>
);

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <div className="grain" />
    <header className="topbar">
      <a className="wordmark" href="#inicio" aria-label="LaPEIA, página inicial"><StarMark /><span>LaPEIA<small>ECT · UFRN</small></span></a>
      <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
        <a href="#laboratorio" onClick={() => setOpen(false)}>O laboratório</a><a href="#iniciativas" onClick={() => setOpen(false)}>Iniciativas</a><a href="#jornada" onClick={() => setOpen(false)}>Sua jornada</a><a className="nav-cta" href="#participar" onClick={() => setOpen(false)}>Fazer parte <Arrow /></a>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}><i /><i /></button>
    </header>
    <section className="hero hero-institution" id="inicio">
      <div className="hero-technical" aria-hidden="true"><span>ECT/UFRN · 2026</span><span>ASTRONOMIA · PESQUISA · EXTENSÃO</span></div>
      <div className="hero-copy">
        <p className="eyebrow"><span /> ESCOLA DE CIÊNCIAS E TECNOLOGIA · UFRN</p>
        <h1>LaPEIA</h1>
        <p className="hero-text">Laboratório de Pesquisa, Extensão e Inovação em Astronomia</p>
        <p className="hero-brief">Uma estrutura institucional que integra ciência, formação e infraestrutura para ampliar o alcance da Astronomia na ECT/UFRN.</p>
      </div>
      <div className="hero-programs" aria-label="Frentes da LaPEIA">
        <a href="https://titan.ect.ufrn.br/" target="_blank" rel="noreferrer"><span>01 · PESQUISA</span><strong>Titan</strong><Arrow /></a>
        <a href="https://cometanordestino.ect.ufrn.br/" target="_blank" rel="noreferrer"><span>02 · EXTENSÃO</span><strong>Cometa Nordestino</strong><Arrow /></a>
        <div><span>03 · INFRAESTRUTURA</span><strong>Supercomputação</strong><small>EM IMPLANTAÇÃO</small></div>
        <div><span>04 · SERVIÇOS</span><strong>Serviços do Lab</strong><small>EM IMPLANTAÇÃO</small></div>
      </div>
      <div className="hero-foot"><span>LAPEIA / ECT-UFRN</span><span>QUATRO FRENTES INTEGRADAS</span><span>SCROLL PARA EXPLORAR ↓</span></div>
    </section>
    <section className="intro section" id="laboratorio"><p className="section-index">( 01 — QUEM SOMOS )</p><div className="intro-grid"><h2>Ciência de ponta,<br /><em>com os pés no Nordeste.</em></h2><div><p className="lead">A LaPEIA é a estrutura institucional da Escola de Ciências e Tecnologia da UFRN que reúne pessoas, ideias e ferramentas para explorar o cosmos.</p><p>Consolidamos as iniciativas de Astronomia da ECT/UFRN: o grupo de pesquisa Titan e o programa de extensão Cometa Nordestino. Aqui, o conhecimento circula — da sala de pesquisa à escola, da pergunta à publicação.</p><a className="text-link under" href="#jornada">Entenda o nosso fluxo <Arrow /></a></div></div><div className="marquee" aria-label="Temas de pesquisa">EXOPLANETAS <b>✦</b> EVOLUÇÃO ESTELAR <b>✦</b> ONDAS GRAVITACIONAIS <b>✦</b> COSMOLOGIA <b>✦</b></div></section>
    <section className="initiatives section" id="iniciativas"><div className="section-top"><p className="section-index">( 02 — INICIATIVAS )</p><p>Quatro frentes.<br />Um mesmo horizonte.</p></div><div className="initiative-grid">
      <a className="module titan" href="https://titan.ect.ufrn.br/" target="_blank" rel="noreferrer"><div className="module-top"><span>01</span><span>GRUPO DE PESQUISA</span><Arrow /></div><div className="module-body"><span className="module-symbol">◒</span><h3>Titan</h3><p>Time de Astrofísica<br />e Exoplanetologia</p></div><div className="module-bottom">Acessar pesquisa <Arrow /></div></a>
      <a className="module comet" href="https://cometanordestino.ect.ufrn.br/" target="_blank" rel="noreferrer"><div className="module-top"><span>02</span><span>GRUPO DE EXTENSÃO</span><Arrow /></div><div className="module-body"><span className="module-symbol">☄</span><h3>Cometa<br />Nordestino</h3><p>Ciência que atravessa<br />territórios.</p></div><div className="module-bottom">Acessar extensão <Arrow /></div></a>
      <div className="module future"><div className="module-top"><span>03</span><span>EM BREVE</span><span>—</span></div><div className="module-body"><span className="module-symbol">⌘</span><h3>Super<br />computador</h3><p>Infraestrutura para<br />grandes perguntas.</p></div><div className="module-bottom">Em implantação</div></div>
      <div className="module future"><div className="module-top"><span>04</span><span>EM BREVE</span><span>—</span></div><div className="module-body"><span className="module-symbol">◌</span><h3>Serviços<br />do Lab</h3><p>Dados, apoio e<br />tecnologia aberta.</p></div><div className="module-bottom">Em implantação</div></div>
    </div></section>
    <section className="journey section" id="jornada"><p className="section-index light">( 03 — FLUXO CONTÍNUO )</p><div className="journey-title"><h2>Seu caminho<br />não termina <em>na sala de aula.</em></h2><p>Na LaPEIA, uma boa pergunta pode se tornar projeto, impacto e uma nova forma de enxergar o mundo.</p></div><div className="path"><article><span>01</span><div className="path-icon">✦</div><h3>Aprendizado</h3><p>Discussões, metodologias e orientação para enfrentar os desafios da ciência.</p></article><article><span>02</span><div className="path-icon">◌</div><h3>Pesquisa</h3><p>Projetos inovadores para investigar mundos, estrelas e o próprio Universo.</p></article><article><span>03</span><div className="path-icon">↗</div><h3>Impacto</h3><p>Oficinas, observações e palestras que inspiram futuras gerações.</p></article><article><span>04</span><div className="path-icon">✷</div><h3>Descoberta</h3><p>Publicações, congressos e a celebração de cada contribuição.</p></article></div></section>
    <section className="join" id="participar"><div className="join-decor">✦</div><p className="section-index">( 04 — PRÓXIMA ÓRBITA )</p><h2>Existe um lugar<br />para a sua <em>curiosidade.</em></h2><p>Você é estudante de graduação e quer viver pesquisa, extensão ou inovação? Venha construir futuros de descoberta e impacto com a gente.</p><a className="button dark" href="#iniciativas">Conheça as iniciativas <Arrow /></a></section>
    <footer><a className="wordmark" href="#inicio"><StarMark /><span>LaPEIA<small>ECT · UFRN</small></span></a><p>Laboratório de Pesquisa, Extensão<br />e Inovação em Astronomia</p><p>Escola de Ciências e Tecnologia<br />Universidade Federal do Rio Grande do Norte</p><p>© 2026 · Natal, RN</p></footer>
  </main>;
}
