import { notFound } from 'next/navigation'
import { Boletin } from '@/components/sections/Boletin'
import { Cifras } from '@/components/sections/Cifras'
import { ElValle } from '@/components/sections/ElValle'
import { CierrePortada } from '@/components/sections/CierrePortada'
import { Hero } from '@/components/sections/Hero'
import { Impacto } from '@/components/sections/Impacto'
import { Proyectos } from '@/components/sections/Proyectos'
import { esIdioma, IDIOMAS } from '@/content'

export function generateStaticParams() {
  return IDIOMAS.map((lang) => ({ lang }))
}

/**
 * Portada: cinco bloques y nada más.
 *
 * Es deliberadamente corta. Todo lo que no está aquí —flora y fauna, el mapa,
 * el santuario, las amenazas, quién administra, cómo visitar— vive en las
 * páginas que cuelgan del menú. La portada cuenta qué es el valle, qué se ha
 * logrado y qué falta; el resto se busca.
 */
export default async function Portada({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!esIdioma(lang)) notFound()

  return (
    // .portada ensancha el contenedor y ajusta la tipografía a la maqueta de la
    // portada, sin tocar el resto de las páginas.
    <div className="portada">
      {/* 1 · Hero */}
      <Hero lang={lang} />

      {/* 2 · El Valle, 3 · lo hecho y 4 · las cifras */}
      <ElValle lang={lang} />
      <Proyectos lang={lang} modo="portada" />
      <Cifras lang={lang} />

      {/* 5 · Impacto, con el santuario, y el paso a Cómo ayudar */}
      <Impacto lang={lang} />
      <CierrePortada lang={lang} />

      {/* 6 · Boletín */}
      <Boletin lang={lang} />
    </div>
  )
}
