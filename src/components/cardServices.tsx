import Image from "next/image";

export interface ICardServices {
  picture: string;
  title: string;
  descrition: string;
}

export function CardServices(props: ICardServices) {
  return (
    <div className="p-2">
      <div className="h-2/4 bg-sky-200 relative">
        <div className="group">
          <Image
            src={`/images/${props.picture}.jpg`}
            width={200}
            height={200}
            alt="Serviço"
            className="w-full h-full rounded-md transition-all duration-300 ease-in-out filter brightness-100 group-hover:brightness-50"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300 ease-in-out">
          </div>
          <h1 className="absolute top-3/4 left-1/2 transform -translate-x-1/2  transition-all duration-300 ease-in-out group-hover:-translate-y-16 text-backgroundDark group-hover:text-background text-2xl font-semibold text-center">
            {props.title}
          </h1>
          <span className="absolute top-3/4 opacity-0 text-center leading-normal group-hover:opacity-100 duration-500 ease-in-out text-background overflow-hidden text-lg">
            {props.descrition}
          </span>


        </div>
      </div>
    </div>
  );
}
