
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="WebGo crea tu sitio de ventas rápido y fácil. Servicio único con soporte 24/7 para tu negocio en Santiago." cta1="Digitaliza Ya" />
<How step1Title="Conoce WebGo" step1Desc="Descubre cómo digitalizar tus ventas rápido." step2Title="Diseño Express" step2Desc="Te entregamos tu web en 24 horas." step3Title="Soporte 24/7" step3Desc="Siempre estamos aquí para ayudarte." />
<Aboutus headline="WebGo: Digitaliza Tu Negocio Ya" subheadline="Transformamos recomendaciones en ventas online, sin que gestiones nada." beneficiotitulo1="Aumenta Ventas" beneficio1="Convierte recomendaciones en ventas efectivas" beneficiotitulo2="Ahorra Tiempo" beneficio2="Gestionamos todo tu sitio web" />
<Services heading="Transforma Tus Recomendaciones en Ventas Online" description="cscad (Precio: fdafadf) - adfadf crea tu tienda virtual en 24 horas, sin complicaciones." services={[{"name":"Diseño Rápido","icon":"bolt","description":"Sitios web listos en 24 horas."},{"name":"Integración de Pagos","icon":"credit-card","description":"Cobros online simples y seguros."},{"name":"SEO Optimizado","icon":"search","description":"Aparece primero en búsquedas locales."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Análisis de Tráfico","icon":"chart-line","description":"Entiende a tus clientes online."},{"name":"Marketing Digital","icon":"bullhorn","description":"Aumenta tu presencia en redes."}]} />
<BeforeAndAfter subheadline="Transformamos visiones digitales en realidades impresionantes y tangibles." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo se especializa en crear sitios web fáciles de usar que atraen a más clientes. Te ayudamos a estar presente en línea para que dejes de depender solo de las recomendaciones."},{"pregunta":"¿Cuánto tiempo tardará en ver resultados con WebGo?","respuesta":"Con WebGo, puedes comenzar a ver un aumento en las visitas en línea y en las ventas en unas pocas semanas. Nuestro enfoque está diseñado para resultados rápidos y efectivos."},{"pregunta":"¿Qué beneficios ofrece WebGo para quienes no tienen tiempo para gestionar un sitio web?","respuesta":"WebGo se encarga de todo, desde el diseño hasta el mantenimiento del sitio web, para que puedas concentrarte en dirigir tu negocio sin preocuparte por la gestión digital."},{"pregunta":"¿Es muy costoso contratar los servicios de WebGo?","respuesta":"WebGo ofrece precios competitivos que se adaptan a cada tipo de negocio. Invertir en digitalizar tus ventas es más accesible de lo que piensas y puede aumentar tus ingresos significativamente."},{"pregunta":"¿Cómo WebGo me ayuda a generar ventas online si no sé por dónde empezar?","respuesta":"WebGo te guía paso a paso en el proceso de digitalización. Creamos una estrategia personalizada que se adapta a tus necesidades para que empieces a vender online de manera efectiva."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Santiago Hoy" 
                      description="En WebGo, ayudamos a dueños de negocios a digitalizar sus ventas sin complicaciones. Aumenta tus ingresos online y deja que nuestro equipo haga el trabajo por ti. Precio: fdafadf"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
