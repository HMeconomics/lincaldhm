import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Research({ data }) {
    const [abstract, setAbstract] = useState(false);
    return (
    <article className="jobs-container">
        <header>
        <h3><a className="link" href={data.link}>{data.project}</a></h3>
        <h4>{data.position}</h4>
        <p className="daterange"> {data.daterange}</p>
        <h4 className="abstract" onClick={() => setAbstract(!abstract)}>[Click to Show/Hide abstract]</h4>
        </header>
        {abstract && (
            <p>{data.abstract}</p>
        )}
        <ul className="points">
            {data.points.map((point) => (
                <li key={point}>{point}</li>
            ))}
        </ul>
  </article>
);
}

Research.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

