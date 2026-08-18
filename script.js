/* =====================================================
   HOTEL KILEGAL
   ESTILO PRINCIPAL
   ===================================================== */

:root {
    --laranja: #f47b20;
    --laranja-escuro: #d95f0b;
    --laranja-claro: #fff1e6;
    --branco: #ffffff;
    --creme: #fffaf5;
    --texto: #292929;
    --texto-claro: #666666;
    --borda: #eeeeee;
    --verde: #25d366;
    --sombra: 0 10px 30px rgba(0, 0, 0, 0.08);
    --raio: 18px;
}


/* =====================================================
   RESET
   ===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--creme);
    color: var(--texto);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* =====================================================
   CABEÇALHO
   ===================================================== */

.topo {
    position: sticky;
    top: 0;
    z-index: 1000;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 14px 6%;

    background: rgba(255, 255, 255, 0.97);

    border-bottom: 1px solid var(--borda);

    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
}


/* LOGO */

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.logo strong {
    color: var(--laranja);
}

.logo-mark {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: var(--laranja);
    color: white;

    font-size: 21px;
    font-weight: bold;

    box-shadow: 0 5px 15px rgba(244, 123, 32, 0.3);
}


/* MENU */

.menu {
    display: flex;
    align-items: center;
    gap: 28px;
}

.menu a {
    position: relative;

    font-size: 14px;
    font-weight: 600;

    transition: 0.3s;
}

.menu a:hover {
    color: var(--laranja);
}

.menu a::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 0;
    height: 2px;

    background: var(--laranja);

    transition: 0.3s;
}

.menu a:hover::after {
    width: 100%;
}


/* BOTÃO MENU MOBILE */

.menu-btn {
    display: none;

    border: none;
    background: transparent;

    font-size: 28px;

    cursor: pointer;
}


/* =====================================================
   HERO
   ===================================================== */

.hero {
    position: relative;

    min-height: 650px;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.72),
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.15)
        );

    overflow: hidden;
}


/* fundo temporário enquanto não há fotos */

.hero::before {
    content: "";

    position: absolute;
    inset: 0;

    background:
        radial-gradient(
            circle at 75% 40%,
            rgba(244, 123, 32, 0.5),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #48220d,
            #f47b20
        );

    z-index: -2;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.45),
            transparent
        );

    z-index: -1;
}

.hero-content {
    width: min(1150px, 88%);

    margin: auto;

    color: white;
}

.tag {
    display: inline-block;

    padding: 7px 14px;

    margin-bottom: 18px;

    border-radius: 50px;

    background: rgba(255, 255, 255, 0.15);

    border: 1px solid rgba(255, 255, 255, 0.3);

    font-size: 13px;
    font-weight: bold;
}

.hero h1 {
    max-width: 750px;

    font-size: clamp(42px, 6vw, 76px);

    line-height: 1.05;

    margin-bottom: 24px;
}

.hero h1 span {
    color: #ff9b52;
}

.hero p {
    max-width: 600px;

    font-size: 19px;

    color: rgba(255, 255, 255, 0.9);

    margin-bottom: 30px;
}


/* =====================================================
   BOTÕES
   ===================================================== */

.hero-actions,
.contact-actions {
    display: flex;
    flex-wrap: wrap;

    gap: 14px;
}

.btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 48px;

    padding: 12px 22px;

    border-radius: 50px;

    font-weight: bold;

    transition: 0.3s;

    cursor: pointer;
}

.btn-primary {
    background: var(--laranja);
    color: white;

    box-shadow: 0 7px 20px rgba(244, 123, 32, 0.25);
}

.btn-primary:hover {
    background: var(--laranja-escuro);

    transform: translateY(-2px);
}

.btn-light {
    background: white;
    color: var(--texto);
}

.btn-light:hover {
    transform: translateY(-2px);
}

.btn-whatsapp {
    background: var(--verde);
    color: white;
}

.btn-whatsapp:hover {
    transform: translateY(-2px);

    filter: brightness(0.95);
}


/* =====================================================
   BENEFÍCIOS
   ===================================================== */

.beneficios {
    width: min(1150px, 90%);

    margin: -45px auto 0;

    position: relative;
    z-index: 10;

    display: grid;

    grid-template-columns: repeat(4, 1fr);

    background: white;

    border-radius: var(--raio);

    box-shadow: var(--sombra);

    overflow: hidden;
}

.beneficios div {
    padding: 25px 20px;

    display: flex;
    flex-direction: column;

    gap: 3px;

    border-right: 1px solid var(--borda);
}

.beneficios div:last-child {
    border-right: none;
}

.beneficios span {
    font-size: 27px;
}

.beneficios strong {
    font-size: 15px;
}

.beneficios small {
    color: var(--texto-claro);

    font-size: 12px;
}


/* =====================================================
   SEÇÕES
   ===================================================== */

.section {
    width: min(1150px, 90%);

    margin: auto;

    padding: 100px 0;
}

.section-head {
    max-width: 700px;

    margin-bottom: 45px;
}

.eyebrow {
    display: inline-block;

    margin-bottom: 10px;

    color: var(--laranja);

    font-size: 12px;

    font-weight: bold;

    letter-spacing: 2px;
}

.section h2,
.about h2 {
    font-size: clamp(32px, 4vw, 48px);

    line-height: 1.1;

    margin-bottom: 15px;
}

.section-head p {
    color: var(--texto-claro);
}


/* =====================================================
   CARDS DAS SUÍTES
   ===================================================== */

.cards {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 25px;
}

.room-card {
    overflow: hidden;

    background: white;

    border-radius: var(--raio);

    border: 1px solid var(--borda);

    box-shadow: var(--sombra);

    transition: 0.3s;
}

.room-card:hover {
    transform: translateY(-5px);
}

.photo {
    min-height: 270px;
}

.placeholder {
    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    text-align: center;

    color: #777;

    background:
        linear-gradient(
            135deg,
            #f4f4f4,
            #fff
        );
}

.placeholder span {
    font-size: 45px;

    margin-bottom: 8px;
}

.placeholder b {
    font-size: 14px;

    color: #555;
}

.placeholder small {
    color: #999;

    font-size: 12px;
}

.room-info {
    padding: 25px;
}

.room-info h3 {
    font-size: 24px;

    margin-bottom: 7px;
}

.room-info p {
    color: var(--texto-claro);

    margin-bottom: 15px;
}

.amenities {
    padding: 15px;

    margin-bottom: 18px;

    border-radius: 12px;

    background: var(--laranja-claro);

    color: #444;

    line-height: 1.9;

    font-size: 14px;
}

.room-info > a {
    color: var(--laranja);

    font-weight: bold;

    font-size: 14px;
}

.room-info > a:hover {
    text-decoration: underline;
}


/* =====================================================
   GALERIA
   ===================================================== */

.gallery {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    grid-auto-rows: 200px;

    gap: 15px;
}

.gallery-item {
    border-radius: 15px;

    overflow: hidden;

    border: 1px solid var(--borda);
}

.gallery-item.big {
    grid-column: span 2;
    grid-row: span 2;
}


/* =====================================================
   SOBRE
   ===================================================== */

.about {
    width: min(1150px, 90%);

    margin: auto;

    padding: 80px 0;

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;

    align-items: center;
}

.about-image {
    min-height: 430px;

    border-radius: var(--raio);

    overflow: hidden;
}

.about-text p {
    color: var(--texto-claro);

    margin-bottom: 15px;
}

.text-link {
    display: inline-block;

    margin-top: 10px;

    color: var(--laranja);

    font-weight: bold;
}


/* =====================================================
   LOCALIZAÇÃO
   ===================================================== */

.location-box {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 0;

    overflow: hidden;

    background: white;

    border-radius: var(--raio);

    box-shadow: var(--sombra);
}

.map-placeholder {
    min-height: 360px;

    display: flex;

    align-items: center;
    justify-content: center;

    font-size: 80px;

    background:
        linear-gradient(
            135deg,
            #ffe6d2,
            #fff
        );
}

.location-box > div:last-child {
    padding: 50px;
}

.location-box h3 {
    font-size: 28px;

    margin-bottom: 15px;
}

.location-box p {
    margin-bottom: 20px;

    color: var(--texto-claro);
}


/* =====================================================
   INSTAGRAM
   ===================================================== */

.instagram-section {
    text-align: center;
}

.instagram-section .section-head {
    margin-left: auto;
    margin-right: auto;
}

.instagram-card {
    max-width: 500px;

    margin: auto;

    padding: 45px 30px;

    text-align: center;

    background: white;

    border-radius: var(--raio);

    box-shadow: var(--sombra);

    border: 1px solid var(--borda);
}

.instagram-icon {
    font-size: 55px;

    margin-bottom: 10px;
}

.instagram-card h3 {
    font-size: 27px;

    margin-bottom: 8px;
}

.instagram-card p {
    color: var(--texto-claro);

    margin-bottom: 22px;
}


/* =====================================================
   CONTATO
   ===================================================== */

.contact {
    margin-top: 50px;

    padding: 90px 5%;

    text-align: center;

    background:
        linear-gradient(
            135deg,
            #e9680c,
            #f47b20
        );

    color: white;
}

.contact-inner {
    max-width: 900px;

    margin: auto;
}

.contact h2 {
    font-size: clamp(32px, 5vw, 50px);

    line-height: 1.1;

    margin-bottom: 15px;
}

.contact p {
    margin-bottom: 30px;

    color: rgba(255, 255, 255, 0.9);
}

.contact-actions {
    justify-content: center;
}

.contact-note {
    margin-top: 25px !important;

    margin-bottom: 0 !important;

    font-size: 13px;
}


/* =====================================================
   RODAPÉ
   ===================================================== */

footer {
    background: #1d1d1d;

    color: white;
}

.footer-main {
    width: min(1150px, 90%);

    margin: auto;

    padding: 55px 0;

    display: flex;

    justify-content: space-between;

    gap: 40px;
}

.footer-logo {
    margin-bottom: 15px;
}

.footer-main p {
    color: #aaa;

    margin-top: 5px;
}

.socials {
    display: flex;

    flex-direction: column;

    gap: 12px;
}

.socials a {
    color: #ddd;

    transition: 0.3s;
}

.socials a:hover {
    color: #ff9b52;
}

.copyright {
    padding: 18px;

    text-align: center;

    color: #888;

    border-top: 1px solid #333;

    font-size: 12px;
}


/* =====================================================
   RESPONSIVIDADE — TABLET
   ===================================================== */

@media (max-width: 900px) {

    .menu {
        gap: 15px;
    }

    .beneficios {
        grid-template-columns: repeat(2, 1fr);
    }

    .beneficios div:nth-child(2) {
        border-right: none;
    }

    .beneficios div:nth-child(1),
    .beneficios div:nth-child(2) {
        border-bottom: 1px solid var(--borda);
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }

    .about {
        grid-template-columns: 1fr;
    }

    .location-box {
        grid-template-columns: 1fr;
    }

}


/* =====================================================
   RESPONSIVIDADE — CELULAR
   ===================================================== */

@media (max-width: 700px) {

    .topo {
        padding: 12px 5%;
    }

    .menu-btn {
        display: block;
    }

    .menu {
        position: absolute;

        top: 100%;
        left: 0;

        width: 100%;

        display: none;

        flex-direction: column;

        align-items: stretch;

        gap: 0;

        background: white;

        border-bottom: 1px solid var(--borda);

        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    }

    .menu.active {
        display: flex;
    }

    .menu a {
        padding: 16px 6%;

        border-bottom: 1px solid var(--borda);
    }

    .menu a::after {
        display: none;
    }


    .hero {
        min-height: 600px;
    }

    .hero-content {
        width: 90%;
    }

    .hero h1 {
        font-size: 43px;
    }

    .hero p {
        font-size: 16px;
    }

    .hero-actions {
        flex-direction: column;

        align-items: stretch;
    }

    .hero-actions .btn {
        width: 100%;
    }


    .beneficios {
        width: 90%;

        margin-top: -30px;

        grid-template-columns: 1fr;
    }

    .beneficios div {
        border-right: none !important;

        border-bottom: 1px solid var(--borda);
    }

    .beneficios div:last-child {
        border-bottom: none;
    }


    .section {
        padding: 70px 0;
    }


    .gallery {
        grid-template-columns: 1fr;

        grid-auto-rows: 220px;
    }

    .gallery-item.big {
        grid-column: span 1;

        grid-row: span 1;
    }


    .about {
        padding: 60px 0;

        gap: 35px;
    }

    .about-image {
        min-height: 300px;
    }


    .location-box > div:last-child {
        padding: 30px;
    }


    .contact {
        padding: 70px 5%;
    }

    .contact-actions {
        flex-direction: column;
    }

    .contact-actions .btn {
        width: 100%;
    }


    .footer-main {
        flex-direction: column;
    }

}


/* =====================================================
   CELULARES PEQUENOS
   ===================================================== */

@media (max-width: 420px) {

    .logo {
        font-size: 15px;
    }

    .logo-mark {
        width: 36px;
        height: 36px;

        font-size: 18px;
    }

    .hero h1 {
        font-size: 36px;
    }

    .section h2,
    .about h2 {
        font-size: 32px;
    }

}
