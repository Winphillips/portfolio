import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import jQuerySetup from './tools/jQuerySetup';
import Header from './components/Header';
import Footer from './components/Footer';
import Cover from './sections/Cover';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App(props) {
  useEffect(jQuerySetup);
  document.title = 'Digital Portfolio - ' + props.data.personName;
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', 'Digital Portfolio of ' + props.data.personName);
  
  const sections = [About, Experience, Education, Projects, Skills, Contact];

  return (
    <React.StrictMode>
      <Header sections={sections.map((i) => i.displayName)} />
      <Cover data={props.data} />

      {sections.map((Component) => (
        <Component data={props.data} key={Component.displayName} />
      ))}

      <Footer data={props.data} />
    </React.StrictMode>
  );
}

fetch(
  process.env.NODE_ENV === 'development'
    ? 'PortfolioData.json'
    : process.env.REACT_APP_PRODUCTION_JSON
)
  .then((r) => r.json())
  .then((data) => ReactDOM.render(<App data={data} />, document.body));
