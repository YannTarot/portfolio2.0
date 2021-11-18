import React, { useEffect, useState } from 'react';
// import Mouse from '../components/Mouse';
import Header from '../components/navigation/Header';
import IconsSkill from '../components/IconsSkill';
import SkillsParticles from '../components/SkillsParticles';
import RingLoader from "react-spinners/RingLoader";

const Knowledges = () => {

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
      <div>
        {/* <Mouse/> */}
        <Header/>
        <SkillsParticles/>
      </div>
        <IconsSkill/>
        </>
    }
    </>
  );
};
export default Knowledges;
