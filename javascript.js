const productos = [
  {
    id: 1,
    nombre: "Vela de soja lavanda",
    imagen: "img/vela.jpg",
    descripcion: "Vela aromática de cera de soja con aceite esencial de lavanda.",
    stock: 20,
    precio: 1500
  },
  {
    id: 2,
    nombre: "Jabón natural de caléndula",
    imagen: "img/jabóncaléndula.jpg",
    descripcion: "Jabón artesanal elaborado con extracto de caléndula, ideal para piel sensible.",
    stock: 30,
    precio: 850
  },
  {
    id: 3,
    nombre: "Maceta pintada a mano - Cactus",
    imagen: "img/macetacactus.jpg",
    descripcion: "Maceta de cerámica pintada a mano con diseño de cactus.",
    stock: 15,
    precio: 1800
  },
  {
    id: 4,
    nombre: "Collar de piedra volcánica",
    imagen: "img/collar.jpg",
    descripcion: "Collar artesanal con cuentas de piedra volcánica y dije de cobre.",
    stock: 10,
    precio: 2200
  },
  {
    id: 5,
    nombre: "Cuaderno reciclado A5",
    imagen: "img/cuaderno.jpg",
    descripcion: "Cuaderno artesanal con tapa dura hecha con cartón reciclado.",
    stock: 25,
    precio: 1000
  },
  {
    id: 6,
    nombre: "Vela en taza vintage",
    imagen: "img/velaentaza.jpg",
    descripcion: "Vela aromática en taza de loza antigua reutilizada, aroma vainilla.",
    stock: 12,
    precio: 2000
  },
  {
    id: 7,
    nombre: "Pulsera de hilo encerado",
    imagen: "img/pulseras.jpg",
    descripcion: "Pulsera tejida a mano en hilo encerado, ajustable.",
    stock: 40,
    precio: 650
  },
  {
    id: 8,
    nombre: "Jabón de carbón activado",
    imagen: "img/jabonactivado.jpg",
    descripcion: "Jabón detox con carbón activado, ideal para piel grasa.",
    stock: 28,
    precio: 950
  },
  {
    id: 9,
    nombre: "Set de 3 velas decorativas",
    imagen: "img/artesanias/set-velas.jpg",
    descripcion: "Velas artesanales con diseño artístico, aromas surtidos.",
    stock: 8,
    precio: 3200
  },
  {
    id: 10,
    nombre: "Cuaderno artesanal bordado",
    imagen: "img/artesanias/cuaderno-bordado.jpg",
    descripcion: "Cuaderno hecho a mano con portada bordada en hilo de algodón.",
    stock: 16,
    precio: 1900
  },
  {
    id: 11,
    nombre: "Taza de cerámica esmaltada",
    imagen: "img/artesanias/taza-ceramica.jpg",
    descripcion: "Taza hecha a torno con esmalte brillante azul profundo.",
    stock: 14,
    precio: 2300
  },
  {
    id: 12,
    nombre: "Vela de soja en frasco ámbar",
    imagen: "img/artesanias/vela-ambar.jpg",
    descripcion: "Vela artesanal con aroma a eucalipto y citronela, ideal para exteriores.",
    stock: 18,
    precio: 1700
  },
  {
    id: 13,
    nombre: "Aros de arcilla polimérica",
    imagen: "img/artesanias/aros-arcilla.jpg",
    descripcion: "Aros coloridos hechos a mano con formas abstractas.",
    stock: 20,
    precio: 1200
  },
  {
    id: 14,
    nombre: "Caja decorativa con decoupage",
    imagen: "img/artesanias/caja-decoupage.jpg",
    descripcion: "Caja de madera con técnica de decoupage floral.",
    stock: 6,
    precio: 2100
  },
  {
    id: 15,
    nombre: "Collar con resina y flores secas",
    imagen: "img/artesanias/collar-resina.jpg",
    descripcion: "Colgante de resina con flores naturales encapsuladas.",
    stock: 9,
    precio: 2500
  },
  {
    id: 16,
    nombre: "Jabón exfoliante de café",
    imagen: "img/artesanias/jabon-cafe.jpg",
    descripcion: "Jabón natural con granos de café molido para exfoliar.",
    stock: 22,
    precio: 900
  },
  {
    id: 17,
    nombre: "Cuaderno Kraft con sellos botánicos",
    imagen: "img/artesanias/cuaderno-sellos.jpg",
    descripcion: "Cuaderno cosido a mano con papel reciclado y sellos botánicos.",
    stock: 17,
    precio: 1100
  },
  {
    id: 18,
    nombre: "Porta sahumerio de cerámica",
    imagen: "img/artesanias/porta-sahumerio.jpg",
    descripcion: "Soporte para sahumerios hecho a mano, varios colores.",
    stock: 20,
    precio: 700
  },
  {
    id: 19,
    nombre: "Jabón con pétalos de rosa",
    imagen: "img/artesanias/jabon-rosa.jpg",
    descripcion: "Jabón artesanal con pétalos de rosa y aceite de almendras.",
    stock: 30,
    precio: 980
  },
  {
    id: 20,
    nombre: "Pack aromático: vela + sahumerios",
    imagen: "img/artesanias/pack-aroma.jpg",
    descripcion: "Set artesanal para relajación: vela + sahumerios naturales.",
    stock: 10,
    precio: 3400
  }
];

function actualizar() {
  let carrito = localStorage.getItem("totalproductos")
    document.getElementById("totalproducto").innerHTML = carrito
}

actualizar()

function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML = `
                    <h2 id="nombreproducto">${producto.nombre}</h2>
                    <img src="${producto.imagen}" alt="" id="${producto.imagen}">
                    <h3 id="precioproducto">$${producto.precio}</h3>
                    <button id="btncomprar" onclick="verdetalle(${producto.id})">Ver</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}

cargarproductos()

function verdetalle(id) {
  let productoseleccionado = productos.find(producto => producto.id == id)
  let productojson = JSON.stringify(productoseleccionado)
  localStorage.setItem("detalle", productojson)
  window.location.href = "detalle.html"
}