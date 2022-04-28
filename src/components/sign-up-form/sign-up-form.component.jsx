import { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As passwords não condizem");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Já existe um utilizador registado com esse email");
      } else {
        console.error("user creation encontered an error", error);
      }
    }
  };

  return (
    <div>
      <h1>Registar com email e password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          label="Nome"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          required
          label="Confirme a Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Registar</button>
      </form>
    </div>
  );
};

export default SignUpForm;
