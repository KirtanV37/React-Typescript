import { useState, useEffect } from "react";
import axios from "axios";
import type { User } from "../types/User";

const Api = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: "1rem" }}>
          <strong>{user.name}</strong> ({user.email})
        </div>
      ))}
    </div>
  );
};

export default Api;

/*
axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")

-> This tells Axios:- “Expect the server to return an array of User objects.”

2. 🔐 So it’s like “structural filtering” at compile time:-

-> ✅ TypeScript doesn't strip the keys, but it hides them from you.
-> ✅ The object may contain more, but you’re only allowed to use what’s typed.

3. interface User {
  id: number;
  name: string;
  [key: string]: any; // 👈 optional catch-all for unknown fields
}

-> [key: string]: any; in a TypeScript type/interface works like a type-level version of ...rest in JavaScript destructuring — but with a different purpose and usage.

-> It means: “Besides id and name, this object can also have any other string-based keys, with any value.”

4. what if user define any key in interface, and it is not present in the response ?

-> ✅ TypeScript does not check the API response at runtime.
-> ⛔ undefined at runtime — no compile-time error.

✅ How to Handle This Correctly ?

-> ✅ Option 1: Make it Optional
-> ✅ Option 2: Validate Response (recommended for production),

Use a runtime validation tool like: zod, yup, io-ts, custom parsing
*/
