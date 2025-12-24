## Types

### Array

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];
```

### Tuple

```typescript
let tuple: [string, number] = ["hello", 42];
```

### Enum

```typescript
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
```

### Any

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Void

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

### Null and Undefined

```typescript
let u: undefined = undefined;
let n: null = null;
```

### Never

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

### Object

```typescript
let obj: object = { name: "John", age: 30 };
```

### Unknown

```typescript
let notSure: unknown = 4;
notSure = "maybe a string instead";
if (typeof notSure === "string") {
    console.log(notSure.toUpperCase());
}
```

### Intersection Types

```typescript
interface Person {
    name: string;
}
interface Employee {
    employeeId: number;
}
type StaffMember = Person & Employee;
let staff: StaffMember = { name: "Alice", employeeId: 12345 };
```

### Union Types

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

### Literal Types

```typescript
let direction: "up" | "down" | "left" | "right";
direction = "up"; // valid
// direction = "forward"; // Error: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'.
```

### Type Aliases

```typescript
type Point = {
    x: number;
    y: number;
};
let p: Point = { x: 10, y: 20 };
```

### Function Types

```typescript
let add: (a: number, b: number) => number;
add = (x, y) => x + y;
```
