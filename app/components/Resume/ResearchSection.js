import React from 'react';
import PropTypes from 'prop-types';

import Research from './Experience/Research';

const ResearchSection = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>{`Research Experience`}</h3>
    </div>
    {data.map((job) => (
      <Research
        data={job}
        key={job.project}
      />
    ))}
  </div>
);

ResearchSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

ResearchSection.defaultProps = {
  data: [],
};


export default ResearchSection;
