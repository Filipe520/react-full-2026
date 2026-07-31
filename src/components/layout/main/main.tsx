import Card from "../../Card";
import { UseCodeLibrary } from "../../codeLibraryProvider";
import Filter from "../../Filter";
import Info from "../../Info";

export default function Main() {
  const { titleFilter, paragraphFilter, jsonCard } = UseCodeLibrary();

  return (
    <main className="flex-1 flex flex-col items-center gap-8 pt-20 w-full">
      <Filter paragraphFilter={paragraphFilter} titleFilter={titleFilter} />

      <section className="flex flex-col justify-center items-center">
        <h2 className=" text-blue-01 font-medium text-lg ">
          Os cursos mais buscados
        </h2>
        <div className="bg-white rounded-2xl flex flex-wrap max-w-[1200px] w-full items-center justify-center gap-2  p-6">
          {jsonCard.map((card, index) => (
            <Card
              src={card.src}
              alt={card.alt}
              key={index}
              courseDuration={card.courseDuration}
              linkCard={card.linkCard}
              titleCard={card.titleCard}
            />
          ))}
        </div>
      </section>
      <Info />
    </main>
  );
}
