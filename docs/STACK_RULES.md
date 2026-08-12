# Reglas del Stack Tecnológico y Arquitectura (MVP)

## 1. Ecosistema Frontend (MVP Actual)
* [cite_start]**Framework Core:** Next.js (App Router)[cite: 55].
* [cite_start]**Progressive Web App (PWA):** Uso de `next-pwa` para configurar el *manifest* y los *service workers*, permitiendo que el cliente "instale" la app en su pantalla de inicio[cite: 55].
* [cite_start]**Hosting / Deploy:** Vercel, permitiendo un despliegue sin fricción con conexión directa al repositorio de GitHub[cite: 86, 87].
* [cite_start]**Objetivo de Arquitectura:** Priorizar la velocidad pura de desarrollo y el foco en la experiencia visual, sin depender del backend en esta fase inicial[cite: 82, 84].

## 2. Estilos y Diseño de Interfaz
* [cite_start]**Framework CSS:** Tailwind CSS[cite: 56].
* **Directriz de Maquetación:** Implementación rápida orientada a *Mobile First*.
* [cite_start]**Design System:** Replicar con exactitud los colores corporativos y las tipografías definidas en el manual de marca (ej. Lora y Open Sans)[cite: 27, 56].

## 3. Manejo de Datos y Estado (Regla de Oro)
* [cite_start]**Fuente de la Verdad:** Todos los datos del catálogo y las preguntas del Asesor Virtual deben consumirse desde el archivo local `/mocks/teaData.json`[cite: 98].
* [cite_start]**Prohibición de Datos Fijos:** No se deben "hardcodear" textos de productos, precios o lógicas de negocio dentro de los componentes de React[cite: 89].
* [cite_start]**Simulación de API:** Los componentes deben importar el archivo JSON y leerlo estructuradamente, simulando el comportamiento y la latencia de una respuesta obtenida mediante un `fetch()`[cite: 91].

## 4. Preparación para la Integración Futura (Backend)
* [cite_start]**Tecnología del Backend:** Laravel (PHP) con API Resources[cite: 57].
* [cite_start]**Entorno de Servidor:** Dockerizado mediante Laravel Sail junto a MySQL/PostgreSQL[cite: 58].
* [cite_start]**Contrato de Datos:** La estructura del JSON mockeado en el frontend debe ser exactamente igual a la estructura de los endpoints que expondrá Laravel en el futuro[cite: 90].
* [cite_start]**Regla de Transición:** El código frontend debe estar diseñado para que, al momento de integrar el backend real, solo sea necesario cambiar el origen de los datos (de archivo local a URL de API), sin reescribir la lógica de la interfaz[cite: 75].