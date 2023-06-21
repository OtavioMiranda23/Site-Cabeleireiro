import { CardTestimonial } from "./cardTestimonial";

export function TestimonialsContainer() {
    const dataCard = [{
        picture: "avatarWoman.png",
        name: "Otávio",
        subtittle: "Filho",
        mensage: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla."
    },
    {
        picture: "avatarWoman.png",
        name: "Rose",
        subtittle: "Cliente",
        mensage: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla."
    },
    {
        picture: "avatarWoman.png",
        name: "Rose",
        subtittle: "Cliente",
        mensage: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla."
    },
    {
        picture: "avatarWoman.png",
        name: "Rose",
        subtittle: "Cliente",
        mensage: 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum pharetra odio pretium cursus erat sodales ac. Curabitur tempus ac ligula ut suscipit. Etiam ullamcorper id turpis pharetra fringilla."
    },
]
    return (
        <section className=" p-10 bg-[#302f2b]">
            <div className="flex justify-center">
                <div className="p-4 flex">
                    {dataCard.map((card, i) => {
                        return ( 
                            <div key={i} className="p-2">
                                <CardTestimonial 
                                picture={card.picture}
                                name={card.name}
                                subtitle={card.subtittle}
                                mensage={card.mensage}
                                />

                            </div>                           
                            )})}
                </div>

            </div>
        </section >
    )
}