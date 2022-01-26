import profile from "../../images/author.png"
function About(props) {
    return (
        <section className="about">
            <img className="about__picture" src={profile} alt="profile picture"/>
            <div className="about__container">
                <h2 className="about__title">{props.aboutTitle}</h2>
                <p className="about__description">{props.aboutDescription}</p>
                <p className="about__description">{props.aboutExpertise}</p>
            </div>
        </section>
      );
}

export default About;