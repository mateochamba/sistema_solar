Este proyecto es una maqueta digital e interactiva del sistema solar, elaborada con tecnologías web como HTML, CSS y JavaScript. Permite visualizar los planetas orbitando alrededor del sol en una animación continua.

sistema_solar/
├── index.html          # Página principal con la estructura del sistema solar
├── estilo.css          # Estilos para la animación y apariencia del sistema solar
├── script.js           # Lógica para animación o interacción (si aplica)
└── README.md           # Documentación del proyecto


Sol y Planetas: Se crean con elementos div, cada uno representando un planeta con una clase distinta.

Órbitas: Se simulan con bordes circulares animados usando transform: rotate(...) y animation.

Escalado: Las distancias y tamaños están ajustados para que se vean proporcionales y visibles en pantalla (no son escalas reales).

Estilo: El body tiene fondo oscuro para simular el espacio; los planetas tienen colores y tamaños distintos con animaciones independientes.

Responsividad: El diseño puede adaptarse a diferentes resoluciones con viewport y medidas relativas.
