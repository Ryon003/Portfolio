import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    id: "01",
    name: "LyieNotes",
    category: "AI Productivity Tool",
    description:
      "An AI-powered study assistant that helps users organize notes, generate summaries, and improve learning efficiency.",
    stack: "TypeScript, React, AI APIs, UI/UX",
    image:
      "/project-images/Screenshot_2026-04-09_141931-724fc5c7-eed4-4de0-bb1e-3b7cdf805fd2.png",
  },
  {
    id: "02",
    name: "EduSphere",
    category: "School Management Platform",
    description:
      "A scalable school management platform that streamlines operations, automates workflows, and connects admins, teachers, and students in one system.",
    stack: "React, TypeScript, Scalable Architecture, Workflow Automation",
    image:
      "/project-images/Screenshot_2026-04-09_142116-bbabb399-756b-47dc-9be4-1b6599f24857.png",
  },
  {
    id: "03",
    name: "Creative Web Projects",
    category: "Frontend / UI",
    description:
      "A collection of modern animated websites focused on user experience and aesthetic design.",
    stack: "React, TypeScript, Motion, Performance Optimization",
    image:
      "/project-images/Screenshot_2026-04-09_142154-2ef49cd7-5266-4141-a61c-ef2e96d0f7fc.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Selected <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Overview</h4>
                <p>{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
