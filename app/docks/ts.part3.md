# 🛡 Пользовательские защиты типа (Type Guards) в TypeScript

## 📖 Что это?

Пользовательская защита типа (`type guard`) — это функция, которая позволяет **сузить тип** переменной внутри блока `if`/`else`.

Используется, чтобы **безопасно проверить и указать**, что объект соответствует определённому типу.

---

## 🔧 Синтаксис

```ts
function isSomething(value: unknown): value is SomeType {
  return условие;
}
```

Ключевая часть — это `value is SomeType` в возвращаемом типе.

---

## 🧪 Пример 1: Проверка на строку

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const input: unknown = "hello";

if (isString(input)) {
  // внутри этого блока input: string
  console.log(input.toUpperCase()); // OK
}
```

---

## 🧪 Пример 2: Проверка на объект с полем

```ts
type User = { name: string };

function isUser(obj: unknown): obj is User {
  return typeof obj === "object" && obj !== null && "name" in obj;
}

const data: unknown = { name: "Alice" };

if (isUser(data)) {
  console.log(data.name); // тип: User
}
```

---

## 🧠 Где это полезно?

- В обработке `unknown`, `any`, `Record<string, any>`
- В `Array.filter(...)`
- В `if`, `switch`, `try-catch`
- В библиотеках валидации (`zod`, `io-ts`) — для ручной проверки схем

---

## 📌 Типовой шаблон

```ts
function isTypeName(value: unknown): value is TypeName {
  return ...; // логика проверки
}
```

---

## 🚀 Советы

- Всегда проверяй наличие полей (`"key" in value`)
- Проверяй типы (`typeof`, `Array.isArray`)
- Учитывай `null` и `undefined`
- Комбинируй с `asserts` для `never`

---

## 🧩 Ещё: `asserts value is Type`

Можно писать проверки, которые выбрасывают ошибку:

```ts
function assertIsUser(value: unknown): asserts value is User {
  if (!isUser(value)) throw new Error("Not a user");
}
```

После вызова `assertIsUser(value)`, TypeScript считает, что `value: User`.

https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html

---

## ✅ Пример: Фильтрация массива

```ts
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

const values: unknown[] = [1, "a", 2, null];

const onlyNumbers = values.filter(isNumber); // number[]
```

---

## 📚 Резюме

| Элемент          | Пример                                  |
| ---------------- | --------------------------------------- |
| Type guard       | `value is SomeType`                     |
| Проверка         | `typeof`, `in`, `Array.isArray()`       |
| Где используется | `if`, `filter`, `assert`, `try-catch`   |
| Для чего         | Сужение типа, безопасный доступ к полям |

---
