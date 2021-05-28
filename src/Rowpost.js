import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import { API_KEY, imageUrl } from './constant';
import './style.css';
import axios from './axios';

function Rowpost(props) {
  const [movies, setMovie] = useState([]);
  const [urlid, seturlid] = useState('');
  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovie(response.data.results);
    });
  }, []);
  const handlemovie = id => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        console.log(response.data.results[0]);
        if (response.data.results !== 0) {
          seturlid(response.data.results[0]);
        } else {
          console.log('array not found !!');
        }
      });
  };
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <div className="rowpost">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map(obj => (
          <img
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
            className={props.issmall ? 'smallposter' : 'poster'}
            onClick={() => handlemovie(obj.id)}
          />
        ))}
      </div>
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  );
}
export default Rowpost;
