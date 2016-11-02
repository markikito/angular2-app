Angular 2 Primeros Pasos
=========================

##Instalación y configuración de TypeScript

```
npm install -g typescript
```

*Ayudar e instalar definiciones de TypeScript:*

```
npm install -g typings
```

##Para trabajar instalaremos un IDE.

[Code Visual Studio](https://code.visualstudio.com/download )

##Ayuda para la generación del esqueleto

Esto lo que hace es que te autogenera la estrucutra.

[Angular CLI](https://cli.angular.io/)

```
npm install -g angular-cli
```

[Documentación](https://github.com/angular/angular-cli)

##Elementos principales de una aplicación angular

- Componentes
- Nos van ayudar a controlar secciones de nuestros HTML, que son nuestras vistas. **Son sencillamente clases, tienen propiedades y métodos que nos van a permitir modificar la vista.** 

	```
	export class BuscarComponent{
		texto: string;
		buscar(texto: string){
		}
	}
	```

	*** Es una clase export porque vamos a poder exportar nuestro componente ***

	Una aplicación angular necesita por lo menos 1 componente. Que es el componente raíz.

- Enrutamientos
- Para mostrar diferentes areas en nuestra aplicación dependiendo de la url que el usuario utilice.
- Esto nos va a servir para:
	- Compartir la dirección URL.
	- Tenerlo en marcadores.
	- Posibilidades de hacer un refresh.

- Directivas
- Sirven para hacer cambios en el DOM.
- Hay directivas por defecto como: **\*ngFor** y **\*ngIf** 
- Podemos crear nuestras propias directivas, pasandoles un **@Directive** y un Metada (*objeto jSon de configuracion*).
- Hay dos tipos de directivas:
	- Estructurales:
		- Se utilizan para crear, remover y/o remplazar elementos del DOM. ( **\*ngIf, \*ngFor, \*ngSwitch** )
	- Atributos:
		- Se utilizan para cambiar la apariencia o los atributos de un elemento del DOM que ya existe. ( **ngStyle, ngClass, ngModel** )

##Estrucura básica de una aplicación Angular2

```
1 app
	1.1 app.component.ts
	1.2 main.ts
2 index.html
3 package.json
4 style.css
5 systemjs.config.js
6 tsconfig.json
7 typings.json
```
*La extensión ts: significa TypeScript*

1. Directorio

	1.1 Es nuestro componente raíz.  
	1.2 Inicializa nuestra aplicación con el componente raíz.
1. Nos encontramos con 3 secciones.
	- Polyfills son .js que nos ayudan con los navegadores antiguos.
	- Configuración de SystemJs, que nos ayuda a cargar nuestros modulos y librerías.
	- Al final nuestro body, que contiene el tag de nuestra aplicaciones.
1. Cargamos las dependencias de nuestra aplicación y dentro de "devDependecies", son las dependencias que necesitamos de desarrollo. 
1. Estilos.
1. Esto lo que va hacer es que cuando pongamos **@llamalox** sepa donde tiene que ir a buscarlo.
1. Opciónes de TypeScripts.
1. Dependencias que van a ayudar al compilador de TypeScripts.

##Correr la aplicación
- Vamos a la carpeta donde tengamos nuestro proyecto, a la altura del fichero **package.json**.
- Nos descargamos las dependencias que tenemos descritas en package.json
```
npm install
```
- Es nos creara dos carpetas: **node_modules** y **typings**

##Creamos nuestro primer componente:

**Convención:** llamalox.component.ts

Para crear nuestro componente, primero tenemos que decirle angular que queremos importar un componente.
Luego debemos meter nuestro decorador/función y le pasaremos un objeto por argumento llamado Metadata.(json)
```
import { Component } form '@angular/core'
@Component({
	selector: 'estudiantes',
	template: '<h3>Lista de Estudiantes</h3>'
})
```

**selector:** es simplemente una etiqueta html, que lo que va hacer es que cuando la encontremos va a remplazar el contenido de dicha etiqueta por lo que tenemos en nuestro template.

Para que otros componentes puedan usar nuestros componentes hay que definir la clase como **export**;
```
export class EstudiantesComponent {}
```

Para hacer uso de ella unicamente debemos importarla:
```
import { EstudiantesComponent } from './estudiantes.component';
```
**Importante:** Debemos definir la ruta exacta de nuestro fichero.

*Nota: La diferencias entre un **Component** y una **Directive** es que la directive **no** tiene plantilla.*


##¿Que es un servicio?
Un servicio es una clase que va a tener una funcionalidad definida. (por ejemplo, leer datos de una API REST) Desde el componente debemos especificar al "provider" nuestro servicio.







