import Navbar from "./components/Navbar/Navbar";
import Offer from "./components/offer/Offer";
import Hero from "./components/Hero/Hero";
import FormSection from "./components/FormSection/FormSection";
import Cta from "./components/Cta/Cta.jsx";
import Discount from "./components/discount/Discount.jsx";
import Result from "./components/Result/Result.jsx";
import Benefit from "./components/Benifit/Benefit.jsx";
import WhistleDifference from "./components/WhistleDifference/WhistleDifference.jsx";
// import TreatmentForm from "./components/TreatmentForm/TreatmentForm";
// import Features from "./components/Features/Features";
// import Results from "./components/Results/Results";
// import Steps from "./components/Steps/Steps";
// import Footer from "./components/Footer/Footer";
import HappyClient from "./components/HappyClient/HappyClient.jsx";
import Message from "./components/Message/Message.jsx";
import Steps from "./components/Steps/Steps.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Faq from "./components/Faq/Faq.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Offer />
      <Hero />
      <FormSection />
      <Cta />
      <Discount />
      <Result />
      <Benefit />
      <WhistleDifference />
      <HappyClient />
      <Message />
      <Steps />
      <Feature />
      <Faq/>
      <Footer />
    </>
  );
}

export default App;
