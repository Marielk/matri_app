import Link from "next/link";
// import Test from "../../../public/icons/mdi_image-location_default.svg";
import "../../../src/app/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="navbar-item" href="/gift">
            <img src="./icons/mdi_gift_default.svg" alt="Regalos" />
            <span>Regalos</span>
          </Link>
        </li>
        <li>
          <Link className="navbar-item" href="/photos">
            <img src="./icons/gridicons_camera_default.svg" alt="Fotos" />
            <span>Fotos</span>
          </Link>
        </li>
        <li>
          <Link className="navbar-item" href="/dresscode">
            <img
              src="./icons/game-icons_large-dress_default.svg"
              alt="Dresscode"
            />
            <span>Dresscode</span>
          </Link>
        </li>
        <li>
          <Link className="navbar-item" href="/map">
            <img src="./icons/mdi_image-location_default.svg" alt="Inicio" />
            <span>Mapa</span>
          </Link>
        </li>
        <li>
          <Link className="navbar-item" href="/">
            <img src="./icons/ion_home_default.svg" alt="Inicio" />
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
