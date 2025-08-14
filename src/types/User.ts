export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

/*

| `type User` or `interface User`               | = Blueprint for user objects    |
| --------------------------------------------- | ------------------------------- |
| Helps `useState`, `axios.get()`, `.map()`     | be safe and smart               |
| Gives **IntelliSense** and **error checking** | at compile time                 |
| Prevents bugs                                 | like using wrong property names |

-> response gives only those key as destructure that define in the interface. 

*/
