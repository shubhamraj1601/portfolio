// Plasma-AI architecture: data source → Pub/Sub → Dataflow → BigQuery + Cloud Storage → CNN-LSTM (planned).
// Two layouts of the same graph: horizontal for wide cards, vertical for phones (switched in CSS).
// Colors come from the theme tokens, so it follows light/dark mode.

interface Node {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines: string[];
  planned?: boolean;
}

interface Layout {
  className: string;
  width: number;
  height: number;
  nodes: Node[];
  edges: string[]; // SVG path data, each ending where the arrowhead should sit
}

const horizontal: Layout = {
  className: 'pd-horizontal',
  width: 755,
  height: 182,
  nodes: [
    { x: 10, y: 64, w: 135, h: 62, title: 'Data source', lines: ['1 kHz spectra', '10 Hz sensors'] },
    { x: 175, y: 64, w: 115, h: 62, title: 'Pub/Sub', lines: ['versioned schema', '+ dead-letter'] },
    { x: 320, y: 64, w: 135, h: 62, title: 'Dataflow', lines: ['Apache Beam', 'validate · features'] },
    { x: 485, y: 24, w: 125, h: 56, title: 'BigQuery', lines: ['sensors · features'] },
    { x: 485, y: 110, w: 125, h: 56, title: 'Cloud Storage', lines: ['raw spectra'] },
    { x: 640, y: 64, w: 105, h: 62, title: 'CNN-LSTM', lines: ['plasma state', 'planned'], planned: true },
  ],
  edges: [
    'M145 95 H172',
    'M290 95 H317',
    'M455 95 C470 95 468 52 482 52',
    'M455 95 C470 95 468 138 482 138',
    'M610 52 C625 52 623 95 637 95',
    'M610 138 C625 138 623 95 637 95',
  ],
};

const vertical: Layout = {
  className: 'pd-vertical',
  width: 340,
  height: 386,
  nodes: [
    { x: 60, y: 8, w: 220, h: 54, title: 'Data source', lines: ['1 kHz spectra · 10 Hz sensors'] },
    { x: 60, y: 86, w: 220, h: 54, title: 'Pub/Sub', lines: ['versioned schema · dead-letter'] },
    { x: 60, y: 164, w: 220, h: 54, title: 'Dataflow (Apache Beam)', lines: ['validate · window · features'] },
    { x: 15, y: 246, w: 150, h: 54, title: 'BigQuery', lines: ['sensors · features'] },
    { x: 175, y: 246, w: 150, h: 54, title: 'Cloud Storage', lines: ['raw spectra'] },
    { x: 60, y: 324, w: 220, h: 54, title: 'CNN-LSTM', lines: ['plasma state · planned'], planned: true },
  ],
  edges: [
    'M170 62 V83',
    'M170 140 V161',
    'M170 218 C170 232 90 230 90 243',
    'M170 218 C170 232 250 230 250 243',
    'M90 300 C90 314 170 310 170 321',
    'M250 300 C250 314 170 310 170 321',
  ],
};

function Diagram({ layout }: { layout: Layout }) {
  const markerId = `pd-arrow-${layout.className}`;
  return (
    <svg className={layout.className} viewBox={`0 0 ${layout.width} ${layout.height}`} aria-hidden="true" focusable="false">
      <defs>
        <marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="pd-arrowhead" />
        </marker>
      </defs>

      {layout.edges.map((d) => (
        <path key={d} d={d} className="pd-edge" markerEnd={`url(#${markerId})`} />
      ))}

      {layout.nodes.map((n) => {
        const cx = n.x + n.w / 2;
        return (
          <g key={n.title}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" className={`pd-node ${n.planned ? 'pd-node-planned' : ''}`} />
            <text x={cx} y={n.y + 22} textAnchor="middle" className="pd-title">{n.title}</text>
            {n.lines.map((line, i) => (
              <text
                key={line}
                x={cx}
                y={n.y + (n.lines.length === 1 ? 40 : 38 + i * 13)}
                textAnchor="middle"
                className={`pd-sub ${line === 'planned' ? 'pd-tag' : ''}`}
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function PipelineDiagram() {
  return (
    <figure
      className="pd"
      role="img"
      aria-label="Pipeline: reactor data source to Pub/Sub, then Dataflow (Apache Beam), then BigQuery and Cloud Storage, feeding a planned CNN-LSTM model"
    >
      <Diagram layout={horizontal} />
      <Diagram layout={vertical} />
    </figure>
  );
}
