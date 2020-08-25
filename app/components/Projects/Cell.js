import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import url from 'url';
import Slideshow from "./Slideshow";


export default function Cell({ data }) {
  const [isClicked, setClicked] = useState(false);
  const handleClose = () => setClicked(false);

  return (
  <>
  <div className="cell-container" onClick={() => setClicked(true)}>
    {/*<Slideshow
        show={isClicked}
        project={selectedProject}
        handleClose={handleClose}
      />
    */}
    <article className="mini-post">
      <header>
        <h3><a className="link" href={data.link}>{data.title}</a></h3>
        {data.source && (
          <p><a className="link" href={data.source}>Source Code</a></p>
        )}
        <time className="published">{dayjs(data.date).format('MMMM YYYY')}</time>
      </header>
      <a href={data.link} className="image">
        <img src={url.resolve(BASE_PATH, data.image)} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
  </>
  );
}

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};
