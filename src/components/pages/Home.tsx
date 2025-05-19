import Sidebar from "../ui/Sidebar";
import CountDown from "../ui/CountDown";
import HeroSlider from "../ui/HeroSlider";
import SectionTitle from "../ui/SectionTitle";

export default function Home() {
  return (
    <>
      <div className="container m-auto">
        <section className="flex items-center">
          <Sidebar />
          <HeroSlider />
        </section>

        <section className="mt-20">
          <SectionTitle title={`Today's`} />
          <div>
            <h2 className="font-semibold text-4xl mt-10">Flash Sales</h2>

            <CountDown
              targetDate={{
                day: 5,
                hours: 10,
                minutes: 33,
                seconds: 10,
              }}
            />

            <CountDown
              targetDate={{
                day: 12,
                hours: 12,
                minutes: 13,
                seconds: 30,
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
