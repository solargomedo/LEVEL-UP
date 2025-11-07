# LEVEL-UP React

Tienda LEVEL-UP reconstruida con React y Vite para mantener una sola base de código con routing cliente, componentes reutilizables y los estilos originales del prototipo.

## Scripts
- `npm install` para descargar dependencias.
- `npm run dev` levanta el entorno de desarrollo de Vite.
- `npm run build` genera la versión optimizada en `dist/`.
- `npm run preview` sirve el build de producción localmente.

## Arquitectura
- `src/pages` contiene las vistas (`Home`, `Register`, `PostRegister`).
- `src/components` reúne cabecera, footer, selectores y las tarjetas reutilizables.
- `src/data/sections.js` centraliza las categorías y la configuración de los selectores.
- `public/img` guarda todos los recursos estáticos, accesibles vía `/img/...`.

## Funcionalidades
- Navegación con React Router para simular las tres pantallas originales.
- Selectores que hacen scroll suave hacia cada sección del catálogo.
- Formulario con validaciones (nombre, correo, contraseña y edad) y beneficio automático para correos `@duocuc.cl`.
- Estilos responsivos mantenidos y organizados en `src/index.css`.

## Próximos pasos sugeridos
1. Conectar los datos de `sections.js` a una API o CMS para evitar paths hardcodeados.
2. Reemplazar los `alert` del formulario por un modal o toast más usable.
3. Agregar pruebas unitarias para la lógica de validación y los componentes críticos.
# LEVEL-UP
