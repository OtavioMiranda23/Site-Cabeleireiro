import { CardServices } from "./cardServices"

export function ServicesContainer() {
    const dataServices = [{
        picture: "corte",
        title: "Corte",
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        picture: "relaxamento",
        title: "Relaxamento",
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    },
    {
        picture: "alisamento",
        title: "Progressiva",
        descrition: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    }

]
    return (
        <div className="bg-[#FFE45E]">
            <div className="text-center text-4xl py-12">
                <strong className="text-[#48B7EC]">Meus </strong>
                <strong className="">serviços</strong>
            </div>
        <section className="flex h-screen ">       
        {dataServices.map((service, i) => {
            return (
                <div key={i} className="h-full w-1/3 ">
                    <div className="max-w-sm rounded m-auto overflow-hidden ">
                    <CardServices 
                        key={i}
                        picture={service.picture} 
                        title={service.title} 
                        descrition={service.descrition}
                        />
                    </div>
                </div>
                )
            })}
 

        </section>
        </div>
    )
}