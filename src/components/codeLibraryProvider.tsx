"use client";

import {
  useState,
  useContext,
  createContext,
  type Dispatch,
  type SetStateAction,
} from "react";

// Os Tipos de todos os states, refs, funções.....
export type jsonCardProp = {
  src: string;
  alt: string;
  courseDuration: string;
  titleCard: string;
  linkCard: string;
};

type CodeLibraryType = {
  titleFilter: string;
  setTitleFilter: Dispatch<SetStateAction<string>>;
  paragraphFilter: string;
  setParagraphFilter: Dispatch<SetStateAction<string>>;
  jsonCard: jsonCardProp[];
};

// Criando o contexto.
const CodeLibraryContext = createContext<CodeLibraryType | undefined>(
  undefined,
);

// Provider que envolver a aplicação.
export default function CodeLibraryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [titleFilter, setTitleFilter] = useState(
    "Busque o conteúdo que deseja assitir hoje",
  );
  const [paragraphFilter, setParagraphFilter] = useState(
    "Conteúdo exclusivo todos os dias",
  );

  const jsonCard: jsonCardProp[] = [
    {
      src: "./react.png",
      alt: "image react",
      courseDuration: "9h",
      titleCard: "Fundamentos do Next.Js",
      linkCard: "#",
    },
    {
      src: "./node.png",
      alt: "image nodeJS",
      courseDuration: "9h",
      titleCard: "Fundamentos do Next.Js",
      linkCard: "#",
    },
    {
      src: "./next.png",
      alt: "image NextJS",
      courseDuration: "9h",
      titleCard: "Fundamentos do Next.Js",
      linkCard: "#",
    },
    {
      src: "./tailwindCSS.png",
      alt: "image TailwindCSS",
      courseDuration: "9h",
      titleCard: "Curso TailwindCSS",
      linkCard: "#",
    },
  ];

  return (
    <CodeLibraryContext.Provider
      value={{
        titleFilter,
        setTitleFilter,
        paragraphFilter,
        setParagraphFilter,
        jsonCard,
      }}
    >
      {children}
    </CodeLibraryContext.Provider>
  );
}

// vai consumir o CodeLibraryProvider é o erro
export function UseCodeLibrary() {
  const values = useContext(CodeLibraryContext);

  if (!values) throw new Error("useCodeLibrary dentro de CodeLibraryProvider");

  return values;
}
