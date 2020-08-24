import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>{"Richard Zhu"}</h2>
        <p><a href="mailto:richardzhu@college.harvard.edu">richardzhu@college.harvard.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Richard. I am a junior at Harvard University studying <a href="https://www.seas.harvard.edu/applied-mathematics">Applied Math</a> with a focus
        in Economics and Computer Science with a secondary in Government. My interests range from journalism to data science,
        building web apps to sports modeling, public policy to finance - if there's a problem that require
        rigorous and creative solutions, I'm fascinated!
        <br></br>
        I have experience working in software development and research internships at <a href="https://www.minneapolisfed.org/">The Federal Reserve Bank of Minneapolis</a>, <a href="https://www.vimblygroup.com/">Vimbly Group</a>, and <a href="https://socialscience.fas.harvard.edu/BLISS"> Harvard's BLISS Summer Research Program</a>.

      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
