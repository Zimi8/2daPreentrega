const productos = [

     {id:1,
    title: "Estantería Moderna WHITE",
    precio: 269999,
    categoria: 'living',
    items: 'estantería'
    },

    {id:2,
        title: "Set Habitación Coreana",
        precio: 400000,
        categoria: 'dormitorio',
        items: 'cama foam'//,'biombo madera', 'alfombra cabano'}
     },

     {id:3,
        title: "Set Rustic Wooden",
        precio: 250000,
        categoria: 'living',
        items: 'sillon de mimbre', //'mesa ratonera','lampara velador','espejos redondos','cajon mimbre'
    },     
    

     {  id: 4,
        title: "Set at home",
        precio: 250 000,
        categoria: 'living',
        items:'sofa ultra soft'//, 'manta fluffy', 'alfombra fluffy','banco multiuso','velador de piso lofi','macetero wooden annah'
        },
         
    {id:5,
            title: "Bar Annah Deco",
            precio: 150 000,
            categoria: 'comedor',
            items:'mesa circular de marmol'//,'estructura de madera recuperada','florero de cristal'
            },

     { id:6,
            title: "Bar Annah Deco",
            precio: 1 750 000 ,
            categoria: 'comercial',
            items:'set completo bar cafeteria'//, 'mesas circulares de hierro','sillas patagonicas',' biblioteca embebida','lampara hierro annah', ' empapelado bosques argentinos',
            }           
];

function filtrarProductosPorCategoria() {
const productosFiltrados = productos.filter((productos) => productos.categoria === "comedor")
}


productos.forEach((productos) => {
const idButton = `add-cart ${productos.id}`
document.getElementById("seccion-card").innerHTML += `<div class="card"> <div class="precio">
<p>$ ${productos.precio} </p>
</div>
<h4>${productos.title} </h4>
<a class= "boton" id= "${idButton}" data-id"${productos.id}" >Añadir Al Carrito </a>
</div>
`
})


