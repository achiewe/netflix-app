import SignInInput from "./SignInInput";

// sign in Card
export default function SignInCard() {
  return (
    <div className="min-h-[600px] flex flex-col px-[68px] py-[48px] bg-[rgba(0,0,0,0.7)]">
      <header className="text-left">
        <h1 className="font-bold text-[#ffffff] text-2xl mb-[28px]">Sign In</h1>
      </header>
      <SignInInput />
    </div>
  );
}
