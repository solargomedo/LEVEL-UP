# Level-UP Store

## Descripción del Proyecto

Level-UP es una tienda online orientada al mundo gamer, donde los usuarios pueden explorar, comprar y gestionar productos relacionados con videojuegos, accesorios y ropa gamer.

El proyecto fue desarrollado como parte de la Evaluación Final Transversal de la asignatura Desarrollo Fullstack II.

---

## Objetivo

Desarrollar una aplicación web fullstack que permita:

- Gestionar productos
- Registrar y autenticar usuarios
- Realizar operaciones CRUD
- Integrar frontend y backend mediante API REST
- Implementar seguridad con JWT

---

## Tecnologías Utilizadas

### Frontend
- React
- HTML5
- CSS3
- Bootstrap
- JavaScript
- Axios

### Backend
- Spring Boot
- Java
- JPA 
- MySQL 
- Swagger
- Spring Security
- JWT

---

## Funcionalidades Principales

### Usuarios
- Registro de usuarios
- Inicio de sesión
- Gestión de roles (USER / ADMIN)

### Productos
- Listar productos
- Crear productos
- Editar productos
- Eliminar productos

### Seguridad
- Autenticación con JWT
- Protección de rutas según rol
- Manejo seguro de sesiones

---

## Estructura del Proyecto

### Frontend
/src
/components
/pages
/services
/styles
App.jsx
index.js


### Backend


/src/main/java
/controller
/service
/repository
/model
/security


---

## Instalación y Ejecución

### Frontend

npm install
npm start

Backend
./mvnw spring-boot:run

Pruebas Unitarias

Las pruebas fueron realizadas con

Jasmine

Karma

## Se probaron:

- Componentes del frontend

- Validación de formularios

- Documentación

## El proyecto incluye

- Documento ERS
  
- login

- Manual de Usuario

- Documentación de API con Swagger

- Documento de integración Frontend - Backend

*** Begin Patch
*** Add File: docs/ERS_MANUAL.md
# DOCUMENTACIÓN: ERS y Manual de Usuario

Fecha: 2025-12-11
Proyecto: LEVEL-UP

---

## 1. Resumen

Este documento contiene la Especificación de Requisitos del Sistema (ERS) y el Manual de Usuario para la aplicación frontend "LEVEL-UP" — una tienda de productos reconstruida con React y Vite.

**Propósito:** describir los requisitos funcionales y no funcionales necesarios para la entrega del producto y proporcionar instrucciones claras para instalar y usar la aplicación.

---

## 2. Alcance

+La aplicación es una tienda front-end que muestra secciones de productos, permite filtrar/seleccionar categorías y contiene un flujo de registro de usuarios. Actualmente es una SPA (Single Page Application) construida con React + Vite; los datos de catálogo se cargan desde archivos locales (`src/data/sections.js` y recursos estáticos en `public/img`).

---

## 3. Actores

- Usuario visitante: navega el catálogo y visualiza productos.
- Usuario registrado: (en esta versión, el registro es sólo client-side sin persistencia en servidor).
- Desarrollador: instala, ejecuta y extiende la aplicación.

---

## 4. Requisitos funcionales (RF)

RF-1: Mostrar catálogo de productos divididos por secciones.

RF-2: Permitir seleccionar una categoría desde los selectores (componente `CategorySelects`) y desplazar/filtrar la vista hacia la sección correspondiente.

RF-3: Mostrar componentes reutilizables de producto en `ProductSection` y `Storefront`.

+RF-4: Proveer una página de `Register` con validaciones básicas (nombre, correo, contraseña, edad) y comportamiento específico (p. ej. beneficio para correos `@duocuc.cl`).

RF-5: Soportar navegación entre vistas (`Home`, `Register`, `PostRegister`) mediante `react-router-dom`.

RF-6: Cargar recursos estáticos (imágenes) desde `public/img`.

RF-7: Scripts de desarrollo/producción: `npm run dev`, `npm run build`, `npm run preview`.

---

## 5. Requisitos no funcionales (RNF)

RNF-1: Rendimiento: la UI debe responder en < 200 ms para interacciones de UI típicas en entorno de desarrollo local.

RNF-2: Compatibilidad: soportar los navegadores modernos (Chrome, Edge, Firefox) en su última versión.

RNF-3: Seguridad: no hay autenticación server-side en esta versión; el registro es client-only y no debe considerarse seguro para producción.

RNF-4: Mantenibilidad: componente y estructura modular (carpeta `src/components`, `src/pages`, `src/data`).

---

## 6. Requisitos de datos y esquema (modelo mínimo esperado)

Los productos pueden representarse con el siguiente esquema mínimo (JSON):

```
{
  "id": "string|number",
  "name": "string",
  "description": "string",
  "price": number,
  "category": "string",
  "imagePath": "/img/..",
  "stock": number (opcional)
}
```

Los datos actuales provienen de `src/data/sections.js` (estructura en el código). Recomendación: usar una API o CMS en próximas integraciones.

---

## 7. Casos de uso principales

- CU-1: Como visitante puedo ver las secciones del catálogo y navegar entre ellas.
- CU-2: Como visitante puedo usar los selectores de categoría para centrar la vista en una sección específica.
- CU-3: Como usuario puedo acceder al formulario de registro y completar los campos requeridos.

---

## 8. Dependencias

- `react` ^19
- `react-dom` ^19
- `react-router-dom` ^7
- `vite` y plugin `@vitejs/plugin-react`

Los scripts son los definidos en `package.json`:

- `npm run dev` — servidor de desarrollo (Vite).
- `npm run build` — genera la versión de producción en `dist/`.
- `npm run preview` — sirve el build localmente para revisión.

---

## 9. Limitaciones y supuestos

- No hay backend ni persistencia en esta versión: el registro es client-side y no crea usuarios reales.
- Las imágenes y recursos están en `public/img` y deben mantenerse cuando se despliegue.
- Se asume Node.js instalado en la máquina de desarrollo.

---

## 10. Criterios de aceptación (QA)

- La app se levanta con `npm run dev` sin errores de compilación.
- Los selectores llevan a la sección correcta (scroll suave) al hacer clic.
- El formulario de registro valida campos requeridos y muestra mensajes apropiados.
- El build se genera con `npm run build` y `npm run preview` sirve la app.

---

# Manual de Usuario

Este manual está orientado tanto a usuarios finales (uso de la interfaz) como a desarrolladores que quieran ejecutar localmente la aplicación.

## Requisitos previos

- Node.js (recomendado v18+).
- npm (incluido con Node.js) o pnpm/yarn si prefiere.

## Instalación y ejecución (Desarrollador)

1. Clonar el repositorio:

```powershell
git clone <repo-url>
cd LEVEL-UP
```

2. Instalar dependencias:

```powershell
+npm install
```

3. Ejecutar en modo desarrollo:

```powershell
+npm run dev
```

+Abra `http://localhost:5173` (Vite mostrará la URL exacta en consola).

+4. Construir producción (opcional):

```powershell
+npm run build
npm run preview
```

## Estructura principal de la aplicación (para el usuario técnico)

- `src/pages` — vistas principales: `Home.jsx`, `Register.jsx`, `PostRegister.jsx`.
- `src/components` — componentes reutilizables: `Header.jsx`, `Footer.jsx`, `CategorySelects.jsx`, `ProductSection.jsx`, `Storefront.jsx`.
- `src/data/sections.js` — datos y configuración de secciones/categorías.
- `public/img` — recursos estáticos (imágenes del catálogo).

## Guía rápida de uso (Usuario final)

1. Página principal (`Home`): muestra el catálogo dividido por secciones.

2. Selectores de categoría (`CategorySelects`): haga clic en una categoría para desplazarse a la sección correspondiente.

3. Registro de usuario (`Register`): complete Nombre, Correo, Contraseña y Edad. Mensajes de validación aparecen al enviar si hay errores.

4. PostRegister: pantalla de confirmación que aparece después del registro (simulada en cliente).

## Cómo registrar nuevo usuario (paso a paso)

1. Ir a la ruta `/register` (botón o enlace desde la cabecera si está disponible).
2. Rellenar el formulario con los datos requeridos.
3. Presionar el botón de enviar. Si los datos son válidos, se mostrará la vista `PostRegister`.

> Nota: El registro no guarda datos en servidor. Para persistencia, conectar con una API o base de datos.

## Cómo añadir o modificar productos (para desarrolladores)

1. Editar `src/data/sections.js` para ajustar secciones y productos.
2. Añadir imágenes en `public/img` y usar la ruta relativa en el objeto `imagePath`.
3. Reiniciar `npm run dev` si es necesario (Vite aplica hot-reload para la mayoría de cambios).

## Buenas prácticas y recomendaciones

- Para producción, usar una API backend para manejar usuarios y catálogo.
- Reemplazar los `alert` y validaciones por componentes UI (modals/toasts) y tests.
- Añadir linters y pruebas unitarias para componentes críticos.

## Contacto / Soporte

Para preguntas sobre la implementación o contribuciones, abra un issue en el repositorio o contacte al desarrollador responsable en la rama `feature/Sol`.

---

Fin de la documentación.

*** End Patch

## Integrantes

Solange Argomedo

Cristian Pizarro

