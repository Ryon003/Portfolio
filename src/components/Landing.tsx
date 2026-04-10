import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              RYON
            </h1>
            <p className="landing-summary">
              I&apos;m a student and self-taught developer focused on building AI
              tools, SaaS systems, and automation-based web apps. I create modern,
              visually engaging products that solve real problems.
            </p>
          </div>
          <div className="landing-info">
            <h3>AI Builder</h3>
            <h2 className="landing-info-h2">SaaS Creator</h2>
            <h2>
              <div className="landing-h2-info">Creative Developer</div>
              <div className="landing-h2-info-1">AI Builder</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
