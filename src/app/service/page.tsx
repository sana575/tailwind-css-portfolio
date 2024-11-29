import Footer from "../component/Footer";
import Header from "../component/Header";
import Service from"../component/Service";
export default function service(){
    return(
      
         <section className=" bg-gradient-to-r from-black to-orange-700 max-w-screen-xl mx-auto py-8 px-2 min-h-screen pt-4">
           <Header />
           <Service />
           <Footer />
        </section>
    )
}