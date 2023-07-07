import Image from "next/image";
import { Button } from "./button";

// <h1 className="pt-8 text-9xl font-bold ">Marcos,</h1>
// <h2 className="text-6xl text-[#FF817E] ">Personal hairstyle</h2>

export function Introduction() {
  return (
    <section className="flex flex-col text-center  bg-background">
      <div className="p-12 text-7xl justify-center ">
        <h1 className="">Tudo para o seu</h1>
        <h1 className="text-accent">Melhor</h1>
      </div>
      <div className="">
        <Button color="bg-accent" mensage="Marque agora o seu horário!" />
      </div>
      <div className="flex m-4 ">
        <ul className=" justify-normal text-left   list-disc m-4 marker:text-accent">
          <li className=" py-5 text-textBody">
            Marcos é um cabeleireiro focado no bem estar de seus clientes.
          </li>
          <li className=" py-5 text-textBody">
            Profissional especializado e pronto para os cuidados que você
            merece.
          </li>
          <li className=" py-5 text-textBody">
            Trabalha com os melhores produtos do mercado.
          </li>
        </ul>
      </div>
    </section>
  );
}
