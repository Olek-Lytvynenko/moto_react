import { useState } from 'react'
import { ClientArea } from './components/ClientArea';
import FeatersArea from './components/FeaturesArea';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeArea from './components/HomeArea';
import ServiceArea from './components/ServiceArea';
import { Subscribe } from './components/SubscribeArea';
import { FunfactArea } from './components/FunfactArea';
import { TeamArea } from './components/TeamArea';
import { Menu } from './components/Menu';

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className="motoapp body">
      <Header />
      <HomeArea />
      <ServiceArea />
      <FeatersArea />
      <FunfactArea />
      <ClientArea />
      <TeamArea />
      <Subscribe />
      <Footer />
    </body>
  )
}

export default App
