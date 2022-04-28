import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { FormInput } from "../form-input/form-input.component";
import { Button, BUTTON_TYPES_CLASSES } from "../button/button.component";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  /**
   * Firebase handlers
   */
  const signInWithGoogle = async () => dispatch(googleSignInStart());

  /**
   * Form handlers
   */
  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
        case AuthErrorCodes.USER_DELETED:
          alert("email e/ou password incorrectos");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button type="submit">Entrar</Button>
          <Button type="button" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>
            Entrar com Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
