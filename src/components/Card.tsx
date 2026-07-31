import Button from "./Button";
import type { jsonCardProp } from "./codeLibraryProvider";
import { FaRegBell } from "react-icons/fa";

export default function Card({
  src,
  alt,
  titleCard,
  courseDuration,
  linkCard,
}: jsonCardProp) {
  return (
    <div className="w-45 h-70 text-blue-01 shadow shadow-blue-01 rounded-2xl p-2 flex flex-col items-center justify-center gap-2">
      <div className=" min-h-30 w-full flex items-center justify-center">
        <img src={src} alt={alt} className="w-25" />
      </div>
      <div className="flex flex-col justify-between items-center flex-1">
        <h1 className="text-sm line-clamp-1">{titleCard}</h1>
        <span>{courseDuration}</span>
        <Button
          title={"Inscrever-se"}
          link={linkCard}
          icon={
            <FaRegBell className="fill-cyan-400 size-4 group-hover:animate-pulse" />
          }
        />
      </div>
    </div>
  );
}
