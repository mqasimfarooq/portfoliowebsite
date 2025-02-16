import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import Cover from './Components/Cover/cover.jsx';
import Slider from './Components/Slider/Slider.jsx';
import CatchLine from './Components/Catchline/Catchline.jsx';
import Services from './Components/Services/Services.jsx';
import ServMap from './Components/ServiceMap/ServMap.jsx';
import Review from './Components/Reviews/Review.jsx';
import Consultation from './Components/Consulatation/Consultation.jsx';
import Pricing from './Components/Pricing/pricing.jsx';
import ContactForm from './Components/Contact/Contact.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='Div'>
      <Hero/>
      
    </div>
  );
}

export default App;

