import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way </div>
      <h2 className="text-2xl font-bold">
        Build And Personalise your Learning Companion
      </h2>
      <p>Pick A Name, Voice, & Personality<br/>
      - and start learning through voice conversation chat that feel neutral</p>
        <Image src={'/images/cta.svg'} alt={'cta'} width={362} height={232}/>
        <button className="btn-primary">
            <Image src='/icons/plus.svg' alt={"plus"} width={12} height={12}/>
            <Link href="/companions/new">
                <p>Build A New Companion </p>
            </Link>
        </button>
    </section >
  );
};

export default CTA;