import BurgerFrame from "./components/BurgerFrame/BurgerFrame";
import Header from "./components/Header/Header";

export default function Home() {
  return <div className="w-full min-h-screen flex flex-col bg-[#000000]">
    <Header/>
    <BurgerFrame/>
  </div>;
}
