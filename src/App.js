import { ChakraProvider, VStack } from '@chakra-ui/react';

// import Banner from './Components/Banner';
import Highlights from './Components/Highlights';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <VStack spacing='30px'>
        <Hero />
        <Highlights />
        <Reservation />
      </VStack>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
