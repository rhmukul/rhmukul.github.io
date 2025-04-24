import * as React from "react"
// import Img from "gatsby-image"
import TextLoop from "react-text-loop";
import * as mainStyle from '../scss/style.module.scss'
import * as introduce from '../scss/introduce.module.scss'
import photo from '../images/photo.png'

const skillPositions = ["Full Stack Web Developer", "Frontend Developer", "Backend Developer", "Web Application Developer"]

const Introduce = (props) => {
    return (
        <section className={mainStyle.container}>
            <div className={introduce.contentBlock}>
                <div className={introduce.details}>
                    <div className={introduce.hello}>
                        <h3 className={introduce.orangeText}>Hello, I'm</h3>
                    </div>
                    <div className={introduce.name}>
                        <h3>MD. ROKIBUL HOSSAIN</h3>
                    </div>
                    <div className={introduce.job}>
                        <p>
                            <small>Creative</small>
                            <span className={introduce.greenText}>
                                <TextLoop children={skillPositions} interval={2500} springConfig={{ stiffness: 120, damping: 8 }} />
                            </span>
                        </p>
                    </div>
                    <div className={introduce.text}>
                        <p>I'm full-stack web developer based in Dhaka, Bangladesh and I'm very passionate and dedicated to my work.</p>
                    </div>
                    <div className={introduce.button}>
                        <div className={introduce.dizme_tm_button}>
                            <a className={introduce.anchor} href="#about"><span>About Me</span></a>
                        </div>
                        <div className={introduce.social}>
                            <ul>
                                {/* <li><i className="material-symbols-outlined" title="Resume Download">download</i></li> */}
                                {/* <li><a href="https://www.linkedin.com/in/md-rokibul-hossain-mukul-47b29729/" _target="blank"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.facebook.com/mrhmukul.fp" _target="blank"><i  className="fab fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/rh_mukul" _target="blank"><i  className="material-symbols-outlined"></i></a></li> */}
                                {/* <li><a href="#"><i className="icon-behance"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={introduce.photoBlock}>
                    <div className={introduce.image}>
                        <img src={photo} alt="Md. Rokibul Hossain" title="Md. Rokibul Hossain" />
                        {/* <Img
                            src={photo} alt="Md. Rokibul Hossain" title="Md. Rokibul Hossain" 
                            fixed="fixed"
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduce;