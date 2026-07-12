import { useEffect, useRef, useState } from 'react'

// Real tech stack, split into two counter-scrolling rows.
const ROW_ONE_STACK = [
  'Python',
  'Apache Spark',
  'Kafka',
  'Airflow',
  'dbt',
  'Databricks',
  'Delta Lake',
  'Apache Iceberg',
  'Snowflake',
  'BigQuery',
  'Redshift',
]

const ROW_TWO_STACK = [
  'AWS',
  'GCP',
  'Terraform',
  'Kubernetes',
  'Amazon Bedrock',
  'LangChain',
  'LangGraph',
  'RAG',
  'MCP',
  'SageMaker',
]

const ROW_ONE = [...ROW_ONE_STACK, ...ROW_ONE_STACK, ...ROW_ONE_STACK]
const ROW_TWO = [...ROW_TWO_STACK, ...ROW_TWO_STACK, ...ROW_TWO_STACK]

function Tile({ label }: { label: string }) {
  return (
    <div
      className="flex h-[130px] min-w-[300px] shrink-0 items-center justify-center rounded-2xl border border-[#D7E2EA]/15 px-10"
      style={{
        background:
          'linear-gradient(145deg, rgba(215,226,234,0.06) 0%, rgba(12,12,12,0.4) 100%)',
      }}
    >
      <span
        className="hero-heading whitespace-nowrap font-black uppercase tracking-tight"
        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top + window.scrollY
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(raw)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_ONE.map((label, i) => (
            <Tile key={`r1-${i}`} label={label} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_TWO.map((label, i) => (
            <Tile key={`r2-${i}`} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}
