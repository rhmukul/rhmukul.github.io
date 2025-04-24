import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import * as mainStyle from '../scss/style.module.scss'
import * as qualityStyle from '../scss/quality.module.scss'

const Quality = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>Quality</h1>
                <h4>Education & Experience</h4>
            </div>
            <div className={qualityStyle.contentBlock}>
                <Row>
                    <Col xs={12} md={6}>
                    <h4 className={qualityStyle.labelStyle}>My Education</h4>
                        <div className={qualityStyle.itemBlock}>
                            <span></span>
                            <div className={qualityStyle.degreeTitle}>B.Sc. in Computer Science & Engineering</div>
                            <div className={qualityStyle.instituteName}>Asian University of Banglesh, Uttara | <small>2004-2008</small></div>
                            <div className={qualityStyle.otherRoles}>C, C++, Java, PHP, AI, MySql, Javascript</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 className={qualityStyle.labelStyle}>My Experience</h4>
                        <div className={qualityStyle.itemBlock}>
                            <span></span>
                            <div className={qualityStyle.degreeTitle}>Chief Technology Adviser</div>
                            <div className={qualityStyle.instituteName}>Orange Business Development Limited | <small>Dec 2008 - Present</small></div>
                            <div className={qualityStyle.otherRoles}>Full Stack Developer, Lead Developer, Lead Frontend Developer</div>                            
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Quality;