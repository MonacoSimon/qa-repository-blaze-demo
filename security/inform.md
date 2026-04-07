# Security Analysis Report – BlazeDemo

## Objetivo

Evaluar la seguridad de la aplicación web https://blazedemo.com mediante análisis 
automatizado utilizando OWASP ZAP, con el fin de identificar vulnerabilidades 
y configuraciones inseguras.

---

## Resumen de hallazgos

Se detectaron múltiples vulnerabilidades de severidad media y baja, 
principalmente relacionadas con configuraciones de seguridad ausentes o incorrectas.
No se identificaron vulnerabilidades críticas, pero existen riesgos potenciales 
que podrían ser explotados en escenarios reales.

---

## Vulnerabilidades detectadas

### 1. Content Security Policy (CSP) no configurada

- **Riesgo:** Medio  
- **Confianza:** Alta  

**Descripción:**  
La ausencia de la cabecera Content-Security-Policy permite la 
ejecución de contenido no confiable, 
aumentando el riesgo de ataques como Cross-Site Scripting (XSS).

**Impacto:**  
Un atacante podría inyectar scripts maliciosos que se ejecuten en el navegador del usuario.

**Recomendación:**  
Configurar la cabecera CSP para restringir las fuentes de contenido.

---

### 2. Falta de integridad en recursos (Subresource Integrity)

- **Riesgo:** Medio  
- **Confianza:** Alta  

**Descripción:**  
Los recursos externos (JS/CSS) no incluyen atributos de integridad (SRI), 
lo que impide verificar si han sido modificados.

**Impacto:**  
Posibilidad de ejecución de código comprometido desde fuentes externas.

**Recomendación:**  
Implementar atributos `integrity` en los recursos externos.

---

### 3. Falta de cabecera Anti-Clickjacking

- **Riesgo:** Medio  
- **Confianza:** Media  

**Descripción:**  
No se detecta la cabecera `X-Frame-Options` o equivalente.

**Impacto:**  
La aplicación podría ser embebida en iframes maliciosos para ataques de clickjacking.

**Recomendación:**  
Agregar `X-Frame-Options: DENY` o `SAMEORIGIN`.

---

### 4. Contenido mixto en páginas seguras

- **Riesgo:** Medio  
- **Confianza:** Media  

**Descripción:**  
Se cargan recursos HTTP en páginas HTTPS.

**Impacto:**  
Riesgo de interceptación o manipulación de contenido.

**Recomendación:**  
Asegurar que todos los recursos se sirvan mediante HTTPS.

---

### 5. Librerías JavaScript vulnerables

- **Riesgo:** Medio  
- **Confianza:** Media  

**Descripción:**  
Se detectaron librerías JS con posibles vulnerabilidades conocidas.

**Impacto:**  
Exposición a exploits conocidos asociados a versiones vulnerables.

**Recomendación:**  
Actualizar librerías a versiones seguras.

---

### 6. Ausencia de protección contra CSRF

- **Riesgo:** Medio  
- **Confianza:** Baja  

**Descripción:**  
No se detectaron tokens anti-CSRF en formularios.

**Impacto:**  
Un atacante podría ejecutar acciones en nombre del usuario autenticado.

**Recomendación:**  
Implementar tokens CSRF en formularios críticos.

---

## Vulnerabilidades de bajo riesgo

### Configuración de cookies insegura

- Falta de flags:
  - HttpOnly  
  - Secure  
  - SameSite  

**Impacto:**  
Mayor riesgo de robo de sesión o ataques XSS.

---

### Cabeceras de seguridad faltantes

- `X-Content-Type-Options` no configurada  
- `Strict-Transport-Security` no establecido  

**Impacto:**  
Debilita la protección del navegador frente a ataques comunes.

---

### Divulgación de información del servidor

- Header `Server` expone versión  
- Header `X-Powered-By` presente  

**Impacto:**  
Facilita la identificación de tecnologías utilizadas por atacantes.

---

### Redirecciones y carga de scripts externos

- Redirecciones extensas detectadas  
- Inclusión de recursos JS de terceros  

**Impacto:**  
Posible fuga de información o dependencia de recursos externos inseguros.

---

## Hallazgos informativos

- Uso de tecnologías web modernas  
- Respuestas de sesión identificadas  
- Comentarios en código fuente potencialmente sensibles  

---

## Análisis general

La aplicación presenta múltiples debilidades relacionadas con configuraciones de 
seguridad básicas.

La mayoría de los problemas corresponden a:

- falta de cabeceras de seguridad  
- manejo inadecuado de recursos externos  
- ausencia de controles preventivos estándar  

Esto indica una falta de hardening en el servidor y en la configuración de la aplicación.

---

## Recomendaciones generales

- Implementar cabeceras de seguridad (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)  
- Asegurar el uso exclusivo de HTTPS  
- Configurar correctamente cookies de sesión  
- Actualizar librerías externas  
- Implementar protección contra CSRF  
- Revisar la carga de recursos externos  

---

## Conclusión

La aplicación no presenta vulnerabilidades críticas, 
pero sí múltiples configuraciones inseguras que incrementan la superficie de ataque.
Se recomienda reforzar las políticas de seguridad para mejorar 
la protección de los usuarios y del sistema.
