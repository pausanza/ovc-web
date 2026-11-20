import { Contador } from '@/components/ui/Contador'
import { getContenido, LOCALE, type Lang } from '@/content'

export function Cifras({ lang }: { lang: Lang }) {
  const { cifras, cifrasTitulo } = getContenido(lang)

  return (
    <section className="cifras">
      <div className="contenedor">
        <h2 className="cifras__titulo revelar">{cifrasTitulo}</h2>
        <div className="cifras__grid">
          {cifras.map((cifra) => (
            <div className="cifra" key={cifra.texto}>
              <p className="cifra__numero">
                {cifra.prefijo}
                <Contador valor={cifra.valor} locale={LOCALE[lang]} />
                {/* Los decimales (",8") van al tamaño del número; solo la unidad va chica. */}
                {cifra.sufijo && (
                  <>
                    {cifra.sufijo.match(/^[^\s]*/)?.[0]}
                    <small>{cifra.sufijo.replace(/^[^\s]*/, '')}</small>
                  </>
                )}
              </p>
              <p className="cifra__texto">{cifra.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
