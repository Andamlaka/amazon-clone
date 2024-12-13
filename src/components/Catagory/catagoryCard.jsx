import React from 'react';
import classes from './catagory.module.css'
import { Link } from 'react-router-dom';
const CatagoryCard = ({ infos }) => {
  return (
<div className={classes.catagory}>
        
        <Link to={`/catagory/${infos.name}`}>
            <span>
                <h2>{infos?.title}</h2>
            </span>
            <img src={infos?.imgLink} alt="" />
            <p>shop now</p>
        </Link >
    </div>
  );
}

export default CatagoryCard;