# Reporte de Bugs (Jira)

## Resumen

| ID | Título | Módulo | Sev | Pri | Estado | Fecha |
|----|--------|--------|-----|-----|--------|-------|
| BUG-001 | Falta campo obligatorio en purchase.php | purchase.php | Media | Media | Nuevo | 09/04/26 |
| BUG-002 | Exposición de tecnología en URL | URL | Media | Media | Nuevo | 10/04/26 |
| BUG-003 | Error 419 en login | Login | Alta | Alta | Nuevo | 10/04/26 |
| BUG-004 | Error 419 en reset de contraseña | password-reset | Alta | Alta | Nuevo | 10/04/26 |
| BUG-005 | Error 419 en registro | register | Alta | Alta | Nuevo | 10/04/26 |

---

## Detalle de Bugs

### BUG-001 – Falta campo obligatorio en purchase.php

- **Módulo:** purchase.php  
- **Severidad:** Media  
- **Prioridad:** Media  
- **Estado:** Nuevo  

**Pasos:**
1. Ingresar a la página principal  
2. Elegir origen y destino  
3. Seleccionar un vuelo  
4. Presionar "Purchase Flight" sin completar campos  

**Resultado esperado:**  
La aplicación solicita completar los campos obligatorios (nombre, tarjeta, dirección, etc.)

**Resultado actual:**  
Permite completar la compra sin validar campos obligatorios  

**Evidencia:**  
`bug-reports/evidence/bugs/purchase.php`

---

### BUG-002 – Exposición de tecnología en URL

- **Módulo:** URL  
- **Severidad:** Media  
- **Prioridad:** Media  
- **Estado:** Nuevo  

**Pasos:**
1. Ingresar a la página principal  
2. Navegar por el flujo de compra  
3. Observar la URL  

**Resultado esperado:**  
La URL no expone detalles de implementación  

**Resultado actual:**  
La URL muestra extensión `.php`  

**Evidencia:**  
`bug-reports/evidence/bugs/url-bug`

---

### BUG-003 – Error 419 en login

- **Módulo:** Login  
- **Severidad:** Alta  
- **Prioridad:** Alta  
- **Estado:** Nuevo  

**Pasos:**
1. Ingresar a la página principal  
2. Ir a login  
3. Completar credenciales  
4. Presionar "Login"  

**Resultado esperado:**  
Redirección correcta con sesión iniciada  

**Resultado actual:**  
Se muestra error 419 (Page Expired)  

**Evidencia:**  
`bug-reports/evidence/bugs/error-419`

---

### BUG-004 – Error 419 en reset de contraseña

- **Módulo:** password-reset  
- **Severidad:** Alta  
- **Prioridad:** Alta  
- **Estado:** Nuevo  

**Pasos:**
1. Ir a login  
2. Seleccionar "Forgot your password"  
3. Ingresar email  
4. Enviar solicitud  

**Resultado esperado:**  
Envío de correo de recuperación  

**Resultado actual:**  
Se muestra error 419  

**Evidencia:**  
`bug-reports/evidence/bugs/error-419`

---

### BUG-005 – Error 419 en registro

- **Módulo:** register  
- **Severidad:** Alta  
- **Prioridad:** Alta  
- **Estado:** Nuevo  

**Pasos:**
1. Ir a registro  
2. Completar formulario  
3. Enviar  

**Resultado esperado:**  
Registro exitoso y confirmación  

**Resultado actual:**  
Se muestra error 419  

**Evidencia:**  
`bug-reports/evidence/bugs/error-419`

---

## Observaciones generales

Se detecta un patrón de error crítico (HTTP 419) en múltiples funcionalidades clave:

- Login  
- Registro  
- Recuperación de contraseña  

Esto sugiere un posible problema relacionado con:

- manejo de sesión  
- tokens CSRF  
- expiración de sesión  

Se recomienda priorizar la resolución de estos errores debido a su alto impacto en la experiencia del usuario.
