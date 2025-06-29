# Angular Notes

## Introduction

Angular is a powerful framework for building client-side applications using HTML, CSS, and JavaScript/TypeScript.

* **AngularJS (Version 1.x):** The initial version of the framework.
* **Angular (Version 2+):** A complete rewrite of AngularJS in TypeScript, offering significant improvements in performance, structure, and developer experience.

Traditional JavaScript or jQuery code can often become messy and difficult to test in large applications. Angular addresses this by providing:

* A clean application structure.
* Support for reusable code components.
* Excellent integration with testing frameworks.

## Architecture

An Angular application typically follows a client-server architecture:

* **Frontend (Client):**
  * Contains the User Interface (UI).
  * Triggers API calls to the backend to fetch or send data.
* **Backend (Server):**
  * Handles data storage and processing.
  * Exposes API endpoints for the frontend to interact with.
  * Contains the business logic.

Angular applications are shipped as **web packs**, which are collections of smaller JavaScript bundles. These bundles optimize loading times by separating code for styles, inline scripts, vendor libraries, and more.

**Hot Module Replacement/Reloading:** A feature that automatically refreshes the browser whenever source code is modified, significantly speeding up development.

---

## TypeScript

TypeScript (TS) is a superset of JavaScript, meaning it includes all JavaScript features plus additional capabilities.

* **Strongly/Statically Typed:** TS allows you to define data types for variables, functions, and objects. This helps catch errors at compile time rather than runtime.
* **Object-Oriented Features:** TS includes classes, interfaces, and access modifiers, facilitating object-oriented programming.
* **Transpilation:** TypeScript code is **transpiled** into plain JavaScript code, which web browsers can understand and execute. This process happens automatically when you use commands like `ng serve`.
  * Manual transpilation: `tsc file_name.ts` converts `file_name.ts` into `file_name.js`.

### Variables in TypeScript

* **`var` (JavaScript):** Variables declared with `var` are function-scoped. For example, a variable declared inside an `if` block with `var` is accessible outside that block but within the same function.
* **`let` (TypeScript/ES6):** Variables declared with `let` are block-scoped. Their scope is limited to the block (e.g., `if` block, `for` loop) in which they are defined.
  * When TS (ES6) code with `let` is transpiled to ES5, the `let` keyword might be replaced with `var` to ensure broader browser compatibility, while still maintaining the intended block-scoping behavior during compilation.

### Types in TypeScript

TypeScript supports various built-in and custom data types:

* **`number`:** For both integers and floating-point numbers.
* **`boolean`:** For true/false values.
* **`string`:** For textual data.
* **`any`:** A flexible type that can hold any data type after declaration. Use with caution as it bypasses type checking.
* **`number[]`:** An array that specifically stores numbers. (e.g., `string[]` for an array of strings).
* **`enum`:** Used to define a set of named constants. By default, values are auto-incremented starting from 0.

### Type Assertion

Similar to typecasting in other languages, type assertion allows you to tell the compiler the specific type of a variable, especially when its type is `any`. This enables you to access type-specific properties and methods.

```typescript
let value: any = "hello world";
let len: number = (<string>value).length; // Type assertion
```

### Arrow Functions

Arrow functions provide a concise syntax for writing function expressions. They are similar to lambda functions in Java.

```typescript
// Traditional function
const add = function (a: number, b: number): number {
  return a + b;
};

// Arrow function
const addArrow = (a: number, b: number): number => a + b;
```

### Interfaces

Interfaces in TypeScript are used to declare custom types. They define the structure that an object must adhere to. Conventionally, the first letter of an interface name is capitalized.

```typescript
interface Point {
  x: number;
  y: number;
}
```

### Classes

Classes in TypeScript group related variables (properties) and functions (methods) together, adhering to the cohesion principle of object-oriented programming.

* **Constructor Function**: Used to initialize the properties of an object when it is created. 
* **Constructor Overloading**: Unlike Java or C++, TypeScript does not support constructor overloading. Instead, you can make parameters optional by using the `?` symbol. If one parameter is optional, all subsequent parameters to its right must also be optional.

### Access Modifiers

TypeScript supports three access modifiers:
* `public`: (Default) Members are accessible from anywhere. 
* `private`: Members are only accessible within the class they are declared in. 
* `protected`: Members are accessible within the class and by its subclasses.

By setting an access modifier directly on constructor parameters, you can make the code less redundant by automatically declaring and initializing the class properties.

```typescript
class MyClass {
  constructor(private _name: string, public age: number) {}
}
```

### Properties (Getters and Setters)

Properties provide a way to access and modify class variables using get and set keywords, similar to getters and setters in Java. This allows for controlled access and potential logic when reading or writing values. Internal variables are often prefixed with an underscore `_` to distinguish them from the public properties.

```typescript
class MyObject {
  private _count: number = 0;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    if (value < 0) {
      throw new Error("Count cannot be negative.");
    }
    this._count = value;
  }
}
```

### Modules
All code in TypeScript is organized into modules, which are independent files containing related code. Modules help in structuring large applications and promoting code reusability. 
* `export`: You need to explicitly export members (variables, functions, classes, interfaces) from a module to make them accessible in other files. 
* `import`: You use the import keyword to bring exported members from other modules into your current file.

**Template Strings (Backticks ``):** Use backticks for defining string templates, allowing you to embed expressions using the `${}` syntax.

```typescript
const object = new MyObject();
object.count = 5;
console.log(`Count: ${object.count}`); // Output: Count: 5
```

---

## Commands

* `ng new <project-name>`: Initializes a new Angular project. 
* `ng serve`: Compiles the application and launches a development server, typically accessible at `http://localhost:4200`. It also enables hot module replacement.
