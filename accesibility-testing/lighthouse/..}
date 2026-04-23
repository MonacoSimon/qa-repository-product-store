# Accessibility & Performance Analysis Report – Demoblaze

## Objetivo

Evaluar la accesibilidad y el rendimiento de la aplicación web mediante herramientas automatizadas:

* **axe (integrado con Cypress)** → detección de problemas de accesibilidad
* **Lighthouse** → análisis de performance, accesibilidad, buenas prácticas y SEO

El objetivo es identificar barreras de uso y oportunidades de mejora en la experiencia del usuario.

---

## Resumen de hallazgos

Se detectaron múltiples problemas tanto de accesibilidad como de rendimiento.

### Accesibilidad (axe + Lighthouse)

Principales problemas:

* bajo contraste en elementos visuales
* imágenes sin atributos `alt`
* enlaces sin nombre accesible

Estas fallas afectan directamente a usuarios con tecnologías asistivas.

---

### Performance (Lighthouse)

* Performance score: **44 (bajo)**
* Problemas principales:

  * alto tiempo de carga del contenido principal (LCP)
  * recursos bloqueantes
  * uso ineficiente de caché
  * imágenes no optimizadas

---

## Resultados de accesibilidad (axe)

Se detectaron **3 tipos de violaciones principales**:

### 1. Problemas de contraste

* Tipo: `color-contrast`
* Impacto: Alto
* Ocurrencias: 18 nodos

**Descripción:**
El contraste entre texto y fondo no cumple con estándares WCAG.

**Impacto:**
Dificulta la lectura, especialmente para usuarios con baja visión.

**Recomendación:**
Ajustar colores para cumplir ratios mínimos de contraste.

---

### 2. Imágenes sin atributo alt

* Tipo: `image-alt`
* Impacto: Alto
* Ocurrencias: 2 nodos

**Descripción:**
Imágenes sin descripción alternativa.

**Impacto:**
Los lectores de pantalla no pueden interpretar el contenido.

**Recomendación:**
Agregar atributos `alt` descriptivos.

---

### 3. Enlaces sin nombre accesible

* Tipo: `link-name`
* Impacto: Medio
* Ocurrencias: 9 nodos

**Descripción:**
Links sin texto identificable o accesible.

**Impacto:**
Dificulta la navegación mediante tecnologías asistivas.

**Recomendación:**
Asegurar que todos los enlaces tengan texto descriptivo.

---

## Resultados de Lighthouse

### Métricas principales

* First Contentful Paint (FCP): **2.8 s**
* Largest Contentful Paint (LCP): **10.4 s**
* Total Blocking Time (TBT): **400 ms**
* Cumulative Layout Shift (CLS): **0.235**
* Speed Index: **5.8 s**

---

## Problemas de rendimiento detectados

### 1. Recursos bloqueantes

**Descripción:**
Archivos CSS y JS bloquean el renderizado inicial.

**Impacto:**
Retrasa la carga del contenido visible.

**Recomendación:**
Minimizar y diferir carga de recursos no críticos.

---

### 2. Uso ineficiente de caché

**Ahorro estimado:** ~2.2 MB

**Impacto:**
Mayor tiempo de carga en visitas repetidas.

**Recomendación:**
Configurar correctamente headers de caché.

---

### 3. Imágenes no optimizadas

**Ahorro estimado:** ~831 KB

**Impacto:**
Incrementa el tiempo de carga.

**Recomendación:**
Comprimir imágenes y usar formatos modernos.

---

### 4. JavaScript y CSS no utilizados

* CSS sin usar: ~153 KB
* JS sin usar: ~165 KB

**Impacto:**
Carga innecesaria de recursos.

**Recomendación:**
Eliminar código no utilizado.

---

### 5. Layout shifts (CLS alto)

**Valor:** 0.235

**Impacto:**
Elementos que se mueven durante la carga afectan la experiencia del usuario.

**Recomendación:**
Definir tamaños explícitos para imágenes y elementos dinámicos.

---

## Accesibilidad según Lighthouse

* Score: **82**

Problemas detectados:

* imágenes sin `alt`
* enlaces sin nombre accesible
* contraste insuficiente
* ausencia de landmark principal (`main`)

---

## SEO

* Score: **82**

Problemas detectados:

* ausencia de meta descripción
* imágenes sin atributos `alt`

---

## Análisis general

La aplicación presenta deficiencias tanto en accesibilidad como en rendimiento.

Los principales problemas se concentran en:

* falta de optimización de recursos
* deficiencias en accesibilidad básica (alt, contrastes, labels)
* problemas en la carga inicial del contenido

Estos factores afectan la experiencia de usuario y el cumplimiento de estándares web.

---

## Recomendaciones generales

### Accesibilidad

* asegurar contraste adecuado en todos los elementos
* agregar atributos `alt` en imágenes
* garantizar nombres accesibles en enlaces
* incorporar landmarks semánticos (`main`, `nav`, etc.)

### Performance

* optimizar imágenes
* eliminar CSS y JS no utilizados
* implementar cacheo eficiente
* reducir recursos bloqueantes

---

## Conclusión

La aplicación no presenta fallas críticas, pero sí múltiples oportunidades de mejora en accesibilidad y rendimiento.

Las mejoras propuestas permitirían:

* una mejor experiencia para usuarios con discapacidades
* reducción en tiempos de carga
* mayor cumplimiento de estándares web

Se recomienda priorizar la optimización de performance y la corrección de problemas básicos de accesibilidad.
