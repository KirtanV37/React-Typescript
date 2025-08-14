import { useState, type ChangeEvent, type FormEvent } from "react";

type FormData = {
  name: string;
  password: string;
};

const FormHandling = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem" }}
    >
      <div>
        <label>
          Name:
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:{" "}
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;

/*

Syntax:- EventName<NameOfElementOnWhichEventHappening>
e: ChangeEvent<HTMLInputElement>
    
✅ Common Event Types (Cheat Sheet):-

// Input field
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}

// Form submission
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

// Button click
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {}

// Textarea
const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {}

// Select dropdown
const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {}

*/
