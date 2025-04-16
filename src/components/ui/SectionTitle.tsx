export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative">
      <span className="text-main-color m-5 block font-bold before:content-[''] before:absolute before:w-5 before:h-10 before:bg-main-color before:rounded before:-left-2  before:-top-2">{title}</span>
    </div>
  );
}
