import * as React from "react"
import { Link } from "react-scroll"
import * as navStyle from '../scss/navigation.module.scss'

const navList = [
    {
        name: 'Home',
        url: 'introduce'
    },
    {
        name: 'About',
        url: 'about'
    },
    {
        name: 'Skills',
        url: 'skills'
    },
    {
        name: 'Quality',
        url: 'quality'
    },
    {
        name: 'Service',
        url: 'service'
    },
    {
        name: 'Portfolio',
        url: 'portfolio'
    },
    {
        name: 'Contact',
        url: 'contact'
    }
]

const ListItem = (props) => {    
    return (
        props.data.map((item,i) => {
            return (
                <li key={i}>
                    <Link activeClass={navStyle.active} to={item.url} spy={true} smooth={true} offset={-60} duration={500}>{ item.name }</Link>
                </li>
            )
        })
    )
}

const Navigation = () => {
    return (
        <nav className={navStyle.navigation}>
            <ul>
                <ListItem data={navList} />
            </ul>
        </nav>
    )
}

export default Navigation;