import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const NavBar = () => {
    const [dark, setDark] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setDark(!dark);
    }
    return(
        <nav>
            <p>click to switch between dark and light mode</p>
            <div>
                <button onClick={toggleMode}>click me</button>
            </div>
        </nav>
    )
}
export default NavBar;