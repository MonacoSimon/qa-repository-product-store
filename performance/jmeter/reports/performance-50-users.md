# Performance Analysis Report – Demoblaze (50 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 50 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 50
* Tiempo promedio (average): 681 ms
* Tiempo mínimo (min): 157 ms
* Tiempo máximo (max): 3369 ms
* Mediana (median): 431 ms
* Percentil 90 (P90): 1467 ms
* Percentil 95 (P95): 2420 ms
* Percentil 99 (P99): 2994 ms
* Tasa de error: 0 %
* Throughput: 2.0 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 681 ms muestra un leve incremento respecto a cargas menores, manteniéndose en un rango medio-alto.

La mediana (431 ms) es considerablemente menor al promedio, lo que indica que la mayoría de las solicitudes siguen siendo relativamente rápidas, pero existen múltiples requests lentas que impactan el promedio.

El tiempo máximo de 3369 ms (más de 3.3 segundos) confirma la presencia de respuestas significativamente lentas bajo mayor concurrencia.

---

### Percentiles

* P90: 1467 ms
* P95: 2420 ms
* P99: 2994 ms

Esto indica que:

* el 10 % de las solicitudes supera 1.4 segundos
* el 5 % supera 2.4 segundos
* el 1 % alcanza casi 3 segundos

Si bien el P90 mejora levemente respecto a cargas menores, los percentiles más altos siguen mostrando tiempos elevados, lo que evidencia inconsistencias en el rendimiento.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* el sistema continúa respondiendo correctamente bajo mayor carga
* no se presentan fallos funcionales

Esto demuestra buena estabilidad, aunque no necesariamente buen rendimiento.

---

### Throughput

El throughput se mantiene en 2.0 requests por segundo, sin mejoras respecto a cargas menores.

Esto sugiere:

* posible limitación en la capacidad de procesamiento
* falta de escalabilidad horizontal o vertical
* cuellos de botella que impiden aumentar la cantidad de requests procesados

---

## Análisis general

El sistema soporta una carga de 50 usuarios sin errores, pero presenta limitaciones claras de rendimiento.

Se observa:

* aumento en tiempos máximos de respuesta
* alta variabilidad entre mediana y percentiles
* throughput estancado pese al incremento de usuarios

Esto indica que el sistema no escala de manera eficiente.

---

## Conclusión

La aplicación mantiene estabilidad bajo 50 usuarios concurrentes, pero no logra mejorar su capacidad de procesamiento ni mantener tiempos de respuesta consistentes.

Los altos valores en P95 y P99 indican que una proporción de usuarios experimentará demoras importantes.

Se recomienda:

* analizar cuellos de botella en backend y base de datos
* optimizar tiempos de respuesta
* evaluar estrategias de escalabilidad
* continuar con pruebas de carga superiores para identificar el punto crítico del sistema

En su estado actual, el sistema es estable pero presenta limitaciones de escalabilidad y rendimiento bajo mayor concurrencia.
