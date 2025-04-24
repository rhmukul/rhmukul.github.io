import * as React from "react"
import { Row, Col } from 'react-bootstrap'
import * as mainStyle from '../scss/style.module.scss'
import * as portfolioStyle from '../scss/portfolio.module.scss'

const portfolioData = [
    {
        name: '71pix',
        info: 'Largest photography portal in bangladesh',
        url: 'https://71pix.com/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654923154/mrhmukul.link/screencapture-71pix-new-arrival-2022-06-11-10_45_29_1_hlyxlj.png'
    },
    {
        name: 'Muktopaath',
        info: 'Largest e-learing platform in bangladesh',
        url: 'https://www.muktopaath.gov.bd/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654923216/mrhmukul.link/screencapture-muktopaath-gov-bd-2022-06-11-10_51_40_thiosi.png'
    },
    {
        name: 'RTV Online',
        info: 'Most popular news media in Bangladesh',
        url: 'https://www.rtvonline.com/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654923453/mrhmukul.link/screencapture-rtvonline-2022-06-11-10_54_04_1_ygloso.png'
    },
    {
        name: 'Daily Finland',
        info: 'Most popular news portal in Finland',
        url: 'https://www.dailyfinland.fi/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654923621/mrhmukul.link/screencapture-dailyfinland-fi-2022-06-11-10_57_33_1_iubvac.png'
    },
    {
        name: 'Medquicker',
        info: 'Largest medicine eCommerce site in Bangladesh',
        url: 'https://medquicker.com/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654923712/mrhmukul.link/screencapture-medquicker-2022-06-11-11_00_54_xfuznb.png'
    },
    {
        name: 'English for today',
        info: 'Most popular english learning portals in Bangladesh',
        url: 'https://www.englishfor2day.com/',
        img: 'https://res.cloudinary.com/dd3q2eq17/image/upload/q_auto:eco,r_5/v1654924115/mrhmukul.link/screencapture-englishfor2day-2022-06-11-11_08_04_mwtkaf.png'
    }
]

const ContentView = (props) => {
    return (
        props.items.map((item,i) => {
            return (
                <Col key={i} xs={12} md={6} className="mb-4">
                    <div className={portfolioStyle.itemBlock}>
                        {/* <span></span> */}                    
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <div className={portfolioStyle.labelStyle}>{item.name}</div>
                            <p className={portfolioStyle.infoStyle}>{item.info}</p>                        
                            <div className={portfolioStyle.img}>
                                <img src={item.img} alt={item.name} title={item.name} />
                            </div>
                        </a>
                    </div>
                </Col>
            )
        })
    )    
}

const Portfolio = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>Portfolio</h1>
                <h4>My Portfolios</h4>
            </div>
            <div className={portfolioStyle.contentBlock}>
                <Row>
                    <ContentView items={portfolioData} />
                </Row>
            </div>
        </section>
    )
}

export default Portfolio;