import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
// import Mouse from '../components/Mouse';
import Header from '../components/navigation/Header';
// import ScrollButton from '../components/ScrollButton';
import RingLoader from "react-spinners/RingLoader";



const Home = () => {

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
      {/* <Mouse/> */}
      <div>
        <Header/>
        <Banner/>
        {/* <ScrollButton right={"/projet-1"}/> */}
      </div>
      </>
      }
    </>
  );
};

export default Home;
