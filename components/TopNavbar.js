/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image'
import { HiMail } from "react-icons/hi";

const TopNavbar = () => {
  return (
    <>
      <section  className="d-flex align-items-center">
        <div className="container d-flex justify-content-lg-end justify-content-sm-center">
          <div className="contact-info d-flex align-items-center">
            <div className="d-flex align-items-center mx-3">
              <Image
                width={40}
                height={40}
                src="/images/icon/uk_logo.png"
                alt="uk"
              />
              <span>0800 0016001</span>
            </div>
            <div className="d-flex align-items-center mx-3">
              <Image
                width={38}
                height={35}
                src="/images/icon/indialogo.png"
                alt="indialogo"
              />
              <span>+91 120-4549471</span>
            </div>

            <div className="d-flex align-items-center mx-3">
              <HiMail size={30} color="#ae0000" className="mx-2" />
              <a className="pl-4" href="mailto:contact@example.com">
                info@webapp.world
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNavbar;
