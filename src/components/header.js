import * as React from "react"
import Logo from './logo'
import Navigation from './navigation'
import * as mainStyle from '../scss/style.module.scss'

// styles
const flexRowStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'    
}

const Header = () => {
    return (
        <header className={mainStyle.header}>
            <div className={mainStyle.container}>
                <div className={mainStyle.headerHeight} style={flexRowStyles}>
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    )    
}

export default Header;