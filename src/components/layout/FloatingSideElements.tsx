import { motion } from 'framer-motion';
import {
  Database, Workflow, Layers, Terminal, Cloud, Zap, GitBranch, Boxes,
  Sparkles, BrainCircuit, Bot, MessageSquareText, Network, Search, LineChart, Cpu, ShieldCheck,
} from 'lucide-react';

// Left: data engineering foundation. Right: AI & ML focus.
const leftItems = [
  { icon: <Database size={13} />, text: 'BigQuery' },
  { icon: <Workflow size={13} />, text: 'Apache Airflow' },
  { icon: <Layers size={13} />, text: 'dbt & Data Vault' },
  { icon: <Zap size={13} />, text: 'PySpark' },
  { icon: <Terminal size={13} />, text: 'Python & SQL' },
  { icon: <Cloud size={13} />, text: 'Dataproc Serverless' },
  { icon: <Boxes size={13} />, text: 'ETL / ELT' },
  { icon: <GitBranch size={13} />, text: 'CI/CD Pipelines' },
];

const rightItems = [
  { icon: <Sparkles size={13} />, text: 'Generative AI' },
  { icon: <MessageSquareText size={13} />, text: 'LLMs & Prompting' },
  { icon: <Bot size={13} />, text: 'AI Agents · ADK' },
  { icon: <Cpu size={13} />, text: 'Vertex AI & Gemini' },
  { icon: <Network size={13} />, text: 'Vector Embeddings' },
  { icon: <Search size={13} />, text: 'RAG' },
  { icon: <LineChart size={13} />, text: 'BigQuery ML' },
  { icon: <BrainCircuit size={13} />, text: 'Machine Learning' },
  { icon: <ShieldCheck size={13} />, text: 'Responsible AI' },
];

const floatCycle = ['animate-float', 'animate-float-reverse'];

export default function FloatingSideElements() {
  return (
    <div className="floating-side" aria-hidden="true">
      <div className="floating-col floating-col-left">
        {leftItems.map((item, idx) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.06 }}
          >
            <div className={`floating-pill ${floatCycle[idx % 2]}`} style={{ animationDelay: `${idx * 0.4}s` }}>
              <span className="pill-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="floating-col floating-col-right">
        {rightItems.map((item, idx) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.06 }}
          >
            <div className={`floating-pill floating-pill-ai ${floatCycle[(idx + 1) % 2]}`} style={{ animationDelay: `${idx * 0.4}s` }}>
              <span className="pill-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
