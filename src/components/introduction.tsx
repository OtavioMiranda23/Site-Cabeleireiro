import Image from "next/image";
import { Button } from "./button";

// <h1 className="pt-8 text-9xl font-bold ">Marcos,</h1>
// <h2 className="text-6xl text-[#FF817E] ">Personal hairstyle</h2>

export function Introduction() {

    return (
        <section className="flex h-screen relative overflow-hidden">
    
            <div className=" w-2/4 bg-slate-100  text-center justify-center pt-48 flex-col" >
                <h1 className="pt-8 text-7xl  ">Marcos,</h1>
                <h2 className="text-7xl font-bold text-[#48B7EC] ">Personal hairstyle</h2>
                {/* <div className=" bg-[#FFE45E] ">
                    <p className="text-3xl text-black ">Melhore sua</p>
                    <p className="text-3xl text-black ">altoestima</p>
                </div> */}
                
                <div className="flex justify-center pt-6">
                    <div className="p-2">
                        <Button mensage="Agende agora seu horário" color="bg-[#FFE45E]"/>
                    </div>

                </div>
            </div>
            <div className="  w-2/4  bg-slate-100  " >
                <Image
                    priority
                    src="/svg/blob4.svg"
                    width={4000}
                    height={4000}
                    alt="Fundo da foto"
                    className="absolute left-1/4 "
                />
                <Image
                    priority
                    src="/images/NovoCabeloTransparente.png"
                    width={750}
                    height={750}
                    alt="Foto modelo"
                    className="absolute left-2/4"
                    />
      
            </div>

                
            
        </section>
        
    )
}