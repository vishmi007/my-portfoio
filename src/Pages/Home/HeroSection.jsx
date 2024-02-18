export default function HeroSection()
{
    return (

        <section id = "heroSection" className="hero-section">
            <div className ="hero-section-content-box">
                <div className ="hero-section-content">
                    <p className="section-title">
                        Hi! I'm
                    </p>
                    <h1 className="hero-section-title">
                        <span className ="hero-section-title-color">
                            Vishi K.
                        </span>{" "}
                    </h1>

                    <p className="hero-section-description">
                    A recent graduate with a degree in Software Engineering and a passion for crafting digital solutions.
                    I am actively seeking opportunities to kick-start my career as a junior software engineer. Whether you need a website developed or are looking to add a dynamic team member, I'm eager to contribute my skills and enthusiasm to make an impact.    
                   </p>

                    <button className="hero-section-btn-primary"> Download resume</button>
                </div>
                <img src="./img/me-image.png" alt="Vishi K." />




            </div>
            
        </section>
    )
}