import {
  Box,
  Heading,
  Button,
  HStack,
  Image,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import Hamburger from './img/hamburger.png';
import Pokebowl from './img/pokebowl.png';
import Ribs from './img/ribs.png';

function Highlights() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap='30px'
      id='menu-section'
    >
      <HStack
        spacing={isMobile ? '10' : '100px'}
        justifyContent={isMobile ? 'space-between' : 'center'}
        w='100%'
      >
        <Heading
          as='h1'
          size='2xl'
          color='#333333'
          textAlign={isMobile ? 'center' : 'left'}
        >
          This Week's Specials!
        </Heading>
        <Button bg='#F4CE14' textAlign={isMobile ? 'center' : 'right'}>
          Order Online
        </Button>
      </HStack>

      <HStack
        flexWrap='wrap'
        justifyContent={isMobile ? 'center' : 'space-between'}
        spacing={isMobile ? '30px' : '10px'}
        marginTop='30px'
      >
        <Box
          borderRadius='10px'
          width={isMobile ? '100%' : '300px'}
          height='500px'
          bg='#EDEFEE'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          padding='10px'
          marginBottom='30px'
        >
          <Image src={Hamburger} alt='Hamburger' borderRadius='10px'></Image>
          <Heading size='lg' color='#333333'>
            Hamburger
          </Heading>
          <Heading size='sm' color='#333333'>
            The delicious 100% Beef Burger with a toasted bun fresh leafs and
            cheese with our Little Lemon homemade sauce.
          </Heading>
          <Heading size='md' color='#EE9972'>
            $12.99
          </Heading>
          <Link fontSize='20px' color='#333333' fontWeight='bold'>
            Order a Delivery
          </Link>
        </Box>

        <Box
          borderRadius='10px'
          width={isMobile ? '100%' : '300px'}
          height='500px'
          bg='#EDEFEE'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          padding='10px'
          marginBottom='30px'
        >
          <Image src={Pokebowl} alt='Poke Bowls' borderRadius='10px'></Image>
          <Heading size='lg' color='#333333'>
            Salmon Poke Bowls
          </Heading>
          <Heading size='sm' color='#333333'>
            Our Salmon Poke Bowls with fresh Salmon, Avocado and micro greens.
            Served with sesame seed and Soya sauce.
          </Heading>
          <Heading size='md' color='#EE9972'>
            $15.00
          </Heading>
          <Link fontSize='20px' color='#333333' fontWeight='bold'>
            Order a Delivery
          </Link>
        </Box>

        <Box
          borderRadius='10px'
          width={isMobile ? '100%' : '300px'}
          height='500px'
          bg='#EDEFEE'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          padding='10px'
          marginBottom='30px'
        >
          <Image src={Ribs} alt='Ribs' borderRadius='10px'></Image>
          <Heading size='lg' color='#333333'>
            Pork Ribs
          </Heading>
          <Heading size='sm' color='#333333'>
            Our Amazing flame grilled pork ribs in our special basting sauce.
            Served with crispy french fries and grilled mushrooms.
          </Heading>
          <Heading size='md' color='#EE9972'>
            $10.00
          </Heading>
          <Link fontSize='20px' color='#333333' fontWeight='bold'>
            Order a Delivery
          </Link>
        </Box>
      </HStack>
    </Box>
  );
}

export default Highlights;
