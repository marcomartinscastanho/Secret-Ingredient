import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("As passwords não condizem");
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Já existe um utilizador registado com esse email");
      } else {
        console.error("user creation encontered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Ainda não tem conta?</h2>
      <span>Registar com email e password</span>
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

        <Button type="submit">Registar</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
