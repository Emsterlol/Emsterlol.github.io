import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Projects />
            <Skills />
            <Experience />
            <Footer />
        </div>
    );
}

export default App;