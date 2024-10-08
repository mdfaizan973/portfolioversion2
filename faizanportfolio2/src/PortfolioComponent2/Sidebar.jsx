// import React from "react";
import { styled } from "styled-components";

import ContactSection from "./SidebarContent/ContactSection";
import SocialMedia from "./SidebarContent/SocialMedia";
import { MdEmail, MdLocationOn, MdWhatsapp } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import ResumeButton from "./SidebarContent/ResumeButton";
export default function Sidebar() {
  const contectArray = [
    {
      icon: <MdWhatsapp />,
      heading: "Phone No",
      contact: "+91 6201855200",
      color: "green",
      link: "https://wa.me/916201855200",
    },
    {
      icon: <MdEmail />,
      heading: "Email",
      contact: "faizan.md9735@gmail.com",
      color: "blue",
      link: "https://faizan.md9735@gmail.com",
    },
    {
      icon: <MdLocationOn />,
      heading: "Location",
      contact: "Jharkhand, India",
      color: "red",
      link: "https://www.google.com/maps/place/Gumia,+Jharkhand/",
    },
  ];

  const socilaIcons = [
    {
      icon: <BsTwitter />,
      color: "black",
      link: "https://twitter.com/MdFaiza59640358",
    },
    {
      icon: <ImLinkedin />,
      color: "skyblue",
      link: "https://www.linkedin.com/in/md-faizan-380a65246/",
    },
    {
      icon: <FaGithub />,
      color: "black",
      link: "https://github.com/mdfaizan973",
    },
    {
      icon: <FaYoutube />,
      color: "red",
      link: "https://www.youtube.com/@CodeWithFaizu9735",
    },
  ];
  return (
    <>
      <SidebarContainerStyled>
        <div className="profile_image">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="profile"
          />
        </div>
        <h1 className="name">Md Faizan</h1>
        <div className="occupation border_card">Full Stack Developer</div>

        <div className="socialmedia_section">
          {socilaIcons.map((ele, i) => (
            <SocialMedia key={i} data={ele} />
          ))}
        </div>
        {/* Contact Section */}
        <div className="contact_section border_card">
          {contectArray.map((ele, i) => (
            <ContactSection key={i} data={ele} />
          ))}
        </div>

        <div className="resume_sectiion">
          <ResumeButton />
        </div>
      </SidebarContainerStyled>
    </>
  );
}

const SidebarContainerStyled = styled.div`
  .profile_image {
    width: 70%;
    margin: auto;
    /* border-radius: 20px; */
    overflow: hidden;
    height: 240px;
    margin-top: -100px;
    border-radius: 43% 57% 55% 45% / 27% 44% 56% 73%;
    border: 2px solid skyblue;
  }
  .profile_image img {
    object-fit: cover;
  }

  .name {
    font-size: 1.7rem;
    padding: 5px;
  }

  .border_card {
    width: 70%;
    margin: auto;
    border-radius: 5px;
    background-color: #f4f6f5;
  }
  .socialmedia_section {
    width: 75%;
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
  }
  .contact_section {
    width: 87%;
    margin: 10px auto;
  }

  .resume_sectiion {
    width: 65%;
    margin: auto;
  }
`;
