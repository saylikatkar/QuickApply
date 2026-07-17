import React from 'react';

export default function ApplyForm({ job, onView }) {
  if (!job) return <div className="alert alert-warning">Job not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const application = {
      jobId: job.id,
      jobTitle: job.title,
      company: job.company,
      applicantName: e.target.fullName.value,
      email: e.target.email.value,
      coverLetter: e.target.coverLetter.value,
      appliedAt: new Date().toLocaleString()
    };

    // Get existing applications from localStorage
    const existingApplications =
      JSON.parse(localStorage.getItem("applications")) || [];

    // Add new application
    existingApplications.push(application);

    // Save updated applications
    localStorage.setItem(
      "applications",
      JSON.stringify(existingApplications)
    );

    alert(`Application submitted for ${application.applicantName}.`);

    // Return to home page
    onView('home');
  };

  return (
    <div className="container" style={{maxWidth:700}}>
      <div className="card p-5 shadow-lg">

        <h1 className="fw-bold mb-1">
          Apply for:
        </h1>

        <h2 className="text-primary h4 mb-4">
          {job.title} at {job.company}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>
            <input
              name="fullName"
              className="form-control"
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label">
              Email address
            </label>

            <input
              name="email"
              type="email"
              className="form-control"
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label">
              Cover Letter
            </label>

            <textarea
              name="coverLetter"
              className="form-control"
              rows="5"
            ></textarea>
          </div>


          <div className="d-flex justify-content-between pt-3">

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => onView('detail', job)}
            >
              Back
            </button>


            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Submit Application
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}
