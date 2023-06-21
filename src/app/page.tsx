import { Header } from "@/components/header";
import { Introduction } from "@/components/introduction";
import { ServicesContainer } from "@/components/servicesContainer";
import { TestimonialsContainer } from "@/components/testimonialsContainer";
// className="overflow-hidden bg-[linear-gradient(110deg,_#EFEFEF_40%,_#FF817E_40%)]"
export default function Home() { 
  return (
    <main>
      <Header/>
      <Introduction/>
      <ServicesContainer />
      <TestimonialsContainer/>

    </main>
   

  )
}
