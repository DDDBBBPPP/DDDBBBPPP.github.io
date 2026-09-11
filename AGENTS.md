# Portfolio de David Bellón Payer

## Objetivo

Crear un portfolio profesional para buscar empleo como desarrollador
frontend/full-stack junior.

Stack actual: Angular 22, TypeScript, SCSS y componentes standalone.
Sin backend en la primera versión.
Repositorio: DDDBBBPPP/DDDBBBPPP.github.io.
Despliegue previsto: GitHub Pages mediante GitHub Actions.

## Forma de trabajar

- Responde en español.
- Trabaja paso a paso, con cambios pequeños y fáciles de revisar.
- Trabaja una sola fase por turno y espera después.
- Antes de editar, explica brevemente qué vas a cambiar, por qué y qué
  debería ver el usuario al terminar.
- El usuario autoriza las implementaciones cuando las pide expresamente.
- Si el usuario pide analizar o explicar, no modifiques archivos.
- Lee los archivos reales antes de proponer cambios.
- No inventes archivos existentes, propiedades, funcionalidades ni resultados.
- No hagas refactors ajenos a la tarea.
- Conserva los nombres y el estilo existentes salvo motivo concreto.
- Conserva las clases sencillas y el nesting SCSS con selectores de clase
  con puntos.
- Prioriza soluciones sencillas, mantenibles y comprensibles.
- Señala errores de planteamiento y expresa incertidumbre cuando corresponda.
- Al terminar un paso, resume los cambios y su comprobación, y espera
  antes de pasar a otra funcionalidad.
- No instales dependencias sin acordarlo previamente con el usuario.
- Comprueba compatibilidad con nuestra versión de Angular al elegir librerías.

## Diseño acordado

- Una página principal dividida en componentes especializados.
- Navegación: Perfil, Trayectoria, Proyectos y Stack.
- Marca visible: David Bellón.
- Cabecera no sticky.
- Hero con texto a la izquierda y fotografía a la derecha en escritorio.
- En móvil, una columna y menú lateral desde la izquierda, con la
  hamburguesa a la izquierda.
- Selector ES/EN visible también en móvil.
- Tema claro beige y crema, con texto marrón oscuro.
- Tema oscuro marrón tierra, sin negro puro.
- Acentos terracota o cobre.
- Proyectos como sección protagonista.
- Trayectoria agrupa experiencia y formación.
- Stack agrupa tecnologías y aprendizaje actual.
- Contacto integrado en el footer.
- Modales breves para información adicional.
- Evita efectos excesivos, animaciones constantes y scroll horizontal.

## Código y contenido

- Crea componentes y carpetas cuando sean necesarios.
- Evita abstracciones prematuras y componentes con muchas opciones.
- Separa datos, presentación y estado compartido.
- Utiliza interfaces tipadas e input()/output() cuando corresponda.
- Usa signals cuando aporten claridad.
- Reserva servicios para lógica o estado compartido real.
- Utiliza variables CSS semánticas para colores, superficies y temas.
- Ya existe un ThemeService para claro/oscuro con persistencia.
- Prepara los textos para español e inglés desde el principio.
- Ya usamos ngx-translate con JSON español/inglés.
- Añade todo texto traducible nuevo a public/i18n/es.json y public/i18n/en.json.
- No guardes traducciones ni contenido editorial en environment.ts.
- No inventes experiencia, fechas, tecnologías dominadas o enlaces.
- Pregunta por la información profesional que falte.
- Distingue funcionalidades implementadas de ideas futuras.
- No incluyas secretos ni credenciales en el frontend o repositorio.

## Responsive y accesibilidad

- Diseña cada componente para escritorio, tablet y móvil desde el inicio.
- Comprueba aproximadamente 360, 768, 1024 y 1440 píxeles.
- Usa HTML semántico, foco visible y contraste suficiente.
- Usa botones para acciones y enlaces para navegación.
- No dependas del hover para información importante.
- Respeta prefers-reduced-motion.
- Los diálogos y el menú móvil deben gestionar teclado, foco y cierre.
- Explica brevemente cómo se adapta cada sección.

## Validación y Git

- Usa la configuración existente de Prettier.
- npm start inicia el servidor local.
- npm run build comprueba la compilación de producción.
- Ejecuta las comprobaciones pertinentes al cambio.
- No afirmes que algo funciona si no lo has comprobado.
- Revisa git status y los cambios antes de preparar un commit.
- No incluyas node_modules, dist ni secretos.
- No hagas commit, push o despliegue salvo petición del usuario.
- No descartes cambios del usuario ni uses comandos destructivos.
