import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import * as mainStyle from '../scss/style.module.scss'
import * as contactStyle from '../scss/contact.module.scss'

const socialList = [
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/mrhmukul',
        icon: 'fab fa-linkedin-in',
        class: 'linkedin'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/mrhmukul.fp',
        icon: 'fab fa-facebook-f',
        class: 'facebook'
    },
    {
        name: 'Fiverr',
        url: 'https://www.fiverr.com/rhmukul',
        icon: '',
        class: 'fiverr'
    }
]

const SocialLinks = (props) => {
    return (
        props.items.map(v => {
            return (
                <a className={v.class} href={v.url} target="_blank" rel="noreferrer">
                    {v.icon ? <i className={v.icon}></i> : v.name}
                </a>
            )
        })
    )
}

const Contact = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>Contact</h1>
                <h4>Contact with me</h4>
            </div>
            <div className={contactStyle.contentBlock}>
                <Row>
                    <Col md={6}>
                        <div className={contactStyle.info_block}>
                            <h4 className="mb-3 my-3">Contact with email</h4>
                            <div><a href="mailto:rh_mukul@yahoo.com">rh_mukul@yahoo.com</a></div>
                            <div><a href="mailto:rhmukul@gmail.com">rhmukul@gmail.com</a></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={contactStyle.info_block}>
                            <h4 className="mb-3 my-3">Contact with social media</h4>
                            <div className={contactStyle.slinks}>
                                <SocialLinks items={socialList} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Contact;