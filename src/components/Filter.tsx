import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

interface PropFilter {
  titleFilter: string;
  paragraphFilter: string;
}

export default function Filter({ titleFilter, paragraphFilter }: PropFilter) {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-01 font-bold md:text-2xl md:font-medium text-xl text-center max-w-80 md:max-w-100 py-2">
          {titleFilter}
        </h1>
        <p className="text-blue-01 text-sm">{paragraphFilter}</p>
      </div>
      <div className="relative max-w-150 w-full h-10 bg-white pr-10 rounded-full">
        <input
          type="text"
          className="size-full text-black  outline-none border-none pl-3 pr-1
            placeholder:text-sm"
          placeholder="Pesquise algum curso..."
          ref={inputSearchRef}
        />
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-full flex items-center justify-center cursor-pointer hover:grayscale-100 bg-blue-01/10 rounded-full"
          onClick={() => inputSearchRef?.current?.focus()}
        >
          <CiSearch className="text-blue-01 size-6 " />
        </button>
      </div>
    </div>
  );
}
