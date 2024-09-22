import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const JobList = () => {
  const { applyJob } = useAuth();
  const navigate = useNavigate();

  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Google', location: 'Remote', description: 'Develop scalable web applications.' },
    { id: 2, title: 'Product Manager', company: 'Amazon', location: 'New York', description: 'Lead product teams to deliver on-time solutions.' },
    { id: 3, title: 'Data Scientist', company: 'Facebook', location: 'San Francisco', description: 'Analyze and interpret complex data.' },
    { id: 4, title: 'UX Designer', company: 'Apple', location: 'Cupertino', description: 'Design user-friendly interfaces.' },
    { id: 5, title: 'Full Stack Developer', company: 'Microsoft', location: 'Redmond', description: 'Build and maintain web applications.' },
    { id: 6, title: 'Marketing Specialist', company: 'IBM', location: 'Austin', description: 'Create and implement marketing strategies.' },
    { id: 7, title: 'Systems Analyst', company: 'Oracle', location: 'Dallas', description: 'Analyze and improve IT systems.' },
    { id: 8, title: 'Sales Representative', company: 'Salesforce', location: 'San Francisco', description: 'Drive sales and manage client relationships.' },
    { id: 9, title: 'DevOps Engineer', company: 'Adobe', location: 'San Jose', description: 'Automate and streamline operations.' },
    { id: 10, title: 'Network Engineer', company: 'Cisco', location: 'San Jose', description: 'Design and implement network solutions.' },
    { id: 11, title: 'Game Developer', company: 'Epic Games', location: 'Cary', description: 'Create and develop video games.' },
    { id: 12, title: 'Data Analyst', company: 'Spotify', location: 'New York', description: 'Provide insights through data analysis.' },
    { id: 13, title: 'Cybersecurity Specialist', company: 'Palo Alto Networks', location: 'Santa Clara', description: 'Protect networks from threats.' },
    { id: 14, title: 'Human Resources Manager', company: 'LinkedIn', location: 'Sunnyvale', description: 'Oversee hiring and employee relations.' },
    { id: 15, title: 'Financial Analyst', company: 'Goldman Sachs', location: 'New York', description: 'Analyze financial data and trends.' },
    { id: 16, title: 'Technical Writer', company: 'Atlassian', location: 'Mountain View', description: 'Create documentation for products.' },
    { id: 17, title: 'Content Writer', company: 'BuzzFeed', location: 'Los Angeles', description: 'Write articles and engage audiences.' },
    { id: 18, title: 'SEO Specialist', company: 'Moz', location: 'Seattle', description: 'Optimize website content for search engines.' },
    { id: 19, title: 'Mobile App Developer', company: 'Snap Inc.', location: 'Santa Monica', description: 'Develop mobile applications for iOS and Android.' },
    { id: 20, title: 'Cloud Architect', company: 'AWS', location: 'Seattle', description: 'Design cloud computing solutions.' },
    { id: 21, title: 'Quality Assurance Engineer', company: 'Tesla', location: 'Palo Alto', description: 'Ensure product quality through testing.' },
    { id: 22, title: 'Project Manager', company: 'Slack', location: 'San Francisco', description: 'Manage project timelines and deliverables.' },
    { id: 23, title: 'Web Designer', company: 'Figma', location: 'San Francisco', description: 'Create engaging web designs.' },
    { id: 24, title: 'Software Tester', company: 'NVIDIA', location: 'Santa Clara', description: 'Test software products for bugs.' },
    { id: 25, title: 'E-commerce Specialist', company: 'eBay', location: 'San Jose', description: 'Manage online sales strategies.' },
    { id: 26, title: 'Pharmaceutical Sales Rep', company: 'Pfizer', location: 'New York', description: 'Promote pharmaceutical products.' },
    { id: 27, title: 'Civil Engineer', company: 'AECOM', location: 'Los Angeles', description: 'Design and oversee construction projects.' },
    { id: 28, title: 'Logistics Coordinator', company: 'DHL', location: 'Atlanta', description: 'Manage supply chain logistics.' },
    { id: 29, title: 'Legal Assistant', company: 'Skadden', location: 'Chicago', description: 'Support legal teams with documentation.' },
    { id: 30, title: 'Social Media Manager', company: 'Hootsuite', location: 'Vancouver', description: 'Manage social media strategies.' },
    { id: 31, title: 'Artificial Intelligence Engineer', company: 'Google', location: 'Mountain View', description: 'Develop AI models and algorithms.' },
    { id: 32, title: 'Research Scientist', company: 'NASA', location: 'Huntsville', description: 'Conduct research in space exploration.' },
    { id: 33, title: 'Environmental Consultant', company: 'WSP', location: 'Seattle', description: 'Advise on environmental practices.' },
    { id: 34, title: 'Business Analyst', company: 'Accenture', location: 'New York', description: 'Analyze business needs and solutions.' },
    { id: 35, title: 'Product Designer', company: 'Square', location: 'San Francisco', description: 'Design innovative products.' },
    { id: 36, title: 'Interior Designer', company: 'Gensler', location: 'Los Angeles', description: 'Create functional interior spaces.' },
    { id: 37, title: 'Brand Strategist', company: 'Ogilvy', location: 'Chicago', description: 'Develop brand strategies for clients.' },
    { id: 38, title: 'Data Engineer', company: 'LinkedIn', location: 'Sunnyvale', description: 'Build and maintain data pipelines.' },
    { id: 39, title: 'Insurance Underwriter', company: 'State Farm', location: 'Atlanta', description: 'Evaluate insurance applications.' },
    { id: 40, title: 'Health Coach', company: 'MyFitnessPal', location: 'Remote', description: 'Guide clients to improve their health.' },
    // Add more jobs as needed
  ];

  const handleApply = (job) => {
    applyJob(job);
    alert(`Applied for ${job.title} at ${job.company}`);
    navigate('/applications');
  };

  return (
    <div>
      <h2>Job Listings</h2>
      <ul className="list-group">
        {jobs.map((job) => (
          <li key={job.id} className="list-group-item">
            <h5>{job.title} - {job.company}</h5>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <button className="btn btn-primary" onClick={() => handleApply(job)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
