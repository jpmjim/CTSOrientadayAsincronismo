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
