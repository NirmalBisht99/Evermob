
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { WhatWeDo } from "../components/WhatWeDo";
import { Contact } from "../components/Contact";
import { Footer} from "../components/Footer";
import { WhyUs } from "../components/WhyUs";
import { Testimonials } from "../components/Testimonials";
import { Clients } from "../components/Clients";

export const Home = () => {
  return  <div className=' bg-gradient-to-b frm-teal-50 to-orange-50'>
<Navbar/>

  <Hero />
  <Services/>
  <WhatWeDo/>
  <WhyUs />
  <About />
  <Clients />
  <Testimonials/>
  <Contact/>
  <Footer />


  </div>
};