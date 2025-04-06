import { Link } from "react-router";

export default function Banner({ locale, changeLanguage }: { locale: string; changeLanguage: (language: string) => void }) {
  return (
    <section className="bg-black text-white">
      <div className="container flex">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/">Shop Now</Link>
        </p>
        <select value={locale} onChange={(e) => changeLanguage(e.target.value)} name="langauge" id="langauge">
          <option value="en">الانجليزية</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </section>
  );
}
