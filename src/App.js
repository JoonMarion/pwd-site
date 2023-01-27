import './App.css';
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { MenuMobile } from './components/menuMobile/index';
import Services from './components/services/Services';
import CardContent from './components/cardContent/CardContent';
import Contacts from './components/contacts/Contacts';

function App() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <div className="App" id="home">
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
            <Navbar setMenuIsVisible={setMenuIsVisible} />

            <CardContent />
            <div className="container">
                <Services />
            </div>
            <Contacts />
        </div>
    );
}

export default App;
