import React from "react";
import './navbar.css';

export class Navbar extends React.Component {
    
    render() {
        
        return(
            <header className='header'>
                <h1 className="welcome">Phine's Quote Box</h1>
                
                <ul className='nav-ul'>
                <a rel="noreferrer" href="https://github.com/Phine1" target="_blank"><li className='list'>GitHub</li></a>
                <a rel="noreferrer" href="https://twitter.com/Phine_Essel" target="_blank"><li className='list'>Twitter</li></a>
                <a rel="noreferrer" href="https://phinehas.netlify.app/" target="_blank"><li className='list'> Portfolio</li></a>
                </ul>
            </header>
        )
    }

}


