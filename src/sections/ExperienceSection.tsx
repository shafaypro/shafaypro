import FadeIn from '../components/FadeIn'

interface Role {
  role: string
  company: string
  period: string
  highlight: string
}

const ROLES: Role[] = [
  {
    role: 'Lead Data Engineer',
    company: 'Orion S.A.',
    period: 'Jan 2024 — Present',
    highlight:
      'Built complete end-to-end data platforms on a serverless AWS lakehouse and led GenAI adoption, shipping production GenAI applications and agentic AI systems with Bedrock, LangChain, and Streamlit.',
  },
  {
    role: 'Senior Data Engineer',
    company: 'Delivery Hero SE',
    period: 'Jan 2022 — Jan 2024',
    highlight:
      'Batch and streaming pipelines across AWS and GCP with real-time analytics APIs and Terraform IaC, processing billions of events per day on BigQuery and Spark.',
  },
  {
    role: 'Senior Data Engineer',
    company: 'Amazon',
    period: 'Sep 2020 — Jan 2022',
    highlight:
      'Predictive modeling and end-to-end BI/ML on Redshift, SageMaker, Glue, Lambda, and Athena, with multi-stream real-time systems using Kafka and Kinesis.',
  },
  {
    role: 'Senior Data Engineer',
    company: 'Goldman Sachs',
    period: 'Jun 2021 — Dec 2021',
    highlight:
      'Enterprise-scale financial analytics pipelines with secure, compliance-driven data workflows and ML model deployment support.',
  },
  {
    role: 'Sr. Software Engineer / Data Scientist',
    company: 'NorthBay Solutions',
    period: 'Feb 2019 — Sep 2020',
    highlight:
      'ETL and OCR automation for insurance and healthcare, domain ML models and recommendation engines, plus graph-based and Alexa-integrated LLM automation.',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'NorthBay Solutions',
    period: 'Sep 2017 — Feb 2019',
    highlight:
      'Serverless ML on Lambda and SageMaker, voice-enabled LLM systems, and real-time processing with Spark, Flink, and EMR.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {ROLES.map((item, i) => (
          <FadeIn
            key={`${item.company}-${item.period}`}
            delay={i * 0.08}
            y={30}
            className="flex flex-col gap-3 border-t py-8 last:border-b sm:flex-row sm:gap-10 sm:py-10 md:py-12"
            style={{ borderColor: 'rgba(215, 226, 234, 0.15)' }}
          >
            <div className="flex shrink-0 flex-col gap-1 sm:w-56">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50 sm:text-sm">
                {item.period}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}
              >
                {item.company}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3
                className="hero-heading font-black uppercase leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2rem)' }}
              >
                {item.role}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#D7E2EA] opacity-70"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.2rem)' }}
              >
                {item.highlight}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
