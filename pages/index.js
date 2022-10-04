import Head from 'next/head';
import { Header } from '../components/Header';
import { InfoCards } from '../components/InfoCards';
import { VideoHeader } from '../components/VideoHeader';
import styles from '../styles/Home.module.css';
import data from '../services/infoCardsData'
import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Footer } from '../components/Footer';





export default function Home() {

     
  const dataCard = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/* HEADER */}
       <Header ></Header>
        {/* VIDEO */}
       <VideoHeader video={"litecabin.mp4"}></VideoHeader>
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



       
       {/* FOOTER*/}
       <Footer></Footer>

       
      
       
       
       
       
        {/* VIDEO HEADER */}
        
      {/* CONTENT */}

       {/* FOOTER */}
    </div>
  )
}
