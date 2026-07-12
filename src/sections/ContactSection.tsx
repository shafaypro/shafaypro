import { Mail, Linkedin, Github, Globe } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

const LINKS = [
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'shafay.deutschhier.com',
    href: 'https://shafay.deutschhier.com/',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/imshafay',
    href: 'https://linkedin.com/in/imshafay',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'shafaypro',
    href: 'https://github.com/shafaypro',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mshafayamjad@gmail.com',
    href: 'mailto:mshafayamjad@gmail.com',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 flex min-h-screen flex-col items-center justify-center gap-12 rounded-t-[40px] bg-white px-5 py-20 sm:-mt-12 sm:gap-16 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
      >
        Let&apos;s build
        <br />
        something amazing
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        y={20}
        className="max-w-xl text-center font-light leading-relaxed text-[#0C0C0C] opacity-60"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      >
        Looking for a lead data engineer, data scientist, or GenAI enterprise
        application developer, need consultation on cloud architecture, or want
        to collaborate on AI projects? I&apos;d love to hear from you.
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <ContactButton label="Get in touch" href="mailto:mshafayamjad@gmail.com" />
      </FadeIn>

      <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
        {LINKS.map((link, i) => {
          const Icon = link.icon
          return (
            <FadeIn key={link.label} delay={0.3 + i * 0.08} y={20}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center gap-4 rounded-2xl border border-[#0C0C0C]/15 px-6 py-5 transition-colors duration-200 hover:bg-[#0C0C0C]/[0.04]"
              >
                <Icon className="h-6 w-6 shrink-0 text-[#0C0C0C]" />
                <span className="flex flex-col">
                  <span className="text-xs font-light uppercase tracking-widest text-[#0C0C0C] opacity-50">
                    {link.label}
                  </span>
                  <span className="font-medium text-[#0C0C0C]">
                    {link.value}
                  </span>
                </span>
              </a>
            </FadeIn>
          )
        })}
      </div>

      <p className="text-center text-sm font-light uppercase tracking-widest text-[#0C0C0C] opacity-40">
        Shafay Amjad · Berlin, Germany · Built with passion for data &amp; AI
      </p>
    </section>
  )
}
