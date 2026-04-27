/* ============================================================
   QIRU CENTER — Animations & Interactions
   ============================================================ */

// ── PRODUCTS DATA ─────────────────────────────────────────
const PRODUCTS = {
    colchones: [
        {
            name: 'Medallón 2 Plaza Ergosoft Queen', price: 'S/ 790', includes: 'Almohada + Protector', cat: 'Colchón',
            size: 'Queen', line: 'Premium',
            featured: true,
            images: ['Medallon Ergosoft King.jpeg', 'Medallon Ergosoft King1.jpeg', 'Medallon Ergosoft King2.jpeg'],
            specs: [
                ['Tela',             'Jacquard'],
                ['Resortes',         'Cosisoft · Tecnología suiza'],
                ['Banda',            'Mesh · Mayor flujo de aire'],
                ['Marco',            'Zebra 25'],
                ['Lados de uso',     'One Side'],
                ['Sensación',        'Intermedia'],
                ['Garantía',         '7 años'],
            ]
        },
        {
            name: 'Medallón Ergosoft 2 Plazas', price: 'S/ 660', includes: 'Almohada + Protector', cat: 'Colchón',
            size: '2 Plazas', line: 'Premium',
            featured: true,
            images: ['Medallon Ergosoft King.jpeg', 'Medallon Ergosoft King1.jpeg', 'Medallon Ergosoft King2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Plazaje',          '2 Plazas'],
                ['Modelo',           'Medallón'],
                ['Línea',            'Medallón Premium'],
                ['Alto (cm)',        '27 cm'],
                ['Ancho (cm)',       '138 cm'],
                ['Largo (cm)',       '190 cm'],
                ['Pillow top',       'Sí'],
                ['Two sides',        'No'],
                ['Nivel de firmeza', '3 · Intermedio'],
                ['Garantía',         '7 años'],
            ]
        },
        {
            name: 'Medallón Ergosoft 1.5 Plaza', price: 'S/ 530', includes: 'Almohada + Protector', cat: 'Colchón',
            size: '1.5 Plazas', line: 'Premium',
            featured: true,
            images: ['principal1.5.jpeg', 'Medallon Ergosoft King1.jpeg', 'Medallon Ergosoft King2.jpeg'],
            specs: [
                ['Tela',             'Jacquard'],
                ['Resortes',         'Cosisoft · Tecnología suiza'],
                ['Banda',            'Mesh · Mayor flujo de aire'],
                ['Marco',            'Zebra 25'],
                ['Lados de uso',     'One Side'],
                ['Sensación',        'Intermedia'],
                ['Garantía',         '7 años'],
            ]
        },
        {
            name: 'Pocket Star 2 Plazas Negro King', price: 'S/ 930', includes: '02 Almohadas + Protector', cat: 'Colchón',
            size: '2 Plazas', line: 'Pocket',
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
            name: 'Super Star King 2 Plazas', price: 'S/ 740', includes: '2 Almohadas + Protector', cat: 'Colchón',
            size: '2 Plazas', line: 'Standard',
            featured: true,
            images: ['superprincipal.jpeg', 'supermini1.jpeg', 'supermini2.jpeg'],
            specs: [
                ['Marca',             'PARAÍSO'],
                ['Modelo',            'Super Star'],
                ['Plazaje',           '2 Plazas'],
                ['Resortes',          'Cosisoft'],
                ['Tela',              'Tejido de punto'],
                ['Ventilación',       'Sí'],
                ['Nivel de firmeza',  'Intermedio'],
                ['Garantía',          '1 año'],
                ['Incluye',           '2 almohadas de fibra sintética + Protector'],
            ]
        },
        {
            name: 'Super Star King', price: 'S/ 1,100', includes: '2 Almohadas + Protector', cat: 'Colchón',
            size: 'King', line: 'Standard',
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
            name: 'Pocket Star King', price: 'S/ 1,420', includes: 'Almohada + Protector · Resortes pocket', cat: 'Colchón Premium',
            size: 'King', line: 'Pocket',
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
            name: 'Royal Prince 2 Plazas', price: 'S/ 1,770', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            size: '2 Plazas', line: 'Royal',
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
            name: 'Royal Abrazzo King', price: 'S/ 2,820', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            size: 'King', line: 'Royal',
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
            name: 'Royal Abrazzo Queen', price: 'S/ 2,210', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            size: 'Queen', line: 'Royal',
            featured: true,
            images: ['maprincipal.jpeg', 'mamini1.jpeg', 'mamini2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Modelo',           'Royal Abrazzo'],
                ['Plazaje',          'Queen'],
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
            name: 'Royal Prince Queen', price: 'S/ 1,400', includes: 'Almohada Viscoelástica + Protector', cat: 'Colchón Premium',
            size: 'Queen', line: 'Royal',
            featured: true,
            images: ['preprincipal.jpeg', 'premini1.jpeg', 'premini2.jpeg'],
            specs: [
                ['Marca',            'PARAÍSO'],
                ['Modelo',           'Royal Prince'],
                ['Plazaje',          'Queen'],
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
            name: 'Zebra 16 Ribeteado 2 Plazas 5\'\' Acolchado', price: 'S/ 220', includes: '2 Plazas · 16 kg/m³ · 5 pulgadas', cat: 'Colchón Económico',
            size: '2 Plazas', line: 'Standard',
            featured: true,
            images: ['zeprincipal.jpeg', 'zemini1.jpeg', 'zemini2.jpeg'],
            specs: [
                ['Marca',          'PARAÍSO'],
                ['Modelo',         'Zebra 16 Ribeteado'],
                ['Plazaje',        '2 Plazas'],
                ['Altura',         '5 pulgadas · Acolchado'],
                ['Densidad',       '16 kg/m³'],
                ['Relleno',        'Espuma Zebra D16'],
                ['Tapiz',          'Poliseda'],
                ['Lados de uso',   'One Side'],
                ['Hecho en',       'Perú'],
                ['Garantía',       '1 año'],
            ]
        },
        {
            name: 'Zebra 16 Ribeteado 2 Plazas 7\'\' Acolchado', price: 'S/ 270', includes: '2 Plazas · 16 kg/m³ · 7 pulgadas', cat: 'Colchón Económico',
            size: '2 Plazas', line: 'Standard',
            featured: true,
            images: ['zeprincipal.jpeg', 'zemini1.jpeg', 'zemini2.jpeg'],
            specs: [
                ['Marca',          'PARAÍSO'],
                ['Modelo',         'Zebra 16 Ribeteado'],
                ['Plazaje',        '2 Plazas'],
                ['Altura',         '7 pulgadas · Acolchado'],
                ['Densidad',       '16 kg/m³'],
                ['Relleno',        'Espuma Zebra D16'],
                ['Tapiz',          'Poliseda'],
                ['Lados de uso',   'One Side'],
                ['Hecho en',       'Perú'],
                ['Garantía',       '1 año'],
            ]
        },
        {
            name: 'Zebra 16 Ribeteado 1.5 Plaza 5\'\' Acolchado', price: 'S/ 180', includes: '1.5 Plaza · 16 kg/m³ · 5 pulgadas', cat: 'Colchón Económico',
            size: '1.5 Plazas', line: 'Standard',
            featured: true,
            images: ['zeprincipal.jpeg', 'zemini1.jpeg', 'zemini2.jpeg'],
            specs: [
                ['Marca',          'PARAÍSO'],
                ['Modelo',         'Zebra 16 Ribeteado'],
                ['Plazaje',        '1.5 Plaza'],
                ['Altura',         '5 pulgadas · Acolchado'],
                ['Densidad',       '16 kg/m³'],
                ['Relleno',        'Espuma Zebra D16'],
                ['Tapiz',          'Poliseda'],
                ['Lados de uso',   'One Side'],
                ['Hecho en',       'Perú'],
                ['Garantía',       '1 año'],
            ]
        },
        {
            name: 'Zebra 16 Ribeteado 1.5 Plaza 7\'\' Acolchado', price: 'S/ 220', includes: '1.5 Plaza · 16 kg/m³ · 7 pulgadas', cat: 'Colchón Económico',
            size: '1.5 Plazas', line: 'Standard',
            featured: true,
            images: ['zeprincipal.jpeg', 'zemini1.jpeg', 'zemini2.jpeg'],
            specs: [
                ['Marca',          'PARAÍSO'],
                ['Modelo',         'Zebra 16 Ribeteado'],
                ['Plazaje',        '1.5 Plaza'],
                ['Altura',         '7 pulgadas · Acolchado'],
                ['Densidad',       '16 kg/m³'],
                ['Relleno',        'Espuma Zebra D16'],
                ['Tapiz',          'Poliseda'],
                ['Lados de uso',   'One Side'],
                ['Hecho en',       'Perú'],
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
        {
            name: 'Juego de Mesa Alta + Sillas de Madera', price: 'S/ 1,000', includes: 'Mesa alta + sillas · Diseño moderno tipo bar', cat: 'Comedor',
            featured: true,
            images: ['bprincipal.png', 'bmini1.png', 'bmini2.png'],
            specs: [
                ['Material',    'Madera de alta calidad · Acabado fino y resistente'],
                ['Diseño',      'Moderno y elegante · Estilo tipo bar'],
                ['Ideal para',  'Bares · Cocinas · Terrazas · Espacios modernos'],
                ['Estructura',  'Sólida · Alta estabilidad'],
                ['Estilo',      'Estilizado · Sofisticado y funcional'],
            ]
        },
        {
            name: 'Cama de Madera 2 Plazas Reforzada', price: 'S/ 950', originalPrice: 'S/ 1,100', includes: 'Estructura reforzada · Cabecera 100 cm · 140×190 cm', cat: 'Cama',
            featured: true,
            images: ['r.png', 'r1.png'],
            specs: [
                ['Material',    'Madera de alta calidad · Acabado fino natural'],
                ['Estructura',  'Refuerzos internos · Soporte firme para colchón'],
                ['Diseño',      'Moderno y elegante'],
                ['Medidas',     '140 cm ancho × 190 cm largo × 45 cm alto · Cabecera 100 cm'],
                ['Ideal para',  'Uso diario · Dormitorio moderno'],
            ]
        },
        {
            name: 'Cama de Madera 3 Plazas', price: 'S/ 1,890', originalPrice: 'S/ 2,000', includes: 'Cabecera y piecera decorativas · Estructura sólida · 190×200 cm', cat: 'Cama',
            featured: true,
            images: ['capri.png', 'capri1.png'],
            specs: [
                ['Material',    'Madera de alta calidad · Acabado fino natural'],
                ['Diseño',      'Detalles en relieve · Cabecera y piecera decorativas'],
                ['Medidas',     '190 cm ancho × 200 cm largo × 55 cm alto'],
                ['Estructura',  'Sólida y resistente · Alta durabilidad'],
                ['Ideal para',  'Dormitorio moderno'],
            ]
        },
        {
            name: 'Alacena Grande de Cocina en Madera', price: 'S/ 2,850', originalPrice: 'S/ 3,000', includes: 'Vitrinas con vidrio · Cajones y puertas · 190×45×200 cm', cat: 'Mueble',
            featured: true,
            images: ['4principal.jpeg', '4mini1.png', '4mini2.png'],
            specs: [
                ['Material',       'Madera de alta calidad · Acabado fino'],
                ['Vitrinas',       'Superiores con vidrio · Ideal para exhibir utensilios'],
                ['Superficie',     'Amplia y resistente · Espacio central de trabajo'],
                ['Cajones',        'Múltiples cajones y puertas prácticas'],
                ['Medidas',        '190 cm ancho × 45 cm fondo × 200 cm alto'],
                ['Ideal para',     'Cocinas modernas o clásicas'],
            ]
        },
        {
            name: 'Alacena de Cocina en Madera', price: 'S/ 1,980', originalPrice: 'S/ 2,200', includes: 'Vitrinas con vidrio · Cajones y compartimentos · 120×45×200 cm', cat: 'Mueble',
            featured: true,
            images: ['cprincipal2.png', 'cmini12.png', 'cmini22.png'],
            specs: [
                ['Material',       'Madera de alta calidad · Acabado fino'],
                ['Vitrinas',       'Superiores con vidrio · Ideal para exhibir utensilios'],
                ['Superficie',     'Amplia superficie central de trabajo'],
                ['Cajones',        'Múltiples cajones y compartimentos inferiores'],
                ['Medidas',        '120 cm ancho × 45 cm fondo × 200 cm alto'],
                ['Ideal para',     'Cocina o comedor'],
            ]
        },
        {
            name: 'Ropero de Madera 3 Puertas con Cajonera', price: 'S/ 2,100', originalPrice: 'S/ 2,800', includes: '3 puertas · 8 cajones deslizables · 120×50×200 cm', cat: 'Mueble',
            featured: true,
            images: ['oprincipal.png', 'omini1.png', 'omini2.png'],
            specs: [
                ['Material',       'Madera de alta calidad · Acabado fino natural'],
                ['Puertas',        '3 puertas amplias · Espacio para colgar ropa'],
                ['Cajones',        '8 cajones inferiores resistentes y deslizables'],
                ['Medidas',        '120 cm ancho × 50 cm fondo × 200 cm alto'],
                ['Capacidad',      'Gran capacidad · Ideal para prendas y accesorios'],
                ['Ideal para',     'Dormitorios familiares'],
            ]
        },
        {
            name: 'Ropero Grande de Madera con Cajonera', price: 'S/ 2,450', originalPrice: 'S/ 3,000', includes: '3 puertas · 6 cajones · 150×50×210 cm · Gran capacidad', cat: 'Mueble',
            featured: true,
            images: ['rprincipal.png', 'rmini1.png', 'rmini2.png'],
            specs: [
                ['Material',       'Madera resistente · Acabado fino natural'],
                ['Puertas',        '3 puertas amplias · Espacio para colgar ropa'],
                ['Cajones',        '2 cajones superiores + 4 cajones inferiores'],
                ['Medidas',        '150 cm ancho × 50 cm fondo × 210 cm alto'],
                ['Capacidad',      'Gran capacidad · Ideal para ropa y accesorios'],
                ['Ideal para',     'Dormitorios grandes'],
            ]
        },
        {
            name: 'Ropero de Madera con Cajonera', price: 'S/ 1,500', originalPrice: 'S/ 2,000', includes: '2 puertas · 4 cajones deslizables · Diseño elegante', cat: 'Mueble',
            featured: true,
            images: ['aprincipal.png', 'amini1.png', 'amini3.png'],
            specs: [
                ['Material',       'Madera de alta calidad · Acabado fino'],
                ['Puertas',        '2 puertas superiores · Espacio para colgar ropa'],
                ['Cajones',        '4 cajones amplios deslizables · Parte inferior'],
                ['Medidas',        '90 cm ancho × 50 cm fondo × 210 cm alto'],
                ['Almacenamiento', 'Amplio · Ideal para prendas y accesorios'],
                ['Ideal para',     'Dormitorios modernos'],
            ]
        },
        {
            name: 'Cómoda de Madera con Espejo', price: 'S/ 980', originalPrice: 'S/ 1,000', includes: '4 cajones + 2 compartimentos · Espejo central · Diseño moderno', cat: 'Mueble',
            featured: true,
            images: ['cprincipal.png', 'cmini1.png', 'cmini2.png'],
            specs: [
                ['Material',       'Madera natural de alta calidad · Acabado fino'],
                ['Cajones',        '4 cajones amplios · 2 compartimentos superiores'],
                ['Espejo',         'Espejo central incluido · Comodidad y estilo'],
                ['Diseño',         'Elegante y práctico · Estilo moderno'],
                ['Almacenamiento', 'Amplio · Ideal para ropa, accesorios o maquillaje'],
                ['Ideal para',     'Dormitorios modernos · Tocador'],
            ]
        },
        {
            name: 'Mesita de Noche de Madera', price: 'S/ 270', originalPrice: 'S/ 310', includes: '2 cajones espaciosos · Tiradores metálicos · Diseño elegante', cat: 'Mueble',
            featured: true,
            images: ['m.principal.png', 'm.mini1.png', 'm.mini2.png'],
            specs: [
                ['Material',       'Madera resistente · Acabado brillante y duradero'],
                ['Cajones',        '2 cajones espaciosos · Ideales para objetos personales'],
                ['Tiradores',      'Metálicos modernos · Toque elegante'],
                ['Diseño',         'Compacto con patas redondeadas · Estabilidad y estilo'],
                ['Ideal para',     'Dormitorios modernos o clásicos'],
                ['Estilo',         'Elegante y funcional'],
            ]
        },
        {
            name: 'Escritorio de Madera Multifuncional', price: 'S/ 850', originalPrice: 'S/ 900', includes: 'Cajones amplios · Diseño moderno y práctico', cat: 'Escritorio',
            featured: true,
            images: ['eprincipal.png', 'emini1.png', 'emini2.png', 'emini3.png'],
            specs: [
                ['Material',       'Madera con acabado fino'],
                ['Cajones',        'Amplios y deslizables · Excelente almacenamiento'],
                ['Diseño',         'Moderno y práctico'],
                ['Ideal para',     'Oficina · Estudio · Negocio · Hogar'],
                ['Estructura',     'Sólida · Alta resistencia y durabilidad'],
                ['Estilo',         'Cálido y sofisticado'],
            ]
        },
    ],

    sabanas: [
        {
            name: 'Sábanas Bramante de Hilo Twin', price: 'S/ 65', originalPrice: 'S/ 70', includes: 'Sábana elástica · Sobre sábana · 2 fundas de almohada', cat: 'Sábana',
            size: 'Twin',
            images: ['twin.png'],
            specs: [
                ['Material',    'Bramante de Hilo · Suave y duradero'],
                ['Talla',       'Twin (1½ Plazas)'],
                ['Incluye',     'Sábana elástica · Sobre sábana · 2 fundas de almohada'],
                ['Precio unidad', 'S/ 70'],
                ['Precio mayor',  'S/ 65'],
            ]
        },
        {
            name: 'Sábana 2 Plazas — Algodón Premium', price: 'S/ 85', includes: '1 sábana encimera + 1 ajustable + 2 fundas', cat: 'Sábana',
            size: '2 Plazas',
            specs: [
                ['Material',    'Algodón 100% · Suave al tacto'],
                ['Medidas',     '200×240 cm · Sábana encimera'],
                ['Incluye',     'Sábana encimera · Sábana ajustable · 2 fundas'],
                ['Ideal para',  'Cama 2 plazas'],
            ]
        },
        {
            name: 'Sábana 1.5 Plazas — Algodón Premium', price: 'S/ 65', includes: '1 sábana encimera + 1 ajustable + 1 funda', cat: 'Sábana',
            size: '1.5 Plazas',
            specs: [
                ['Material',    'Algodón 100% · Suave al tacto'],
                ['Medidas',     '160×220 cm · Sábana encimera'],
                ['Incluye',     'Sábana encimera · Sábana ajustable · 1 funda'],
                ['Ideal para',  'Cama 1.5 plazas'],
            ]
        },
        {
            name: 'Sábana Queen — Algodón Premium', price: 'S/ 110', includes: '1 sábana encimera + 1 ajustable + 2 fundas', cat: 'Sábana',
            size: 'Queen',
            specs: [
                ['Material',    'Algodón 100% · Suave al tacto'],
                ['Medidas',     '220×260 cm · Sábana encimera'],
                ['Incluye',     'Sábana encimera · Sábana ajustable · 2 fundas'],
                ['Ideal para',  'Cama Queen'],
            ]
        },
        {
            name: 'Sábana King — Algodón Premium', price: 'S/ 130', includes: '1 sábana encimera + 1 ajustable + 2 fundas', cat: 'Sábana',
            size: 'King',
            specs: [
                ['Material',    'Algodón 100% · Suave al tacto'],
                ['Medidas',     '240×280 cm · Sábana encimera'],
                ['Incluye',     'Sábana encimera · Sábana ajustable · 2 fundas'],
                ['Ideal para',  'Cama King'],
            ]
        },
    ],
};

// ── CART ─────────────────────────────────────────────────
var _cart = [];
var PRODUCT_REGISTRY = [];

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}
function cartRemove(idx) {
    _cart.splice(idx, 1);
    renderCart();
}
function renderCart() {
    var badge   = document.getElementById('cartBadge');
    var totalEl = document.getElementById('cartTotal');
    var itemsEl = document.getElementById('cartItems');
    var emptyEl = document.getElementById('cartEmpty');
    if (!badge || !totalEl || !itemsEl) return;
    var total = 0;
    _cart.forEach(function(i) { total += i.price * (i.qty || 1); });
    totalEl.textContent = 'S/ ' + total.toLocaleString('es-PE');
    badge.textContent   = _cart.length;
    itemsEl.querySelectorAll('.cart-item').forEach(function(e) { e.remove(); });
    if (_cart.length === 0) {
        if (emptyEl) emptyEl.style.display = 'block';
    } else {
        if (emptyEl) emptyEl.style.display = 'none';
        _cart.forEach(function(item, idx) {
            var el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML =
                '<img src="' + item.img + '" alt="' + item.name + '" class="cart-item-img">' +
                '<div class="cart-item-info">' +
                  '<div class="cart-item-name">' + item.name + '</div>' +
                  '<div class="cart-item-price">' + item.priceStr + '</div>' +
                '</div>' +
                '<button class="cart-item-remove" onclick="cartRemove(' + idx + ')">✕</button>';
            itemsEl.appendChild(el);
        });
    }
    badge.classList.add('bump');
    setTimeout(function() { badge.classList.remove('bump'); }, 300);
}
function addToCart(product, btnEl) {
    var priceNum = parseFloat(product.price.replace('S/ ', '').replace(',', '')) || 0;
    _cart.push({ name: product.name, price: priceNum, priceStr: product.price + ' soles', img: product.images ? product.images[0] : '', qty: 1 });
    renderCart();
    openCart();
    if (btnEl) {
        var orig = btnEl.innerHTML;
        btnEl.textContent = '✓ Agregado';
        btnEl.style.background = '#22c55e';
        btnEl.disabled = true;
        setTimeout(function() {
            btnEl.innerHTML = orig;
            btnEl.style.background = '';
            btnEl.disabled = false;
        }, 1800);
    }
}

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
    PRODUCT_REGISTRY.push(p);

    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.dataset.cat  = p.cat;
    card.dataset.size = p.size || '';
    card.dataset.line = p.line || '';

    const cartIconSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;
    const heartSVG   = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`;

    const mainImg   = p.images && p.images[0] ? p.images[0] : '';
    const specsHTML = p.specs ? p.specs.map(([k,v]) =>
        `<tr><td class="spec-key">${k}</td><td class="spec-val">${v}</td></tr>`
    ).join('') : '';

    const thumbsHTML = p.images && p.images.length > 1
        ? p.images.map((img, i) =>
            `<img src="${img}" class="card-thumb${i===0?' card-thumb--active':''}" data-img="${img}" alt="${p.name}">`
          ).join('')
        : '';

    card.innerHTML = `
        <div class="card-img-wrap">
            ${mainImg
                ? `<img src="${mainImg}" alt="${p.name}" class="card-main-img">`
                : `<div class="card-img-placeholder">${visualFor(p.cat)}</div>`}
            ${thumbsHTML ? `<div class="card-thumbs-strip">${thumbsHTML}</div>` : ''}
            <button class="card-fav-btn" title="Favorito">${heartSVG}</button>
        </div>
        <div class="card-body">
            <div class="card-category">${p.cat}</div>
            <div class="card-name">${p.name}</div>
            <div class="card-desc">${p.includes}</div>
            <div class="card-price">
                ${p.originalPrice ? `<span style="text-decoration:line-through;color:#aaa;font-size:0.85em;margin-right:6px;">${p.originalPrice}</span>` : ''}
                <span style="${p.originalPrice ? 'color:#e53935;font-weight:bold;' : ''}">${p.price}</span> <span>soles</span>
            </div>
            <button class="btn-add-cart">${cartIconSVG} Agregar al carrito</button>
            ${specsHTML ? `
            <button class="btn-specs-toggle">Especificaciones ▾</button>
            <table class="card-specs-table hidden"><tbody>${specsHTML}</tbody></table>` : ''}
        </div>`;

    // Cambiar imagen al pasar por miniatura
    var mainImgEl = card.querySelector('.card-main-img');
    card.querySelectorAll('.card-thumb').forEach(function(thumb) {
        thumb.addEventListener('click', function() {
            if (mainImgEl) mainImgEl.src = thumb.dataset.img;
            card.querySelectorAll('.card-thumb').forEach(function(t) { t.classList.remove('card-thumb--active'); });
            thumb.classList.add('card-thumb--active');
        });
    });

    // Favorito
    var favBtn = card.querySelector('.card-fav-btn');
    favBtn && favBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        favBtn.classList.toggle('active');
    });

    // Agregar al carrito
    var addBtn = card.querySelector('.btn-add-cart');
    addBtn && addBtn.addEventListener('click', function() { addToCart(p, addBtn); });

    // Toggle especificaciones
    var specsToggle = card.querySelector('.btn-specs-toggle');
    var specsTable  = card.querySelector('.card-specs-table');
    specsToggle && specsToggle.addEventListener('click', function() {
        specsTable.classList.toggle('hidden');
        specsToggle.textContent = specsTable.classList.contains('hidden')
            ? 'Especificaciones ▾' : 'Especificaciones ▴';
    });

    return card;
}

function populateGrid(id, list) {
    const grid = document.getElementById(id);
    if (!grid) return;
    list.forEach(p => grid.appendChild(createCard(p)));
}

populateGrid('colchonesGrid', PRODUCTS.colchones);
populateGrid('camasGrid',     PRODUCTS.camas);
populateGrid('sabanasGrid',   PRODUCTS.sabanas);
populateGrid('mueblesGrid',   PRODUCTS.muebles);

// ── PRODUCT DETAIL MODAL ──────────────────────────────────
(function() {
    var pdOverlay    = document.getElementById('pdOverlay');
    var pdModal      = document.getElementById('pdModal');
    var pdClose      = document.getElementById('pdClose');
    var pdMainImg    = document.getElementById('pdMainImg');
    var pdThumbs     = document.getElementById('pdThumbs');
    var pdCat        = document.getElementById('pdCat');
    var pdName       = document.getElementById('pdName');
    var pdIncludes   = document.getElementById('pdIncludes');
    var pdPrice      = document.getElementById('pdPrice');
    var pdBtnCart    = document.getElementById('pdBtnCart');
    var pdSpecsWrap  = document.getElementById('pdSpecsWrap');
    var pdRelated    = document.getElementById('pdRelatedGrid');
    var pdPrev       = document.getElementById('pdPrev');
    var pdNext       = document.getElementById('pdNext');

    var currentProduct = null;
    var currentImgIdx  = 0;

    function openDetail(p) {
        currentProduct = p;
        currentImgIdx  = 0;

        // Info
        pdCat.textContent      = p.cat;
        pdName.textContent     = p.name;
        pdIncludes.textContent = p.includes || '';
        pdPrice.innerHTML      = (p.originalPrice ? `<span style="text-decoration:line-through;color:#aaa;font-size:0.85em;margin-right:8px;">${p.originalPrice}</span>` : '') +
                               `<span style="${p.originalPrice ? 'color:#e53935;font-weight:bold;' : ''}">${p.price}</span> <span>soles</span>`;

        // Images
        var imgs = (p.images && p.images.length) ? p.images : [];
        pdMainImg.src = imgs[0] || '';
        pdMainImg.alt = p.name;

        pdThumbs.innerHTML = '';
        imgs.forEach(function(src, i) {
            var t = document.createElement('img');
            t.src = src; t.alt = p.name;
            t.className = 'pd-thumb' + (i === 0 ? ' active' : '');
            t.addEventListener('click', function() { setImg(i); });
            pdThumbs.appendChild(t);
        });

        // Arrows visibility
        var showArrows = imgs.length > 1;
        pdPrev.style.display = showArrows ? '' : 'none';
        pdNext.style.display = showArrows ? '' : 'none';

        // Specs
        pdSpecsWrap.innerHTML = '';
        if (p.specs && p.specs.length) {
            var tbl = document.createElement('table');
            tbl.className = 'pd-specs-table';
            p.specs.forEach(function(row) {
                var tr = document.createElement('tr');
                tr.innerHTML = '<td>' + row[0] + '</td><td>' + row[1] + '</td>';
                tbl.appendChild(tr);
            });
            pdSpecsWrap.appendChild(tbl);
        }

        // Related — same cat first, fill with others if needed
        var allProds = [].concat(PRODUCTS.colchones || [], PRODUCTS.camas || [], PRODUCTS.muebles || []);
        var sameCat = allProds.filter(function(r) { return r !== p && r.cat === p.cat; });
        var others  = allProds.filter(function(r) { return r !== p && r.cat !== p.cat; });
        var related = sameCat.concat(others).slice(0, 4);
        pdRelated.innerHTML = '';
        related.forEach(function(r) {
            var card = createCard(r);
            card.addEventListener('click', function(e) {
                if (e.target.closest('.btn-add-cart') || e.target.closest('.card-fav-btn') ||
                    e.target.closest('.card-thumb') || e.target.closest('.btn-specs-toggle') ||
                    e.target.closest('.card-specs-table')) return;
                openDetail(r);
            });
            pdRelated.appendChild(card);
        });

        // Cart button
        pdBtnCart.onclick = function() {
            var cartIconSVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>';
            addToCart(p, pdBtnCart);
        };

        pdOverlay.classList.add('open');
        pdModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        pdModal.scrollTop = 0;
    }

    function closeDetail() {
        pdOverlay.classList.remove('open');
        pdModal.classList.remove('open');
        document.body.style.overflow = '';
    }

    function setImg(idx) {
        var imgs = (currentProduct && currentProduct.images) ? currentProduct.images : [];
        if (!imgs.length) return;
        currentImgIdx = (idx + imgs.length) % imgs.length;
        pdMainImg.style.opacity = '0';
        setTimeout(function() {
            pdMainImg.src = imgs[currentImgIdx];
            pdMainImg.style.opacity = '1';
        }, 120);
        pdThumbs.querySelectorAll('.pd-thumb').forEach(function(t, i) {
            t.classList.toggle('active', i === currentImgIdx);
        });
    }

    pdPrev.addEventListener('click', function() { setImg(currentImgIdx - 1); });
    pdNext.addEventListener('click', function() { setImg(currentImgIdx + 1); });
    pdClose.addEventListener('click', closeDetail);
    pdOverlay.addEventListener('click', closeDetail);

    // Cerrar al hacer clic en el fondo del modal (fuera del contenido)
    pdModal.addEventListener('click', function(e) {
        if (!e.target.closest('.pd-inner') && !e.target.closest('.pd-related-wrap') && !e.target.closest('.pd-close')) {
            closeDetail();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!pdModal.classList.contains('open')) return;
        if (e.key === 'Escape')      closeDetail();
        if (e.key === 'ArrowLeft')   setImg(currentImgIdx - 1);
        if (e.key === 'ArrowRight')  setImg(currentImgIdx + 1);
    });

    // Open on card click (but not on button/thumb clicks)
    document.addEventListener('click', function(e) {
        var card = e.target.closest('.product-card');
        if (!card) return;
        if (e.target.closest('.btn-add-cart') || e.target.closest('.card-fav-btn') ||
            e.target.closest('.card-thumb') || e.target.closest('.btn-specs-toggle') ||
            e.target.closest('.card-specs-table')) return;
        // Find product by name
        var name = card.querySelector('.card-name') && card.querySelector('.card-name').textContent;
        var allProds = [].concat(PRODUCTS.colchones || [], PRODUCTS.camas || [], PRODUCTS.muebles || []);
        var prod = allProds.find(function(p) { return p.name === name; });
        if (prod) openDetail(prod);
    });
})();

// ── LOGO HANDLING ─────────────────────────────────────────
const logoImg  = document.getElementById('logoImg');
const logoText = document.querySelector('.nav-logo-text');
if (logoImg) {
    logoImg.addEventListener('load', () => {
        if (logoText) logoText.style.display = 'none';
        logoImg.style.display = 'block';
    });
    logoImg.addEventListener('error', () => {
        logoImg.style.display = 'none';
        if (logoText) logoText.style.display = 'block';
    });
    if (logoImg.complete && logoImg.naturalWidth > 0) {
        if (logoText) logoText.style.display = 'none';
        logoImg.style.display = 'block';
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
function dismissLoader() {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('out')) {
        loader.classList.add('out');
        startHeroAnims();
    }
}
// Espera a que cargue todo, máximo 1.8s
window.addEventListener('load', () => setTimeout(dismissLoader, 1800));
// Fallback: si en 4s no cargó, lo quita igual
setTimeout(dismissLoader, 4000);

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

// Listener nav cart / cerrar / confirmar
document.addEventListener('click', function(e) {
    if (e.target.closest('#navCart'))                                        { openCart();     return; }
    if (e.target.closest('#cartClose') || e.target.closest('#cartOverlay')) { closeCart();    return; }
    if (e.target.closest('#btnConfirmOrder'))                                { confirmOrder(); return; }
});

// ── FILTER TABS ───────────────────────────────────────────
function initDualFilters(sizeTabsId, lineTabsId, gridId) {
    var sizeTabs = document.getElementById(sizeTabsId);
    var lineTabs = document.getElementById(lineTabsId);
    var grid     = document.getElementById(gridId);
    if (!sizeTabs || !lineTabs || !grid) return;

    var activeSize = 'all';
    var activeLine = 'all';

    function applyFilters() {
        grid.querySelectorAll('.product-card').forEach(function(card) {
            var matchSize = activeSize === 'all' || card.dataset.size === activeSize;
            var matchLine = activeLine === 'all' || card.dataset.line === activeLine;
            card.style.display = (matchSize && matchLine) ? '' : 'none';
        });
    }

    sizeTabs.querySelectorAll('.filter-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            sizeTabs.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            activeSize = tab.dataset.size;
            applyFilters();
        });
    });

    lineTabs.querySelectorAll('.filter-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            lineTabs.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            activeLine = tab.dataset.line;
            applyFilters();
        });
    });
}

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

initDualFilters('colchonesSizeTabs', 'colchonesLineTabs', 'colchonesGrid');
initFilters('camasTabs',     'camasGrid');
initFilters('sabanasTabs',   'sabanasGrid', 'size');
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

// ── CHECKOUT — 4 pasos ───────────────────────────────────

// Datos de Peru (departamentos → provincias → distritos)
var PERU = {
    'Loreto': {
        'Alto Amazonas': ['Yurimaguas','Balsapuerto','Jeberos','Lagunas','Santa Cruz','Teniente César López Rojas'],
        'Loreto': ['Nauta','Parinari','Tigre','Trompeteros','Urarinas'],
        'Maynas': ['Iquitos','Alto Nanay','Fernando Lores','Indiana','Las Amazonas','Mazan','Punchana','Torres Causana'],
        'Ucayali': ['Contamana','Inahuaya','Padre Márquez','Pampa Hermosa','Sarayacu','Vargas Guerra']
    },
    'Lima': {
        'Lima': ['Lima','Ate','Barranco','Breña','Carabayllo','Chorrillos','Comas','El Agustino','Independencia','Jesús María','La Molina','La Victoria','Lince','Los Olivos','Lurigancho','Lurín','Magdalena del Mar','Miraflores','Pachacámac','Puente Piedra','Pueblo Libre','Rímac','San Borja','San Isidro','San Juan de Lurigancho','San Juan de Miraflores','San Luis','San Martín de Porres','San Miguel','Santa Anita','Santiago de Surco','Surquillo','Villa El Salvador','Villa María del Triunfo'],
        'Callao': ['Callao','Bellavista','Carmen de la Legua Reynoso','La Perla','La Punta','Mi Perú','Ventanilla']
    },
    'Arequipa': {
        'Arequipa': ['Arequipa','Alto Selva Alegre','Cayma','Cerro Colorado','Characato','Hunter','José Luis Bustamante y Rivero','Mariano Melgar','Miraflores','Mollebaya','Paucarpata','Pocsi','Quequeña','Sabandía','Sachaca','San Juan de Siguas','San Juan de Tarucani','Santa Isabel de Siguas','Santa Rita de Siguas','Socabaya','Tiabaya','Uchumayo','Vítor','Yanahuara','Yarabamba','Yura']
    },
    'Cusco': {
        'Cusco': ['Cusco','Ccorca','Poroy','San Jerónimo','San Sebastián','Santiago','Saylla','Wanchaq']
    },
    'La Libertad': {
        'Trujillo': ['Trujillo','El Porvenir','Florencia de Mora','Huanchaco','La Esperanza','Laredo','Moche','Poroto','Salaverry','Simbal','Victor Larco Herrera']
    },
    'Piura': {
        'Piura': ['Piura','Castilla','Catacaos','Cura Mori','El Tallan','La Arena','La Unión','Las Lomas','Tambogrande','Veintiseis de Octubre']
    },
    'Junín': {
        'Huancayo': ['Huancayo','Carhuacallanga','Chacapampa','Chicche','Chilca','Chongos Alto','Chupuro','Colca','Cullhuas','El Tambo','Huacrapuquio','Hualhuas','Huancan','Huasicancha','Huayucachi','Ingenio','Pariahuanca','Pilcomayo','Pucará','Quichuay','Quilcas','San Agustín','San Jerónimo de Tunán','Santo Domingo de Acobamba','Sapallanga','Sicaya','Viques']
    },
    'Ucayali': {
        'Coronel Portillo': ['Callería','Campoverde','Iparía','Masisea','Yarinacocha','Nueva Requena','Manantay']
    },
    'San Martín': {
        'San Martín': ['Tarapoto','Alberto Leveau','Cacatachi','Chazuta','Chipurana','El Porvenir','Huimbayoc','Juan Guerra','La Banda de Shilcayo','Morales','Papaplaya','San Antonio','Santa Rosa','Sauce','Shapaja']
    },
    'Amazonas': {
        'Chachapoyas': ['Chachapoyas','Asunción','Balsas','Cheto','Chiliquín','Chuquibamba','Granada','Huancas','La Jalca','Leimebamba','Levanto','Magdalena','Mariscal Castilla','Molinopampa','Montevideo','Olleros','Quinjalca','San Francisco de Daguas','San Isidro de Maino','Soloco','Sonche']
    }
};

function openCheckout() {
    closeCart();
    coRenderAll();
    document.getElementById('coOverlay').classList.add('open');
    document.getElementById('coModal').classList.add('open');
    document.body.style.overflow = 'hidden';
    // Cargar departamentos
    var sel = document.getElementById('coDpto');
    if (sel && sel.options.length === 1) {
        Object.keys(PERU).sort().forEach(function(d) {
            var o = document.createElement('option');
            o.value = d; o.textContent = d;
            sel.appendChild(o);
        });
        // Pre-seleccionar Loreto
        sel.value = 'Loreto';
        coLoadProvincias();
    }
};

function closeCheckout() {
    document.getElementById('coOverlay').classList.remove('open');
    document.getElementById('coModal').classList.remove('open');
    document.body.style.overflow = '';
};

function coGoStep(n) {
    [1,2,3,4].forEach(function(i) {
        var pane = document.getElementById('coPane' + i);
        var step = document.querySelector('.co-step[data-step="' + i + '"]');
        if (pane) pane.classList.toggle('co-pane--hidden', i !== n);
        if (step) {
            step.classList.remove('co-step--active','co-step--done');
            if (i === n) step.classList.add('co-step--active');
            else if (i < n) step.classList.add('co-step--done');
        }
    });
    document.querySelector('.co-modal').scrollTop = 0;
};

function coValidatePersonal() {
    var email  = document.getElementById('coEmail').value.trim();
    var nombre = document.getElementById('coNombre').value.trim();
    var tel    = document.getElementById('coTelefono').value.trim();
    if (!email || !nombre || !tel) {
        alert('Por favor completa todos los datos personales.');
        return;
    }
    coGoStep(3);

    // Enviar lead al backend → email de bienvenida automático
    var items = _cart.map(function(i) { return i.name; }).join(', ');
    var total = 'S/ ' + _cart.reduce(function(s, i) { return s + i.price * (i.qty || 1); }, 0).toLocaleString('es-PE');
    fetch('/checkout/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nombre, email: email, phone: tel, items: items, total: total })
    }).catch(function() {}); // silencioso — no interrumpe el flujo
};

function coValidateEntrega() {
    var dpto = document.getElementById('coDpto').value;
    var prov = document.getElementById('coProv').value;
    var dist = document.getElementById('coDist').value;
    var dir  = document.getElementById('coDireccion').value.trim();
    if (!dpto || !prov || !dist || !dir) {
        alert('Por favor completa todos los datos de entrega.');
        return;
    }
    coGoStep(4);
};

function coLoadProvincias() {
    var dpto = document.getElementById('coDpto').value;
    var selP = document.getElementById('coProv');
    var selD = document.getElementById('coDist');
    selP.innerHTML = '<option value="">Selecciona provincia</option>';
    selD.innerHTML = '<option value="">Selecciona distrito</option>';
    if (dpto && PERU[dpto]) {
        Object.keys(PERU[dpto]).sort().forEach(function(p) {
            var o = document.createElement('option');
            o.value = p; o.textContent = p;
            selP.appendChild(o);
        });
        // Pre-seleccionar primera provincia
        if (selP.options.length > 1) {
            selP.selectedIndex = 1;
            coLoadDistritos();
        }
    }
};

function coLoadDistritos() {
    var dpto = document.getElementById('coDpto').value;
    var prov = document.getElementById('coProv').value;
    var selD = document.getElementById('coDist');
    selD.innerHTML = '<option value="">Selecciona distrito</option>';
    if (dpto && prov && PERU[dpto] && PERU[dpto][prov]) {
        PERU[dpto][prov].forEach(function(d) {
            var o = document.createElement('option');
            o.value = d; o.textContent = d;
            selD.appendChild(o);
        });
        // Pre-seleccionar Yurimaguas si existe
        var opts = Array.from(selD.options);
        var yuri = opts.find(function(o) { return o.value === 'Yurimaguas'; });
        if (yuri) selD.value = 'Yurimaguas';
        else if (selD.options.length > 1) selD.selectedIndex = 1;
    }
};

function coRenderAll() {
    // Lista de productos en step 1
    var list = document.getElementById('coCartList');
    var empty = document.getElementById('coEmpty');
    if (!list) return;
    list.querySelectorAll('.co-cart-row').forEach(function(e) { e.remove(); });
    if (_cart.length === 0) {
        if (empty) empty.style.display = 'block';
    } else {
        if (empty) empty.style.display = 'none';
        _cart.forEach(function(item, idx) {
            var row = document.createElement('div');
            row.className = 'co-cart-row';
            row.innerHTML =
                '<img src="' + item.img + '" alt="' + item.name + '" class="co-cart-row-img">' +
                '<div class="co-cart-row-info">' +
                  '<div class="co-cart-row-name">' + item.name + '</div>' +
                  '<div class="co-cart-row-price">' + item.priceStr + '</div>' +
                '</div>' +
                '<div class="co-qty">' +
                  '<button class="co-qty-btn" onclick="coQtyChange(' + idx + ',-1)">−</button>' +
                  '<div class="co-qty-val" id="coQty' + idx + '">' + (item.qty || 1) + '</div>' +
                  '<button class="co-qty-btn" onclick="coQtyChange(' + idx + ',1)">+</button>' +
                '</div>' +
                '<button class="co-cart-row-del" onclick="coCartDel(' + idx + ')" title="Eliminar">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
                  '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>' +
                  '</svg></button>';
            list.appendChild(row);
        });
    }
    // Resumen aside
    var asideItems = document.getElementById('coAsideItems');
    var asideTotal = document.getElementById('coAsideTotal');
    if (asideItems) {
        asideItems.innerHTML = '';
        _cart.forEach(function(item) {
            var el = document.createElement('div');
            el.className = 'co-aside-item';
            el.innerHTML =
                '<img src="' + item.img + '" class="co-aside-img" alt="' + item.name + '">' +
                '<span class="co-aside-item-name">' + item.name + '</span>' +
                '<span class="co-aside-item-price">' + item.priceStr + '</span>';
            asideItems.appendChild(el);
        });
    }
    if (asideTotal) {
        var total = 0; _cart.forEach(function(i) { total += i.price * (i.qty || 1); });
        asideTotal.textContent = 'S/ ' + total.toLocaleString('es-PE');
    }
}

function coQtyChange(idx, delta) {
    if (!_cart[idx]) return;
    var q = (_cart[idx].qty || 1) + delta;
    if (q < 1) return;
    _cart[idx].qty = q;
    var el = document.getElementById('coQty' + idx);
    if (el) el.textContent = q;
    // Actualizar precio en aside
    var total = 0; _cart.forEach(function(i) { total += i.price * (i.qty || 1); });
    var asideTotal = document.getElementById('coAsideTotal');
    if (asideTotal) asideTotal.textContent = 'S/ ' + total.toLocaleString('es-PE');
};

function coCartDel(idx) {
    _cart.splice(idx, 1);
    renderCart();
    coRenderAll();
};

function coConfirmar() {
    var email  = document.getElementById('coEmail').value.trim();
    var nombre = document.getElementById('coNombre').value.trim();
    var tel    = document.getElementById('coTelefono').value.trim();
    var dpto   = document.getElementById('coDpto').value;
    var prov   = document.getElementById('coProv').value;
    var dist   = document.getElementById('coDist').value;
    var dir    = document.getElementById('coDireccion').value.trim();
    var ref    = document.getElementById('coReferencia').value.trim();
    if (_cart.length === 0) { alert('Tu carrito está vacío.'); return; }
    var lines = _cart.map(function(item, i) {
        return (i+1) + '. ' + item.name + ' x' + (item.qty||1) + ' — ' + item.priceStr;
    });
    var total = 0; _cart.forEach(function(i) { total += i.price * (i.qty||1); });
    var msg = '¡Hola Qiru Center! Quiero confirmar mi pedido:\n\n' +
        lines.join('\n') + '\n\n' +
        '*Total: S/ ' + total.toLocaleString('es-PE') + ' soles*\n\n' +
        '📋 *Datos personales:*\n' +
        '• Nombre: ' + nombre + '\n' +
        '• Correo: ' + email + '\n' +
        '• Teléfono: ' + tel + '\n\n' +
        '📦 *Datos de entrega:*\n' +
        '• ' + dpto + ' / ' + prov + ' / ' + dist + '\n' +
        '• Dirección: ' + dir + (ref ? '\n• Referencia: ' + ref : '') + '\n\n' +
        'Adjunto comprobante de pago. ¡Gracias!';
    window.open('https://wa.me/51939975894?text=' + encodeURIComponent(msg), '_blank');
};

// Cerrar checkout con overlay o botón X
document.getElementById('coClose').addEventListener('click', closeCheckout);
document.getElementById('coOverlay').addEventListener('click', closeCheckout);

// ── BÚSQUEDA RÁPIDA ───────────────────────────────────────
(function() {
    var input    = document.getElementById('searchInput');
    var results  = document.getElementById('searchResults');
    var clearBtn = document.getElementById('searchClear');
    if (!input || !results) return;

    var ALL_PRODUCTS = []
        .concat(PRODUCTS.colchones || [])
        .concat(PRODUCTS.camas     || [])
        .concat(PRODUCTS.muebles   || []);

    var SECTION_MAP = {};
    (PRODUCTS.colchones || []).forEach(function(p) { SECTION_MAP[p.name] = 'colchones'; });
    (PRODUCTS.camas     || []).forEach(function(p) { SECTION_MAP[p.name] = 'camas'; });
    (PRODUCTS.muebles   || []).forEach(function(p) { SECTION_MAP[p.name] = 'muebles'; });

    function showResults(query) {
        query = query.trim().toLowerCase();
        results.innerHTML = '';
        if (!query) { results.classList.remove('open'); return; }

        var matches = ALL_PRODUCTS.filter(function(p) {
            return p.name.toLowerCase().includes(query) ||
                   p.cat.toLowerCase().includes(query)  ||
                   (p.includes && p.includes.toLowerCase().includes(query));
        }).slice(0, 8);

        if (matches.length === 0) {
            results.innerHTML = '<div class="sr-empty">No se encontraron productos</div>';
            results.classList.add('open');
            return;
        }

        matches.forEach(function(p) {
            var img   = p.images && p.images[0] ? p.images[0] : '';
            var section = SECTION_MAP[p.name] || 'colchones';
            var item  = document.createElement('div');
            item.className = 'sr-item';
            item.innerHTML =
                (img ? '<img src="' + img + '" class="sr-img" alt="' + p.name + '">' : '<div class="sr-img sr-img--placeholder"></div>') +
                '<div class="sr-info">' +
                  '<div class="sr-name">' + p.name + '</div>' +
                  '<div class="sr-cat">' + p.cat + '</div>' +
                '</div>' +
                '<div class="sr-price">' + p.price + '</div>';
            item.addEventListener('click', function() {
                var target = document.getElementById(section);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                input.value = '';
                clearBtn.style.display = 'none';
                results.classList.remove('open');
                results.innerHTML = '';
                // Agregar al carrito directamente
                addToCart(p, null);
            });
            results.appendChild(item);
        });
        results.classList.add('open');
    }

    input.addEventListener('input', function() {
        clearBtn.style.display = input.value ? 'flex' : 'none';
        showResults(input.value);
    });

    clearBtn.addEventListener('click', function() {
        input.value = '';
        clearBtn.style.display = 'none';
        results.classList.remove('open');
        results.innerHTML = '';
        input.focus();
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('#navSearch')) {
            results.classList.remove('open');
        }
    });

    input.addEventListener('focus', function() {
        if (input.value.trim()) showResults(input.value);
    });
})();

// ── BÚSQUEDA MÓVIL (barra desplegable) ────────────────────────────────────
(function() {
    var toggle   = document.getElementById('searchToggle');
    var bar      = document.getElementById('navSearchMobile');
    var inputM   = document.getElementById('searchInputMobile');
    var resultsM = document.getElementById('searchResultsMobile');
    var clearM   = document.getElementById('searchClearMobile');
    if (!toggle || !bar || !inputM) return;

    var ALL_PRODUCTS = []
        .concat(PRODUCTS.colchones || [])
        .concat(PRODUCTS.camas     || [])
        .concat(PRODUCTS.muebles   || []);

    var SECTION_MAP = {};
    (PRODUCTS.colchones || []).forEach(function(p) { SECTION_MAP[p.name] = 'colchones'; });
    (PRODUCTS.camas     || []).forEach(function(p) { SECTION_MAP[p.name] = 'camas'; });
    (PRODUCTS.muebles   || []).forEach(function(p) { SECTION_MAP[p.name] = 'muebles'; });

    function showResultsM(query) {
        query = query.trim().toLowerCase();
        resultsM.innerHTML = '';
        if (!query) { resultsM.classList.remove('open'); return; }
        var matches = ALL_PRODUCTS.filter(function(p) {
            return p.name.toLowerCase().includes(query) ||
                   p.cat.toLowerCase().includes(query)  ||
                   (p.includes && p.includes.toLowerCase().includes(query));
        }).slice(0, 8);
        if (matches.length === 0) {
            resultsM.innerHTML = '<div class="sr-empty">No se encontraron productos</div>';
            resultsM.classList.add('open'); return;
        }
        matches.forEach(function(p) {
            var img = p.images && p.images[0] ? p.images[0] : '';
            var section = SECTION_MAP[p.name] || 'colchones';
            var item = document.createElement('div');
            item.className = 'sr-item';
            item.innerHTML =
                (img ? '<img src="' + img + '" class="sr-img" alt="' + p.name + '">' : '<div class="sr-img sr-img--placeholder"></div>') +
                '<div class="sr-info"><div class="sr-name">' + p.name + '</div><div class="sr-cat">' + p.cat + '</div></div>' +
                '<div class="sr-price">' + p.price + '</div>';
            item.addEventListener('click', function() {
                var target = document.getElementById(section);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                inputM.value = ''; clearM.style.display = 'none';
                resultsM.classList.remove('open'); resultsM.innerHTML = '';
                bar.classList.remove('open');
                addToCart(p, null);
            });
            resultsM.appendChild(item);
        });
        resultsM.classList.add('open');
    }

    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        bar.classList.toggle('open');
        if (bar.classList.contains('open')) { inputM.focus(); }
        else { inputM.value = ''; clearM.style.display = 'none'; resultsM.classList.remove('open'); }
    });

    inputM.addEventListener('input', function() {
        clearM.style.display = inputM.value ? 'flex' : 'none';
        showResultsM(inputM.value);
    });

    clearM.addEventListener('click', function() {
        inputM.value = ''; clearM.style.display = 'none';
        resultsM.classList.remove('open'); resultsM.innerHTML = '';
        inputM.focus();
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('#navSearchMobile') && !e.target.closest('#searchToggle')) {
            bar.classList.remove('open');
            resultsM.classList.remove('open');
        }
    });
})();

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
