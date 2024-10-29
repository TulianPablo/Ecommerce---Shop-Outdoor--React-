const products = [
    {
      id: "00001",
      name: "Campera Avant 5 Gore-Tex 3c Pro Ski",
      description: "El diseño de esta campera está pensado para deportes de nieve. Su ergonomía le otorga libertad de movimiento al usuario. Es 100 % impermeable gracias al tejido GORE-TEX® PRO 3C y a que todas sus costuras son termoselladas.",
      price: "710.000",
      stock: 10,
      image: "/img/campera_gore-tex-m.jpg",
      category: "Indumentaria"
    },
    {
      id: "00002",
      name: "Campera Raptor Pro",
      description: "Campera técnica para actividades de montaña, desde trekking a expediciones. Su calce ajustado, refuerzos en hombros y bolsillos napoleón la hacen ideal para llevar mochila. Tejido WINDSTOPPER® Soft Shell 100% cortaviento y respirable.",
      price: "300.000",
      stock: 5,
      image: "/img/campera_raptor_pro_m.jpg",
      category: "Indumentaria"
    },
    {
      id: "00003",
      name: "Trevo Buzo Micropolar Adventure Dama",
      description: "Un abrigo liviano que tienen excelente relación peso/abrigo; no son voluminosos; son livianos y brindan buena libertad de movimientos. Su nivel de abrigo es medio, con buena transpirabilidad y retención de calor óptima para una prenda súper liviana y suave. Confeccionados en polar 100.",
      price: "55.000",
      stock: 12,
      image: "/img/trevo-buzo-micropolar-adventure-dama-1.jpg",
      category: "Indumentaria"
    },
    {
      id: "00004",
      name: "Patagonia Pantalón Torrentshell 3L",
      description: "El Torrentshell 3L Pants usa tecnología H2No® Performance Standard de 3 capas para entregar excepcional desempeño impermeable/respirable, comodidad durante todo el día y una impermeabilidad que perdura en el tiempo. ",
      price: "192.000",
      stock: 12,
      image: "/img/patagonia-pantalón-torrentshell-3l-1.jpg",
      category: "Indumentaria"
    },
    {
      id: "00005",
      name: "Black Rock Camiseta Termica Microesmerilada",
      description: "Camiseta confeccionada con ThermoTECH y tratamiento Microesmerilado (esta fibra trabaja mejorando la termicidad) Poliester 92% + Spandex 8%.",
      price: "25.000",
      stock: 20,
      image: "/img/black-rock-camiseta-termica-microesmerilada-1.jpg",
      category: "Indumentaria"
    },
    {
      id: "00006",
      name: "Libo Sombrero Atacama",
      description: "Sombrero ala ancha tipo australiano confeccionado con microfibra de secado rápido y tratamiento dwr (repelente al agua), ideal para resguardarte del sol en tus salidas a la montaña",
      price: "37.000",
      stock: 5,
      image: "/img/libo-sombrero-atacama-1.jpg",
      category: "Indumentaria"
    },
    {
      id: "00007",
      name: "Hi-Tec Bota Ravus",
      description: "Calzado 100% Impermeable y Transpirable",
      price: "200.000",
      stock: 12,
      image: "/img/hi-tec-bota-ravus.jpg",
      category: "Calzado"
    },
    {
      id: "00008",
      name: "Nexxt Zapatilla MS Hike Pro Hombre",
      description: "Calzado para senderismo con membrana impermeable",
      price: "800.000",
      stock: 20,
      image: "/img/nexxt-zapatilla-ms-hike-pro.jpg",
      category: "Calzado"
    },
    {
      id: "00009",
      name: "La Sportiva Boulder X",
      description: "Zapatillas para rutas técnicas de aproximación y vía ferratas.",
      price: "820.000",
      stock: 10,
      image: "/img/la-sportiva-boulder-x.jpg",
      category: "Calzado"
    },
    {
      id: "00010",
      name: "Carpa Shanti 4P",
      description: "Costuras termoselladas.Acceso por puerta frontal. Alero regulable. Ventilación posterior con mosquitero.Incluye bolsa de transporte",
      price: "376.000",
      stock: 10,
      image: "/img/carpa-shanti-4p-1.jpg",
      category: "Camping"
    },
    {
      id: "00011",
      name: "Spinit Bolsa de Dormir Cumbre -5º",
      description: "Con una temperatura de confort de 5° C y su diseño de tipo Momia o Sarcofago permite tener una bolsa de dormir mas abrigada con menor peso.",
      price: "124.530",
      stock: 7,
      image: "/img/spinit-bolsa-de-dormir-cumbre-5-1.jpg",
      category: "Camping"
    },
    {
      id: "00012",
      name: "NTK Aislante Thor",
      description: "El aislante térmico Azteq THOR tiene un diseño inteligente, fácil de abrir y empacar en su mochila",
      price: "35.000",
      stock: 8,
      image: "/img/ntk-aislante-thor-1.jpg",
      category: "Camping"
    },
    {
      id: "00013",
      name: "Atenas Marmita con calentador set 13 piezas",
      description: "Set de cocina ligero y portatil, incluye: 2 ollas de aluminio de 800cc y 500cc, calentador para garrafas de gas a rosca, tres cuencos plásticos, cuchara de madera, cuchara cuchillo tenedor y cucharón plegables, esponja, bolsa y mosquetón para facilitar el guardado",
      price: "142.000",
      stock: 6,
      image: "/img/atenas-set-de-cocina-13-piezas-1.jpg",
      category: "Camping"
    },
    {
      id: "00014",
      name: "Osprey Mochila Variant 52L",
      description: "La Variant 52 es una mochila unisex de carga superior, diseñada específicamente para esquí de montaña y escalada en hielo.",
      price: "700.000",
      stock: 6,
      image: "/img/osprey-mochila-variant-52-3.jpg",
      category: "Mochilas y Bolsos"
    },
    {
      id: "00015",
      name: "Ferrino Mochila Triolet 48+5L",
      description: "La nueva Triolet 48+5 presenta todo lo que buscas en una mochila para escalada tradicional, montañismo, esquí de travesía o cualquier actividad de aventura exigente. Muy bien pensada y provista de múltiples accesorios que permiten llevar tu equipo de manera segura y cómoda",
      price: "514.000",
      stock: 6,
      image: "/img/ferrino-mochila-triolet-485-l-1.jpg",
      category: "Mochilas y Bolsos"
    },
    {
      id: "00016",
      name: "Osprey Mochila Katari 7L",
      description: "Cuando todo lo que se necesita es llevar agua y algunos elementos esenciales, la Katari brinda una opción liviana que se monta cerca de la espalda para brindar estabilidad en cualquier sendero.",
      price: "208.000",
      stock: 4,
      image: "/img/mochila-katari-7-1.jpg",
      category: "Mochilas y Bolsos"
    },
    {
      id: "00017",
      name: "Tenaya Pedula Ra",
      description: "La Pedula Ra está diseñada buscando los máximos niveles de equilibrio entre todas sus prestaciones y pensada para ayudar al dedo pulgar a desarrollar toda su fuerza. Brinda una enorme capacidad de respuesta en todos los terrenos y un confort espectacular, el resultado es una zapatilla de altas prestaciones que te ayuda a una escalada más fácil e intuitiva.",
      price: "254.000",
      stock: 10,
      image: "/img/tenaya-pedula-ra-1.jpg",
      category: "Escalada"
    },
    {
      id: "00018",
      name: "Tenaya Pedula Oasi",
      description: "Pedula versátil y con un amplio grado de confort, útil tanto para escalada deportiva en placa, desplome y boulder",
      price: "235.000",
      stock: 10,
      image: "/img/tenaya-pedula-Oasi-1.jpg",
      category: "Escalada"
    },
    {
      id: "00019",
      name: "Petzl Arnes Adjama",
      description: "Arnés para escalada y alpinismo con perneras ajustables para escalada deportiva y escalada de varios largos. El ADJAMA es un arnés diseñado para el alpinismo técnico, la escalada tradicional o la escalada de varios largos. Gracias a sus perneras ajustables, se adapta a todos los escaladores. El acolchado de su cinturón y sus perneras aseguran un máximo confort sin restringir los movimientos.",
      price: "190.000",
      stock: 15,
      image: "/img/petzl-arnes-adjama-1.jpg",
      category: "Escalada"
    },
    {
      id: "00020",
      name: "Edelrid Casco Shield 2",
      description: "Casco ligero y robusto con innovador sistema de cierre y excelente ventilación. Construcción ligera In-Mold con núcleo de espuma de poliestireno expandido y resistente carcasa de policarbonato. La protección perfecta para ascensiones largas y exigentes.",
      price: "190.000",
      stock: 10,
      image: "/img/edelrid-casco-shield-1.jpg",
      category: "Escalada"
    }
  ]
  
  //Obtener productos
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      //Simulamos un retraso de red
      setTimeout( ()=>{
        resolve(products)
      }, 2000 )
    })
  }
  
  export { getProducts }