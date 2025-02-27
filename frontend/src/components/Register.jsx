import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", phone: "", password: "" });

  const handleRegister = () => {
    alert(`Registered: ${formData.name}`);
  };

  return (
    <div>
      <h3>Register</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
