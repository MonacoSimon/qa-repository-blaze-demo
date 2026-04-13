# Análisis de Performance – Test con 80 Usuarios

## Resumen de resultados

| Métrica              | Valor |
| -------------------- | ----- |
| # Samples            | —     |
| Average (ms)         | 414   |
| Median (ms)          | 386   |
| P90 (ms)             | 511   |
| P95 (ms)             | 580   |
| P99 (ms)             | 1068  |
| Min (ms)             | 255   |
| Max (ms)             | 1174  |
| Error %              | 0.0 % |
| Throughput (req/sec) | 2.6   |

---

## Análisis de rendimiento

### Tiempo de respuesta

El tiempo promedio de respuesta es de **414 ms**, manteniéndose bajo y estable incluso con una carga mayor.

La mediana (**386 ms**) es inferior al promedio, lo que indica que la mayoría de las solicitudes se resuelven rápidamente.

Percentiles:

* **P90: 511 ms** → excelente, la mayoría de usuarios tiene respuesta rápida
* **P95: 580 ms** → consistente
* **P99: 1068 ms** → aparecen algunos casos más lentos, pero sin extremos críticos

---

### Estabilidad

* **Min: 255 ms**
* **Max: 1174 ms**

La variabilidad es moderada, sin picos extremos como en el test de 20 usuarios.

El sistema muestra un comportamiento **estable y predecible**.

---

### Errores

**0.0 %**

El sistema mantiene estabilidad total bajo esta carga.

---

### Throughput (capacidad)

**2.6 requests/segundo**

Se observa un incremento respecto a:

* 20 usuarios → 1.9 req/sec
* 50 usuarios → 2 req/sec
* 80 usuarios → 2.6 req/sec

Esto indica una **mejor utilización de recursos a mayor carga**.

---

## Comparación general

| Métrica    | 20 usuarios | 50 usuarios | 80 usuarios |
| ---------- | ----------- | ----------- | ----------- |
| Average    | 788 ms      | 424 ms      | 414 ms      |
| P90        | 1093 ms     | 581 ms      | 511 ms      |
| P99        | 4432 ms     | 829 ms      | 1068 ms     |
| Error %    | 0%          | 0%          | 0%          |
| Throughput | 1.9         | 2           | 2.6         |

---

## Interpretación

El sistema presenta un comportamiento interesante:

* Mejora significativa entre 20 y 50 usuarios
* Se mantiene estable en 80 usuarios
* No hay degradación visible
* Incrementa el throughput

Esto sugiere:

* optimización bajo carga
* posible uso de caching
* buena escalabilidad inicial

---

## Conclusión

El sistema demuestra ser **estable, eficiente y escalable hasta 80 usuarios concurrentes**.

Se observa:

* tiempos de respuesta bajos
* consistencia en percentiles
* ausencia de errores
* mejora en capacidad (throughput)

El sistema se comporta de manera **óptima bajo carga moderada-alta**.

---

## Recomendaciones

* Ejecutar prueba con 100 usuarios para identificar punto de quiebre
* Analizar comportamiento del percentil 99 (posibles outliers)
* Validar si el rendimiento se mantiene o comienza la degradación

---
