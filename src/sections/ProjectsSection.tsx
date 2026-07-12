import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

interface Project {
  number: string
  name: string
  category: string
  description: string
  impact: string[]
  stack: string[]
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Enterprise Serverless Lakehouse',
    category: 'Data Platform · AWS',
    description:
      'A fully serverless, scalable lakehouse on AWS for a leading manufacturing enterprise, centralizing analytics across manufacturing, operations, and finance with metadata-driven pipelines, end-to-end governance, lineage tracking, and automated lifecycle management.',
    impact: ['Measurable Revenue Growth', 'Full Data Governance'],
    stack: [
      'Glue',
      'Athena',
      'Lake Formation',
      'Delta Lake',
      'Step Functions',
      'dbt',
      'Terraform',
    ],
  },
  {
    number: '02',
    name: 'End-to-End GenAI & Agentic AI Platform',
    category: 'GenAI · Agentic AI',
    description:
      'Designed and shipped complete GenAI applications and agentic AI systems: multi-step autonomous agents with tool calling and orchestration, RAG over enterprise knowledge bases, and human-in-the-loop copilots, built with guardrails, evaluation harnesses, and observability throughout.',
    impact: ['Autonomous Agents', 'Enterprise RAG'],
    stack: [
      'Bedrock',
      'LangChain',
      'LangGraph',
      'MCP',
      'HuggingFace',
      'Vector DB',
    ],
  },
  {
    number: '03',
    name: 'Multi-Stream Real-Time Data Platform',
    category: 'Streaming · Real-Time',
    description:
      'Kafka and Kinesis real-time systems for a leading e-commerce platform processing billions of events per day to power CX optimization, predictive analytics, and dynamic metric dashboards across global markets.',
    impact: ['Billions of Events / Day', 'Real-Time Insights'],
    stack: ['Kafka', 'Kinesis', 'Lambda', 'DynamoDB', 'Step Functions', 'Spark'],
  },
]

interface CardProps {
  project: Project
  index: number
  totalCards: number
}

function ProjectCard({ project, index, totalCards }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={ref}
      className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom row: description + tags */}
        <div className="mt-6 grid gap-8 md:mt-10 md:grid-cols-[3fr_2fr]">
          <p
            className="font-light leading-relaxed text-[#D7E2EA] opacity-80"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.35rem)' }}
          >
            {project.description}
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest text-white sm:text-sm"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#D7E2EA]/25 px-3 py-1.5 text-xs font-light uppercase tracking-wider text-[#D7E2EA] opacity-80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Work
      </FadeIn>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}
