# Análisis de Performance – Test con 50 Usuarios

## Resumen de resultados

| Métrica              | Valor |
| -------------------- | ----- |
| # Samples            | —     |
| Average (ms)         | 424   |
| Median (ms)          | 431   |
| P90 (ms)             | 581   |
| P95 (ms)             | 695   |
| P99 (ms)             | 829   |
| Min (ms)             | 260   |
| Max (ms)             | 1277  |
| Error %              | 0.0 % |
| Throughput (req/sec) | 2     |

---

## Análisis de rendimiento

### Tiempo de respuesta

El tiempo promedio de respuesta es de **424 ms**, lo cual representa una mejora significativa respecto al test de 20 usuarios.

La mediana (**431 ms**) es muy cercana al promedio, lo que indica una distribución uniforme de los tiempos de respuesta.

Los percentiles muestran:

* **P90: 581 ms** → el 90% de los usuarios tiene una experiencia rápida (< 600 ms)
* **P95: 695 ms** → leve incremento, pero aún dentro de valores aceptables
* **P99: 829 ms** → no se observan picos extremos

Esto indica una **respuesta consistente y sin outliers significativos**.

---

### Estabilidad

La diferencia entre:

* **mínimo: 260 ms**
* **máximo: 1277 ms**

es moderada, pero considerablemente menor en comparación con pruebas de menor carga.

Esto indica que el sistema es **más estable bajo 50 usuarios que en 20 usuarios**, lo cual puede deberse a:

* calentamiento del sistema
* mejor uso de recursos
* caching

---

### Errores

El porcentaje de error es:

**0.0 %**

El sistema mantiene **estabilidad funcional completa** bajo esta carga.

---

### Throughput (capacidad)

El throughput es de:

**2 requests/segundo**

Se observa una mejora respecto al test de 20 usuarios, lo que indica que el sistema puede manejar mayor carga sin degradar su rendimiento.

---

## Comparación con 20 usuarios

| Métrica | 20 usuarios | 50 usuarios |
| ------- | ----------- | ----------- |
| Average | 788 ms      | 424 ms      |
| P90     | 1093 ms     | 581 ms      |
| P99     | 4432 ms     | 829 ms      |
| Error % | 0%          | 0%          |

---

## Interpretación

A diferencia de lo esperado, el sistema presenta **mejor rendimiento con 50 usuarios que con 20**.

Esto sugiere:

* optimización interna bajo carga
* posible caching o lazy loading
* mejor distribución de recursos

---

## Conclusión

El sistema muestra un comportamiento **altamente eficiente y estable** bajo una carga de 50 usuarios concurrentes.

Se destaca:

* mejora en tiempos de respuesta
* baja variabilidad
* ausencia de picos extremos
* estabilidad total (sin errores)

Esto indica que el sistema se encuentra **bien preparado para cargas moderadas**.

---

## Recomendaciones

* Continuar pruebas con cargas mayores (80 y 100 usuarios)
* Verificar si el comportamiento se mantiene o comienza la degradación
* Analizar impacto del caching en los resultados

---
