import React, { useState } from 'react';
import kiwi from './assets/kiwi.svg';
import strawberry from './assets/strawberry.svg';
import banana from './assets/banana.svg';
import apple from './assets/apple.svg';
import background from './assets/background-image-fruit.png';
import brandlogo from './assets/screenshot-logo.png';
import Fruitbox from './Components/Content/Fruitbox.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation.jsx';
import Reset from './Components/Content/Reset.jsx';
import './App.css';
import Form from "./Components/Content/Form.jsx";

function App() {

    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const resetAllCounters = () => {
        setStrawberryCounter(0),
            setBananaCounter(0),
            setAppleCounter(0),
            setKiwiCounter(0);
    };
    return (
        <>
            <header>
                <Header image={background} alt="Fruit Header Image" />
            </header>
            <nav>
                <Navigation image={brandlogo} alt="Brand logo" />
            </nav>
            <section className="content">
                <div className='header-content'>
                    <h1>De fruitmand bezorgservice:</h1>
                    <p>(Bestel je fruit en klik het aantal aan)</p>
                </div>
                <Fruitbox
                    image={strawberry}
                    alt="Aardbeien"
                    title="Aardbei"
                    count={strawberryCounter}
                    setCount={setStrawberryCounter}
                />
                <Fruitbox
                    image={banana}
                    alt="Banaan"
                    title="Banaan"
                    count={bananaCounter}
                    setCount={setBananaCounter}
                />
                <Fruitbox
                    image={apple}
                    alt="Appel"
                    title="Appel"
                    count={appleCounter}
                    setCount={setAppleCounter}
                />
                <Fruitbox
                    image={kiwi}
                    alt="Kiwi"
                    title="Kiwi"
                    count={kiwiCounter}
                    setCount={setKiwiCounter}
                />
                <Reset resetAllCounters={resetAllCounters} />
                <h1>Bestel je fruit:</h1>

                <Form />
            </section>

        </>
    );
}

export default App;
