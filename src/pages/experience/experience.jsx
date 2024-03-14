import "./experience.css";
import { Sun } from "../../components/icons";
import { Card } from "../../components/card/card";
import { useIsMobile } from "../../hooks/use-is-mobile";
import { jobExperience } from "../../utils/constants";

export function Experience() {
  const isMobile = useIsMobile();

  return (
    <div className="experience-page">
      <header className="header-title">
        <h1>My Job Experience</h1>
        <Sun
          color="#BAE6FF"
          style={{
            width: isMobile ? "75" : "100",
          }}
        />
      </header>
      <div className="job-experience-container">
        {jobExperience.map((job) => (
          <Card key={job.companyName} {...job} />
        ))}
      </div>
    </div>
  );
}
