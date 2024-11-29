
import ContactSection from "../component/ContactSection";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Contact(){
    return(
        <section className=" bg-gradient-to-r from-black to-orange-700 max-w-screen-xl mx-auto py-6 px-2 min-h-screen" >
            <Header />
            <ContactSection />
            <Footer />
        </section>
    )
}