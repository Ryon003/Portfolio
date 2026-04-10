import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> timeline
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Developer</h4>
                <h5>Building products and systems</h5>
              </div>
              <h3>2026 - Now</h3>
            </div>
            <p>
              Building AI tools, SaaS projects, and automation systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Learning &amp; Building Phase</h4>
                <h5>Self-driven growth</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>Started journey to coding.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
