import * as React from "react"
import { Link } from "react-scroll"
import * as mainStyle from '../scss/style.module.scss'
import * as aboutStyle from '../scss/about.module.scss'
// import * as navStyle from '../scss/navigation.module.scss'
import photo from '../images/meeting-muktopaath.jpg'

const About = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>About</h1>
                <h4>About Me</h4>
            </div>
            <div className={aboutStyle.contentBlock}>
                <div className={aboutStyle.imageBlock}>
                    <img src={photo} alt="Md. Rokibul Hossain" />
                </div>
                <div className={aboutStyle.infoBlock}>
                    <h3>I'm <span>Md. Rokibul Hossain</span></h3>
                    <h4>Creative <span>Full Stack Web Developer</span></h4>
                    <h5>Based in Dhaka, BD</h5>
                    <p className="mt-3">Hello there! I'm a full-stack web developer, and I'm very passionate and dedicated to my work. With 13+ years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
                    <div className={aboutStyle.hireMeBtn}>
                        <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>Contact with Me</Link>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default About;