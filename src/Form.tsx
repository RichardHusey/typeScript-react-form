import React from 'react'

interface IFormProps {
  onValueSubmit: (data: FormData) => void;
}

export interface FormData {
  name: string;
  age: number;
}

function Form({ onValueSubmit = () => {} }: IFormProps) {
  const [formData, setFormData] = React.useState<FormData>({ name: '', age: 0 });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onValueSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;