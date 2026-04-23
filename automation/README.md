# Cypress – Automatización E2E con Docker

## Descripción

Este módulo contiene pruebas automatizadas end-to-end desarrolladas con Cypress. La ejecución de los tests se encuentra containerizada mediante Docker, lo que permite contar con un entorno reproducible e independiente del sistema local.

El objetivo es validar los flujos principales de la aplicación simulando el comportamiento real de un usuario, asegurando consistencia en la ejecución de las pruebas.

---

## Alcance de pruebas

Se automatizaron los siguientes escenarios:

* Navegación inicial de la aplicación
* Registro de usuario
* Login (correcto e incorrecto)
* Navegación por categorías (Laptops, Monitors)
* Flujo de compra
* Validación del carrito
* Proceso de finalización de compra
* Formulario de contacto
* Validaciones negativas
* Pruebas de accesibilidad

---

## Estructura de pruebas

Los tests se organizan por funcionalidades:

* `index.cy.js` → validaciones iniciales
* `sign-up.cy.js` → registro de usuario
* `log-in.cy.js` → autenticación
* `log-in-wrong-user-password.cy.js` → validaciones negativas
* `laptop-section.cy.js` → navegación por categoría
* `monitors-section.cy.js` → navegación por categoría
* `buy-a-product.cy.js` → flujo de compra
* `buy-product-and-see-it-on-the-cart.cy.js` → validación de carrito
* `finalaze-purchase.cy.js` → compra completa
* `finalize-purchase-validation.cy.js` → validaciones del proceso de compra
* `contact.cy.js` → formulario de contacto
* `email-validation-in-contact-page.cy.js` → validación de email
* `about-us-page.cy.js` → navegación informativa
* `accesibility.cy.js` → pruebas de accesibilidad

---

## Tipos de validaciones implementadas

Las pruebas incluyen:

* Validación de visibilidad de elementos
* Interacciones de usuario (click, input, navegación)
* Verificación de cambios en la UI
* Validación de mensajes de error (alerts)
* Validaciones negativas
* Validación de flujos completos de negocio
* Pruebas de accesibilidad automatizadas

---

## Accesibilidad

Se integró `cypress-axe` para detectar problemas de accesibilidad.

Para instalar la herramienta:

* Navegar dentro de la carpeta donde está Cypress y ejecutar:

```
npm install --save-dev cypress-axe
```

Permite detectar:

* errores en atributos ARIA
* problemas de contraste
* ausencia de labels en formularios

---

## Ejecución de pruebas con Docker

Se utiliza Docker para ejecutar los tests en un entorno aislado.

### Build de la imagen

Desde la carpeta `automation/`:

```
docker build -f docker/Dockerfile.cypress -t cypress-tests .
```

### Ejecución de los tests

```
docker run cypress-tests
```

### Persistencia de resultados (opcional)

Para conservar screenshots, videos y logs:

```
docker run -v $PWD:/e2e cypress-tests
```

---

## Ejecución local

Instalar dependencias:

```
npm install
```

Ejecutar en modo interactivo:

```
npx cypress open
```

Ejecutar en modo headless:

```
npx cypress run
```

---

## Buenas prácticas aplicadas

* Separación de tests por funcionalidades
* Uso de assertions para validar comportamiento real
* Inclusión de testing negativo
* Integración de accesibilidad como parte del testing
* Ejecución en entorno containerizado para asegurar reproducibilidad

---

## Conclusión

Las pruebas automatizadas permiten validar de forma consistente los flujos críticos de la aplicación, detectando fallos funcionales y problemas de accesibilidad.

La containerización con Docker asegura que los tests puedan ejecutarse en cualquier entorno de manera confiable, facilitando su futura integración en pipelines de CI/CD.

