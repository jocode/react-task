# React Task

Esta es una aplicación sencilla sobre lista de tareas. Es ideal para empezar trabajar con react y conocer sobre esta librería. 

## Porqué React

- [x] Alto rendimiento
- [x] Ideal para trabajar estados dificiles de manejar con javascript
- [x] Centrada en la lógica de negocio
- [x] Amplia y comunidad activa

## Ventajas

- [x] Vistas declarativas para cada estado
- [x] Virtual DOM (Copia en memoria del DOM del navegador)
- [x] Componentes
- [x] Puede renderizar en servidor y cliente

## Componentes

- [x] API reusable
- [x] Es como crar nuestras propias etiquetas `<Map/>` `<Icon/>`
- [x] HTML + CSS + JS = Componente
- [x] Las etiquetas de html son con minúsculas, y en los componentes de react se usa UpperCase Letter (Primera en Mayúsculas)

> El objetivo de react son interfaces web de usaurios.

## Herramientas relacionadas

* React Native
* React windows
* Next.js
* GraphQL
* Redux
* Flux


## Node JS

Node JS es un intérprete de javascript, permite ejecutar javascript en el sistema operativo.

## Crear una aplicación en react

Para crear una aplicacion en react, podemos usar el comando

* `npm install -g create-react-app`

El parámetro **-g** indica que queremos instalar este modulo de forma global. Si estamos en Linux, no olvidar incluir *sudo* al principio para dar permisos de administrador.

Luego que hemos instalado la dependencia, podemos ejecutar el comando

* `create-react-app myfirstapp`

Y automáticamente se empezará a instalar los módulos necesarios para nuestra aplicación en react. Importante acordarse que debemos ubicarnos en el lugar donde queremos crear el proyecto, sea documentos, el escritorio, etc.

Luego que se ejecute el comando, y se descarguen las dependencias, podemos ejecutar los siguientes comandos dentro del directorio que hemos definido, en mi cado es *myfirstapp*

* `npm start` Inica el servidor de desarrollo
* `npm run build` Genera la aplicación en un archivo estático para producción
* `npm test` Inicia el test de ejecución

con `cd myfirstapp` ingresamos al directorio, y con `npm start` inicia nuestro proyecto en react.

Si accedemos en el navegador a la ruta `localhost:3000`, podremos ver la aplicación en ejecución.

Con `Ctrl + C`, detenemos el servidor, donde está la aplicación

### package.json

Describe el proyecto, donde le indicamos el nombre del proyecto, y los paquetes necesarios para la aplicación que estemos desarrollando.
El package.json se puede alterar

El package-lock.json, no debe tocarse

### node_modules/

Es la carpeta donde se instala las librerías que necesita la aplicación

### public/

Es la carpeta donde se colocan los archivos relacionados con html, imágenes y estilos.

Si hemos creado una aplicación de react usando el comando `create-react-app`, la configuación define un archivo index.html, y dentro de él un div con el id *root*, que es aquí donde corre la aplicación de react.

### manifest.json

Es un archivo para indicarle al navegador información sobre nuestra aplicación

### src/

Es la carpeta donde va el código de react, y archivos css. Se conforma principalmente de archivos javascript, css e imágenes svg, entre otros

### index.js

Este archivo se encarga de arrancar la aplicación.
En react, los datos se almacenan de manera temporal y se hace mediante `registerServiceWorkers`, la aplicación puede seguir funcionando sin necesidad de estar conectado a internet.

Con la línea renderizamos nuestra aplicación en el elemento *root*
```js
ReactDom.render(<Appp/>, document.getElementById('root'));
```

## Pasando propiedades en React

Para pasar parámetros a los componentes, podemos hacerlo mediante los atributos, por ejemplo. Si en mi componente defino **{this.props.titulo}**, en el componente le paso el valor como si fuera ub atributo, de la siguiente manera
`<Component titulo="Mi titulo"/>`

## Estado de la Aplicación 

El estado de la aplicación detalla los datos, o el estado de los datos.

En este caso, hemos cargado los datos desde un archivo json, y lo importamos en el archivo *tasjs.json*.

Pero es necesario incluir estos datos en el estado, para que cuando haya cambios en ellos automáticamente se reflejen en el navegador.

```js
constructor() {
    super();
    this.state = {
        tasks: tasks
    };
    this.handleAddTask = this.handleAddTask.bind(this);
}
```

En el ejemplo anterior, creamos un atributo llamado task, donde le pasamos el listado de tareas que hemos importado en la varianle **task**.

El `handleAddTask`, es un evento que manejamos para agregar tareas. Se agrega en el constructor para indicarle a react que éste método pertenece a ese componente, mediante el método *bind()*, de esta funciona el scope en estos métodos, para poder usar luego la propiedad *this.state* como se muestra en el siguiente fragmento de código.

```js
handleAddTask(task) {
    this.setState({
        // Une el estado actual de las tarea, con una nueva tarea
        tasks: [...this.state.tasks, task]
    });
}
```

Para más detalle ver el archivo [App.js](src/App.js)