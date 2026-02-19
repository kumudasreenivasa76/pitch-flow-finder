import PitchDeck from "@/components/PitchDeck";
import Slide01Title from "@/components/slides/Slide01Title";
import Slide02Problem from "@/components/slides/Slide02Problem";
import Slide03Solution from "@/components/slides/Slide03Solution";
import Slide04Ecosystem from "@/components/slides/Slide04Ecosystem";
import Slide05Platform from "@/components/slides/Slide05Platform";
import Slide06Features from "@/components/slides/Slide06Features";
import Slide07Layer1 from "@/components/slides/Slide07Layer1";

import SlideDataCenter from "@/components/slides/SlideDataCenter";
import Slide09Models from "@/components/slides/Slide09Models";
import Slide10Calculator from "@/components/slides/Slide10Calculator";
import Slide11Business from "@/components/slides/Slide11Business";
import Slide12Pricing from "@/components/slides/Slide12Pricing";
import Slide13GTM from "@/components/slides/Slide13GTM";
import Slide14Competition from "@/components/slides/Slide14Competition";
import Slide15TAM from "@/components/slides/Slide15TAM";
import Slide15bMarketAnalysis from "@/components/slides/Slide15bMarketAnalysis";
import Slide16UnitEcon from "@/components/slides/Slide16UnitEcon";
import Slide16bSegments from "@/components/slides/Slide16bSegments";
import Slide17Financials from "@/components/slides/Slide17Financials";
import Slide18Projections from "@/components/slides/Slide18Projections";
import Slide19Pipeline from "@/components/slides/Slide19Pipeline";
import Slide20Ask from "@/components/slides/Slide20Ask";

const slides = [
  <Slide01Title />,
  <Slide02Problem />,
  <Slide03Solution />,
  <Slide04Ecosystem />,
  <Slide05Platform />,
  <Slide06Features />,
  <Slide07Layer1 />,
  
  <SlideDataCenter />,
  <Slide09Models />,
  <Slide10Calculator />,
  <Slide11Business />,
  <Slide12Pricing />,
  <Slide13GTM />,
  <Slide14Competition />,
  <Slide15TAM />,
  <Slide15bMarketAnalysis />,
  <Slide16UnitEcon />,
  <Slide16bSegments />,
  <Slide17Financials />,
  <Slide18Projections />,
  <Slide19Pipeline />,
  <Slide20Ask />,
];

const Index = () => <PitchDeck slides={slides} />;

export default Index;
