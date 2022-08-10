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

## Constructor
  Es el constructor en el que construimos la instancia y mandamos los parámetros por defecto por el cual queremos que se inicialice esa instancia a un objeto.
  ```typescript
  class nameClass {
    constructor (parameters) { statements }
    public propertyName: dataType = initialValue;
    public methodName (parameters: dataTypes): dataType { statements }
  }
  ```
  **Sintaxis anterior**
  ```typescript
  class ClassName {
		property1: dataType;
		propertyN: dataType;
		constructor (property1: dataType, propertyN: dataType) {
			this.proterty1 = property1;
			this.protertyN = propertyN;
		}
  }
  ```
  **Sintaxis actual**
  
  De esta forma estaríamos definiendo y asignando las propiedades de una manera corta.

  Cabe destacar que debemos de aclarar o ser explícitos con el alcance de las propiedades, caso contario no podremos usar esta característica de TypeScript además que no podremos usar esa propiedad a lo largo de la clase, ya que su scope solo se verá limitado al constructor.
  ```typescript
  class ClassName {
		constructor (
			scope property1: dataType, 
			scope propertyN: dataType
		) {
			statements
		}
  }
  ```
  **Valores por defecto**
  
  Al tener valores por defecto, al momento de crear una instancia de esa clase ya no es obligatorio pasar ese parámetro que tiene un valor por defecto.
  ```typescript
  class ClassName {
		constructor (
			scope property1: dataType = value, 
			scope propertyN: dataType = value
		) {
			statements
		}
  }
  ```

## Getters
  Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

  Lo podemos acceder como si fuese una propiedad más de la instancia.

  Por definición, todos los getters tienen que retornar algo.
  ```typescript
  class ClassName {
		constructor () {
			statements
		}

		get methodName () {
      statements
      return something;
		}
  }
  ```
  [Creación de una función de JavaScript para calcular si es un año bisiesto](https://dev.to/nas5w/creating-a-javascript-function-to-calculate-whether-it-s-a-leap-year-2cip)

  ## Setters
  Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

  A set lo podemos usar para tener reglas de modificación para nuestros parámetros.
  ```typescript
  class ClassName {
    constructor () {
      statements
    }
    set methodName (parameters: dataTypes) {
      statements
    }
  }
  ```

## Herencia
  Como su palabra lo dice, las propiedades y métodos de una clase son heredadas por otra para evitar la redundancia de código en nuestro proyector.
  ```typescript
  class ClassName {
    constructor () {
      statements
    }
    public propertyName: dataType = initialValue;
    public methodName (parameters: dataTypes): dataType { statements }
  }
  ```

## Acceso protegido
  Básicamente, es la forma de heredar propiedades y métodos.

  Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.
  ```typescript
  class FatherClass {
    constructor (
      protected property1: dataType,
      propertyN: dataType
    ) {
      statemenst
    }
  }

  class ChildClass extends FatherClass {
    constructor (properties and Inheritedproperties) {
      super(Inheritedproperties)
      statemenst
    }
  }
  ```

## Static
  Es una forma de heredar propiedades y métodos, pero no se puede heredar de una clase estática.

  Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

  **[Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)**

  ```typescript
  class Math {
    static methodName (parameters: dataTypes): dataType { statements }
  }
  ```
  **Solución**
  ![](https://static.platzi.com/media/user_upload/reto_static-78ba4c7b-a71f-4011-82cf-0b7e13befa5c.jpg)

## Interfaces
  Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos.

  Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

  ### Implements
  Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface.

  Este contrato es tanto como para los parámetros como para los métodos.
  ```typescript
  interface NameInterface {
	  statements
  } 

  class NameClass implements NameInterface {
    constructor (
      propertiesOfInterface
    ) {
      statements
    }

    methodOfInterface (): dataType { statements }
  }
  ```
  [TypeORM](https://github.com/typeorm/typeorm) es una librería que nos permite crear una base de datos con una interfaz de datos.
  ```typescript
  import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
  @Entity()
  export class NameClass {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
  }
  ```

## Clases abstractas
  Las clases abstractas son tan ‘genericas’ que no tiene sentido que sean instanciadas. Usamos la keyword abstract.
  ```typescript
  abstract class NameClass {
    constructor (
      propertiesOfInterface
    ) {
      statements
    }

    abstract methodOfInterface (): dataType { statements }
  }
  ```

## Singleton: constructor privado
  Singleton nos previene crear múltiples instancias de una clase.

  Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.
  ```typescript
  class NameClass {
    private static instance: NameClass;
    constructor (
      propertiesOfInterface
    ) {
      statements
    }

    static getInstance (): NameClass {
      if (!this.instance) {
        this.instance = new NameClass();
      }
      return this.instance;
    }
  }
  ```
