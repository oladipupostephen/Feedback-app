import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
function AbouticonLink() {
  return (
    <div className='about-link'>
    <Link to={{pathname:'/about', search:'sort?name'}}>
    <FaQuestion size={30}/>
    </Link>
     
    </div>
  );
}

export default AbouticonLink;
