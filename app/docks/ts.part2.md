
# 🔷 Mapped Type, Conditional Type и Union Type в TypeScript

## 🔷 1. Mapped Type (Отображаемый тип)

### 📖 Определение:
Mapped Type — это тип, который **перебирает ключи другого типа** и **создаёт новый тип**, применяя трансформацию к каждому ключу.

### 🔧 Синтаксис:
```ts
type NewType = {
  [K in keyof BaseType]: TransformedValueType;
}
```

### 📦 Пример:
```ts
type User = {
  id: number;
  name: string;
};

type ReadonlyUser = {
  [K in keyof User]: Readonly<User[K]>;
};
// → {
//   id: number (readonly),
//   name: string (readonly)
// }
```

### 📌 Смысл:
Мы перебрали все ключи `id`, `name` и применили трансформацию (`Readonly<T>` или, например, `stringify<T>`).

---

## 🔶 2. Conditional Type (Условный тип)

### 📖 Определение:
Conditional Type — это тип, который **выбирает одно из двух значений** на основе условия `A extends B`.

### 🔧 Синтаксис:
```ts
T extends U ? X : Y
```

### 📦 Примеры:
```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

### 🧩 Комбинация с mapped type:
```ts
type OnlyStringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
```

### 📌 Здесь мы применяем **фильтрацию по типу значения** — оставляем только те ключи, где `T[K]` является строкой.

---

## 🟥 3. Union Type (Объединение типов)

### 📖 Определение:
Union Type — это тип, который может быть **одним из нескольких значений**.

### 🔧 Синтаксис:
```ts
type A = string | number | boolean;
```

### 📦 Пример:
```ts
type Roles = 'admin' | 'user' | 'guest';

function redirect(role: Roles) {
  // принимает только одно из трёх значений
}
```

### 📌 Как мы его получаем из mapped type:
```ts
type ValuesOnly = {
  a: 1;
  b: 2;
  c: 3;
}[keyof { a: 1; b: 2; c: 3 }];
// → 1 | 2 | 3
```

### 🧠 Мы просто “достаём” значения всех полей и объединяем их в один union.

---

## 🔁 Объединение всех трёх

```ts
type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never;
}[keyof T];
```

- **Mapped Type:** перебор по `keyof T`
- **Conditional Type:** фильтрация ключей по условию `T[K] extends boolean`
- **Union Type:** сборка значений (`K | never | ...`) в один union
