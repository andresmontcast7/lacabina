import Head from 'next/head';
import { Header } from '../components/Header';
import { InfoCards } from '../components/InfoCards';
import { VideoHeader } from '../components/VideoHeader';
import styles from '../styles/Home.module.css';
import data from '../services/infoCardsData'
import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Footer } from '../components/Footer';
import CaptionCarousel from '../components/CaptionCarouse';
import { sliderHome } from '../services/infoHomeSliderData';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router'
export default function Home() {

  const router = useRouter()

useEffect(() => {
	TagManager.initialize({ gtmId: 'GTM-TX4BC6Q' }); //GTM-PC7D2RD Anterior
  }, []);
useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('511346854525312&ev') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  


  const dataCard = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>La Cabina Gt</title>
        <meta name="description" content="¡Haga que su evento sea inolvidable con nuestro servicio de Cabinas 360!" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      

       {/* HEADER */}
       <Header ></Header>
        {/* VIDEO */}
       <VideoHeader autoPlay={true} loop={true} video={"litecabin.mp4"}></VideoHeader>
       {/* Cards */}
       
       <Wrap align="center" justify="center" spacing='30px'>
       
       {dataCard.map((resp,i) =>{
         return(
          <WrapItem key={resp.title} >
          <InfoCards dataCard={resp}></InfoCards>
          </WrapItem>
         )
       })}
       </Wrap>

       {/* <CaptionCarousel cards={sliderHome} speed={500} autoSpeed={3000} ></CaptionCarousel> */}



       
       {/* FOOTER*/}
       <Footer></Footer>

       
      
       
       
       
       
        {/* VIDEO HEADER */}
        
      {/* CONTENT */}

       {/* FOOTER */}
    </div>
  )
}
