import Image from "next/image";

interface ICardTestimonial {
  picture?: string;
  name: string;
  subtitle: string;
  mensage: string;
}

export function CardTestimonial(props: ICardTestimonial) {
  return (
    <div className="relative flex-col bg-slate-100 max-w-sm rounded-sm shadow-lg overflow-hidden">
      <img
        src={`/images/${props.picture}`}
        width={100}
        height={100}
        className="pb-2 absolute -top-2/4 left-2/4 translate-x-2/4 bg-black"
      />
      <h3 className="text-2xl font-medium text-primary p-2">{props.name}</h3>
      <strong className="p-2">{props.subtitle}</strong>
      <p className="p-2">{props.mensage}</p>
    </div>
  );
}
