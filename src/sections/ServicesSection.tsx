import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Data Platforms',
    description:
      'End-to-end lakehouse architectures on AWS and GCP: metadata-driven ELT/ETL pipelines with Airflow, dbt, and Spark, plus full governance, lineage, and automated lifecycle management.',
  },
  {
    number: '02',
    name: 'GenAI Engineering',
    description:
      'Complete end-to-end GenAI and agentic AI systems: multi-step autonomous agents, tool calling and orchestration, RAG over enterprise knowledge, and human-in-the-loop copilots on Bedrock and LangChain.',
  },
  {
    number: '03',
    name: 'Streaming Systems',
    description:
      'Event-driven pipelines with Kafka, Kinesis, Flink, and Spark that process billions of events per day to power near real-time reporting and intelligent automation.',
  },
  {
    number: '04',
    name: 'ML & MLOps',
    description:
      'Production ML pipelines, recommendation engines, and predictive analytics with SageMaker, TensorFlow, and PyTorch, deployed cloud-native with reliability and governance built in.',
  },
  {
    number: '05',
    name: 'Cloud & DevOps',
    description:
      'Multi-cloud infrastructure as code with Terraform, Kubernetes, and CI/CD, enabling consistent, reproducible, and cost-aware deployments across AWS and GCP.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="expertise"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Expertise
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-4 border-t py-8 last:border-b sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
          >
            <span
              className="shrink-0 font-black leading-none text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>
            <div className="flex flex-col gap-3 pt-1 md:gap-4">
              <h3
                className="font-medium uppercase text-[#0C0C0C]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
