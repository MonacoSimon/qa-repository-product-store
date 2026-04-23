# Performance Analysis Report – Demoblaze (80 usuarios)

## Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 80 usuarios concurrentes, analizando tiempos de respuesta, estabilidad y capacidad de procesamiento.

---

## Métricas obtenidas

* Usuarios concurrentes: 80
* Tiempo promedio (average): 5752 ms
* Tiempo mínimo (min): 164 ms
* Tiempo máximo (max): 55871 ms
* Mediana (median): 1668 ms
* Percentil 90 (P90): 16406 ms
* Percentil 95 (P95): 21485 ms
* Percentil 99 (P99): 37038 ms
* Tasa de error: 1.25 %
* Throughput: 1.4 requests/segundo

---

## Análisis de resultados

### Tiempo de respuesta

El tiempo promedio de 5752 ms (más de 5.7 segundos) indica una degradación severa del rendimiento bajo esta carga.

La mediana (1668 ms) también se incrementa significativamente, lo que demuestra que la mayoría de las solicitudes ya no se resuelven en tiempos aceptables.

El tiempo máximo de 55871 ms (más de 55 segundos) es extremadamente alto y evidencia situaciones críticas donde el sistema prácticamente deja de responder.

---

### Percentiles

* P90: 16406 ms
* P95: 21485 ms
* P99: 37038 ms

Esto indica que:

* el 10 % de las solicitudes supera los 16 segundos
* el 5 % supera los 21 segundos
* el 1 % alcanza hasta 37 segundos

Estos valores reflejan una alta degradación del sistema y una experiencia de usuario muy deficiente bajo carga.

---

### Estabilidad

La tasa de error es 1.25 %, lo que indica que:

* comienzan a aparecer fallos bajo alta concurrencia
* el sistema ya no puede manejar correctamente todas las solicitudes

Esto representa una pérdida de estabilidad.

---

### Throughput

El throughput desciende a 1.4 requests por segundo, lo que evidencia:

* reducción en la capacidad de procesamiento
* saturación de recursos
* posible presencia de cuellos de botella críticos

---

## Análisis general

El sistema presenta una degradación significativa bajo 80 usuarios concurrentes.

Se observa:

* aumento extremo en tiempos de respuesta
* alta variabilidad entre requests
* aparición de errores
* disminución del throughput

Estos indicadores muestran que el sistema ha superado su capacidad operativa óptima.

---

## Conclusión

La aplicación no logra mantener un rendimiento aceptable bajo una carga de 80 usuarios concurrentes.

Los tiempos de respuesta elevados, junto con la aparición de errores y la caída en el throughput, indican que el sistema se encuentra en un estado de saturación.

Se recomienda:

* identificar y optimizar cuellos de botella críticos
* mejorar la gestión de recursos del servidor
* implementar estrategias de escalabilidad
* realizar pruebas progresivas para determinar el límite máximo soportado

En su estado actual, el sistema no es apto para soportar altos niveles de concurrencia sin afectar significativamente la experiencia del usuario.
