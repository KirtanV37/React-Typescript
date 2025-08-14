import React from "react";

type UserProps = {
  name: string;
  age?: number;
};
const User: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h5>Hello, {name}!</h5>
      <p>Age: {age}</p>
    </div>
  );
};

export default User;

/*

// ✅ With React.FC , Without create a type;

const MyComponent: React.FC<{ name: string }> = ({ name }) => <p>{name}</p>;
const MyComponent: React.FC<{ name: string, age: number }> = ({ name,age }) => <p>{name}{age}</p>;

// ✅ Without React.FC (recommended by many)
type Props = { name: string };
const MyComponent = ({ name }: Props) => <p>{name}</p>;

type Props = { name: string, age: number};
const MyComponent = ({name,age}: Props) => <p>{name,age}</p>

// You pass props from the parent, but you define (type) props in the child.

*/
