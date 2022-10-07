import CaptionCarousel from "../components/CaptionCarouse";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import HeroService from "../components/HeroService";
import { Plan } from "../components/Plan";
import cards from "../services/infoSlider";

function servicios() {
  const planes = [
    {
      plan: "Standar Video Booth 360",
      desc: "Servicio de  2 Horas",
      features: [
        "Opción para grabar con tu celular y nuestra cámara al mismo tiempo",
        "Aplicación para compartir los videos a través de QR",
        "1 operador",
        "4 luces Led"
      ],
      proposito: "Que Incluye",
      precio: 2500,
    },
    {
      plan: "Premiun Video Booth 360 con 8 Lamparas Modo Cine",
      desc: "Servicio de  4 Horas",
      features: [
        "Opción para grabar con tu celular y nuestra cámara al mismo tiempo",
        "Aplicación para compartir los videos a través de QR",
        "2 Operadores",
        "Maquina de Humo",
        "Luces Efecto Modo Cine",
        "4 Smart Led  de 180 cm ",
        "Burbujas",
        "Lluvia de Confeti",
        "Pantalla de 32 "
      ],
      proposito: "Que Incluye",
      precio: 4500,
    },
  ];

  return (
    <>
      {/* NAV */}
      <Header></Header>
      {/* Hero */}
      <HeroService></HeroService>
      {/* SLIDER */}
      <CaptionCarousel speed={500} autoSpeed={3000} cards={cards}></CaptionCarousel>

      {/* PLANES */}
      {planes.map((resp, i) => {
        return <Plan key={i} resp={resp}></Plan>;
      })}
      <Footer></Footer>
    </>
  );
}

export default servicios;
