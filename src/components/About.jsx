import React from 'react';
import '../styles.css'; // Import your global styles
import AjayPhoto from '../assets/ajay.jpg';
import SruthyPhoto from '../assets/sruthy.jpg';
import Akash from '../assets/akash.jpg';
import Revi from '../assets/revi.jpg';
const teamMembers = [
  {
    name: "Ajay",
    role: "JOKER 1",
    image: AjayPhoto, 
    description: "Ajay is the lead developer responsible for smart contract implementation and blockchain integration."
  },
  {
    name: "Sruthy",
    role: "JOKER 2",
    image: SruthyPhoto,
    description: "Sruthy is a skilled frontend developer focusing on React.js, ensuring the voting system is user-friendly."
  },
  {
    name: "Reveena",
    role: "JOKER 3",
    image: Revi,
    description: "Revi designs intuitive and engaging interfaces to deliver a seamless experience to users."
  },
  {
    name: "Akash Raj",
    role: "JOKER 4",
    image: Akash,
    description: "Akash is the project manager who coordinates tasks, timelines, and ensures smooth project delivery."
  }
];

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are a passionate team working on creating a transparent, secure, and efficient decentralized voting system.</p>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} />
            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
