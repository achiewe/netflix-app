import SignInButton from "./SignInButton";
import SignInInput from "./SignInInput";

// sign in Card
export default function SignInCard() {
  return (
    <div className="w-full min-h-[600px] flex max-w-[450px] flex-col px-[68px] py-[48px] bg-[rgba(0,0,0,0.7)] z-10">
      <header className="text-left">
        <h1 className="font-bold text-[#ffffff] text-2xl mb-[28px]">Sign In</h1>
      </header>
      <div className="w-full flex flex-col gap-[16px]">
      <SignInInput />
      <SignInButton/>
      </div>
    </div>
  );
}
