import * as React from "react"
import BackToTop from "react-back-to-top-button";
import { Row, Col } from 'react-bootstrap'
import * as mainStyle from '../scss/style.module.scss'

// styles
const copyrightRowStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'Mogra'
}
const developedbyRowStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: 'Mogra',
    justifyContent: 'right'
}
const backToTopStyles = {
    fontSize: '12px',
    width: '40px',
    height: '40px',
    textAlign: 'center',
    backgroundColor: '#f7502360',
    color: '#fff',
    transition: 'all 0.4s'
}

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className={mainStyle.footer}>
            <div className={mainStyle.container}>
                <div className={mainStyle.headerHeight}>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <div style={copyrightRowStyles}>Md. Rokibul Hossain. All rights reserved © {currentYear}</div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div style={developedbyRowStyles}>Developed by Me</div>
                        </Col>
                    </Row>
                </div>
            </div>
            <BackToTop
                showOnScrollDown
                showAt={100}
                speed={1500}
                easing="easeInOutQuint"
                style={backToTopStyles}
            >
                <i className="fa fa-arrow-up"></i>
            </BackToTop>
        </footer>
    )
}

export default Footer;