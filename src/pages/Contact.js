import React, { useEffect, useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactLetters from '../components/contact/ContactLetters';
import EarthCanvas from '../components/contact/EarthCanvas';
import Header from '../components/navigation/Header';
import RingLoader from "react-spinners/RingLoader";

const Contact = () => {

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
      <div>
      <EarthCanvas/>
      <ContactLetters/>
      <ContactForm/>
      </div>
    </>
    }
    </>
  );
};

export default Contact;
