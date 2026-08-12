# Roadmap de Features: MVP Fleur de Vie

Este documento define la ruta estricta de desarrollo para el MVP. Los agentes de IA deben seguir esta lista de forma secuencial. **No se debe avanzar al siguiente Feature hasta que el actual esté testeado y aprobado por el líder técnico.**

## Feature 1: Inicialización, Splash y Onboarding (Pantallas 00-02)

**Objetivo:** Configurar la base del proyecto y la primera impresión del usuario.

* **Paso 1.1:** Inicializar Next.js (App Router) con Tailwind CSS y soporte PWA.
* **Paso 1.2:** Crear la estructura de carpetas (`/components`, `/app`, `/mocks`).
* **Paso 1.3:** Crear el archivo `/mocks/teaData.json` con los datos mockeados.
* **Paso 1.4:** Desarrollar **Pantalla 00 (Splash)** con el logo y color primario (Verde Oscuro).
* **Paso 1.5:** Desarrollar **Pantalla 02 (Onboarding - Elegí tu experiencia)** con 3 botones de segmentación (Capullos, Blends, Petit). El botón de "Blends de Autor" debe ser el único habilitado para navegar al siguiente flujo.

## Feature 2: Interfaz del Motor del Test (Pantallas 16-19)

**Objetivo:** Construir la estructura visual del cuestionario paso a paso (Step Wizard) sin la lógica compleja todavía.

* **Paso 2.1:** Crear el layout base del Wizard con un botón de retroceso (Back) y un indicador de progreso.
* **Paso 2.2:** Maquetar la **Pantalla 16 (¿Qué buscás hoy?)** con opciones tipo tarjeta.
* **Paso 2.3:** Maquetar la **Pantalla 17 (¿Con cafeína?)**.
* **Paso 2.4:** Maquetar la **Pantalla 18 (¿Qué sabores disfrutás?)**.
* **Paso 2.5:** Maquetar la **Pantalla 19 (¿Qué intensidad preferís?)**.
* **Nota Técnica:** En este punto, el componente solo debe poder avanzar y retroceder entre pasos guardando el estado localmente, sin hacer match de datos aún.

## Feature 3: Lógica de Estado y Filtrado (El Cerebro)

**Objetivo:** Conectar las respuestas del usuario con el catálogo para determinar el té ideal.

* **Paso 3.1:** Crear un hook o contexto (`useTeaTest`) para almacenar las 4 selecciones del usuario.
* **Paso 3.2:** Importar `teaData.json` en el flujo.
* **Paso 3.3:** Escribir la función de coincidencia (Matching Algorithm). Debe comparar los `tags` de los productos en el JSON con el array de respuestas del usuario. El producto con mayor cantidad de coincidencias será el ganador.

## Feature 4: Pantalla de Resultados y Conversión Directa (Pantallas 21+)

**Objetivo:** Mostrar la recomendación final y enviar al usuario al e-commerce a comprar.

* **Paso 4.1:** Desarrollar la **Pantalla 21 (Resultado)**. Debe mostrar la imagen, nombre, precio y tags del producto ganador calculated en el Feature 3.
* **Paso 4.2:** Implementar el Call to Action (CTA). Crear el botón "Ver en tienda" que actúe como un enlace directo (`<a target="_blank">`) utilizando el campo `buy_url` del producto.
* **Paso 4.3:** Asegurar que el diseño coincida con el estilo de tarjeta con bordes redondeados y tipografías corporativas (Lora/Open Sans).

---

**Regla de Oro para el Agente:** Siempre avisa cuando termines un Feature y espera instrucciones antes de empezar el siguiente.
