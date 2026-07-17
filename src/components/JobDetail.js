import React from 'react';

export default function JobDetail({ job, onView }) {
  if (!job) return <div className="alert alert-warning">Job not found.</div>;
  return (
    <div className="container">
      <div className="card p-5 shadow-lg">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <h1 className="fw-bold text-dark">{job.title}</h1>
            <h2 className="text-primary h4">{job.company}</h2>
          </div>
          <span className="badge bg-primary fs-6">{job.domain}</span>
        </div>
        <div className="row mb-4 g-3">
          <div className="col-md-4"><div className="p-3 bg-light rounded shadow-sm"><i className="bi bi-geo-alt-fill text-danger me-2"></i><strong>Location:</strong> {job.location}</div></div>
          <div className="col-md-4"><div className="p-3 bg-light rounded shadow-sm"><i className="bi bi-cash-stack text-success me-2"></i><strong>Salary:</strong> {job.salary}</div></div>
          <div className="col-md-4"><div className="p-3 bg-light rounded shadow-sm"><i className="bi bi-clock-fill text-info me-2"></i><strong>Type:</strong> {job.type}</div></div>
        </div>
        <hr/>
        <h3 className="fw-bold text-dark mt-4">Job Description</h3>
        <p className="text-muted">{job.description}</p>
        <div className="d-flex justify-content-between pt-3">
          <button className="btn btn-outline-secondary" onClick={() => onView('home')}><i className="bi bi-arrow-left me-2"></i>Back to Jobs</button>
          <button className="btn btn-primary btn-lg" onClick={() => onView('apply', job)}><i className="bi bi-send-fill me-2"></i>Apply Now</button>
        </div>
      </div>
    </div>
  );
}
