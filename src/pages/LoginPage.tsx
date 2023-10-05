import AuthPageLogo from "../features/login/components/AuthPageLogo";
import LoginForm from "../features/login/components/LoginForm";
import AuthPageLayout from "../layouts/AuthPageLayout";

const LoginPage = () => {
  return (
    <AuthPageLayout>
      <AuthPageLogo />
      <LoginForm />
    </AuthPageLayout>
  );
};

export default LoginPage;
