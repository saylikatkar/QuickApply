import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import ApplyForm from './components/ApplyForm';
import Login from './components/Login';

function App() {
  const [jobs, setJobs] = useState([]);
  const [view, setView] = useState('loading');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const load = async () => {
      setView('loading');
      try {
        const res = await fetch('/jobs.json');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        // simulate delay
        await new Promise(r => setTimeout(r, 300));
        setJobs(data);
        setView('home');
      } catch (err) {
        console.error(err);
        setView('error');
      }
    };
    load();
  }, []);

  const navigate = (to, job = null) => {
    setSelectedJob(job);
    setView(to);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: 'var(--bs-primary)'}}>
        <div className="container">
          <a className="navbar-brand text-white" href="#" onClick={() => navigate('home')}><i className="bi bi-briefcase-fill me-2"></i>QuickApply</a>
          <div className="ms-auto">
            <button className="btn btn-light me-2" onClick={() => navigate('login')}><i className="bi bi-person-fill me-1"></i>Login</button>
          </div>
        </div>
      </nav>

      <main className="container main-container">
        {view === 'loading' && <div className="text-center py-5"><div className="spinner-border text-primary" role="status"></div></div>}
        {view === 'error' && <div className="alert alert-danger">Failed to load jobs.</div>}
        {view === 'home' && <JobList jobs={jobs} onView={navigate} />}
        {view === 'detail' && <JobDetail job={selectedJob} onView={navigate} />}
        {view === 'apply' && <ApplyForm job={selectedJob} onView={navigate} />}
        {view === 'login' && <Login onView={navigate} />}
      </main>

      <footer className="text-center py-4 bg-dark text-light">
        <p className="mb-0">&copy; 2025 QuickApply | All rights reserved </p>
      </footer>
    </div>
  );
}

export default App;
