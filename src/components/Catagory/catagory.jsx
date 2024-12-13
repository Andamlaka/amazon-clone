import React from 'react';
import catagoryInfos from './catagoryFullInfos';
import CatagoryCard from './catagoryCard';
import classes from './catagory.module.css'  

const CatagoryData = () => {
  return (
<section className={classes.catagory_container}>
      {
        catagoryInfos.map((infos,index) => (
          <CatagoryCard key={infos.categoryTitle || index} infos={infos} />
        ))
      }
    </section>
  );
};

export default CatagoryData;
