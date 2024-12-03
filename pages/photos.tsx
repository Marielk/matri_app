import Header from "src/app/components/Header";
import Navbar from "../src/app/components/Navbar";
import "../src/app/globals.css";

export default function Photos() {
  return (
    <>
      <Header />
      <div className="content-info">
        <h3>¡Momentos únicos, capturados por ustedes!</h3>
        <p>
          Sabemos que los mejores recuerdos a veces no los captan las cámaras
          profesionales, sino las fotos espontáneas que ustedes toman. Si
          lograste inmortalizar un momento divertido o especial, nos encantaría
          que lo compartas con nosotros.
        </p>
        <p>
          Gracias por ayudarnos a recordar nuestro día desde tu perspectiva
          única. ¡Tus fotos serán un regalo inolvidable!
        </p>
        <a
          href="https://chat.whatsapp.com/IDfvaZCr57B0O9omKgJVqc"
          target="blank"
        >
          Haz clic en este enlace para compartir tus fotos
        </a>
        <div className="example-img">
          <img src="./img/fotos.jpg" />
        </div>
      </div>
      <Navbar />
    </>
  );
}
