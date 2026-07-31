import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Button from "../../Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-2 w-full max-w-[1200px] mx-auto fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-2xl">
      <img
        src="./logo.png"
        alt="logo website"
        className="max-w-50 cursor-pointer hover:opacity-60 transition-all duration-300"
      />

      <Button
        title={"Premium"}
        icon={
          <AiOutlineSafetyCertificate className="fill-cyan-400 size-4 group-hover:animate-pulse" />
        }
        link="#"
      />
    </header>
  );
}
