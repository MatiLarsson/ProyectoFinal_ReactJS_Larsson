## Proyecto final para el curso de React JS de Coder House

### Resumen del proyecto

Se elige como temática la implementacián de una tienda virtual de latas de cervezas. Todos los productos se venden en packs de 6 latas. Se ofrecen cuatro variedades/categorías de cervezas: rubias, negras, rojas, y de trigo.
La tienda cuenta con la posibilidad de:

- Ver los productos en conjunto o filtrados por categoría.
- Ver en detalle algún producto en particular.
- Añadir al carrito un determinado producto en la cantidad indicada en su contador, tanto en la tienda principal como en el detalle del producto.
- Ver los productos dentro del carrito y eliminar alguno si así se lo desea, vaciar el carrito completo, o proceder al checkout en donde se solicitarán los datos personales del comprador.
- Al realizar el checkout se entregará un número de órden generado aleatoriamente por Firebase, con el cual el cliente podrá realizar el seguimiento del estado de su pedido.

### Librerías utilizadas

#### Obligatorias/básicas (solicitadas por consignas del curso)

<u>react 17+</u>

<u>react-dom</u>

<u>react-scripts</u>

<u>react-router-dom:</u> Utilizada para el enrutamiento dentro del virtual DOM.

<u>firebase:</u> Utilizada como base de datos para leer la lista de productos y su información, y para almacenar y leer las órdenes de compra.



#### Incorporadas en adición a las pedidas en clase

<u>styled-components:</u> Utilizada para estilar los botones de múltiples lugares en la página con el componente Button.

<u>react-toastify:</u> Utilizada para dar una confirmación al usuario al agregar producto/s a su carrito, y para notificar el éxito o fracaso en la carga de la información proveniente del servidor de Firebase.

<u>react-bootstrap-icons:</u> Utilizada para crear el logo del "cart widget" y el "trash icon" en la sección "carrito" para el botón de eliminar productos.

<u>lottie-react:</u> Utilizada para incorporar animaciones para los loaders.

<u>node-sass</u> Utilizada para estilar todo el proyecto.

### Instrucciones para su instalación

1. git clone https://github.com/MatiLarsson/ProyectoFinal_ReactJS_Larsson
2. cd ProyectoFinal_ReactJS_Larsson
3. npm install
4. npm start

### Link al deploy de la app en Vercel:

https://proyecto-final-react-js-larsson.vercel.app/

### Link al vídeo con demostración del funcionamiento de la app:

https://screenrec.com/share/W1PBqtjXmD

