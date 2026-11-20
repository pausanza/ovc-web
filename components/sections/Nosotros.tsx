import Image from 'next/image'
import { RichText } from '@/components/ui/RichText'
import { getContenido, type Lang } from '@/content'

/**
 * Quiénes somos: el texto y, debajo, la directiva y el grupo de trabajo con
 * la foto de cada persona, como en el sitio anterior de la corporación.
 */
export function Nosotros({ lang }: { lang: Lang }) {
  const { nosotros } = getContenido(lang)

  return (
    <section className="seccion" id="nosotros">
      <div className="contenedor">
        <div className="nosotros__texto revelar">
          <p className="eyebrow">{nosotros.eyebrow}</p>
          <h2>{nosotros.titulo}</h2>
          <p className="lead">{nosotros.bajada}</p>

          {nosotros.parrafos.map((parrafo) => (
            <p key={parrafo.slice(0, 40)}>
              <RichText>{parrafo}</RichText>
            </p>
          ))}
        </div>

        <div className="equipo revelar">
          <h3 className="equipo__titulo">{nosotros.tituloDirectiva}</h3>
          <ul className="equipo__grid">
            {nosotros.directiva.map((persona) => (
              <li className="persona" key={persona.nombre}>
                <Image src={`/img/equipo/${persona.foto}.jpg`} alt={persona.nombre} width={192} height={192} />
                <span className="persona__nombre">{persona.nombre}</span>
                <span className="persona__cargo">{persona.cargo}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="equipo revelar">
          <h3 className="equipo__titulo">{nosotros.tituloEquipo}</h3>
          <ul className="equipo__grid">
            {nosotros.equipo.map((persona) => (
              <li className="persona" key={persona.nombre}>
                <Image src={`/img/equipo/${persona.foto}.jpg`} alt={persona.nombre} width={192} height={192} />
                <span className="persona__nombre">{persona.nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
