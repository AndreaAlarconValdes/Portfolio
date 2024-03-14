import "./experience.css";
import { SunNote } from "../../components/Figures";
import { Card } from "../../components/card/card";
import { useIsMobile } from "../../hooks/use-is-mobile";

export function Experience() {
  const isMobile = useIsMobile();

  const jobExperience = [
    {
      isRoundLogo: true,
      image: "haddock_logo.jpeg",
      duration: "Jan 2023 - Oct 2023",
      position: "Junion Full Stack Developer",
      companyName: "Haddock",
      description: "Lorem ipsum bla bla bla. Prueba de como queda",
    },
    {
      image: "generalitat_logo.png",
      duration: "Nov 2020 - Aug 2022",
      position: "Administration",
      companyName: "Generalitat de Catalunya",
      description:
        "Management of health data and statistical data in the Covid-19 epidemiological surveillance service. Patient care, support and advice",
    },
    {
      image: "vet24_logo.png",
      duration: "Sep 2021 - Nov 2021",
      position: "Veterinary Assistant",
      companyName: "Vet24",
      description:
        "Internship contract in a veterinary hospital, where I worked in the in-patient and emergency departments, laboratory, operating theatre, care of pets and exotic animals",
    },
    {
      isRoundLogo: true,
      image: "telemaki_logo.png",
      duration: "Feb 2018 - May 2018",
      position: "Customer service",
      companyName: "Telemaki",
      description:
        "Japanese restaurant specialising in takeaway food. I carried out customer service and packaging tasks. Preparing and delivering orders",
    },
  ];
  return (
    <div className="experience-page">
      <header className="header-title">
        <h1>My Job Experience</h1>
        <SunNote
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
