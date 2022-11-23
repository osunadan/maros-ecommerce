# Bienvenidos a Siete Fashion Store

## E-commerce creado como proyecto final del curso de React JS de Coderhouse

Este proyecto consiste en mostrar el catálogo de productos de "Siete Fashion Store", una marca de ropa ficticia. Con el cual se agregaron distintas funcionalidades con las que se pudiera aprovechar los recursos de React aprendidos durante el curso

#### [En este enlace puedes ver la app en funcionamiento]()

## Librerías utilizadas

- [Firebase](https://firebase.google.com/): De Firebase se usó específicamente _**Firestore Database**_ como base de datos para almacenar la info de cada producto, como nombre, categoría, detalles, imagen, precio, stock. Información que luego se utilizó para renderizar en el DOM y darle al usuario la info del catálogo de productos y de cada producto que seleccionaba para su compra. Además, se utilizó como base de datos para cada orden del usuario, almacenando la info de cada comprador como su email, dirección de envió, nombre y teléfono. Además de los productos comprados. Igualmente, se le proporcionó al usuario el ID de su orden mediante Firestore para que pudiera luego dentro de la app ver el estatus de su compra, el cual es actualizado desde Firestore.
- [React Icons](https://react-icons.github.io/react-icons/): Esta librería se utilizó con el propósito de agregar de una manera fácil e intuitiva el icono del carrito de compras
- [React Router DOM](https://reactrouter.com/en/main): Con React Router se crearon todas las rutas necesarias para la app, renderizando los componentes necesarios en cada una. También se utilizó el elemento _**"Link"**_ para permitir al usuario navegar a las distintas rutas de la app. Además, se utilizó el hook **_useParams_** para obtener el dynamic params de la URL del componente en el cual se estuviera situado para usarla como apoyo para filtrar por categorías
- [React Spinners](https://www.npmjs.com/package/react-spinners): Con React Spinners se utilizó un spinner de su colección para mostrar al usuario un elemento de carga mientras se obtiene la data de Firestore y se renderiza en el DOM.

## Funcionalidades de la app

1. En el home, encontrarás un catálogo de productos, en este caso prendas de ropa, los cuales puedes filtrar por las categorías de playeras, chamarras y sweaters. Dichas categorías son dinámicas, si en la base de datos de Firestore se agregan nuevas categorías, se verán reflejadas en la botonera donde salen las categorías
2. Puedes dar clic en cada uno de los productos y ver detalles de dicha prenda, como su título, descripción, precio y además un contador donde puedes seleccionar la cantidad del producto que el usuario desee comprar. También un botón en donde podrás agregar al carrito de compras dicho producto con la cantidad escogida.
3. Al agregar un producto al carrito, te sale un enlace para ir al carrito en el detalle del producto, también se puede ir desde el icono de carrito de compras en la parte superior derecha (El cual también te muestra la cantidad de productos que seleccionaste). En él verás a detalle los elementos que seleccionaste para comprar, como la foto del producto, título y cantidad. También tienes enlaces para eliminar solo un elemento del carrito o eliminarlos todos. También el total del precio de los productos seleccionados y un enlace para ir a completar la compra
4. Al ir al checkout de la compra te encuentras con un formulario en donde puedes poner tus datos para completar tu orden de compra. Dicho formulario tiene una validación en donde debes poner tu correo dos veces, si no coincide no te dejará enviar los datos. Igual, si los demás campos están vacíos, tampoco te deja hacer el envío. También puedes visualizar los productos que estás comprando, con su título, cantidad y total.
5. Al enviar tus datos te sale un mensaje donde se le proporciona al usuario el ID de su compra, el cual puede ingresar en la sección de "Status", la cual se encuentra en la parte superior izquierda, donde está un formulario donde al ingresar el ID te da información de tu pedido.
6. Como función adicional está el que si vas al carrito de compras y está vacío, te muestra un mensaje invitando al usuario al catálogo para seleccionar productos

## ¿Cómo se lograron estas funcionalidades?

Dichas funcionalidades se lograron aplicando, principalmente, las siguientes herramientas:

- **Cración de la app**: Se utilizo el comando `create-react-app` para la creación de la app
- **Componentes**: Se realizó la app de manera completamente modular, fraccionándola en distintos componentes. Haciendo componentes contenedores los cuales contenían la lógica en Js necesaria para los componentes de presentación, los cuales renderizaban la data en el DOM.

     Cada componente es basado en funciones. En los que lo requerían se utilizó **_Keys_** para identificar los elementos que renderizaban. Se utilizaron **_Props y Children_** para proporcionar data a los componentes que lo requerían.

- **Hooks:** Se hizo uso del hook **_useState_** para persistir la información necesaria de cada componente. **_useEffect_** para ejecutar código necesario luego del primer renderizado de un componente. **_useContext_** para crear un contexto para el funcionamiento del proceso de compra de la app, con el cual se creó un componente para el contexto, en el que se crearon funciones que realizaban cosas como calcular el total de la compra, la cantidad de productos seleccionados por el usuario, vaciar el carrito, borrar solo un ítem del carrito, entre otras. Además de que en este componente contexto quedaba en su estado almacenado los productos seleccionados por el usuario.
- **Uso de JavaScript**: Se hicieron uso de métodos como filter, find, some, map, splice, forEach, entre otros, además del operador spread, ternarios, sugar syntax, estrategias de rénder como el if con return temprano, entre otras cosas.
- **Eventos:** Se hizo uso de los eventos para obtener el input del usuario en los formularios, contador, entre otras cosas.
- Además del uso de librerías con sus distintas funcionalidades que ya se describió en la sección de Librerías utilizadas.

Muchas gracias por pasarte por mi primera App en React, agradezco al profe Eric Wajnrajch y los tutores del curso por ayudarme a comprender y utilizar React JS de una manera efectiva.
