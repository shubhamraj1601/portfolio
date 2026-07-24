import { motion } from 'framer-motion';
import { Database, Server, Code2, Layers, Sparkles, Cpu, GitBranch, Terminal, Shield, Cloud, BarChart3, Settings } from 'lucide-react';

export default function FloatingSideElements() {
  const leftItems = [
    { icon: <Database size={13} />, text: "GCP BigQuery", delay: 0 },
    { icon: <Server size={13} />, text: "Apache Airflow", delay: 0.4 },
    { icon: <Code2 size={13} />, text: "PySpark & dbt", delay: 0.8 },
    { icon: <Terminal size={13} />, text: "Python & SQL", delay: 1.2 },
    { icon: <Shield size={13} />, text: "Data Vault 2.0", delay: 1.6 },
    { icon: <Cloud size={13} />, text: "Dataproc Serverless", delay: 2.0 },
    { icon: <BarChart3 size={13} />, text: "EDW Modernization", delay: 2.4 },
    { icon: <Settings size={13} />, text: "COBOL Migration", delay: 2.8 },
    { icon: <GitBranch size={13} />, text: "CI/CD Pipelines", delay: 3.2 },
  ];

  const rightItems = [
    { icon: <Sparkles size={13} />, text: "Gen AI Badges", delay: 0.2 },
    { icon: <Layers size={13} />, text: ".NET Core 8.0", delay: 0.6 },
    { icon: <Cpu size={13} />, text: "Blazor WebAssembly", delay: 1.0 },
    { icon: <Database size={13} />, text: "Snowflake & IICS", delay: 1.4 },
    { icon: <Code2 size={13} />, text: "React & Vue 3", delay: 1.8 },
    { icon: <Cloud size={13} />, text: "Cloud Composer", delay: 2.2 },
    { icon: <BarChart3 size={13} />, text: "Tableau Analytics", delay: 2.6 },
    { icon: <Server size={13} />, text: "Entity Framework", delay: 3.0 },
    { icon: <Shield size={13} />, text: "Oracle Cloud OCI", delay: 3.4 },
  ];

  // Alternating float classes for visual variety
  const floatCycle = ['animate-float', 'animate-float-reverse'];

  return (
    <>
      <div className="floating-side-stream-container">
        {/* Left Column */}
        <div className="floating-margin-left">
          <div className="vector-diamond vector-diamond-1" />
          <div className="vector-square vector-square-1" />

          {leftItems.map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 0.82, x: 0 }}
              transition={{ duration: 0.7, delay: item.delay * 0.18 + 0.3 }}
              className={`glass floating-pill ${floatCycle[idx % 2]}`}
            >
              <span className="pill-icon">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}

          <div className="vector-circle vector-circle-1" />
          <div className="vector-square vector-square-3" />
        </div>

        {/* Right Column */}
        <div className="floating-margin-right">
          <div className="vector-square vector-square-2" />
          <div className="vector-circle vector-circle-2" />

          {rightItems.map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 0.82, x: 0 }}
              transition={{ duration: 0.7, delay: item.delay * 0.18 + 0.3 }}
              className={`glass floating-pill ${floatCycle[(idx + 1) % 2]}`}
            >
              <span className="pill-icon">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}

          <div className="vector-diamond vector-diamond-2" />
          <div className="vector-square vector-square-4" />
        </div>
      </div>

      <style>{`
        .floating-side-stream-container {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 5;
        }

        /* Position the columns beyond the 1140px container boundary + extra safe padding */
        .floating-margin-left {
          position: absolute;
          top: 14vh;
          left: 0;
          width: calc(50vw - 590px);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.8rem;
          padding-right: 1rem;
          overflow: hidden;
        }

        .floating-margin-right {
          position: absolute;
          top: 18vh;
          right: 0;
          width: calc(50vw - 590px);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.8rem;
          padding-left: 1rem;
          overflow: hidden;
        }

        .floating-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.38rem 0.75rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          background: var(--bg-glass);
          backdrop-filter: blur(10px);
          white-space: nowrap;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .pill-icon {
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        /* Geometric vector shapes */
        .vector-square {
          width: 20px;
          height: 20px;
          border: 1.5px solid var(--accent-primary);
          border-radius: 4px;
          opacity: 0.3;
          flex-shrink: 0;
        }
        .vector-square-1 { animation: spin-slow 22s linear infinite; }
        .vector-square-2 { animation: spin-slow 18s linear infinite reverse; }
        .vector-square-3 { animation: spin-slow 26s linear infinite; width: 14px; height: 14px; opacity: 0.22; }
        .vector-square-4 { animation: spin-slow 20s linear infinite reverse; width: 14px; height: 14px; opacity: 0.22; }

        .vector-circle {
          width: 18px;
          height: 18px;
          border: 1.5px dashed var(--accent-secondary);
          border-radius: 50%;
          opacity: 0.28;
          flex-shrink: 0;
        }
        .vector-circle-1 { animation: float-slow 8s ease-in-out infinite; }
        .vector-circle-2 { animation: float-slow 10s ease-in-out infinite reverse; }

        .vector-diamond {
          width: 16px;
          height: 16px;
          border: 1.5px dashed var(--accent-secondary);
          transform: rotate(45deg);
          opacity: 0.3;
          flex-shrink: 0;
        }
        .vector-diamond-1 { animation: spin-slow 30s linear infinite; }
        .vector-diamond-2 { animation: spin-slow 24s linear infinite reverse; }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Only show when there is enough viewport width for the side columns to be non-zero */
        @media (max-width: 1300px) {
          .floating-side-stream-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
