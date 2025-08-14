type SuperProp = {
  name: string;
  age?: number;
  tags: Array<string>;
  address: { city: string; zip: number };
  onClick: () => void;
};

const UserOne = ({ name, address, onClick, tags, age }: SuperProp) => {
  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>Age: {age}</p>
      <p>City: {address.city}</p>
      <p>Zip: {address.zip}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default UserOne;
