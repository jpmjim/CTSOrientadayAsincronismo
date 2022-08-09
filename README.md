# CTSOrientadayAsincronismo
Curso de TypeScript: Programación Orientada a Objetos y Asincronismo

## Configuración
  - Iniciamos proyecto con `npm init -y`
  - Instalamos typescript con `npm install -D typescript`
  - Verificamos typescript `npx tsc --version`
  - Instalamos ts-node  `npm install -D ts-node`
  - Preconfig de tsconfig.json `npx tsc --init`
  - Generamos nuestro archivo de gitignore en [gitignore.io](https://www.toptal.com/developers/gitignore)
  - Nuestro archivo **.editorconfig**

## Class
  - JavaScript es un lenguaje orientado a objetos, pero está basado en prototipos.
  - Las clases son una sintaxis más amigable para trabajar con prototipos, las clases internamente son prototipos.
  - La utilizamos para construir instancias de objetos, es como un molde para crear cosas.
  - Es una buena práctica inicializar las propiedades que coloquemos en nuestra clase, ya sea por fuera o dentro de nuestro constructor.

## Métodos  
  Describen el comportamiento de los objetos.

  - Métodos son funciones que se pueden llamar desde un objeto.
  - Métodos son una forma de encapsular el código que se repite.
  - Métodos son una forma de agregar funcionalidad a nuestros objetos.
  - Métodos son una forma de agregar funcionalidad a nuestros objetos.
  ```typescript
  class nameClass {
		constructor (parameters) { statements }

		methodName (parameters: dataTypes): dataType { statements }
  }
  ```

## Acceso público
  Esto quiere decir que podemos acceder a las propiedades y métodos del objeto desde el exterior.

  ### Public
  Por defecto, todas las propiedades y métodos son públicos pero si queremos aclarar en nuestro código el alcance de los mismos podemos utilizar la palabra reservada public.
  ```typescript
  class nameClass {
    constructor (parameters) { statements }
    public propertyName: dataType = initialValue;
    public methodName (parameters: dataTypes): dataType { statements }
  }
  ```
  ### Desventajas del alcance público
  La desventaja que tenemos al tener una propiedad o método con alcance público es que estás pueden ser modificables desde fuera de la clase.

## Acceso privado
  Podemos proteger nuestras propiedades y métodos para que nos sean accedidos y modificados por fuera de clase.
  
  ### Private
  Con esta palabra reservada private estamos restringiendo el acceso de nuestros parámetros y métodos, solo podrán ser accedidos o modificados dentro de la clase.
  ```typescript
  class nameClass {
    constructor (parameters) { statements }
    private propertyName: dataType = initialValue;
    private methodName (parameters: dataTypes): dataType { statements }
  }
  ```

  ### [Private class fields](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
  A desde hace muy poco JavaScript tiene incorporado la capacidad de poder limitar el alcance de los métodos y propiedades utilizando #. Funciona igual que private, solo que # es nativo de JavaScript y realmente limita el alcance.
  ```typescript
  class nameClass {
    constructor (parameters) { statements }
    #propertyName: dataType = initialValue;
    #methodName (parameters: dataTypes): dataType { statements }
  }
  ```
