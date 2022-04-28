import { SignUpForm } from "../../components/sign-up-form/sign-up-form.component";
import { SignInForm } from "../../components/sign-in-form/sign-in-form.component";

export const Auth = () => {
  return (
    <div>
      <h1>Entrar</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
