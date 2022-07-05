import App from "next/app";
import Head from "next/head";
import About from "../components/About";
import CompanyProduct from "../components/CompanyProduct";
import Footer from "../components/footer";
import GetInTouch from "../components/GetInTouch";
import HowToHelp from "../components/HowToHelp";
import IndustriesWeServe from "../components/IndustriesWeServe";
import MainHome from "../components/MainHome";
import TopNavbar from "../components/TopNavbar";
import Navbar from "../components/Navbar";
import ProcessWeFollow from "../components/ProcessWeFollow";
import ServicesWeOffer from "../components/ServicesWeOffer";
import WhyWebapp from "../components/WhyWebapp";

function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fevIcon.png" />
     
        <title>Software Development Company | Webapp UK </title>
        <meta
          name="description"
          content="Webapp is a leading and competitive software development company in the UK. We focus on designing, developing and delivering Custom software and mobile apps, websites, games & much more to our clients."
        />
         <meta
          name="keywords"
          content="Software Development Company, Custom Software development Company,Software Company,Development Company,Bespoke software, Hybrid app development services"
        />
      </Head>
   
      <main>
    
        <MainHome />
        <CompanyProduct />
        <About />
        <ServicesWeOffer />
        <IndustriesWeServe />
        <WhyWebapp />
        <ProcessWeFollow />
        <HowToHelp />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}

export default Home;
