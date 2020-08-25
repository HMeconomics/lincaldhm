import React from 'react';
import PropTypes from 'prop-types';


export default function Activity ({ data }) {
    return (
    <article className="jobs-container">
        <header>
        <h4><a className="link" href={data.link}>{data.organization}</a> - {data.position}</h4>
        <p className="daterange"> {data.daterange}</p>
        </header>
        <ul className="points">
        {data.points.map((point) => (
            <li key={point}>{point}</li>
        ))}
        </ul>
    </article>
    );
}