import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function JobChart({ jobs }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!jobs || !jobs.length) return;
    const counts = jobs.reduce((acc, j) => { acc[j.domain] = (acc[j.domain] || 0) + 1; return acc; }, {});
    const data = Object.entries(counts).map(([domain, count]) => ({ domain, count }));

    const container = ref.current;
    d3.select(container).selectAll('*').remove();
    const width = container.clientWidth || 600;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    const svg = d3.select(container).append('svg').attr('width', width).attr('height', height);
    const x = d3.scaleBand().domain(data.map(d => d.domain)).range([margin.left, width - margin.right]).padding(0.3);
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.count) + 1]).range([height - margin.bottom, margin.top]);

    svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x)).selectAll('text').attr('transform','rotate(-45)').style('text-anchor','end');
    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y).ticks(d3.max(data,d=>d.count)||1));

    svg.selectAll('rect').data(data).enter().append('rect')
      .attr('x', d => x(d.domain))
      .attr('y', d => y(d.count))
      .attr('width', d => x.bandwidth())
      .attr('height', d => (height - margin.bottom) - y(d.count))
      .attr('fill', 'var(--bs-primary)')
      .attr('rx', 4);

    svg.selectAll('.label').data(data).enter().append('text')
      .attr('x', d => x(d.domain) + x.bandwidth()/2)
      .attr('y', d => y(d.count) - 6)
      .attr('text-anchor','middle')
      .text(d => d.count);
  }, [jobs]);

  return (
    <div ref={ref} style={{width: '100%'}} className="card p-3 shadow-sm">
      <h5 className="text-primary mb-3"><i className="bi bi-bar-chart-fill me-2"></i>Job Distribution Overview</h5>
    </div>
  );
}
