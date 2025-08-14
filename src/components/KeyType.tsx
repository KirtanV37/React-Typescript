const KeyType = () => {
  const colors = {
    primary: "#ff0000",
    secondary: "#00ff00",
    accent: "#0000ff",
  } as const;

  const logger = typeof colors;
  console.log("logger: ", logger);

  // type ColorKeys = keyof typeof colors;
  // console.log("ColorKeys: ", ColorKeys); // as it is work at compile-time, so does not display at run-time

  // type ColorValues = (typeof colors)[ColorKeys];
  // console.log("ColorValues: ", ColorValues); // as it is work at compile-time, so does not display at run-time

  return <div>KeyType</div>;
};

export default KeyType;

/*

typeof:- gets the type of a value.

keyof:- gets the keys of a type as a union of string literals.

| Expression         | Meaning                                     |
| ------------------ | ------------------------------------------- |
| `typeof obj`       | Get the **type** of a variable              |
| `keyof Type`       | Get the **keys** of a type                  |
| `keyof typeof obj` | Get **keys of an object** as a union string |

1.
type ColorsType = typeof colors;

Output:- type ColorsType = {
  primary: string;
  secondary: string;
  accent: string;
};

2. type Keys = keyof colors; // ❌ Error: 'colors' only refers to a value

3. type ColorKeys = keyof typeof colors;

Output:- "primary" | "secondary" | "accent";   we get keys

and to get values:-

type ColorValues = (typeof colors)[typeof keyof colors]; // "#ff0000" | "#00ff00" | "#0000ff" 

or

type ColorKeys = keyof typeof colors;
type ColorValues = (typeof colors)[ColorKeys];

*/
