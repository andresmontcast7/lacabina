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
export default function Home() {

useEffect(() => {
	TagManager.initialize({ gtmId: 'G-B8HQP6BTD1' }); //GTM-PC7D2RD Anterior
  }, []);





  const dataCard = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>La Cabina Gt</title>
        <meta name="description" content="¡Haga que su evento sea inolvidable con nuestro servicio de Cabinas 360!" />
        <link rel="icon" href="https://www.lacabinagt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcabinaB.f8f47725.png&w=1920&q=75" />

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
