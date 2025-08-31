import React, { useEffect, useState } from 'react';
import './App.css';

const GITHUB_USERNAME = 'scottcrews';
const LINKEDIN_URL = 'https://www.linkedin.com/in/scottcrews/';

function App() {
  // Epic sample projects for demo purposes
  const repos = [
    {
      id: 1,
      name: 'QuantumVision',
      html_url: '#',
      description: 'AI-powered image recognition platform for medical diagnostics.',
      language: 'Python',
      stargazers_count: 1280,
      forks_count: 320,
      updated_at: '2025-08-01',
    },
    {
      id: 2,
      name: 'NebulaNet',
      html_url: '#',
      description: 'Decentralized cloud infrastructure for secure data sharing.',
      language: 'Go',
      stargazers_count: 950,
      forks_count: 210,
      updated_at: '2025-07-15',
    },
    {
      id: 3,
      name: 'ChronoLedger',
      html_url: '#',
      description: 'Blockchain-based academic credential verification system.',
      language: 'JavaScript',
      stargazers_count: 780,
      forks_count: 150,
      updated_at: '2025-06-30',
    },
    {
      id: 4,
      name: 'AtlasAI',
      html_url: '#',
      description: 'Global geospatial analytics for climate change research.',
      language: 'TypeScript',
      stargazers_count: 1100,
      forks_count: 275,
      updated_at: '2025-05-20',
    },
    {
      id: 5,
      name: 'SentinelX',
      html_url: '#',
      description: 'Real-time cybersecurity threat detection and response engine.',
      language: 'Rust',
      stargazers_count: 1340,
      forks_count: 410,
      updated_at: '2025-04-10',
    },
    {
      id: 6,
      name: 'EduVerse',
      html_url: '#',
      description: 'Immersive VR platform for collaborative STEM education.',
      language: 'C#',
      stargazers_count: 890,
      forks_count: 190,
      updated_at: '2025-03-05',
    },
  ];
  const loading = false;

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/109893?s=200" alt="Profile" className="profile-img" />
          <div>
            <h1>Scott Crews</h1>
            <p className="bio">Software developer with experience in web, data, and education. See LinkedIn for more.</p>
            <div className="social-links">
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2>Portfolio Projects <span style={{fontSize: '1rem', fontWeight: 400, color: '#b31b1b'}}>(These are all fake projects made up by AI to show the website layout. Real projects coming soon.)</span></h2>
          {loading ? (
            <div>Loading projects...</div>
          ) : (
            <div className="projects-grid">
              {repos.map(repo => (
                <AnimatedCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </section>
        <section>
          <h2>Timeline</h2>
          <Timeline />
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
        </section>
      </main>
      <footer className="portfolio-footer">
        <p>&copy; 2025 Scott Crews</p>
      </footer>
    </div>
  );
}


// Animated project card component
function AnimatedCard({ repo }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className={`project-card${hovered ? ' animated' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
    >
      <div className="project-title">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
      </div>
      <div className="project-desc">{repo.description || 'No description provided.'}</div>
      {hovered && (
        <div className="project-details">
          <p><strong>Language:</strong> {repo.language || 'N/A'}</p>
          <p><strong>Stars:</strong> {repo.stargazers_count}</p>
          <p><strong>Forks:</strong> {repo.forks_count}</p>
          <p><strong>Last Updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
}

// Horizontal interactive timeline component
function Timeline() {
  // Example timeline data (customize as needed)
  const events = [
    { year: '2001', title: 'B.S., Computer Science, Minor in General Business', desc: 'Samford University. Activities: Samford Ambassadors, ACM President, SGA Senate Chair.' },
    { year: '2005', title: 'Senior Administrator', desc: 'Reach Your City. Controller and IT Director, managed financial cycles and IT infrastructure.' },
    { year: '2010', title: 'Staff/Senior, Security & Risk Services', desc: 'LBMC, Brentwood, TN. Security and risk services for a wide client base.' },
    { year: '2013', title: 'Manager, Security & Risk Services', desc: 'LBMC, Brentwood, TN. PCI QSA, GSNA, GWAPT. Performed security assessments, penetration testing, and compliance audits.' },
    { year: '2016', title: 'Information Security Manager', desc: "Lowe's Companies, Inc., Mooresville, NC. Led creation of Quality and Process team, improved IAM operations and automation." },
    { year: '2019', title: 'Senior IT Security Manager', desc: "Lowe's Companies, Inc., Mooresville, NC. Managed security operations and team coaching." },
    { year: '2020', title: 'Information Security Director', desc: "Lowe's Companies, Inc., Mooresville, NC. Led identity governance, privileged access management, and risk reduction initiatives." },
    { year: '2021', title: 'M.S., Cybersecurity', desc: 'Georgia Institute of Technology.' },
    { year: '2022', title: 'Computer Science Faculty', desc: 'Samford University, Birmingham, AL. Teaching and mentoring students in computer science.' },
  ];
  const [activeIdx, setActiveIdx] = React.useState(null);
  return (
    <div className="timeline-horizontal">
      <div className="timeline-track">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`timeline-marker${activeIdx === idx ? ' active' : ''}`}
            onMouseEnter={() => setActiveIdx(idx)}
            onFocus={() => setActiveIdx(idx)}
            tabIndex={0}
          >
            <span className="timeline-year-horizontal">{event.year}</span>
          </div>
        ))}
      </div>
      <div className="timeline-details-space">
        {activeIdx !== null && (
          <div className="timeline-details-card">
            <div className="timeline-title">{events[activeIdx].title}</div>
            <div className="timeline-desc">{events[activeIdx].desc}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
