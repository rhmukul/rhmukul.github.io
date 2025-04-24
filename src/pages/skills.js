import * as React from "react"
import { Row, Col, ProgressBar } from 'react-bootstrap'
import * as mainStyle from '../scss/style.module.scss'
import * as skillStyle from '../scss/skill.module.scss'

const skillData = [
    {
        name: 'HTML with CSS',
        value: '100'
    },
    {
        name: 'Raw PHP',
        value: '95'
    },
    {
        name: 'PHP Framework (Laravel)',
        value: '85'
    },
    {
        name: 'PHP Framework (CodeIgniter)',
        value: '85'
    },
    {
        name: 'PHP Framework (Cakephp)',
        value: '70'
    },
    {
        name: 'PHP Framework (Phalcon)',
        value: '70'
    },
    {
        name: 'MySql',
        value: '95'
    },
    {
        name: 'Postgres',
        value: '90'
    },
    {
        name: 'MongoDB',
        value: '70'
    },
    {
        name: 'Vanilla JS',
        value: '90'
    },
    {
        name: 'JQuery',
        value: '95'
    },
    {
        name: 'Vuejs',
        value: '85'
    },
    {
        name: 'Vue with Nuxtjs',
        value: '90'
    },
    {
        name: 'Reactjs',
        value: '85'
    },
    {
        name: 'React with Gatsby',
        value: '80'
    },
    {
        name: 'React with Nextjs',
        value: '80'
    },
    {
        name: 'SCSS (Sass)',
        value: '90'
    },
    {
        name: 'CSS3',
        value: '85'
    },
    {
        name: 'Wordpress',
        value: '75'
    },
    {
        name: 'OpenCart',
        value: '85'
    },
    {
        name: 'Server Management (Apache)(PHP MySql,nodejs)',
        value: '80'
    },
    {
        name: 'AWS Server with Amplify',
        value: '90'
    }
]

const variantArr = ['success','info','warning','danger']

const GetItems = (props) => {
    const getData = props.items.map((item,i) => {
        return (
            <Col key={i} xs={12} md={6}>
                <div className={skillStyle.skill_info}>
                    <div className={skillStyle.title}>{item.name}</div>
                    <div className={skillStyle.value}>{item.value}%</div>
                </div>
                <div className="progress_bar">
                    <ProgressBar variant={props.variants[i%4]} animated now={item.value} />
                </div>
            </Col>
        )
    })
    
    return (
        getData
    )
}

const Skills = () => {
    return (
        <section className={mainStyle.container}>
            <div className={mainStyle.sectionLableBlock}>
                <h1>Skills</h1>
                <h4>My Skills</h4>
            </div>
            <div className={skillStyle.contentBlock}>
                <Row>
                    <GetItems items={skillData} variants={variantArr} />
                </Row>
            </div>
        </section>
    )
}

export default Skills;