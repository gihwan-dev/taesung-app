import SignUpForm from "src/features/signup/components/SignUpForm";
import SignUpLogo from "src/features/signup/components/SignUpLogo";

const SignUpPage = () => {
  return (
    <div className="flex px-8 py-20 gap-20 flex-col overflow-auto items-center w-screen h-screen">
      <SignUpLogo />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
