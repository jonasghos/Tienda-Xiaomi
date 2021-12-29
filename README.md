# Proyecto de Tienda E-commerce con React

El proyecto simula un ecommerce de una tienda productos de la marca Xioami (Smartphones, auticulares, relojes smart)

## Navegabilidad
La aplicación ofrece una barra de navegación disponible en cualquier vista, con links  a las distintas categorias almacenadas en la base de datos. Cada sección renderiza el componente ItemListContainer con su respectiva catID. 

## ItemLitsContainer - Item 
El componente ItemList renderiza todos los componentes Items almacenados en la base de datos segun la url llamada, ejemplo /productos (muestro el listado completo de productos).
A su vez cada componente Item ofrece la opción de "Mas Info" para acceder al detalle de cada item, agregar la cantidad de unidades y añadirlas al Carrito tomando en cuenta el stock disponible para cada item, cuando se alcanza el limite de stock el boton de agregar unidades se desabilita para evitar ventas sin stock.

##Cart
El carrito disponible en la barra de navegación inicia con un array vacio y un contador en 0 que aumenta a medida que se vayan ingresando nuevos productos. La vista muestra cada uno de los items ingresado con sus respectivas cantidades, precio unitario y el precio total a su ambien brinda la posibilidad de eliminar parcial el total de los productos ingresados. Tambien muestra un resumen de la compra, indicando la cantidad de productos, el total de la compra y el boton para finalizar la misma. 

## CheckOut View
Esta vista unicamente se habilita cuando desde la seccion Cartview se finaliza la comrpra, si se intenta ingresar manualmente automaticamente la app te redirige al inicio. Una vez finalizada la compra, renderiza el componente /CheckOut donde se validan los datos del usuario que genero la compra, mediante una clase de Bootstrap que verifica que todos los datos esten completos. Al enviar los datos, se ejecuta la función handleSubmit que en primera instancia verifica la disponibilidad de los productos para ver si hay stock de los mismos, si esta todo ok la compra es confirmada mostrando al usuario un mensaje de confirmación con el N° de orden de compra. Y en caso de que algun producto no tenga stock disponible se muestra un mensaje de advertencia donde se indica aquellos productos que no tienen stock.
 
##FireBase (project-1067522100102)
Todos los productos mostrados están cargados en Firebase dentro de la colección "Produtcs". Cada objeto tiene la siguientes propiedades: Name, category, price, url, description, stock y más el ID proporcionado por Firestore. La conexión con la DB fue configurada en el archivo configFirebase.js

