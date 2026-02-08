# 📘 Lemoncode API REST

API REST con features opcionales de la práctica del módulo 4 utilizando **Node.js**, **Express**, **TypeScript** y **MongoDB**.

Se han añadido las siguientes funcionalidades en esta parte opcional:

- **Endpoint de login**
- **Endpoint para actualizar el detalle de una casa**
- **Se han securizado algunos endpoints para que solo puedan ser usados por un usuario admin**

La API puede funcionar en dos modos:

- **Mock** (sin base de datos real)
- **MongoDB real** (colecciones `listingsAndReviews` y `users`)

---

## 🚀 Tecnologías utilizadas

- **Node.js + Express (v5)**
- **TypeScript**
- **MongoDB (Driver oficial)**
- **Docker Compose** (para levantar la base de datos local)
- **Vitest** (testing)
- **tsx** (ejecución con hot reload)
- Arquitectura por capas con repositorios intercambiables (mock / MongoDB)

---

## 📁 Estructura general del proyecto

```
src/
  common/
  console-runners/
  core/
    constants/
    models/
    security/
    servers/
  dals/
    house/
      house repository
    user/
      user repository
    mock-data
  pods/
    house/
      house.api.ts
      house.mappers.ts
      house.model.ts
    security/
      security.api.ts
  index.ts
```

---

## ⚙️ Configuración de entorno

Crea un archivo **.env** en la raíz con variables similares a las que hay en .env.example entre las que se encuentran:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017
MONGO_DB=sample_airbnb
IS_API_MOCK=false
```

### 🔧 Valores importantes

- `IS_API_MOCK=true` → usa el repositorio mock
- `IS_API_MOCK=false` → usa la base de datos MongoDB

---

## 🐳 MongoDB local con Docker

La API incluye un script que levanta una base de datos Docker automáticamente.

Para iniciar la API **con DB local**:

```bash
npm start
```

---

## ▶️ Scripts disponibles

| Script                          | Descripción                                             |
| ------------------------------- | ------------------------------------------------------- |
| `npm start`                     | Arranca la API + MongoDB local + type-check en paralelo |
| `npm run start:dev`             | Arranca la API con hot reload                           |
| `npm run start:console-runners` | Arranca la consola interactiva + type-check + DB        |
| `npm run console-runners`       | Ejecuta únicamente la consola interactiva               |
| `npm run start:local-db`        | Levanta MongoDB con Docker                              |
| `npm run type-check`            | Revisa tipos con TypeScript                             |
| `npm run type-check:watch`      | Revisa tipos en modo watch                              |
| `npm test`                      | Ejecuta tests con Vitest                                |
| `npm run test:watch`            | Tests en modo watch                                     |

## 📡 Endpoints disponibles

### **GET /api/houses?page=1&pageSize=10**

Devuelve una lista de casas paginada.

**Ejemplo de respuesta:**

```json
[
  {
    "id": "123",
    "name": "Beautiful Apartment",
    "address": {},
    "summary": "...",
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 1,
    "reviews": []
  }
]
```

---

### **GET /api/houses/:id**

Devuelve una casa por su identificador.

---

### **POST /api/houses/review/:id**

Inserta una nueva review en la casa indicada.

**Body esperado:**

```json
{
  "reviewer_name": "Paco Pérez",
  "comments": "Great stay!"
}
```

### **PATCH /api/houses/:id**

Modifica los campos que le pases en el body.

**Body esperado:**

```json
{
  "bedrooms": 5,
  "beds": 5
}
```

### **PATCH /api/security/login**

Endpoint para autenticarse en el sistema.

**Body esperado:**

```json
{
  "email": "admin@email.com",
  "password": "louvre"
}
```

---

## 🏗️ Arquitectura del repositorio

### Repositorio dinámico (mock / MongoDB)

En `dals/index.ts`:

```ts
export const houseRepository = ENV.IS_API_MOCK
  ? mockRepository
  : mongoDBRepository;
```

Esto permite:

- ejecutar la API sin base de datos (`mockRepository`)
- trabajar con Mongo real (`mongoDBRepository`)

---

## 🧪 Testing

Los tests se ejecutan con **Vitest**:

```bash
npm test
```

---
