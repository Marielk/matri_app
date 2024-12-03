import Header from "src/app/components/Header";
import Navbar from "../src/app/components/Navbar";
import "../src/app/globals.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="content-info">
        <h3>Programación del evento</h3>
        <ul>
          <li>18:00 - Recepción</li>
          <li>19:00 - Inicio ceremonia</li>
          <li>20:00 - Comida</li>
          <li>21:30 - Inicio fiesta</li>
          <li>02:00 - Fin del evento</li>
        </ul>
        <h3>Unete al grupo de whatsapp para no perderte nada!</h3>
        <a href="https://chat.whatsapp.com/EJTkJ4Hdrrx3PemrjiJWso" target="blank">Link grupo</a>
      </div>
      <Navbar />
    </>
  );
}
