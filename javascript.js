async function subirProductos() {
  try {
    const coleccionRef = collection(db, "productos"); // nombre de la colección
    for (const producto of productos) {
      await addDoc(coleccionRef, producto);
      console.log(`Producto ${producto.nombre} agregado con éxito.`);
    }
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
}

// Ejecutar la carga
subirProductos();

const productos = [
  {
    id: 1,
    nombre:  " Sartenes",
    imagen: "img/sartenes.jpg",
    descripcion: "Cacerola esmaltada de Mickey Cookware Disney, Cocinar será aún más placentero con estas cacerolas esmaltadas de Mickey Mouse. Son del tamaño ideal para cualquier tipo de preparación.",
    stock: 20,
    precio: 1500
  },
  {
    id: 2,
    nombre: "Porta Utensilios",
    imagen: "img/portautensilios.jpg",
    descripcion: "Porta Utensilios Mouse Mickey Cocinero. Porta utensilios de cerámica. Mide 15 cm de alto y 11 cm de diámetro. ",
    stock: 30,
    precio: 850
  },
  {
    id: 3,
    nombre: "Organizador de tapa y platos.",
    imagen: "img/utensilioscocina.jpg",
    descripcion: " Descubre el Organizador de Tapas y platos de Mickey Mouse. Su encantadora base con forma de los pies de Mickey le dará un toque de encanto a tu mesa.",
    stock: 15,
    precio: 1800
  },
  {
    id: 4,
    nombre: "Taza de cerámica oficial.",
    imagen: "img/tazamickey.jpg",
    descripcion: "Con la taza de Mickey y sus amigos, experimentarás el verdadero placer de disfrutar de un delicioso desayuno o una merienda. La base es plana y resistente al desgaste. ",
    stock: 10,
    precio: 2200
  },
  {
    id: 5,
    nombre: "Bowl Mickey Mouse",
    imagen: "img/bowl.jpg",
    descripcion: "Bol con Mickey pintado",
    stock: 25,
    precio: 1000
  },
  {
    id: 6,
    nombre: "Espátula de silicona de Minnie Mouse",
    imagen: "img/espatula.jpg",
    descripcion: "diseño clásico con mango de madera,mide 12 pulgadas de largo, el tamaño perfecto para mezclar, raspar y recoger cualquier deliciosa golosina que estés horneando.",
    stock: 12,
    precio: 2000
  },
  {
    id: 7,
    nombre: "Manoplas de horno de Disney",
    imagen: "img/manopla.jpg",
    descripcion: " resistentes al calor, mini guantes para horno con siluetas de Disney de silicona",
    stock: 40,
    precio: 650
  },
  {
    id: 8,
    nombre: " Tabla de cortar de madera.",
    imagen: "img/tabladecortar.jpg",
    descripcion: "Tabla de silicona, para cualquier tipo de uso.",
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
