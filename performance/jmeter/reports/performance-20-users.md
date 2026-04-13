# Análisis de Performance – Test con 20 Usuarios

## Resumen de resultados

| Métrica              | Valor |
| -------------------- | ----- |
| # Samples            | 40    |
| Average (ms)         | 788   |
| Median (ms)          | 649   |
| P90 (ms)             | 1093  |
| P95 (ms)             | 1348  |
| P99 (ms)             | 4432  |
| Min (ms)             | 348   |
| Max (ms)             | 4432  |
| Error %              | 0.0 % |
| Throughput (req/sec) | 1.90  |
| Received KB/sec      | 8.83  |
| Sent KB/sec          | 0.21  |

---

## Análisis de rendimiento

### Tiempo de respuesta

El tiempo promedio de respuesta es de **788 ms**, lo cual se considera 
aceptable para una carga baja (20 usuarios).

La mediana (**649 ms**) es menor al promedio, lo que indica 
que la mayoría de las solicitudes se resuelven en tiempos relativamente buenos.

Sin embargo, los percentiles muestran lo siguiente:

* **P90: 1093 ms** → el 90% de los usuarios tiene una experiencia menor a ~1.1 segundos
* **P95: 1348 ms** → algunos usuarios comienzan a percibir lentitud
* **P99: 4432 ms** → existen casos extremos con tiempos muy elevados

Esto indica la presencia de **outliers** (respuestas lentas puntuales).

---

### Estabilidad

La diferencia entre:

* **mínimo: 348 ms**
* **máximo: 4432 ms**

es considerable, lo que evidencia **variabilidad en las respuestas**.

Esto sugiere que, aunque el sistema responde bien en general, 
**no es completamente consistente**.

---

### Errores

El porcentaje de error es:

**0.0 %**

Esto indica que el sistema es **estable a nivel funcional** bajo esta carga.

---

### Throughput (capacidad)

El throughput es de:

**1.90 requests/segundo**

Para 20 usuarios, este valor es bajo-moderado y consistente con:

* tiempos de respuesta cercanos a 1 segundo
* ejecución secuencial con timers

---

### Transferencia de datos

* **Received:** 8.83 KB/sec
* **Sent:** 0.21 KB/sec

El volumen de datos es bajo, lo cual es esperable para una aplicación simple.

---

## Conclusión

El sistema presenta un comportamiento **estable y funcional** 
bajo una carga de 20 usuarios concurrentes.

Se observa:

* buen rendimiento promedio
* ausencia de errores
* tiempos de respuesta aceptables

No obstante, existen picos elevados en el percentil 99, 
lo que indica que **algunos usuarios pueden experimentar demoras significativas**.

En general, el sistema es **confiable en condiciones de baja carga**, 
pero muestra signos de **inconsistencia que podrían agravarse con mayor concurrencia**.

---

## Recomendaciones

* Analizar la causa de los tiempos extremos (P99 elevado)
* Evaluar comportamiento con mayor carga (50, 80, 100 usuarios)
* Monitorear la variabilidad (desviación estándar) en pruebas futuras
* Optimizar tiempos de respuesta para reducir outliers

---
