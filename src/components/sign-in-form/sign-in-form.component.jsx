import { useState } from "react";
import { FormInput } from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  /**
   * Firebase handlers
   */

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  /**
   * Form handlers
   */
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      // if (error.code === "auth/email-already-in-use") {
      //   alert("Já existe um utilizador registado com esse email");
      // } else {
      console.error("user creation encontered an error", error);
      // }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Já tem conta?</h2>
      <span>Entrar com email e password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Entrar</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Entrar com Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
