# Security – Análisis de seguridad con OWASP ZAP

## Descripción

Este módulo contiene el análisis de seguridad de la aplicación web utilizando OWASP ZAP ejecutado en un entorno containerizado con Docker.

El objetivo es identificar vulnerabilidades, configuraciones inseguras y posibles vectores de ataque mediante escaneos automatizados, permitiendo evaluar el nivel de seguridad de la aplicación.

---

## Herramienta utilizada

* OWASP ZAP (Zed Attack Proxy)
* Ejecución mediante contenedor Docker (`owasp/zap2docker-stable`)

---

## Ejecución del análisis

El escaneo se realizó utilizando ZAP en modo automatizado desde Docker.

### Comando utilizado (baseline scan)

```bash id="s2d8kf"
docker run --rm -v $PWD:/zap/wrk owasp/zap2docker-stable zap-baseline.py -t https://www.demoblaze.com -r report.html
```

Este comando permite:

* ejecutar un escaneo pasivo de la aplicación
* detectar vulnerabilidades comunes
* generar un reporte en formato HTML

---

## Resumen de hallazgos

Se detectaron múltiples vulnerabilidades de severidad media y baja, principalmente relacionadas con configuraciones de seguridad y cabeceras HTTP.

No se identificaron vulnerabilidades críticas.

### Distribución de alertas

| Tipo de alerta                                        | Riesgo      | Cantidad |
| ----------------------------------------------------- | ----------- | -------- |
| Cabecera Content Security Policy (CSP) no configurada | Medio       | 3        |
| Falta de cabecera Anti-Clickjacking                   | Medio       | 3        |
| Librería JS Vulnerable                                | Medio       | 1        |
| Falta encabezado X-Content-Type-Options               | Bajo        | 5        |
| Strict-Transport-Security Header no establecido       | Bajo        | 9        |
| Aplicación Web Moderna                                | Informativo | 3        |
| Recuperado de la Caché                                | Informativo | 5        |
| Reexaminar directivas de control de caché             | Informativo | 4        |

---

## Vulnerabilidades detectadas

### Configuración incorrecta de Content Security Policy (CSP)

* Riesgo: Medio

**Descripción:**
Uso de configuraciones permisivas como comodines y `unsafe-inline`.

**Impacto:**
Aumenta el riesgo de ataques XSS.

**Recomendación:**
Definir políticas CSP restrictivas y eliminar configuraciones inseguras.

---

### Falta de cabecera Anti-Clickjacking

* Riesgo: Medio

**Descripción:**
No se implementa protección contra ataques de clickjacking.

**Impacto:**
Permite que la aplicación pueda ser embebida en iframes maliciosos.

**Recomendación:**
Implementar `X-Frame-Options` o `Content-Security-Policy: frame-ancestors`.

---

### Librería JavaScript vulnerable

* Riesgo: Medio

**Descripción:**
Se detectó el uso de una librería JS con vulnerabilidades conocidas.

**Impacto:**
Podría ser explotada para ejecutar código malicioso.

**Recomendación:**
Actualizar dependencias a versiones seguras.

---

## Vulnerabilidades de bajo riesgo

### Falta de cabecera X-Content-Type-Options

**Impacto:**
Permite al navegador interpretar tipos MIME incorrectos.

**Recomendación:**
Agregar `X-Content-Type-Options: nosniff`.

---

### Falta de cabecera Strict-Transport-Security (HSTS)

**Impacto:**
Posible exposición a ataques de downgrade o interceptación.

**Recomendación:**
Implementar `Strict-Transport-Security`.

---

## Hallazgos informativos

* Aplicación clasificada como web moderna
* Respuestas cacheadas detectadas
* Configuración de caché mejorable

---

## Análisis general

La aplicación presenta debilidades principalmente en la configuración de cabeceras de seguridad y políticas de protección.

Los principales problemas detectados están relacionados con:

* falta de políticas CSP robustas
* ausencia de cabeceras de seguridad
* uso de dependencias vulnerables

Esto indica una necesidad de mejorar el hardening de la aplicación.

---

## Recomendaciones generales

* Implementar cabeceras de seguridad (CSP, HSTS, X-Frame-Options)
* Actualizar librerías vulnerables
* Restringir configuraciones permisivas
* Mejorar políticas de caché
* Reducir exposición de información en headers

---

## Conclusión

El análisis permitió identificar múltiples configuraciones inseguras que, si bien no son críticas de forma aislada, pueden ser explotadas en conjunto.

Se recomienda aplicar medidas de hardening para mejorar la postura de seguridad y reducir la superficie de ataque de la aplicación.
