# Performance Analysis Report – Demoblaze (100 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 100 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 100
* Tiempo promedio (average): 998 ms
* Tiempo mínimo (min): 151 ms
* Tiempo máximo (max): 4958 ms
* Mediana (median): 600 ms
* Percentil 90 (P90): 2357 ms
* Percentil 95 (P95): 2856 ms
* Percentil 99 (P99): 3867 ms
* Tasa de error: 0 %
* Throughput: 3.3 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 998 ms se aproxima al segundo, lo que indica un rendimiento moderado bajo esta carga.

La mediana (600 ms) es considerablemente menor, lo que sugiere que la mayoría de las solicitudes se procesan en tiempos aceptables, aunque existen requests más lentas que elevan el promedio.

El tiempo máximo de 4958 ms (casi 5 segundos) indica que aún existen casos puntuales de latencia elevada.

---

### Percentiles

* P90: 2357 ms
* P95: 2856 ms
* P99: 3867 ms

Esto indica que:

* el 10 % de las solicitudes supera los 2.3 segundos
* el 5 % supera los 2.8 segundos
* el 1 % se acerca a los 4 segundos

Aunque los percentiles son elevados, no alcanzan los valores críticos observados en cargas anteriores más inestables.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* el sistema responde correctamente a todas las solicitudes
* no se presentan fallos funcionales bajo esta carga

Esto representa un buen nivel de estabilidad.

---

### Throughput

El throughput de 3.3 requests por segundo es el más alto observado hasta el momento.

Esto sugiere:

* mejor aprovechamiento de recursos
* mayor capacidad de procesamiento
* comportamiento más eficiente bajo esta configuración de carga

---

## Análisis general

El sistema muestra un comportamiento más estable y eficiente bajo 100 usuarios en comparación con escenarios anteriores de alta degradación.

Se observa:

* tiempos de respuesta moderados
* ausencia de errores
* mejora significativa en el throughput
* reducción de latencias extremas respecto a escenarios críticos

Esto podría deberse a diferencias en el patrón de carga o en la ejecución del test.

---

## Conclusión

La aplicación logra mantener estabilidad bajo 100 usuarios concurrentes, con tiempos de respuesta aceptables en la mayoría de los casos y sin errores.

Aunque persisten latencias en percentiles altos, el sistema muestra una mejora en la capacidad de procesamiento respecto a pruebas anteriores.

Se recomienda:

* continuar evaluando consistencia en múltiples ejecuciones
* analizar variaciones en los resultados bajo diferentes condiciones
* optimizar tiempos en percentiles altos

En su estado actual, el sistema presenta un comportamiento aceptable bajo esta carga, aunque con margen de mejora en la consistencia de tiempos de respuesta.
