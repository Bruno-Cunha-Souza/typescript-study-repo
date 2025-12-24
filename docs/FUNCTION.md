## Functions

Functions are one of the fundamental building blocks in TypeScript. They allow you to encapsulate reusable logic, making your code more modular and easier to maintain. TypeScript enhances JavaScript functions by adding static types to function parameters and return values.

### Declaration

```typescript
function add(a: number, b: number): number {
    return a + b;
}
```

### Expression

```typescript
const subtract = function (a: number, b: number): number {
    return a - b;
};
```

### Arrow Functions

```typescript
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Arrow Function with Implicit Return
const divide = (a: number, b: number): number => a / b;
```

### Void Return Type

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

### Function Parameters

```typescript
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}!`;
}
```

### Function with Default and Rest Parameters

```typescript
//  Default Parameter
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}
//  Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

### Overriding Function Types

```typescript
let myFunction: (x: number, y: number) => number;
myFunction = function (a: number, b: number): number {
    return a + b;
};
```
