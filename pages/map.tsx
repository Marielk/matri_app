import Header from "src/app/components/Header";
import Navbar from "../src/app/components/Navbar";
import "../src/app/globals.css";

export default function Maps() {
  return (
    <>
      <Header />
      <div className="content-info">
        <h3 className="subtitle">¿Cómo llegar?</h3>
        <p>Desde Santiago sin cortes:</p>
        <a href="https://maps.app.goo.gl/jNqi4k5G383HBGBr6" target="blank">
          Link a la ruta
        </a>
        <p>Desde Santiago evitando autopista:</p>
        <a href="https://maps.app.goo.gl/xeJUBXvmkcSn5ngs7" target="blank">
          Link a la ruta
        </a>
        <p>Referencia de ubicación</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.7481907766455!2d-71.16944028859514!3d-33.377639493676426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzM5LjUiUyA3McKwMTAnMDAuNyJX!5e0!3m2!1ses-419!2scl!4v1733231809462!5m2!1ses-419!2scl"
          width="300"
          height="450"
          loading="lazy"
        ></iframe>
        <p>Información sobre el corte de carretera (info 2023, en cuanto se publique la info 2024 les avisaremos)</p>
        <a
          href="https://www.transporteinforma.cl/ruta-68-sera-cerrada-desde-el-jueves-por-peregrinacion-a-lo-vasquez/"
          target="blank"
        >
          link
        </a>
        <div className="example-img">
          <img src="./img/corte1.jpg" />
          <img src="./img/corte2.jpg" />
        </div>
      </div>
      <Navbar />
    </>
  );
}
