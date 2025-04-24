import * as React from "react"
import { Row, Col } from "react-bootstrap"
import * as mainStyle from '../scss/style.module.scss'
import * as serviceStyle from '../scss/service.module.scss'

const serviceList = [
    {
        name: 'Static Web Design',
        info: 'Any kind of website cloning / PSD to Html design',
        icon: 'fa fa-laptop',
        technology: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    },
    {
        name: 'Dynamic Web Development',
        icon: 'fa fa-laptop',
        info: 'Any kind of web application development',
        technology: 'Nodejs, PHP, MySql, Postgres',
        apiend: 'Laravel, Codeigniter, Cakephp, Raw',
        frontend: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    },
    {
        name: 'E-commerce Solutions',
        icon: 'fa fa-laptop',
        info: 'Any kind of eCommerce development',
        technology: 'Nodejs, PHP, MySql, Postgres',
        apiend: 'Laravel, Codeigniter, Cakephp, Raw',
        frontend: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    },
    {
        name: 'News Portal Solutions',
        icon: 'fa fa-laptop',
        info: 'Online news portal development',
        technology: 'Nodejs, PHP, MySql, Postgres',
        apiend: 'Laravel, Codeigniter, Cakephp, Raw',
        frontend: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    },
    {
        name: 'School Management Solutions',
        icon: 'fa fa-laptop',
        info: 'Online school management development',
        technology: 'Nodejs, PHP, MySql, Postgres',
        apiend: 'Laravel, Codeigniter, Cakephp, Raw',
        frontend: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    },
    {
        name: 'eLearning Management Solutions',
        icon: 'fa fa-laptop',
        info: 'Online eLearning management application development',
        technology: 'Nodejs, PHP, MySql, Postgres',
        apiend: 'Laravel, Codeigniter, Cakephp, Raw',
        frontend: 'Html, Html5, Css, Css3, Vue with Nuxtjs, React with Nextjs, React with Gatsby'
    }
]

const ServiceItems = (props) => {
    return (
        props.items.map(v => {
            return (            
                <Col md={6}>
                    <div className={serviceStyle.itemBlock}>
                        <div className={serviceStyle.header}>
                            <i class={v.icon}></i>
                            <h4>{v.name}</h4>
                        </div>                        
                        <p>{v.info}</p>
                        {v.technology && <div>Technology: <em>{v.technology}</em></div>}
                        {v.apiend && <div>Api-end: <em>{v.apiend}</em></div>}
                        {v.frontend && <div>Front-end: <em>{v.frontend}</em></div>}
                    </div>
                </Col>
            )
        })
    )
}

const Service = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>Service</h1>
                <h4>My Services</h4>
            </div>
            <div className={serviceStyle.contentBlock}>
                <Row>
                    <ServiceItems items={serviceList} />
                </Row>      
            </div>
        </section>
    )
}

export default Service;