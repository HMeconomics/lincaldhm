import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Activities from "../components/Resume/Activities";
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import ResearchSection from "../components/Resume/ResearchSection";

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import { workPositions, researchPositions } from '../data/resume/positions';
import { activities } from "../data/resume/activities";
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Work',
  'Research',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={workPositions} />
      <ResearchSection data={researchPositions} />
      <Activities data={activities} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
