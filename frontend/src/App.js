import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Resume />
      <ContactForm />
    </div>
  );
};

export default App;
