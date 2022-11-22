# Bienvenidos a Siete Fashion Store

## Ecommerce creado como proyecto final del curso de React JS de Coderhouse

Esta app consiste en mostrar el catalogo de productos de "Siete Fashion Store" una marca de ropa fictisia. En la cual puedes navegar por los dintintos productos, filtrarlos por categorias, ver el detalle de cada uno, seleccionar su cantidad, agregarlos al carrito y llenar tus datos para terminar el proceso de compra. Ademas puedes usar el ID de tu copmpra para checar el estatus de la misma.

#### [En este enlace puedes ver la app en funcionamiento]()

## Librerias utilizadas

- [Firebase](https://firebase.google.com/): De Firebase se uso especificamente _**Firestore Database**_ como base de datos para almacenar la info de cada producto, como nombre, categoria, detalles, imagen, precio, stock. Información que luego se utilizo para renderizar en el DOM y darel al usuario la info del catalogo de productos y de cada producto que seleccionaba para su compra. Ademas se utilizo como base de datos para cada orden del usuario, almacenando la info de cada comprador como su email, dirección de envio, nombre y telefono. Ademas de los productos comprados. Igualmente, se le porporciono al usuario el ID de su orden mediante Firestore para que pudiera luego dentro de la app ver el estatus de su compra, el cual es actualizado desde Firestore.
- [React Icons](https://react-icons.github.io/react-icons/): Esta libreria se utilizo con el proposito de una manera facil e intuitiva, agregar el icono del carrito de compras
- [React Router DOM](https://reactrouter.com/en/main): Con React Router se crearon todas las rutas necesarias para la app, renderizando los componentes necesarios en cada una. También se utilizo el elemento _**"Link"**_ para permitir al usuario navegar a las distintas rutas de la app. Ademas se utilizo el hook **_useParams_** para obtener el dynamic params de la URL del componente en el cual se estuviera situado para usarla como apoyo para filtrar por categorias
- [React Spinners](https://www.npmjs.com/package/react-spinners): con React Spinners se utilizo un spinner de su colección para mostrar al usuario un elemento de carga mientras se obtiene la data de Firestore y se renderiza en el DOM.

## ¿Qué hice con React JS?

- **Cración de la app**: Se utilizo el comando `create-react-app` para la creación de la app
- **Componentes**: Se realizo la app de manera completamente modular, fraccionandola en distintos componentes. Haciendo componentes contenedores los cuales contenian la logica en Js necesaria para los componentes de presentación los cuales renderizaban la data en el DOM.

     Cada componente es basado en funciones. En los que lo requerian se utilizo **_Keys_** para identificar los elementos que renderizaban. Se utilizaron **_Props y Children_** para proporcionar data a los componentes que la requerian.

- **Hooks:** Se hizo uso del hook **_useState_** para persistir la información necesaria de cada componente. **_useEffect_** para ejecutar codigo necesario luego del primer renderizado de un componente. **_useContext_** para crear un contexto para el funcionamiento del proceso de compra de la app, con el cual se creo un componente para el contexto, en el que se crearon funciones que realizaban cosas como calcular el total de la compra, la cantidad de productos seleccionados por el usuario, vaciar el carrito, borrar solo un item del carrito, entre otras. Ademas de que en este componente contexto quedaba en su estado almacenado los prpductos selccionados por el usuario.
