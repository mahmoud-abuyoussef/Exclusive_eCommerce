import { Link } from "react-router";

export default function BtnLink({ path, title }: { path: string; title: string }) {
  return (
    <Link to={path} className="bg-main-color text-white py-3 px-10 rounded w-fit block">
      {title}
    </Link>
  );
}
