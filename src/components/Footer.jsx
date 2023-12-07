import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="min-h-[60px] bg-gray-200 text-black">
      <div className=" p-5 flex gap-5">
        <Logo />
        <div className="text-sm">
          DILKHUSH RAJ &copy; 2023 ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
