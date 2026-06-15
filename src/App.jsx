import { Toaster } from "react-hot-toast"; // ✅ ADD THIS
import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/offer/Offer";
import Hero from "./components/Hero/Hero";
import FormSection from "./components/FormSection/FormSection";
import Cta from "./components/Cta/Cta.jsx";
import Discount from "./components/discount/Discount.jsx";
import Result from "./components/Result/Result.jsx";
import Benefit from "./components/Benifit/Benefit.jsx";
import WhistleDifference from "./components/WhistleDifference/WhistleDifference.jsx";
import HappyClient from "./components/HappyClient/HappyClient.jsx";
import Message from "./components/Message/Message.jsx";
import Steps from "./components/Steps/Steps.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FreeOffer from "./components/FreeOffer/FreeOffer.jsx";
import Book from "./components/Book/Book.jsx";

function App() {
  return (
    <>
      {/* ✅ ADD THIS LINE */}
      <Toaster position="top-center" />

      <Navbar />
      <Offer />
      <Hero />
      <FormSection />
      <Cta />
      <FreeOffer />
      <Discount />
      <Result />
      <Benefit />
      <WhistleDifference />
      <Feature />
      <Steps />
      <Message />
      <HappyClient />
      <Faq />
      <Footer />
      <Book />
    </>
  );
}

export default App;