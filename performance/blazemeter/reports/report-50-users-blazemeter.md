Análisis de Performance – Validación con BlazeMeter (50 Usuarios)
Resumen de resultados
Métrica	Valor
Virtual Users (VU)	50
Throughput (hits/sec)	57.18
Tiempo de respuesta promedio	448.75 ms
Percentil 90 (P90)	964 ms
Error %	0.0 %
Ancho de banda promedio	265.65 KiB/s
Análisis de rendimiento
Tiempo de respuesta

El tiempo de respuesta promedio es de 448.75 ms, lo cual se encuentra dentro de un rango aceptable para una carga de 50 usuarios.

El percentil 90 (964 ms) indica que:

el 90% de los usuarios recibe respuesta en menos de 1 segundo
algunos usuarios experimentan tiempos cercanos a 1 segundo
Throughput (capacidad)

El throughput es de:

57.18 hits/segundo

Este valor es significativamente mayor que el obtenido en pruebas locales, lo que puede deberse a:

infraestructura distribuida de BlazeMeter
mayor capacidad de generación de carga
diferencias en configuración del test
Errores

0.0 %

El sistema mantiene estabilidad total, sin fallos bajo esta carga.

Uso de red
265.65 KiB/s

Indica un consumo moderado de ancho de banda, consistente con una aplicación web liviana.

Comparación con JMeter (50 usuarios)
Métrica	JMeter	BlazeMeter
Average	424 ms	448 ms
P90	581 ms	964 ms
Error %	0%	0%
Throughput	~2 req/sec	57 hits/sec
Interpretación

Los resultados entre JMeter y BlazeMeter son coherentes en tiempo promedio, pero presentan diferencias en:

throughput
percentiles

Esto sugiere que:

BlazeMeter genera mayor carga real
existe mayor presión sobre el sistema
aparecen más casos lentos (P90 más alto)
Conclusión

El sistema mantiene un comportamiento estable bajo 50 usuarios, tanto en pruebas locales como en entorno distribuido.

Se observa:

consistencia en tiempos promedio
ausencia de errores
incremento significativo en throughput
mayor variabilidad en percentiles bajo carga real

Esto indica que el sistema es funcional y estable, aunque bajo condiciones más exigentes comienzan a aparecer tiempos de respuesta más elevados en algunos usuarios.
