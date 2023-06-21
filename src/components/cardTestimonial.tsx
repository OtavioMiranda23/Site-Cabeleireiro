interface ICardTestimonial {
    picture?: string,
    name: string,
    subtitle: string,
    mensage: string
}

export function CardTestimonial(props: ICardTestimonial) {
    return (
        <div className="flex-col p-2 bg-slate-100 max-w-sm rounded-sm shadow-lg overflow-hidden">
            <div className="text-left"> 
                <img src={`/images/${props.picture}`} width={100} className="pb-2"/>
                <h3 className="text-2xl font-medium text-primary p-2">{props.name}</h3>
                <strong className="p-2">{props.subtitle}</strong>
            </div>
            <p className="p-2">{props.mensage}</p>
        </div>
    )
}