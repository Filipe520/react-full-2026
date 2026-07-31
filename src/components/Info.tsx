import { FaLayerGroup } from "react-icons/fa";
import Button from "./Button";
import { PiFilmSlateThin } from "react-icons/pi";
import { useState } from "react";

export default function Info() {
  const [sun, setSun] = useState(0);

  return (
    <section className="flex gap-5 justify-between w-full text-blue-01 items-center flex-wrap ">
      <div className="md:flex-1 flex md:gap-2 gap-4  justify-center flex-col ">
        <h3 className="md:text-lg text-xl font-bold">
          Pratique com projetos reais
        </h3>
        <p className="text-sm">
          Em vez de apenas ensinar teoria, focamos em código real para inspirar
          seu próximo projeto. Aprender não precisa ser chato.
        </p>
        <Button
          title={"Ver biblioteca"}
          link={"linkCard"}
          icon={
            <FaLayerGroup className="fill-cyan-400 size-4 group-hover:animate-pulse" />
          }
        />
      </div>
      <div className=" flex items-center justify-center flex-col md:w-auto w-full">
        <div className="bg-white w-full rounded-lg p-5 md:gap-3 gap-5 flex flex-col">
          <div>
            <h3 className="md:text-md text-lg font-medium">Curso rápido</h3>
            <p className="text-sm">Cursos práticos de curta duração</p>
          </div>
          <Button
            title={"Assistir"}
            link=""
            icon={
              <PiFilmSlateThin className="fill-cyan-400 size-4 group-hover:animate-pulse" />
            }
          />
        </div>
      </div>
    </section>
  );
}
