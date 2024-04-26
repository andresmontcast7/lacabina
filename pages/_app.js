import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import Header from '../components/Header';


function App({ Component, pageProps }) {


  return (
    <ChakraProvider>
     <Header></Header> 
    <Component {...pageProps} />
    </ChakraProvider>

  )


  
  
}

export default App
