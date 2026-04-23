## Conclusión final

La aplicación Demoblaze cumple con su objetivo principal como sistema de e-commerce de 
demostración, permitiendo la navegación, visualización de productos, registro de 
usuarios y simulación de compra.

A lo largo del proceso de testing se implementó un enfoque integral de QA, abarcando pruebas 
funcionales, de accesibilidad, API, rendimiento y seguridad, lo que permitió obtener 
una visión completa del estado del sistema.

Además, se incorporó el uso de Docker y Docker Compose para estandarizar la ejecución de pruebas, logrando un entorno reproducible, automatizado y desacoplado de la configuración 
local. Esto representa una mejora significativa en términos de escalabilidad y buenas 
prácticas dentro del ciclo de testing.

Sin embargo, se identificaron diversas debilidades que impactan en la calidad 
general de la aplicación:

- ausencia de validaciones robustas en formularios críticos (login, sign up, contact, 
place order)
- fuerte dependencia del frontend sin controles adecuados desde backend
- limitaciones en el testing de API debido a endpoints poco claros o restringidos
- problemas de accesibilidad (contraste, atributos ARIA, etiquetas faltantes)
- exposición de cierta información en headers HTTP
- comportamiento inconsistente en algunos flujos automatizados

En términos de rendimiento, el sistema presenta variabilidad en los tiempos de respuesta 
a medida que aumenta la carga de usuarios, mostrando degradación en escenarios más exigentes.

Desde el punto de vista de seguridad, si bien no se detectaron vulnerabilidades críticas, 
se evidencian configuraciones incompletas que podrían representar riesgos en un entorno 
productivo.

El uso de herramientas como Cypress, Newman, OWASP ZAP y JMeter, integradas mediante 
contenedores, permitió automatizar y centralizar el proceso de testing, facilitando 
la ejecución continua y la generación de reportes.

En conclusión, la aplicación es funcional como entorno de prueba, pero no cuenta con 
la robustez necesaria para un entorno productivo real.

Se recomienda priorizar:

- implementación de validaciones tanto en frontend como backend
- mejora en la definición y exposición de endpoints de API
- corrección de problemas de accesibilidad según estándares WCAG
- fortalecimiento de configuraciones de seguridad (headers, políticas)
- optimización del rendimiento bajo carga
- mantenimiento del enfoque basado en contenedores para asegurar reproducibilidad

Estas mejoras permitirían elevar significativamente la calidad del sistema y su 
preparación para escenarios reales de uso.
