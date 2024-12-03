import Header from "src/app/components/Header";
import Navbar from "../src/app/components/Navbar";
import "../src/app/globals.css";

export default function Gift() {
  return (
    <div>
      <Header />
      <div className="content-info">
        <h1 className="title">Regalos</h1>
        <h3 className="subtitle">Tu cariño hecho ayuda para gatitos</h3>
        <p>
          En lugar de regalos tradicionales, te invitamos a ser parte de una
          causa que nos llena el corazón: apoyar a la fundación que nos unió a
          Jean Pierre. Con cada aporte, estarás ayudando a gatitos rescatados a
          recibir cuidado, amor y la oportunidad de encontrar un hogar. Esta
          causa significa mucho para nosotros, y nos encantaría que juntos
          celebremos el amor extendiendo una mano a quienes más lo necesitan.
          ¡Gracias por ser parte de este regalo especial!
        </p>
        <div className="example-img">
          <a href="https://www.instagram.com/corazon_felino/" target="blank">
            <img src="./img/gatitos.jpeg" />
          </a>
        </div>
        <h3>La historia de Corazón Felino</h3>
        <p>
          Corazón Felino nació en 2016 como un proyecto familiar para rescatar,
          rehabilitar y dar en adopción a gatitos abandonados. Durante estos 8
          años, han cuidado a más de 50 gatitos, dedicándoles tiempo, amor y
          recursos propios.
        </p>
        <p>
          Actualmente, la fundación sigue cuidando de 11 gatitos y 2 perritos
          que no han encontrado hogar aún, asegurándose de brindarles lo
          necesario para una vida digna. La mayoría de los gastos son costeados
          por la misma familia, complementados con donaciones ocasionales. Hoy,
          las prioridades son vacunar a los animalitos, garantizar alimento
          especial para los mayores o con trastornos alimenticios y cubrir
          tratamientos médicos.
        </p>
        <div className="example-img">
          <img src="./img/jp.jpeg" />
        </div>
        <p>
          Jean Pierre fue uno de los gatitos rescatados por Corazón Felino y,
          durante 4 años, fue un pilar fundamental en nuestra relación y en
          nuestras vidas. Aunque ya no está con nosotros, queremos honrar su
          memoria apoyando esta noble causa que lo rescató y cuidó. Estamos
          profundamente agradecidos por tu apoyo para hacer esto realidad.
        </p>
        <h3>Lista de regalos</h3>
        <p>
          Elige uno o más de estos aportes simbólicos que ayudarán a la
          fundación a continuar con su labor:
        </p>
        <ul>
          <li>Juguetes y accesorios: $15.000</li>
          <li>Comida por un mes: $25.000</li>
          <li>Vacunas anuales: $50.000</li>
          <li>Esterilización: $70.000</li>
          <li>Medicamentos para gatos mayores: $100.000</li>
          <li>Chequeo médico completo y medicamentos: $150.000</li>
        </ul>
        <p>
          Cada aporte suma para cambiar vidas. Puedes seleccionar las opciones
          que desees, y el sistema te calculará el total.
        </p>
        <h3>Datos para la transferencia</h3>
        <p>
          Por favor, realiza tu aporte a la siguiente cuenta bancaria. Al
          completar la transferencia, incluye en el mensaje o asunto: “Regalo
          para la fundación” o “Regalo por el matrimonio”.
        </p>
        <div className="datos-banco">
          <p>
            Titular: Mariel Quezada <br />
            Banco: Banco Falabella <br />
            Cuenta: 19820228565 <br />
            Tipo de cuenta: Cuenta Corriente <br />
            RUT (si aplica): 17834887-6 <br />
          </p>
          <button>Copiar datos</button>
        </div>
        <p>
          Gracias por ser parte de este regalo lleno de amor y solidaridad.
          <br />
          <div className="example-img">
            <img src="./img/juntos.jpeg" />
          </div>
          <span className="bold">
            ¡Tus aportes marcarán la diferencia para muchos gatitos que lo
            necesitan!
          </span>
        </p>
      </div>
      <Navbar />
    </div>
  );
}
