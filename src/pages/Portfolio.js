import React, { useEffect, useState } from 'react';
import Header from '../components/navigation/Header';
import Project from '../components/project/Project';
import Social from '../components/Social';
import RingLoader from "react-spinners/RingLoader";

const Portfolio = () => {

  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true)
    setTimeout(() => {
      SetLoading(false)
    },1000)
  },[])

  return (
    <>
      {
        loading ?

        <div className="loading-container">
        <RingLoader color={"rgb(162, 162, 246)"} loading={loading} size={200} />
        </div>
        :
    <>
      <Header/>
      <div className="project-container">
        <Project/>
      </div>
      <Social/>
    </>
      }
    </>
  );
};

export default Portfolio;
