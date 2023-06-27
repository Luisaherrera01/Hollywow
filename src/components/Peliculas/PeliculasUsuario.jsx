import Controlador from "./Controlador/Controlador";
import { MenuUsuario} from "../MenuUsuario"
import superMario from "../../assets/imagenes/superMario.png";
import guardians from "../../assets/imagenes/guardians.jpg"

function PeliculasUsuario() {
  return (
    <div>
        <MenuUsuario/>
      <main>
        <section className="banner"></section>

        <section className="container historia">
          <section className="row historia1">
            <section className="col">
              <img
                src={superMario}
                alt="SuperMarioBross"
                className="img-fluid w-100"
              />
            </section>
            <section className="col align-self-center">
              <p className="texto">
                Es la tercera adaptación cinematográfica de la franquicia de
                Mario de Nintendo, después de la película de anime japonesa de
                1986, Super Mario Bros.: Peach-Hime Kyushutsu Dai Sakusen! y la
                película de acción en vivo de 1993, Super Mario Bros.La película
                está dirigida por Aaron Horvath y Michael Jelenic a partir de un
                guion de Matthew Fogel y cuenta con un elenco de voces que
                incluyen a Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack
                Black, Keegan-Michael Key, Seth Rogen, Fred Armisen, Sebastian
                Maniscalco, Kevin Michael Richardson y Charles Martinet.
              </p>
            </section>
          </section>

          <section className="row historia2">
            <section className="col align-self-center">
              <p className="texto">
                La película está escrita y dirigida por James Gunn y
                protagonizada por un elenco conjunto compuesto por Chris Pratt,
                Zoe Saldaña, Dave Bautista, Vin Diesel, Bradley Cooper, Karen
                Gillan, Pom Klementieff, Elizabeth Debicki, Sean Gunn, Sylvester
                Stallone, Will Poulter, Chukwudi Iwuji y Maria Bakalova. En la
                película, los Guardianes se embarcan en una misión para proteger
                a Rocket (Cooper) del Alto Evolucionador (Iwuji).
              </p>
            </section>
            <section className="col">
              <img
                src={guardians}
                alt="GuardianesGalaxiaVol3"
                className="img- w-80"
              />
            </section>
          </section>
        </section>

        <section className="container secciones">
          <section className="p-3 peliculas">
            <h1>Peliculas</h1>
            <section className="bg-secondary p-2 text-dark bg-opacity-10"></section>
            <section
              className="row row-cols-md-4 row-cols-md-3 p-3"
              id="fila"
            ></section>
          </section>
        </section>
      </main>
      <Controlador />
    </div>
  );
}

export default PeliculasUsuario;
