const productos = [
  {
    id: 1,
    nombre: "Refrigerador Samsung",
    imagen: "https://ejemplo.com/img/refrigerador-samsung.jpg",
    descripcion: "Refrigerador de 350 litros con tecnología No Frost.",
    stock: 15,
    precio: 750
  },
  {
    id: 2,
    nombre: "Lavadora LG",
    imagen: "https://ejemplo.com/img/lavadora-lg.jpg",
    descripcion: "Lavadora de carga frontal con 8 programas de lavado.",
    stock: 10,
    precio: 420
  },
  {
    id: 3,
    nombre: "Microondas Panasonic",
    imagen: "https://ejemplo.com/img/microondas-panasonic.jpg",
    descripcion: "Microondas con función descongelar y 1000W de potencia.",
    stock: 20,
    precio: 120
  },
  {
    id: 4,
    nombre: "Aspiradora Dyson",
    imagen: "https://ejemplo.com/img/aspiradora-dyson.jpg",
    descripcion: "Aspiradora inalámbrica con gran poder de succión.",
    stock: 8,
    precio: 300
  },
  {
    id: 5,
    nombre: "Televisor LG 55\"",
    imagen: "https://ejemplo.com/img/televisor-lg-55.jpg",
    descripcion: "Televisor LED 4K con HDR y Smart TV.",
    stock: 12,
    precio: 680
  },
  {
    id: 6,
    nombre: "Horno Eléctrico Oster",
    imagen: "https://ejemplo.com/img/horno-oster.jpg",
    descripcion: "Horno eléctrico con capacidad para 20 litros.",
    stock: 14,
    precio: 150
  },
  {
    id: 7,
    nombre: "Cafetera Nespresso",
    imagen: "https://ejemplo.com/img/cafetera-nespresso.jpg",
    descripcion: "Cafetera de cápsulas con sistema rápido de calentamiento.",
    stock: 25,
    precio: 90
  },
  {
    id: 8,
    nombre: "Plancha Philips",
    imagen: "https://ejemplo.com/img/plancha-philips.jpg",
    descripcion: "Plancha de vapor con suela antiadherente.",
    stock: 30,
    precio: 45
  },
  {
    id: 9,
    nombre: "Ventilador Dyson",
    imagen: "https://ejemplo.com/img/ventilador-dyson.jpg",
    descripcion: "Ventilador sin aspas con control remoto.",
    stock: 5,
    precio: 350
  },
  {
    id: 10,
    nombre: "Licuadora Oster",
    imagen: "https://ejemplo.com/img/licuadora-oster.jpg",
    descripcion: "Licuadora de 600W con jarra de vidrio.",
    stock: 18,
    precio: 60
  },
  {
    id: 11,
    nombre: "Extractor de jugos Philips",
    imagen: "https://ejemplo.com/img/extractor-philips.jpg",
    descripcion: "Extractor lento para conservar vitaminas.",
    stock: 22,
    precio: 130
  },
  {
    id: 12,
    nombre: "Secadora Whirlpool",
    imagen: "https://ejemplo.com/img/secadora-whirlpool.jpg",
    descripcion: "Secadora con sensor de humedad y múltiples ciclos.",
    stock: 9,
    precio: 400
  },
  {
    id: 13,
    nombre: "Refrigerador Mabe",
    imagen: "https://ejemplo.com/img/refrigerador-mabe.jpg",
    descripcion: "Refrigerador duplex con eficiencia energética A.",
    stock: 16,
    precio: 650
  },
  {
    id: 14,
    nombre: "Estufa de gas Whirlpool",
    imagen: "https://ejemplo.com/img/estufa-whirlpool.jpg",
    descripcion: "Estufa de 6 quemadores con horno grande.",
    stock: 11,
    precio: 550
  },
  {
    id: 15,
    nombre: "Tostadora Black+Decker",
    imagen: "https://ejemplo.com/img/tostadora-bd.jpg",
    descripcion: "Tostadora de 2 rebanadas con control de dorado.",
    stock: 28,
    precio: 25
  },
  {
    id: 16,
    nombre: "Batidora KitchenAid",
    imagen: "https://ejemplo.com/img/batidora-ka.jpg",
    descripcion: "Batidora de pedestal con múltiples accesorios.",
    stock: 7,
    precio: 280
  },
  {
    id: 17,
    nombre: "Calentador de agua Rheem",
    imagen: "https://ejemplo.com/img/calentador-rheem.jpg",
    descripcion: "Calentador eléctrico con capacidad para 50 litros.",
    stock: 13,
    precio: 320
  },
  {
    id: 18,
    nombre: "Freidora de aire Philips",
    imagen: "https://ejemplo.com/img/freidora-philips.jpg",
    descripcion: "Freidora sin aceite con tecnología Rapid Air.",
    stock: 19,
    precio: 140
  },
  {
    id: 19,
    nombre: "Congelador Whirlpool",
    imagen: "https://ejemplo.com/img/congelador-whirlpool.jpg",
    descripcion: "Congelador horizontal con gran capacidad.",
    stock: 10,
    precio: 550
  },
  {
    id: 20,
    nombre: "Cafetera Italiana Bialetti",
    imagen: "https://ejemplo.com/img/cafetera-bialetti.jpg",
    descripcion: "Cafetera tradicional para estufa, 6 tazas.",
    stock: 35,
    precio: 30
  }
];

function cargarproductos() {

    for( let producto of productos){
        let parrafo = document.createElement("div");
        parrafo.id="boxproducto";
        parrafo.innerHTML = `
             <h2 id="nombreproducto"> ${producto.nombre}</h2>
             <img src="" alt="" id="${producto.imagen}">
            <h3 id="precioproducto"> $0 ${producto.precio.toLocaleString()}</h3>
            <button id="btncomprar">Comprar</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo);
    }
}

cargarproductos()