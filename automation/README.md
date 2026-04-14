## Cypress Automation

Este módulo contiene pruebas automatizadas end-to-end sobre la aplicación BlazeDemo, enfocadas en validar los flujos principales del usuario.

---

## Alcance

Se automatizan los siguientes escenarios:

* navegación desde la página principal
* búsqueda de vuelos
* selección de vuelos
* compra de tickets
* validación de mensajes de confirmación

También se incluyen casos negativos como:

* envío de formularios incompletos
* validaciones de campos obligatorios

---

## Estructura

* `e2e/` → tests organizados por funcionalidad

---

## Ejecución

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo interactivo:

```bash
npx cypress open
```

Ejecutar en modo headless:

```bash
npx cypress run
```

---

## Enfoque

Las pruebas están diseñadas para:

* validar flujos críticos del sistema
* detectar errores funcionales
* asegurar consistencia en la interfaz

Se prioriza la claridad, mantenibilidad y reutilización del código.
