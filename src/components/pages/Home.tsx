import Sidebar from "../ui/Sidebar";
import CountDown from "../ui/CountDown";
import HeroSlider from "../ui/HeroSlider";

export default function Home() {
  const targetDateTime = new Date();
  targetDateTime.setDate(targetDateTime.getDate() + 3);
  targetDateTime.setHours(targetDateTime.getHours() + 23);
  targetDateTime.setMinutes(targetDateTime.getMinutes() + 19);
  targetDateTime.setSeconds(targetDateTime.getSeconds() + 56);
  localStorage.setItem("targetDateTime", JSON.stringify(targetDateTime.getTime()));

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
