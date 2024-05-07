import Head from 'next/head';
import { InfoCards } from '../components/InfoCards';
import { VideoHeader } from '../components/VideoHeader';
import styles from '../styles/Home.module.css';
import data from '../services/infoCardsData'
import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Footer } from '../components/Footer';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
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
        ReactPixel.init('511346854525312') // facebookPixelId511346854525312
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
        <title>La Cabina | Cabina de Fotos Guatemala</title>
        <meta name="description" content="¡Haga que su evento sea inolvidable con nuestro servicio de Cabinas en Guatemala !" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="facebook-domain-verification" content="tq5l8o1yhhb8usdwd7te211ut8xzxl" />
        <meta name="description" content={"Cabina de Fotos en Guatemala! y Photo Booths Desde bodas hasta eventos corporativos, cumpleaños, fiestas crea recuerdos únicos con nuestras divertidas Cabina de fotos en  Guatemala. ¡Contacta con nosotros para darle un toque especial a tu próximo evento!"} key="description" />
      <meta property="og:url" content={`https://www.lacabinagt.com`} key="og:url" />
      <meta property="og:title" content={`La Cabina | Cabina de Fotos Guatemala`} key="og:title" />
      <meta
        property="og:description"
        content={"Cabina de Fotos en Guatemala! y Photo Booths Desde bodas hasta eventos corporativos, cumpleaños, fiestas crea recuerdos únicos con nuestras divertidas Cabina de fotos en  Guatemala. ¡Contacta con nosotros para darle un toque especial a tu próximo evento!"}
        key="og:description"
      />
      <link rel="canonical" href={`https://www.lacabinagt.com`} />
      </Head>
      

       {/* HEADER */}
     
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
