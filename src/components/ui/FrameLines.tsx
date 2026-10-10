interface FrameLinesProps {
  top?: boolean;
  bottom?: boolean;
}

// Full-bleed dashed lines + corner markers where they cross the column rails.
// Place inside a `position: relative` element that spans the full column width.
export default function FrameLines({ top = true, bottom = true }: FrameLinesProps) {
  return (
    <>
      {top && (
        <>
          <span className="hline hline-top" aria-hidden="true" />
          <span className="corner corner-tl" aria-hidden="true" />
          <span className="corner corner-tr" aria-hidden="true" />
        </>
      )}
      {bottom && (
        <>
          <span className="hline hline-bottom" aria-hidden="true" />
          <span className="corner corner-bl" aria-hidden="true" />
          <span className="corner corner-br" aria-hidden="true" />
        </>
      )}
    </>
  );
}
