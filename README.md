# Docker Compose – QA Automation Suite (Demoblaze)

---

![Jenkins Pipeline](https://img.shields.io/badge/Jenkins-Pipeline-blue)
![Docker](https://img.shields.io/badge/Docker-Containers-blue)
![Cypress](https://img.shields.io/badge/Cypress-E2E-green)
![License](https://img.shields.io/badge/License-MIT-yellow)


## Descripción

Este módulo permite ejecutar de forma centralizada los distintos tipos de pruebas del proyecto utilizando **Docker Compose**.

Se integran tres capas principales de testing:

- **API Testing** → ejecutado con Newman (Postman)
- **E2E Testing** → ejecutado con Cypress
- **Security Testing** → ejecutado con OWASP ZAP

El objetivo es contar con una ejecución automatizada, reproducible y desacoplada del entorno local.

---

## Estructura de carpetas relevante

qa-repository-product-store/
├── api-testing/
│ ├── newman/
│ │ └── results-newman/
│ └── postman/
│ ├── collections/
│ └── enviroment/
│
├── automation/
│ ├── cypress/
│ └── docker/
│ └── Dockerfile.cypress
│
├── security/
│ └── docker-report/
│ ├── run.sh
│ ├── reporte.html
│ └── zap.yaml
│
└── docker-compose.yml


---

## Servicios definidos

### 1. API Tests (Newman)

- Imagen: `postman/newman:latest`
- Ejecuta colección de Postman
- Usa variables de entorno
- Genera reporte HTML

Salida:

api-testing/newman/results-newman/report.html


---

### 2. E2E Tests (Cypress)

- Build personalizado desde `Dockerfile.cypress`
- Ejecuta todos los tests de Cypress en modo headless
- Monta los tests desde el host

---

### 3. Security Tests (OWASP ZAP)

- Imagen: `zaproxy/zap-stable`
- Ejecuta `zap-baseline.py`
- Analiza la aplicación en busca de vulnerabilidades
- Genera reporte HTML

Salida:
security/docker-report/reporte.html


---

## Flujo de ejecución

Los servicios se ejecutan en el siguiente orden:

1. `api-tests`
2. `cypress-tests`
3. `zap-tests`

Esto se controla mediante `depends_on`.

---

## Cómo ejecutar

Desde la raíz del proyecto:

```bash
docker-compose up --build

# ejecución en segundo plano

docker-compose up -d --build

# detener ejecución

docker-compose down

Consideraciones
Los volúmenes permiten persistir resultados fuera del contenedor
No se requiere instalación local de herramientas (Cypress, Newman, ZAP)
El sistema es completamente portable
Buenas prácticas aplicadas
Separación por tipo de testing
Uso de contenedores independientes
Automatización del flujo completo de QA
Generación de reportes reutilizables
Uso de red interna (qa-network) para aislamiento
Conclusión

El uso de Docker Compose permite unificar la ejecución de pruebas funcionales, de integración y de seguridad en un único comando, facilitando la automatización y escalabilidad del proceso de QA.


# Requisitos

## Requisitos mínimos

- Linux
- Docker
- Docker Compose

---

# Verificación del Entorno

El proyecto incluye un script de validación:

```bash
chmod +x set-up.sh
./set-up.sh
```

Este script verifica:

- Instalación de Docker
- Instalación de Docker Compose
- Estructura mínima necesaria

---
