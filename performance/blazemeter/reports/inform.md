## Performance Analysis Report – BlazeMeter (50 usuarios)
# Objetivo

Evaluar el comportamiento de la aplicación web bajo una carga de 50 usuarios virtuales utilizando BlazeMeter, con el fin de analizar tiempos de respuesta, rendimiento general y estabilidad del sistema.

Resumen de resultados
Duración del test: 20 minutos
Usuarios concurrentes máximos: 50 VU
Throughput promedio: 5041.72 hits/s
Tasa de error: 0%
Total de requests ejecutadas: 6.050.058


| Métrica               | Valor          |
| --------------------- | -------------- |
| Usuarios concurrentes | 50             |
| Throughput promedio   | 5041.72 hits/s |
| Errores               | 0%             |
| Duración              | 20 minutos     |

# Análisis de resultados
Rendimiento general

El sistema mostró un rendimiento estable bajo una carga de 50 usuarios virtuales, 
manteniendo una tasa de error del 0%, lo que indica que no se registraron fallos en la 
ejecución de las solicitudes.

El throughput de 5041.72 hits/s refleja una alta capacidad de procesamiento, 
lo cual sugiere que la aplicación puede manejar un volumen considerable de tráfico sin 
degradación funcional.

| Label                    | Avg Response Time | P90   |
| ------------------------ | ----------------- | ----- |
| ALL                      | 9 ms              | 10 ms |
| Request página BlazeDemo | 9 ms              | 10 ms |


# Estabilidad del sistema

No se registraron errores durante toda la ejecución del test (0%), lo que indica:

correcta gestión de las solicitudes concurrentes
estabilidad del backend bajo carga media
ausencia de fallos funcionales en endpoints probados
Análisis general

El sistema demuestra un comportamiento altamente eficiente bajo 50 usuarios concurrentes, con:

tiempos de respuesta muy bajos
throughput elevado
ausencia total de errores
estabilidad sostenida durante 20 minutos

Sin embargo, el volumen extremadamente alto de hits por segundo sugiere revisar:

configuración del test (posible alta frecuencia de requests)
caching o comportamiento del endpoint bajo repetición masiva
Conclusión

La aplicación evaluada mediante BlazeMeter bajo 50 usuarios virtuales 
presenta un rendimiento sólido, con tiempos de respuesta muy bajos y sin errores detectados.

No se evidencian problemas de estabilidad en este nivel de carga, lo que indica 
que el sistema puede soportar tráfico concurrente moderado de manera eficiente.

