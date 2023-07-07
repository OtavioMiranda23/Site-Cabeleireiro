import { CardServices } from "@/components/cardServices";
import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";

export default function Home() {
  const dataServices = [
    {
      picture: "corte",
      title: "Corte",
      descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit commodo consequat.",
    },
    {
      picture: "relaxamento",
      title: "Relaxamento",
      descrition:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, commodo consequat.",
    },
    {
      picture: "alisamento",
      title: "Progressiva",
      descrition:
        "Lorem ipsum dolor sit amet,  commodo consequat.",
    },
  ];
  const dataCard = [
    {
      picture: "avatarWoman.png",
      name: "Otávio",
      subtittle: "Filho",
      mensage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla.",
    },
    {
      picture: "avatarWoman.png",
      name: "Rose",
      subtittle: "Cliente",
      mensage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla.",
    },
    {
      picture: "avatarWoman.png",
      name: "Rose",
      subtittle: "Cliente",
      mensage:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla.",
    },
  ];
  return (
    <main className="flex flex-col  ">
      <Header />
      <Introduction />
      <section className="bg-backgroundSecond">
        {dataServices.map((card, index) => {
          return (
            <CardServices 
            key={index}
            title={card.title}
            descrition={card.descrition}
            picture={card.picture}
            />
          )
        } )}
      </section>
    </main>
  );
}
