import Image from "next/image";

export interface ICardServices {
    picture: string,
    title: string,
    descrition: string
}

export function CardServices(props: ICardServices) {
    return (
        <div className="p-2">
            <div className=" h-2/4 bg-sky-400 p-2">


                <Image
                    src={`/images/${props.picture}.jpg`}
                    width={200}
                    height={200}
                    alt="Serviço"
                    className="w-full h-full"
                    />

            </div>
            <div className="">
                <h1 className=" py-2 text-center text-xl font-semibold h-1/4">{props.title}</h1>
                <span className="text-gray-700 text-lg h-1/4">{props.descrition}</span>
            </div>
        </div >
    )
}