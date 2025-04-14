import Sidebar from "../ui/Sidebar";
import HeroSlider from "../ui/HeroSlider";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex container m-auto">
          <Sidebar />
          <HeroSlider />
        </div>
      </div>
    </>
  );
}
