import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Partner from "../components/partner";
import We from "../components/we";
import Process from "../components/process";
import PopupWidget from "../components/popupWidget";
const DynamicHero = dynamic(() => import('../components/hero'))
import dynamic from 'next/dynamic'



//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mindworks Interactive - Future Forward Digital Design Partner
        </title>
        <meta name="description" content="Mindworks Interactive" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <DynamicHero />
      <Partner/>
      <Faq />
      <We />
      <Process />
      <Footer/>
      </>
  );
}
