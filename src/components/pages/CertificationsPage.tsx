import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { portfolioData, CertificationItem } from '../../data/content';
import PageShell from './PageShell';

// Group certifications by the last 4-digit year in their date, keeping content.ts order
function groupByYear(items: CertificationItem[]) {
  const groups: { year: string; items: CertificationItem[] }[] = [];
  items.forEach((item) => {
    const year = item.date.match(/\d{4}/g)?.pop() ?? 'Other';
    const last = groups[groups.length - 1];
    if (last && last.year === year) last.items.push(item);
    else groups.push({ year, items: [item] });
  });
  return groups;
}

export default function CertificationsPage() {
  const { certifications, contact } = portfolioData;
  const groups = groupByYear(certifications);

  return (
    <PageShell
      eyebrow="more · certifications"
      title="Certifications & Badges"
      subtitle="Verified certifications and learning milestones, newest first"
    >
      <div className="cert-timeline">
        {groups.map((group) => (
          <div key={group.year} className="cert-year">
            <div className="cert-year-label mono">{group.year}</div>
            <ul className="cert-list">
              {group.items.map((cert, i) => {
                const content = (
                  <>
                    <div className="cert-main">
                      <h3 className="cert-name">
                        {cert.name}
                        {cert.tags?.includes('AI') && (
                          <span className="chip chip-accent cert-tag">
                            <Sparkles size={11} /> AI
                          </span>
                        )}
                      </h3>
                      <p className="cert-meta">
                        {cert.issuer} <span aria-hidden="true">·</span> {cert.date}
                      </p>
                      {cert.credentialId && <p className="cert-id mono">{cert.credentialId}</p>}
                    </div>
                    {cert.link && <ExternalLink size={15} className="cert-link-icon" />}
                  </>
                );

                return (
                  <motion.li
                    key={cert.id}
                    className="cert-item"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.04 }}
                  >
                    <span className="cert-dot" aria-hidden="true" />
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card card card-hover">
                        {content}
                      </a>
                    ) : (
                      <div className="cert-card card">{content}</div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="cert-footnote">
        All Google Cloud skill badges are listed on my{' '}
        <a href={contact.googleBadges} target="_blank" rel="noopener noreferrer">public Google Cloud profile</a>.
      </p>
    </PageShell>
  );
}
