import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activities/Activity';

const Activities = ({ data }) => (
  <div className="activity">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Leadership and Activities</h3>
    </div>
    {data.map((activity) => (
      <Activity
        data={activity}
        key={activity.organization}
      />
    ))}
  </div>
);

Activities.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    organization: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Activities.defaultProps = {
  data: [],
};


export default Activities;
