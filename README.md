# 📘 Lemoncode API REST

API REST con features obligatorias de la práctica del módulo 4 utilizando **Node.js**, **Express**, **TypeScript** y **MongoDB**.
Permite consultar un listado de casas, obtener una casa por ID y añadir reseñas.
La API puede funcionar en dos modos:

- **Mock** (sin base de datos real)
- **MongoDB real** (colección `listingsAndReviews`)

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
  core/
    constants/
    servers/
  dals/
    house.mock-repository.ts
    house.mongodb-repository.ts
    house.repository.ts
    index.ts
  pods/
    house/
      house.api.ts
      house.mappers.ts
      house.model.ts
  index.ts
```

Puntos importantes:

- `dals/index.ts` exporta dinámicamente el repositorio mock o Mongo según la variable `ENV.IS_API_MOCK`.
- `mongodb-repository` implementa la capa de acceso real a datos.
- `house.api.ts` expone las rutas REST.

---

## ⚙️ Configuración de entorno

Crea un archivo **.env** en la raíz con variables similares:

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

Esto ejecuta en paralelo:

- `start:local-db` → levanta MongoDB con Docker
- `start:dev` → API con hot reload
- `type-check:watch` → TypeScript en modo estricto

---

## ▶️ Scripts disponibles

| Script                     | Descripción                                             |
| -------------------------- | ------------------------------------------------------- |
| `npm start`                | Arranca la API + MongoDB local + type-check en paralelo |
| `npm run start:dev`        | Arranca la API con hot reload                           |
| `npm run start:local-db`   | Levanta MongoDB con Docker                              |
| `npm run type-check`       | Revisa tipos con TypeScript                             |
| `npm run type-check:watch` | Revisa tipos en modo watch                              |
| `npm test`                 | Ejecuta tests con Vitest                                |
| `npm run test:watch`       | Tests en modo watch                                     |

---

## 📡 Endpoints disponibles

### **GET /api/house?page=1&pageSize=10**

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

### **GET /api/house/:id**

Devuelve una casa por su identificador.

---

### **POST /api/house/review/:id**

Inserta una nueva review en la casa indicada.

**Body esperado:**

```json
{
  "reviewer_name": "John Doe",
  "comments": "Great stay!"
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

Los tests se ejecutan con **Vitest**, usando configuración personalizada:

```bash
npm test
```

---
