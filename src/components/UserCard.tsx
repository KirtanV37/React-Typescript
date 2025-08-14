type UserCardProps<T> = {
  name: string;
  age?: number;
  data: T; // Generic type [In other words "Dynamic content"]
  role: "admin" | "user"; // Union type
  onSelect: (id: number, name: string) => void; // CB with args
};

const UserCard = <T,>({
  data,
  name,
  onSelect,
  role,
  age,
}: UserCardProps<T>) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Age:{age}</p>
      <pre>Data: {JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => onSelect(101, name)}>Select</button>
    </div>
  );
};

export default UserCard;

/*

A generic is a placeholder for a type that you can fill in later when using the component or function.

Think of it like:- “This component works for any type you give me — you tell me what type T is.”

🔥 Key point:

-> The <T,> syntax tells TypeScript:

-> This component is generic, and expects a type parameter T

-> UserCardProps<T> is then resolved using that T

Parent:- 
<UserCard
  name="Kirtan"
  role="admin"
  data={{ permissions: ['read', 'write'], level: 10 }}
  onSelect={handleClick}
/>

➡️ TypeScript sees:

T = {
  permissions: string[];
  level: number;
}

So inside UserCard, data is strictly typed as:
{
  permissions: string[];
  level: number;
}

So:-

✅ <T,> is not multiple generics
✅ It’s just one generic
✅ The comma helps TypeScript parse it correctly inside .tsx files

✅ TL;DR:-

| Syntax          | Means                             |
| --------------- | --------------------------------- |
| `<T>`           | In `.ts` files = OK               |
| `<T>() => ...`  | In `.tsx` = 🚫 Ambiguous with JSX |
| `<T,>() => ...` | ✅ Type-safe and unambiguous      |

*/
