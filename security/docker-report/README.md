# OWASP ZAP – Ejecución con Docker

## Descripción

Este módulo permite ejecutar un análisis de seguridad automatizado utilizando OWASP ZAP dentro de un contenedor Docker.

El objetivo es detectar vulnerabilidades y configuraciones inseguras en la aplicación web, generando un reporte directamente en el entorno del proyecto.

---

## Estructura

```text
docker-report/
├── run.sh
├── reporte.html
└── zap.yaml
```

* `run.sh` → script que ejecuta el escaneo con Docker
* `reporte.html` → reporte generado por ZAP
* `zap.yaml` → archivo generado automáticamente durante la ejecución

---

## Ejecución del escaneo

El escaneo se realiza mediante el siguiente script:

```bash
#!/bin/bash

docker run -t \
  -u root \
  -v $(pwd):/zap/wrk \
  zaproxy/zap-stable \
  zap-baseline.py \
  -t https://www.demoblaze.com/ \
  -r reporte.html
```

Para ejecutar:

```bash
./run.sh
```

---

## Explicación técnica

* `docker run` → ejecuta el contenedor de ZAP
* `-u root` → permite al contenedor escribir archivos en la carpeta local
* `-v $(pwd):/zap/wrk` → monta la carpeta actual como volumen dentro del contenedor
* `zaproxy/zap-stable` → imagen oficial de OWASP ZAP
* `zap-baseline.py` → script de escaneo pasivo
* `-t` → URL objetivo del análisis
* `-r` → nombre del reporte generado

---

## Resultado

Al ejecutar el script se generan los siguientes archivos:

* `reporte.html` → reporte con los resultados del análisis
* `zap.yaml` → configuración utilizada por ZAP durante el escaneo

---

## Tipo de análisis

El escaneo corresponde a un **baseline scan**, que incluye:

* exploración de la aplicación (spider)
* análisis pasivo de seguridad

No se realizan ataques activos, por lo que es adecuado para entornos de testing.

---

## Conclusión

La ejecución de OWASP ZAP mediante Docker permite realizar análisis de seguridad de forma simple y reproducible, generando reportes directamente en el proyecto sin depender de configuraciones locales.
