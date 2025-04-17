import Sidebar from "../ui/Sidebar";
import CountDown from "../ui/CountDown";
import HeroSlider from "../ui/HeroSlider";

export default function Home() {
  return (
    <>
      <div className="flex container m-auto">
        <Sidebar />
        <HeroSlider />
      </div>
      <div className="text-center m-5">
        <CountDown />
      </div>
    </>
  );
}
