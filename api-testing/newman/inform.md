## Informe de pruebas con Newman (API Testing)

- Colección de pruebas ejecutada con el software Newman (CLI de Postman).
- El objetivo de las pruebas fue validar endpoints web y API asociados a la página de Demoblaze.

---

## Resumen de ejecución

┌─────────────────────────┬─────────────────────┬────────────────────┐
│                         │            executed │             failed │
├─────────────────────────┼─────────────────────┼────────────────────┤
│              iterations │                   1 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│                requests │                   7 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│            test-scripts │                   7 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│      prerequest-scripts │                   0 │                  0 │
├─────────────────────────┼─────────────────────┼────────────────────┤
│              assertions │                  35 │                  0 │
├─────────────────────────┴─────────────────────┴────────────────────┤
│ total run duration: 2.8s                                            │
├──────────────────────────────────────────────────────────────────────┤
│ total data received: 81.31kB (approx)                               │
├──────────────────────────────────────────────────────────────────────┤
│ average response time: 382ms                                        │
│ [min: 247ms, max: 696ms, s.d.: 151ms]                               │
└──────────────────────────────────────────────────────────────────────┘

---

## Casos de prueba ejecutados

### GET requests

#### Get index
- GET /
- Status: 200 OK
- Status code correcto
- Contenido HTML válido
- Contiene referencia a Store
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

#### List products
- GET /prod.html
- Status: 200 OK
- Status code correcto
- Contenido HTML válido
- Contiene referencia a Store
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

#### Get product detail
- GET /prod.html?idp_=3#
- Status: 200 OK
- Status code correcto
- Contiene información del producto (nexus)
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

#### Get cart
- GET /cart.html
- Status: 200 OK
- Status code correcto
- Contiene estructura de carrito
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

### POST requests

#### Sign-up
- POST https://api.demoblaze.com/signup
- Status: 200 OK
- Respuesta JSON válida
- Manejo de usuario duplicado
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

#### Login
- POST https://api.demoblaze.com/login
- Status: 200 OK
- Respuesta JSON válida
- Manejo de credenciales incorrectas
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

#### Place order
- POST https://api.demoblaze.com/view
- Status: 200 OK
- Respuesta JSON válida
- Contiene referencia a producto (Samsung Galaxy S6)
- Tiempo de respuesta aceptable
- Respuesta no vacía

---

## Conclusiones

- 100% de requests ejecutados correctamente
- 0 errores funcionales detectados
- API estable en condiciones de prueba
- Tiempos de respuesta dentro de rangos aceptables para entorno de testing

---

## Entorno de prueba

- Plataforma: Demoblaze
- Herramienta: Newman (Postman CLI)
- Tipo de pruebas: API + UI endpoints híbridos
- Ejecución: local (CLI)

---

## Observaciones QA

- La API responde correctamente en escenarios positivos y negativos.
- Los endpoints muestran buena estabilidad bajo una iteración simple.
- Recomendado ampliar pruebas con:
  - carga concurrente
  - más iteraciones
  - validación de performance SLA
