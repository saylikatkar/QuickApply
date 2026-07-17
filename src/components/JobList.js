import React, { useState, useEffect } from 'react';
import JobChart from './JobChart';

export default function JobList({ jobs, onView }) {
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const domains = ['All', ...Array.from(new Set(jobs.map(j => j.domain)))];

  const filtered = jobs.filter(job => {
    const term = search.toLowerCase();
    const matchTerm = job.title.toLowerCase().includes(term) || job.company.toLowerCase().includes(term) || job.description.toLowerCase().includes(term);
    const domainMatch = selectedDomain === 'All' || job.domain === selectedDomain;
    return matchTerm && domainMatch;
  });

  return (
    <div>
      <div className="hero-section text-center mb-4">
        <h1 className="display-5 fw-bold text-dark"><i className="bi bi-search me-2"></i>Find Your Perfect Job</h1>
        <p className="lead text-muted">Explore {jobs.length} opportunities.</p>
        <div className="input-group my-3 w-75 mx-auto">
          <input className="form-control form-control-lg" placeholder="Search job title, company, or skills..." value={search} onChange={e => setSearch(e.target.value)} />
          <button className="btn btn-secondary" onClick={() => {}}><i className="bi bi-search"></i></button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 mb-4">
          <div className="card p-3 shadow-sm">
            <h5 className="text-primary"><i className="bi bi-funnel-fill me-2"></i>Filter by Domain</h5>
            <hr/>
            <div>
              {domains.map(d => (
                <button key={d} className={`btn w-100 mb-2 ${selectedDomain === d ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setSelectedDomain(d)}>{d} <span className="badge bg-secondary ms-2">{jobs.filter(j => d === 'All' || j.domain === d).length}</span></button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <h2 className="mb-4">Available Opportunities ({filtered.length})</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="job-list-container">
            {filtered.length ? filtered.map(job => (
              <div className="col" key={job.id}>
                <div className="card job-card h-100" onClick={() => onView('detail', job)}>
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-primary mb-2 align-self-start">{job.domain}</span>
                    <h5 className="card-title fw-bold text-dark">{job.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                    <p className="card-text"><i className="bi bi-geo-alt-fill text-danger me-2"></i>{job.location} | <i className="bi bi-clock-fill text-success me-2 ms-2"></i>{job.type}</p>
                    <div className="mt-auto">
                      <p className="fw-bold text-primary">{job.salary}</p>
                      <button className="btn btn-sm btn-primary w-100 mt-2">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            )) : <div className="col-12"><div className="alert alert-warning text-center">No jobs found.</div></div>}
          </div>

          <div className="mt-5">
            <JobChart jobs={jobs} />
          </div>
        </div>
      </div>
    </div>
  );
}
