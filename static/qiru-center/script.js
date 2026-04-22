/* ============================================================
   QIRU CENTER — Animations & Interactions
   ============================================================ */

'use strict';

// ── PRODUCTS DATA ─────────────────────────────────────────
const PRODUCTS = {
    colchones: [
        {
            name: 'Medallón Ergosoft King', price: 'S/ 529', includes: 'Almohada + Protector', cat: 'Colchón',
            featured: true,
            images: ['Medallon Ergosoft King.jpeg', 'Medallon Ergosoft King1.jpeg', 'Medallon Ergosoft King2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Plazaje',          'Queen'],
                ['Modelo',           'Medallón'],
                ['Línea',            'Medallón Premium'],
                ['Alto (cm)',        '27 cm'],
                ['Ancho (cm)',       '152 cm'],
                ['Largo (cm)',       '203 cm'],
                ['Peso (kg)',        '34.5 kg'],
                ['Pillow top',       'Sí'],
                ['Two sides',        'No'],
                ['Nivel de firmeza', '3 · Intermedio'],
                ['Garantía',         '7 años'],
            ]
        },
        {
            name: 'Pocket Star Negro King', price: 'S/ 789', includes: '02 Almohadas + Protector', cat: 'Colchón',
            featured: true,
            images: ['negroprincipal.jpeg', 'negromini1.jpeg', 'negromini3.jpeg'],
            specs: [
                ['Marca',             'PARAÍSO'],
                ['Modelo',            'Super Star Negro'],
                ['Color',             'Negro'],
                ['Plazas',            'King'],
                ['Altura',            '28.5 cm'],
                ['Ancho (cm)',        '198 cm'],
                ['Largo (cm)',        '203 cm'],
                ['Peso (kg)',         '52 kg'],
                ['Resortes',          '475 · Cosisoft'],
                ['Tela',              'Tejido de punto'],
                ['Nivel de firmeza',  'Semifirme'],
                ['Lados de uso',      '1'],
                ['Garantía',          '1 año'],
                ['Incluye',           '02 Almohadas + Protector'],
                ['Beneficios',        'Espuma Zebra Descanso3, espuma prensada y panel de resortes Cosisoft para soporte equilibrado'],
            ]
        },
        {
            name: 'Super Star King', price: 'S/ 699', includes: '2 Almohadas + Protector', cat: 'Colchón',
            featured: true,
            images: ['superprincipal.jpeg', 'supermini1.jpeg', 'supermini2.jpeg'],
            specs: [
                ['Marca',             'PARAÍSO'],
                ['Modelo',            'Super Star'],
                ['Plazas',            'King'],
                ['Tamaño',            'King'],
                ['Altura',            '28.5 cm'],
                ['Ancho (cm)',        '198 cm'],
                ['Largo (cm)',        '203 cm'],
                ['Peso (kg)',         '52 kg'],
                ['Resortes',          'Cosisoft'],
                ['Tela',              'Tejido de punto'],
                ['Ventilación',       'Sí'],
                ['Nivel de firmeza',  'Intermedio'],
                ['Garantía',          '1 año'],
                ['Incluye',           '2 almohadas de fibra sintética + Protector'],
                ['Beneficios',        'Tela tejido de punto que brinda suavidad y soporte equilibrado'],
            ]
        },
        {
            name: 'Pocket Star King', price: 'S/ 1,758', includes: 'Almohada + Protector · Resortes pocket', cat: 'Colchón Premium',
            featured: true,
            images: ['paraisoprincipal.jpeg', 'paraisomini1.jpeg', 'paraisomini2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Modelo',           'Pocket Star'],
                ['Plazas',           'King'],
                ['Tamaño',           'King'],
                ['Altura',           '30 cm'],
                ['Ancho (cm)',       '198 cm'],
                ['Largo (cm)',       '203 cm'],
                ['Peso (kg)',        '65 kg'],
                ['Resortes',         'Pocket'],
                ['Tela',             'Tejido de punto'],
                ['Ventilación',      'Sí'],
                ['Nivel de firmeza', 'Intermedio'],
                ['Garantía',         '1 año'],
                ['Incluye',          '2 almohadas de fibra sintética + Protector'],
                ['Beneficios',       'Suavidad incomparable, soporte ideal y descanso sin interrupciones gracias a sus resortes pocket'],
            ]
        },
        {
            name: 'Royal Prince King', price: 'S/ 2,486', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            featured: true,
            images: ['preprincipal.jpeg', 'premini1.jpeg', 'premini2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Modelo',           'Royal Prince'],
                ['Plazas',           'King'],
                ['Tamaño',           'King'],
                ['Altura',           '31 cm'],
                ['Ancho (cm)',       '198 cm'],
                ['Largo (cm)',       '203 cm'],
                ['Peso (kg)',        '68 kg'],
                ['Resortes',         'Pocket · 1020 resortes'],
                ['Tela',             'Tejido de punto'],
                ['Material',         'Espuma flexible / Espuma Zebra'],
                ['Ventilación',      'Sí'],
                ['Nivel de firmeza', 'Firme'],
                ['Lados de uso',     '1'],
                ['Garantía',         '10 años'],
                ['Incluye',          '2 almohadas viscoelásticas'],
            ]
        },
        {
            name: 'Royal Abrazzo King', price: 'S/ 2,557', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            featured: true,
            images: ['maprincipal.jpeg', 'mamini1.jpeg', 'mamini2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Modelo',           'Royal Abrazzo'],
                ['Sensación',        'Muy suave'],
                ['Lados de uso',     'One Side'],
                ['Tela',             'Tejido de punto 3D · Higroscópica'],
                ['Tratamiento',      'Antihongos · Antibacterias · Antiacaros'],
                ['Viscoelástica',    'Espuma D70 que se adapta al cuerpo'],
                ['Soporte',          'Doble capa espuma Zebra HR y HD'],
                ['Garantía',         '2 años'],
            ]
        },
        {
            name: 'Zebra 16 Ribeteado', price: 'S/ 159', includes: '2 Plazas · 16 kg/m³ · 5 pulgadas', cat: 'Colchón Económico',
            featured: true,
            images: ['zeprincipal.jpeg', 'zemini1.jpeg', 'zemini2.jpeg'],
            specs: [
                ['Marca',          'PARAÍSO'],
                ['Modelo',         'Zebra'],
                ['Código',         'ZEBRA16-085-5RA'],
                ['Tamaño',         '1 Plaza'],
                ['Alto',           '12.7 cm'],
                ['Ancho',          '85 cm'],
                ['Largo',          '185 cm'],
                ['Relleno',        'Espuma Zebra D16'],
                ['Tapiz',          'Poliseda'],
                ['Lados de uso',   'One Side'],
                ['Pillow top',     'No aplica'],
                ['Hecho en',       'Perú'],
                ['Incluye',        'Colchón'],
                ['Garantía',       '1 año'],
            ]
        },
    ],
    camas: [
        {
            name: 'Cama 2 Plazas', price: 'S/ 950', includes: 'Estructura de madera premium', cat: 'Cama',
            featured: true,
            images: ['hprincipal.jpeg', 'hmini1.png', 'hmini2.png', 'hmini3.png'],
            specs: [
                ['Material',      'Madera maciza'],
                ['Diseño',        'Cabecera con líneas curvas decorativas'],
                ['Base',          'Plataforma sólida con tablas de soporte'],
                ['Almacenamiento','Cajones frontales integrados'],
                ['Acabado',       'Tonos cálidos tipo madera natural'],
                ['Estructura',    'Robusta · alta resistencia y durabilidad'],
            ]
        },
        {
            name: 'Cama 2 Plazas + Sábana', price: 'S/ 1,380', includes: 'Madera Huyruro · Incluye sábana', cat: 'Cama Artesanal',
            featured: true,
            images: ['jprinciapl.jpeg', 'jmini1.png', 'jmini2.png', 'jmini3.png'],
            specs: [
                ['Material',     'Madera maciza · Resistente y duradera'],
                ['Diseño',       'Estilo clásico · Acabado caoba/rojo brillante'],
                ['Cabecera',     'Paneles rectangulares con molduras decorativas'],
                ['Piecera',      'Robusta con molduras decorativas'],
                ['Estructura',   'Tablillas de madera para soporte del colchón'],
                ['Uniones',      'Pernos metálicos para mayor firmeza'],
                ['Acabado',      'Superficie lisa, barnizada y brillante'],
                ['Funcional',    'Tipo plataforma · Sin base adicional'],
                ['Incluye',      'Sábana'],
            ]
        },
        {
            name: 'Cama 2½ Plazas', price: 'S/ 1,650', includes: 'Estructura de madera premium', cat: 'Cama',
            featured: true,
            images: ['pprincipal.png', 'pmini1.png', 'pmini2.png'],
            specs: [
                ['Material',   'Madera maciza · Alta resistencia y durabilidad'],
                ['Diseño',     'Cabecera con líneas geométricas negras y detalles decorativos'],
                ['Base',       'Cajones inferiores para almacenamiento'],
                ['Estructura', 'Soporte sólido para colchón · Estabilidad óptima'],
                ['Acabado',    'Tonos cálidos de madera natural'],
                ['Estilo',     'Moderno con toque artesanal · Versátil'],
            ]
        },
        {
            name: 'Cama Colonial 2½ Plazas', price: 'S/ 1,680', includes: 'Diseño colonial artesanal · Madera maciza', cat: 'Cama Colonial',
            featured: true,
            images: ['kprincipal.jpeg', 'kmini1.jpeg', 'kmini2.png', 'kmini3.png'],
            specs: [
                ['Cabecero',     'Tallado con diseño de corona · Estilo Maharaja'],
                ['Tapizado',     'Panel capitoné en gris con botones decorativos'],
                ['Material',     'Madera maciza · Acabado pulido rojizo/marrón'],
                ['Pie de cama',  'Tallas decorativas que complementan el cabecero'],
                ['Construcción', 'Robusta · Larga durabilidad garantizada'],
                ['Estilo',       'Colonial artesanal de inspiración antigua'],
            ]
        },
    ],
    muebles: [
        {
            name: 'Almohada Anatómica Napa', price: 'S/ 82', includes: 'Siliconada premium · Ergonómica', cat: 'Almohada',
            featured: true,
            images: ['alprincipal.jpeg', 'almini1.jpeg'],
            specs: [
                ['Modelo',    'Lisa'],
                ['Material',  'Algodón'],
                ['Tipo',      'Sábanas'],
                ['Plazaje',   '2 Plazas'],
                ['Relleno',   'Siliconada premium'],
                ['Diseño',    'Anatómica · Ergonómica'],
            ]
        },
        {
            name: 'Almohada Drimer', price: 'S/ 50', includes: 'Suave y confortable', cat: 'Almohada',
            featured: true,
            images: ['gprincipal.jpeg', 'gmini1.jpeg'],
            specs: [
                ['Uso',         'Familiar · Multiuso'],
                ['Lavado',      'Lavadora'],
                ['Planchado',   'No planchar'],
                ['Blanqueador', 'No usar blanqueador'],
            ]
        },
        {
            name: 'Cuna de Bebés', price: 'S/ 650', includes: 'Segura · Materiales certificados', cat: 'Bebés',
            featured: true,
            images: ['cuprincipal.jpeg', 'cumini1.jpeg', 'cumini2.jpeg'],
            specs: [
                ['Condición',   'Nuevo'],
                ['Modelo',      'Zupy'],
                ['Material',    'Madera'],
                ['Color',       'Blanco / Wood'],
                ['Dimensiones', '1338 x 770 x 935 mm'],
                ['País origen', 'Brasil'],
            ]
        },
        {
            name: 'Comedor 3 Sillas', price: 'S/ 750', includes: 'Mesa + 3 sillas · Diseño moderno', cat: 'Comedor',
            featured: true,
            images: ['3meprincipal.png', '3memini1.png'],
            specs: [
                ['Composición', 'Mesa rectangular + 3 sillas'],
                ['Material',    'Madera · Acabado natural y cálido'],
                ['Mesa',        'Rectangular · Diseño moderno'],
                ['Sillas',      'Respaldo recto · Estructura firme · Mismo material'],
                ['Ideal para',  'Espacios pequeños o ambientes modernos'],
                ['Estilo',      'Funcional y elegante'],
            ]
        },
        {
            name: 'Comedor 6 Sillas', price: 'S/ 2,100', includes: 'Mesa + 6 sillas · Acabado premium', cat: 'Comedor',
            featured: true,
            images: ['sillaprincipal.jpeg', 'sillamini1.png'],
            specs: [
                ['Material',    'Madera maciza · Resistente y duradera'],
                ['Mesa',        'Superficie de vidrio superior · Fácil limpieza'],
                ['Capacidad',   '6 sillas incluidas · Ideal para familias'],
                ['Sillas',      'Respaldo alto con diseño curvo · Soporte y comodidad'],
                ['Estructura',  'Patas gruesas y reforzadas · Mayor estabilidad'],
                ['Acabado',     'Pulido y barnizado · Veta natural de madera'],
                ['Estilo',      'Clásico moderno · Tono madera natural brillante'],
            ]
        },
    ],
};

// ── VISUAL THUMBNAILS ────────────────────────────────────
function visualFor(cat) {
    const c = cat.toLowerCase();
    if (c.includes('colch')) return `
        <div class="mini-mattress">
            <div class="mini-top"></div>
            <div class="mini-front"></div>
            <div class="mini-side"></div>
        </div>`;
    if (c.includes('cama') || c.includes('colonial')) return `
        <div class="mini-bed">
            <div class="bed-headboard"></div>
            <div class="bed-mattress-t"></div>
            <div class="bed-pillow-t bl"></div>
            <div class="bed-pillow-t br"></div>
            <div class="bed-frame"></div>
        </div>`;
    if (c.includes('almohada')) return `<div class="mini-pillow-thumb"></div>`;
    if (c.includes('beb') || c.includes('cuna')) return `
        <div class="mini-crib">
            <div class="crib-top"></div>
            <div class="crib-body">
                <div class="crib-slats">
                    <div class="crib-slat"></div><div class="crib-slat"></div>
                    <div class="crib-slat"></div><div class="crib-slat"></div>
                    <div class="crib-slat"></div>
                </div>
            </div>
            <div class="crib-legs-w">
                <div class="crib-leg"></div><div class="crib-leg"></div>
            </div>
        </div>`;
    return `
        <div class="mini-table">
            <div class="table-top-t"></div>
            <div class="table-legs-wrap">
                <div class="tleg"></div><div class="tleg"></div>
                <div class="tleg"></div><div class="tleg"></div>
            </div>
        </div>`;
}

function createCard(p) {
    const card = document.createElement('div');

    if (p.featured) {
        card.className = 'product-card product-card--featured reveal';
        card.dataset.cat = p.cat;
        const thumbsHTML = p.images.map((img, i) =>
            `<img src="${img}" alt="${p.name} ${i+1}" class="fc-thumb${i===0?' fc-thumb--active':''}" data-img="${img}">`
        ).join('');
        const specsHTML = p.specs.map(([k, v]) =>
            `<tr><td class="spec-key">${k}</td><td class="spec-val">${v}</td></tr>`
        ).join('');
        card.innerHTML = `
            <div class="fc-gallery">
                <img src="${p.images[0]}" alt="${p.name}" class="fc-main-img" id="fcMain_${p.name.replace(/\s/g,'_')}">
                <div class="fc-thumbs">${thumbsHTML}</div>
            </div>
            <div class="fc-info">
                <div class="card-category">${p.cat}</div>
                <div class="card-name">${p.name}</div>
                <div class="card-desc">${p.includes}</div>
                <div class="card-price">${p.price} <span>soles</span></div>
                <button class="btn-add-cart">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                        <path d="M16 10a4 4 0 01-8 0"/>
                    </svg>
                    Agregar al carrito
                </button>
                <div class="fc-specs-title">Especificaciones</div>
                <table class="fc-specs"><tbody>${specsHTML}</tbody></table>
            </div>`;

        // Thumbnail click + cart button
        setTimeout(() => {
            const mainImg = card.querySelector('.fc-main-img');
            card.querySelectorAll('.fc-thumb').forEach(thumb => {
                thumb.addEventListener('click', () => {
                    mainImg.src = thumb.dataset.img;
                    card.querySelectorAll('.fc-thumb').forEach(t => t.classList.remove('fc-thumb--active'));
                    thumb.classList.add('fc-thumb--active');
                });
            });
            const addBtn = card.querySelector('.btn-add-cart');
            addBtn?.addEventListener('click', () => addToCart(p, addBtn));
        }, 0);

        return card;
    }

    card.className = 'product-card reveal';
    card.dataset.cat = p.cat;
    card.innerHTML = `
        <div class="card-visual">${visualFor(p.cat)}</div>
        <div class="card-category">${p.cat}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.includes}</div>
        <div class="card-price">${p.price} <span>soles</span></div>
        <button class="btn-add-cart">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            Agregar al carrito
        </button>`;
    const addBtnSimple = card.querySelector('.btn-add-cart');
    addBtnSimple?.addEventListener('click', () => addToCart(p, addBtnSimple));
    return card;
}

function populateGrid(id, list) {
    const grid = document.getElementById(id);
    if (!grid) return;
    list.forEach(p => grid.appendChild(createCard(p)));
}

populateGrid('colchonesGrid', PRODUCTS.colchones);
populateGrid('camasGrid',     PRODUCTS.camas);
populateGrid('mueblesGrid',   PRODUCTS.muebles);

// ── LOGO HANDLING ─────────────────────────────────────────
const logoImg  = document.getElementById('logoImg');
const logoText = document.getElementById('logoText');
if (logoImg) {
    logoImg.addEventListener('load', () => {
        logoText.style.display = 'none';
        logoImg.style.display  = 'block';
    });
    logoImg.addEventListener('error', () => {
        logoImg.style.display  = 'none';
        logoText.style.display = 'block';
    });
    if (logoImg.complete && logoImg.naturalWidth > 0) {
        logoText.style.display = 'none';
        logoImg.style.display  = 'block';
    }
}

// ── CUSTOM CURSOR ─────────────────────────────────────────
const cursorDot    = document.getElementById('cursor');
const cursorFollow = document.getElementById('cursorFollower');
let mx = window.innerWidth / 2,  my = window.innerHeight / 2;
let fx = mx, fy = my;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (cursorDot) {
        cursorDot.style.left = mx + 'px';
        cursorDot.style.top  = my + 'px';
    }
});

(function followTick() {
    fx += (mx - fx) * 0.13;
    fy += (my - fy) * 0.13;
    if (cursorFollow) {
        cursorFollow.style.left = fx + 'px';
        cursorFollow.style.top  = fy + 'px';
    }
    requestAnimationFrame(followTick);
})();

// ── LOADER ────────────────────────────────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('out');
        startHeroAnims();
    }, 2100);
});

// ── HERO ENTRANCE ANIMATIONS ──────────────────────────────
function startHeroAnims() {
    const tag    = document.querySelector('.hero-tag');
    const line1  = document.querySelector('.hero-title .line-1');
    const line2  = document.querySelector('.hero-title .line-2');
    const desc   = document.querySelector('.hero-desc');
    const acts   = document.querySelector('.hero-actions');

    function delay(el, ms, cls) {
        setTimeout(() => el && el.classList.add(cls || 'show'), ms);
    }
    delay(tag,   100);
    delay(line1, 350);
    delay(line2, 520);
    delay(desc,  700);
    delay(acts,  870);
}

// ── NAVIGATION ────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 70);
}, { passive: true });

// Mobile nav
const hamburger   = document.getElementById('hamburger');
const mobileNav   = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileNavClose');

hamburger?.addEventListener('click', () => mobileNav.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav?.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileNav.classList.remove('open'))
);

// ── INTERSECTION OBSERVER — CARD REVEAL ───────────────────
const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.product-card.reveal').forEach((card, i) => {
    card.style.transitionDelay = (i % 4) * 0.09 + 's';
    cardObserver.observe(card);
});

// Generic reveal observer
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal:not(.product-card)').forEach(el => revealObs.observe(el));

// ── GSAP SCROLL ANIMATIONS ────────────────────────────────
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero parallax layers
    gsap.to('#heroContent', {
        y: -90, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 }
    });
    gsap.to('#heroVisual', {
        y: -130, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.8 }
    });
    gsap.to('#layerWarm', {
        y: -70, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2.5 }
    });

    // Statement
    gsap.from('.st-headline', {
        y: 55, opacity: 0, duration: 1.3, ease: 'power4.out',
        scrollTrigger: { trigger: '.statement', start: 'top 78%' }
    });
    gsap.from('.st-body', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3,
        scrollTrigger: { trigger: '.statement', start: 'top 78%' }
    });

    // Section titles
    document.querySelectorAll('.section-title').forEach(el => {
        gsap.from(el, {
            y: 50, opacity: 0, duration: 1.2, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 82%' }
        });
    });

    // Stats
    gsap.from('.stat-item', {
        y: 28, opacity: 0, duration: .8, stagger: .14, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-strip', start: 'top 82%' }
    });

    // Ambiente
    gsap.from('.ambiente-title', {
        y: 50, opacity: 0, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: '.ambiente', start: 'top 75%' }
    });
    gsap.from('.room-scene', {
        x: 60, opacity: 0, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: '.ambiente', start: 'top 75%' }
    });

    // CTA
    gsap.from('.contacto-title', {
        y: 65, opacity: 0, duration: 1.4, ease: 'power4.out',
        scrollTrigger: { trigger: '.contacto', start: 'top 72%' }
    });
    gsap.from('.contacto-actions', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.35,
        scrollTrigger: { trigger: '.contacto', start: 'top 72%' }
    });
    gsap.from('.contacto-info', {
        y: 20, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.6,
        scrollTrigger: { trigger: '.contacto', start: 'top 72%' }
    });
}

// ── HERO MOUSE PARALLAX ───────────────────────────────────
const hero        = document.getElementById('hero');
const mattFloat   = document.getElementById('mattressFloat');
const scene       = document.getElementById('scene');
let mouseInHero   = false;
let heroMX = 0, heroMY = 0;
let currentRY = 0, currentRX = 0;
let currentSX = 0, currentSY = 0;

hero?.addEventListener('mouseenter', () => { mouseInHero = true; });
hero?.addEventListener('mouseleave', () => {
    mouseInHero = false;
    heroMX = window.innerWidth  / 2;
    heroMY = window.innerHeight / 2;
});
document.addEventListener('mousemove', e => {
    if (hero && e.clientY < hero.getBoundingClientRect().bottom) {
        heroMX = e.clientX;
        heroMY = e.clientY;
    }
});

(function heroParallaxTick() {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (heroMX - cx) / cx;
    const dy = (heroMY - cy) / cy;

    const targetRY = dx * 14;
    const targetRX = -dy * 9;
    const targetSX = dx * 18;
    const targetSY = dy * 12;

    currentRY += (targetRY - currentRY) * 0.07;
    currentRX += (targetRX - currentRX) * 0.07;
    currentSX += (targetSX - currentSX) * 0.07;
    currentSY += (targetSY - currentSY) * 0.07;

    if (mattFloat) {
        mattFloat.style.transform =
            `perspective(1100px) rotateY(${currentRY}deg) rotateX(${currentRX}deg)`;
    }
    if (scene) {
        scene.style.transform = `translate(${currentSX}px, ${currentSY}px)`;
    }
    requestAnimationFrame(heroParallaxTick);
})();

// ── PRODUCT CARD 3D TILT ──────────────────────────────────
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.product-card').forEach(card => {
        const r = card.getBoundingClientRect();
        if (e.clientX >= r.left && e.clientX <= r.right &&
            e.clientY >= r.top  && e.clientY <= r.bottom) {
            const cx = r.left + r.width  / 2;
            const cy = r.top  + r.height / 2;
            const dx = (e.clientX - cx) / (r.width  / 2);
            const dy = (e.clientY - cy) / (r.height / 2);
            card.style.transform =
                `translateY(-5px) perspective(700px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ── DUST PARTICLES ────────────────────────────────────────
function spawnDust() {
    const container = document.getElementById('dustParticles');
    if (!container) return;
    for (let i = 0; i < 18; i++) {
        const d = document.createElement('div');
        d.className = 'dust';
        const x = Math.random() * 100;
        const dur = 4 + Math.random() * 6;
        const delay = Math.random() * 8;
        const dx = (Math.random() - 0.5) * 60;
        const size = 1.5 + Math.random() * 2.5;
        d.style.cssText = `
            left: ${x}%; bottom: ${Math.random() * 30}%;
            width: ${size}px; height: ${size}px;
            --dx: ${dx}px;
            animation-duration: ${dur}s;
            animation-delay: -${delay}s;
            opacity: ${0.2 + Math.random() * 0.5};
        `;
        container.appendChild(d);
    }
}
spawnDust();

// ── CART ─────────────────────────────────────────────────
const cart = [];

function getEl(id) { return document.getElementById(id); }

function openCart() {
    getEl('cartSidebar').classList.add('open');
    getEl('cartOverlay').classList.add('open');
}
function closeCart() {
    getEl('cartSidebar').classList.remove('open');
    getEl('cartOverlay').classList.remove('open');
}

function renderCart() {
    const badge    = getEl('cartBadge');
    const totalEl  = getEl('cartTotal');
    const itemsEl  = getEl('cartItems');
    const emptyEl  = getEl('cartEmpty');
    if (!badge || !totalEl || !itemsEl) return;

    const total = cart.reduce((s, i) => s + i.price, 0);
    totalEl.textContent  = 'S/ ' + total.toLocaleString('es-PE');
    badge.textContent    = cart.length;

    itemsEl.querySelectorAll('.cart-item').forEach(e => e.remove());

    if (cart.length === 0) {
        if (emptyEl) emptyEl.style.display = 'block';
    } else {
        if (emptyEl) emptyEl.style.display = 'none';
        cart.forEach((item, idx) => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.priceStr}</div>
                </div>
                <button class="cart-item-remove" data-idx="${idx}">✕</button>`;
            itemsEl.appendChild(el);
        });
        itemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                cart.splice(parseInt(btn.dataset.idx), 1);
                renderCart();
            });
        });
    }

    // Badge bump
    if (badge) {
        badge.classList.add('bump');
        setTimeout(() => badge.classList.remove('bump'), 300);
    }
}

function addToCart(product, btnEl) {
    const priceNum = parseFloat(product.price.replace('S/ ', '').replace(',', '')) || 0;
    cart.push({ name: product.name, price: priceNum, priceStr: product.price + ' soles', img: product.images ? product.images[0] : '' });
    renderCart();
    openCart();
    // Feedback visual en el botón
    if (btnEl) {
        const orig = btnEl.innerHTML;
        btnEl.textContent = '✓ Agregado';
        btnEl.style.background = '#22c55e';
        btnEl.disabled = true;
        setTimeout(() => {
            btnEl.innerHTML = orig;
            btnEl.style.background = '';
            btnEl.disabled = false;
        }, 1800);
    }
}

// Delegación de eventos — abrir/cerrar carrito desde nav e ícono
document.addEventListener('click', function(e) {
    if (e.target.closest('#navCart'))    { openCart();  return; }
    if (e.target.closest('#cartClose') ||
        e.target.closest('#cartOverlay')){ closeCart(); return; }
    if (e.target.closest('#btnConfirmOrder')) { confirmOrder(); return; }
});

function confirmOrder() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de confirmar.');
        return;
    }
    const lines = cart.map((item, i) => `${i + 1}. ${item.name} — ${item.priceStr}`);
    const total = cart.reduce((s, i) => s + i.price, 0);
    const msg = [
        '¡Hola! Quiero realizar el siguiente pedido en Qiru Center:',
        '',
        ...lines,
        '',
        `*Total: S/ ${total.toLocaleString('es-PE')} soles*`,
        '',
        'Por favor, indíquenme cómo proceder con el pago. ¡Gracias!'
    ].join('\n');
    const url = 'https://wa.me/51939975894?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
}

// ── FILTER TABS ───────────────────────────────────────────
function initFilters(tabsId, gridId) {
    const tabs = document.getElementById(tabsId);
    const grid = document.getElementById(gridId);
    if (!tabs || !grid) return;
    tabs.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.dataset.filter;
            grid.querySelectorAll('.product-card').forEach(card => {
                if (filter === 'all' || card.dataset.cat === filter) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

initFilters('colchonesTabs', 'colchonesGrid');
initFilters('camasTabs',     'camasGrid');
initFilters('mueblesTabs',   'mueblesGrid');

// ── SMOOTH SCROLL (anchor links) ─────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ── CTA FLOATING GLOW PULSE ───────────────────────────────
const glowBtn = document.querySelector('.btn-primary.glow');
if (glowBtn) {
    setInterval(() => {
        glowBtn.style.boxShadow = '0 0 80px rgba(192,154,70,.65)';
        setTimeout(() => {
            glowBtn.style.boxShadow = '0 0 40px rgba(192,154,70,.3)';
        }, 900);
    }, 2200);
}
