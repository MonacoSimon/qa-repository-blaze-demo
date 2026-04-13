Análisis de Performance – Test con 100 Usuarios
Resumen de resultados
Métrica	Valor
# Samples	—
Average (ms)	407
Median (ms)	410
P90 (ms)	511
P95 (ms)	582
P99 (ms)	1060
Min (ms)	253
Max (ms)	1063
Error %	0.0 %
Throughput (req/sec)	3.3
Análisis de rendimiento
Tiempo de respuesta

El tiempo promedio de respuesta es de 407 ms, manteniéndose estable incluso con una carga alta de 100 usuarios.

La mediana (410 ms) es prácticamente igual al promedio, lo que indica una distribución homogénea.

Percentiles:

P90: 511 ms → excelente, experiencia consistente
P95: 582 ms → estable
P99: 1060 ms → presencia de algunos casos más lentos, pero controlados
Estabilidad
Min: 253 ms
Max: 1063 ms

La variabilidad es baja en comparación con cargas menores, sin picos extremos.

El sistema muestra un comportamiento estable y consistente.

Errores

0.0 %

No se registran errores, lo que indica una alta estabilidad funcional.

Throughput (capacidad)

3.3 requests/segundo

Se observa una mejora progresiva respecto a pruebas anteriores:

20 usuarios → 1.9 req/sec
50 usuarios → 2 req/sec
80 usuarios → 2.6 req/sec
100 usuarios → 3.3 req/sec

Esto indica una buena escalabilidad del sistema.

Comparación general
Métrica	20 usuarios	50 usuarios	80 usuarios	100 usuarios
Average	788 ms	424 ms	414 ms	407 ms
P90	1093 ms	581 ms	511 ms	511 ms
P99	4432 ms	829 ms	1068 ms	1060 ms
Error %	0%	0%	0%	0%
Throughput	1.9	2	2.6	3.3
Interpretación

El sistema mantiene un comportamiento estable incluso bajo alta concurrencia (100 usuarios).

Se observa:

mejora sostenida en throughput
estabilidad en tiempos de respuesta
control de percentiles
ausencia total de errores

El P99 se mantiene cercano a 1 segundo, lo que indica que los casos más lentos siguen siendo aceptables.

Conclusión

El sistema demuestra ser altamente escalable y estable hasta 100 usuarios concurrentes.

Se destacan:

tiempos de respuesta consistentes
ausencia de degradación
incremento de capacidad bajo carga
comportamiento predecible

Esto sugiere que el sistema está bien optimizado para soportar carga concurrente moderada-alta.
