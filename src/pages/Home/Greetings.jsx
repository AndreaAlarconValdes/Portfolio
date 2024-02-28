import Typewriter from "typewriter-effect";

export function Greetings() {
  return (
    <section className="greeting-container">
      <div className="greeting-text">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Fullstack Developer",
              "MERN Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        <h2 className="greeting">Hello, my name is Andrea Alarcón</h2>
        <p>
        I am a Full Stack developer with a passion for Front-end. My focus is on creating functional, creative and eye-catching web experiences.
          <br />
          <br />
          I invite you to explore my career and the work I develop in my spare time. I continue to learn and keep up with new technologies.
          <br />
          <br />
          Welcome to my portfolio!
        </p>
      </div>
      <div>
        <img src="./logo.png" width={200} />
      </div>
    </section>
  );
}
