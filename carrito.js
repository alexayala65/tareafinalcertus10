// Función para los botones añadir carrito
// Crear una cookie
var ObjetosSeleccionados = [];


function addCart(objeto){
    // Obtener el elemento donde se encuetra
    var contenedor = objeto.parentElement.parentElement;
    // Datos del producto
    var nombre = contenedor.getElementsByTagName("h3")[0];
    var precio = contenedor.getElementsByTagName("h4")[0];
    var precioFinal = contenedor.getElementsByTagName("h5")[0];
    // Crear objeto
    var producto = {
        "nombre" : nombre.innerText,
        "precio" : precio.innerText,
        "precioFinal" : precioFinal.innerText
    }
    // Añadir al array de objetos
    ObjetosSeleccionados.push(producto);
}

// Función actualizar lista
function actualizarLista(){
    var lista = document.getElementById("listaCarrito");
    // Crear el HTML
    var texto = "";
    ObjetosSeleccionados.forEach(element => {
        texto = texto + "<div class='productoLista'>";
        texto = texto + "<p>"+element.nombre+"</p>";
        texto = texto + "<p>"+element.precio+"</p>";
        texto = texto + "<p>"+element.precioFinal+"</p>";
        texto = texto + "</div>";
    });
    lista.innerHTML = texto;
}