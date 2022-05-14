import React from 'react';
import Header from './component/Header.js';
import Hero from './component/Hero.js';
import Browse from './component/Browse';
import Arrived from './component/Arrived';
import Clients from './component/Clients';
import AssideMenu from './component/AssideMenu';
import Footer from './component/Footer';


function App() {
    return (
        <div>
        <Header />
        <Hero />
        <Browse />
        <Arrived />
        <Clients />
        <AssideMenu />
        <Footer />
        </div>

    );
}
export default App;