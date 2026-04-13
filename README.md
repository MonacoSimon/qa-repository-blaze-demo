## Descripción

Este proyecto consiste en la ejecución de pruebas integrales sobre la aplicación web BlazeDemo, cubriendo distintas áreas del testing de software con un enfoque práctico y profesional.

El objetivo es simular un flujo de trabajo real de QA, incluyendo diseño de casos de prueba, ejecución, detección de defectos, pruebas de rendimiento, validación de seguridad y testing de APIs.

---

## Alcance de pruebas

Se realizaron los siguientes tipos de testing:

* Testing funcional (manual)
* Testing de APIs (Postman)
* Reporte y gestión de bugs
* Testing de performance
* Testing de seguridad
* Automatización (Cypress)

---

## Herramientas utilizadas

* Postman – testing de APIs
* Cypress – automatización de pruebas E2E
* Apache JMeter – pruebas de carga
* BlazeMeter – validación externa
* OWASP ZAP – análisis de seguridad

---

## Estructura del proyecto

```bash
.
├── api-testing
│   └── postman              → colección y environment
├── automation
│   └── cypress             → tests automatizados
├── bug-reports
│   ├── bugs.ods            → listado de defectos
│   ├── evidence            → capturas y pruebas
│   └── jira                → flujo simulado de gestión
├── performance
│   ├── blazemeter
│   └── jmeter              → pruebas de carga
├── security
│   ├── inform.md
│   └── zap-analysis        → análisis de vulnerabilidades
├── test-scenarios
│   └── casos-de-prueba.ods → casos funcionales
├── conclusions             → informe final
└── README.md
```

---

## Testing funcional

Se diseñaron y ejecutaron casos de prueba cubriendo los principales flujos del sistema:

* navegación entre páginas
* selección de vuelos
* reserva de vuelos
* registro de usuario
* login
* recuperación de contraseña

Se aplicaron técnicas de validación sobre:

* flujos positivos
* flujos negativos
* comportamiento ante errores

### Hallazgos relevantes

* Error 419 en:

  * registro de usuarios
  * login
  * recuperación de contraseña

Indica problemas en validación de tokens o manejo de sesión.

---

## API Testing

Se realizaron pruebas sobre endpoints utilizando Postman:

* GET → validación de disponibilidad y contenido HTML
* POST → validación de formularios (compra, login, recuperación)

### Validaciones implementadas

* status codes
* headers (Content-Type)
* contenido de respuesta
* tiempos de respuesta
* casos negativos

---

## Gestión de bugs

Se documentaron defectos siguiendo un flujo similar a Jira:

Estados:
Nuevo → En progreso → Resuelto → Cerrado

Cada bug incluye:

* pasos de reproducción
* resultado esperado vs actual
* prioridad
* evidencia

---

## Testing de performance

Se ejecutaron pruebas de carga con distintos niveles:

* 20 usuarios concurrentes
* 50 usuarios concurrentes
* 100 usuarios concurrentes

### Métricas analizadas

* tiempo de respuesta promedio
* percentiles
* throughput
* tasa de errores

BlazeMeter se utilizó como validación externa.

---

## Testing de seguridad

Se analizaron vulnerabilidades utilizando OWASP ZAP:

* cabeceras de seguridad faltantes
* configuraciones inseguras
* posibles exposiciones de información

---

## Automatización

Se implementaron pruebas automatizadas con Cypress para:

* navegación principal
* selección de vuelos
* validación de elementos UI

---

## Conclusión

El sistema presenta un correcto funcionamiento en los flujos principales de navegación y reserva, pero evidencia problemas importantes en:

* manejo de autenticación (errores 419)
* validación de formularios
* configuración de seguridad
* estabilidad bajo carga

---

## Estado del proyecto

* Testing funcional completado
* API testing implementado
* Bugs documentados
* Performance evaluada
* Seguridad analizada
* Automatización implementada

---

## Ejecución (API Testing)

Para ejecutar las pruebas de API con Postman:

1. Importar la colección desde `/api-testing/postman/collections/`
2. Importar el environment desde `/api-testing/postman/environments/`
3. Ejecutar los requests o la colección desde Postman
