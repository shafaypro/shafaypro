import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const NAV_LINKS = ['About', 'Expertise', 'Work', 'Contact']

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero heading */}
      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]"
        >
          Hi, i&apos;m shafay
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto flex items-end justify-between px-6 pb-7 md:px-10 sm:pb-8 md:pb-10">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="max-w-[160px] text-[#D7E2EA] font-light uppercase leading-snug tracking-wide sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a lead data engineer &amp; genai specialist building enterprise-scale
          data platforms and intelligent systems
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Let's talk" />
        </FadeIn>
      </div>

      {/* Hero portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://github.com/shafaypro.png"
            alt="Shafay Amjad"
            className="aspect-square w-full select-none rounded-[32px] border-2 border-[#D7E2EA]/30 object-cover shadow-2xl shadow-black/60"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
