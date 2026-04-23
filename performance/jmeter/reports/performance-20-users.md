# Performance Analysis Report – Demoblaze (20 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 20 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 20
* Tiempo promedio (average): 642 ms
* Tiempo mínimo (min): 160 ms
* Tiempo máximo (max): 3055 ms
* Mediana (median): 481 ms
* Percentil 90 (P90): 1637 ms
* Percentil 95 (P95): 2035 ms
* Percentil 99 (P99): 3055 ms
* Tasa de error: 0 %
* Throughput: 2.0 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 642 ms indica que el sistema responde, pero ya se encuentra en un rango medio-alto para una carga relativamente baja.

La mediana (481 ms) es menor al promedio, lo que sugiere que la mayoría de las solicitudes se procesan en tiempos aceptables, pero existen múltiples requests lentas que elevan el promedio.

El tiempo máximo de 3055 ms (más de 3 segundos) es elevado y representa casos donde la experiencia del usuario puede verse afectada significativamente.

---

### Percentiles

* P90: 1637 ms
* P95: 2035 ms
* P99: 3055 ms

Estos valores indican que:

* el 10 % de las solicitudes supera los 1.6 segundos
* el 5 % supera los 2 segundos
* el 1 % alcanza hasta 3 segundos

Esto evidencia una alta variabilidad en los tiempos de respuesta y presencia de colas o cuellos de botella bajo carga.

---

### Estabilidad

La tasa de error es 0 %, lo que indica que:

* el sistema responde correctamente a todas las solicitudes
* no se detectan fallos funcionales bajo esta carga

Esto es positivo en términos de disponibilidad, aunque no necesariamente de performance.

---

### Throughput

El throughput de 2.0 requests por segundo sigue siendo bajo considerando la cantidad de usuarios concurrentes.

Esto puede indicar:

* limitaciones en el servidor
* tiempos de espera elevados entre requests
* procesamiento ineficiente del lado backend o frontend

---

## Análisis general

El sistema se mantiene estable bajo una carga de 20 usuarios, pero presenta problemas claros de rendimiento.

Se observa:

* incremento considerable en los tiempos de respuesta
* alta dispersión entre mediana y percentiles altos
* presencia de requests significativamente lentas

Estos indicadores sugieren que el sistema comienza a degradarse incluso con una carga moderada.

---

## Conclusión

La aplicación responde correctamente sin errores, pero no mantiene tiempos de respuesta consistentes bajo 20 usuarios concurrentes.

Los altos valores en percentiles (P90, P95, P99) indican que una parte de los usuarios experimentará demoras significativas.

Se recomienda:

* optimizar tiempos de respuesta del backend
* analizar cuellos de botella en recursos
* realizar pruebas con mayor carga para evaluar el punto de degradación

En su estado actual, el sistema es funcional pero presenta limitaciones de rendimiento que podrían impactar la experiencia del usuario en escenarios reales.
