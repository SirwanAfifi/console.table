a super simple implementation of console.table in node.js  

```
let arr = [
    { firstName: 'Sirwan', lastName: 'Afifi', age: 27 },
    { firstName: 'Person2', lastName: 'P2', age: 32 }
];

console.table(arr);
```

```
------------------------------------
firstName	lastName	age
------------------------------------
Sirwan		Afifi		27
------------------------------------
Person2		P2		32
------------------------------------
```