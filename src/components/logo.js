import * as React from "react"
import { Link } from 'gatsby'

const logoStyles = {
    textTransform: "uppercase",
    fontFamily: "Audiowide",
    fontSize: "24px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#333"
}

const orangeColor = {
    color: '#f75023'
}

const Logo = () => {
    return (
        <Link to={'/'} style={logoStyles}><span>M</span><span>R</span><span>H</span><span style={orangeColor}>MUKUL</span></Link>
    )
}

export default Logo;