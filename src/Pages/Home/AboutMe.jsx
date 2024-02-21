export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./my-portfolio/img/about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">Education & Experience</p>
            <h1 className="aboutme-section--heading">My Education & Industrial Training</h1>
            <p className="hero--section-description fadeIn">
            I recently graduated from the University of Curtin with a Bachelor's degree in Computing,
             specializing in Software Engineering. My academic performance is reflected in a course-weighted 
             average of 73.17. Throughout my studies, I actively engaged in diverse projects, solidifying my
              practical skills. This educational journey equips me with a strong foundation to excel in the 
              field of software engineering, bringing a blend of theoretical knowledge and hands-on experience
            to drive technological advancements.
             
            </p>
            <p className="hero--section-description">
            I gained invaluable industry experience during a comprehensive 10-month training stint at 
            IFS R & D International. Initially, I spent 6 months as a Software Engineering Trainee, where
            I successfully developed a full-stack application designed for container governance. 
            This hands-on experience allowed me to apply and enhance my skills in software development.
            Subsequently, I transitioned into a 4-month role as a Cloud Engineering Trainee, focusing on 
            implementing robust CI/CD pipelines. During this period, I demonstrated proficiency in 
            identifying and resolving issues within the pipelines, showcasing my dedication to ensuring 
            seamless and efficient software delivery processes.
            </p>
          </div>
        </div>
      </section>
    );
  }