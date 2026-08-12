# Contexto del Proyecto: MVP Asesor Virtual "Fleur de Vie"

## 1. Visión General y Filosofía de la Marca
[cite_start]Fleur de Vie es una marca enfocada en infusiones premium y "Luxury Tea"[cite: 126]. [cite_start]Su filosofía se basa en ofrecer "más que un té, una experiencia" [cite: 19][cite_start], priorizando el ritual, el bienestar y un diseño estético limpio y elegante[cite: 19, 165]. 

[cite_start]El catálogo incluye diversas líneas, destacándose "Capullos Florecientes", "Té Blend" e "Infusiones Petit para Niños"[cite: 12, 135]. [cite_start]Actualmente, la marca ya posee un e-commerce robusto que maneja carritos de compra, precios en ARS y beneficios como envío gratuito superando los $85.000[cite: 13, 126].

## 2. Objetivo del MVP (Producto Mínimo Viable)
[cite_start]El objetivo de este desarrollo es construir una Aplicación Web Progresiva (PWA) orientada a dispositivos móviles[cite: 44, 47]. [cite_start]Esta app actuará como una "Guía o Test o Asesoramiento" interactivo para ayudar al cliente a descubrir su té ideal dentro de la variedad de opciones[cite: 3].

[cite_start]**Importante:** Este MVP tiene un fin puramente presentacional para validar la idea y asegurar la inversión del cliente[cite: 76, 77]. [cite_start]Todo el flujo sucederá en el frontend; no habrá conexión a una base de datos real en esta etapa inicial[cite: 80]. 

## 3. Reglas de Negocio y Flujo Core
El desarrollo debe centrarse estrictamente en la experiencia del usuario y la conversión rápida:

* [cite_start]**Onboarding y Segmentación:** La pantalla inicial debe segmentar al usuario inmediatamente entre las categorías principales: "Capullos", "Blends" y "Petit" (Pantalla 02)[cite: 17].
* [cite_start]**El Motor del Test (Blends de Autor - Pantallas 16 a 29):** Es el corazón de la aplicación[cite: 84]. Consiste en un cuestionario paso a paso (Step Wizard) que consulta sobre:
    * [cite_start]Beneficios buscados[cite: 18].
    * [cite_start]Preferencia de cafeína[cite: 18].
    * [cite_start]Sabores preferidos[cite: 18].
    * [cite_start]Nivel de intensidad[cite: 18].
* **Conversión Directa:** En la pantalla de resultados, el botón de "Comprar" o "Ver en tienda" no agregará el producto a un carrito local. [cite_start]Debe redirigir al usuario mediante un link directo a la URL de compra del producto exacto en el e-commerce actual de Fleur de Vie[cite: 4, 37]. [cite_start]Esto ahorra la necesidad de integrar pasarelas de pago o gestionar stock en el MVP[cite: 15].

## 4. Stack Tecnológico Definido
* [cite_start]**Framework Frontend:** Next.js (App Router) configurado como PWA (Progressive Web App) mediante `next-pwa`[cite: 55]. [cite_start]Esto permite una instalación rápida en el celular del cliente sin pasar por tiendas de aplicaciones[cite: 48].
* [cite_start]**Estilos:** Tailwind CSS para replicar rápidamente el Design System corporativo[cite: 56].
* [cite_start]**Manejo de Datos (Mock):** Para simular la futura integración con la API REST de Laravel (backend gestionado por Leandro), todos los textos y productos deben consumirse desde un archivo JSON local (`/mocks/teaData.json`)[cite: 45, 90, 98]. [cite_start]No se deben "hardcodear" textos de productos o preguntas en los componentes de React[cite: 89].

## 5. Directrices para Agentes de IA
* [cite_start]**Foco en el Frontend:** No generar código de backend, bases de datos o paneles de administración (Pantallas 50-58)[cite: 71].
* [cite_start]**Diseño:** Mantener interfaces limpias, utilizando un layout responsivo (Mobile First) basado en Auto Layout[cite: 19].
* [cite_start]**Metodología:** Desarrollar `feature por feature` en pasos pequeños[cite: 105]. Primero componentes base (botones, tarjetas), luego las vistas estáticas y finalmente la lógica de estado del Asesor Virtual.