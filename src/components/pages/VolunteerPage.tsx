import { portfolioData, VolunteerItem } from '../../data/content';
import PageShell from './PageShell';
import Reveal from '../ui/Reveal';

export default function VolunteerPage() {
  const { volunteer } = portfolioData;

  return (
    <PageShell eyebrow="more · volunteer" title="Volunteer Work" subtitle="Community, mentorship and campus initiatives">
      <div className="timeline">
        {volunteer.map((item: VolunteerItem, i: number) => (
          <Reveal key={item.id} delay={i * 0.05} className="job">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="job-head">
              <div>
                <h3 className="job-role">{item.role}</h3>
                <p className="job-company"><span>{item.organization}</span></p>
              </div>
              <span className="job-date mono">{item.duration}</span>
            </div>
            <p className="job-summary">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
