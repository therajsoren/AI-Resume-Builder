import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen md:w-full">
      <SignIn/>
    </div>
  )
}

export default SignInPage;