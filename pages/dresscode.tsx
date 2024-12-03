import Header from "src/app/components/Header";
import Navbar from "../src/app/components/Navbar";
import "../src/app/globals.css";

export default function Dresscode() {
  return (
    <>
      <Header />
      <div className="content-info">
        <h1 className="title">Dress Code</h1>
        <h3 className="subtitle">Sugerencia de vestimenta.</h3>
        <p>
          ¡Queridos invitados! <br /> La celebración será al aire libre y
          comenzará al atardecer.
          <br /> Como será verano, esperamos calor, así que vengan con ropa
          ligera, y les sugerimos colores claros y tonos terrosos (beige, verde,
          amarillo). <br /> Será casual ordenado, sin trajes formales. Prefieran
          calzado cómodo y bajo, ya que el terreno es irregular. <br />
          <span className="bold">
            Importante: traigan una chaqueta para la noche por que hará frío.
          </span>
        </p>
        <p className="img-text">Toca las imágenes para ver sugerencias de vestimenta.👇</p>
        <div className="example-img">
          <a
            href="https://cl.pinterest.com/lovely_lonely/matrimonio-idea-desierto/ideas-de-looks-para-invitados/"
            target="blank"
          >
            <img src="./img/man_ej.jpeg" />
            <img src="./img/wom_ej.jpeg" />
          </a>
        </div>
      </div>
      <Navbar />
    </>
  );
}
