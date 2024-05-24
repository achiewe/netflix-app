import SignInInput from "./SignInInput";

export default function SignInCard() {
  return (
    <div className="min-h-[600px] flex flex-col px-[68px] py-[48px] bg-[#000000] opacity-70">
      <header className="text-left">
        <h1 className="font-bold text-[#ffffff] text-2xl z-50 mb-[28px]">
          Sign In
        </h1>
      </header>
      <SignInInput />
    </div>
  );
}
