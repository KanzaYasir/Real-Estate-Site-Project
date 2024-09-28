import React, { useState } from 'react';
import agent1 from './navItemsImages/agent1.png';
import agent2 from './navItemsImages/agent2.png';
import agent3 from './navItemsImages/agent3.png';
import agent4 from './navItemsImages/agent4.png'; // Add your new image path
import agent5 from './navItemsImages/agent5.png'; // Add your new image path
import Footer from '../Footer';

const agents = [
  {
    id: 1,
    name: "John Doe",
    photo: agent1,
    bio: "Expert in residential real estate with over 10 years of experience.",
    details: "John has successfully closed over 100 transactions, specializing in family homes."
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: agent2,
    bio: "Commercial real estate specialist focused on investment properties.",
    details: "Jane has a keen eye for valuable properties and extensive market knowledge."
  },
  {
    id: 3,
    name: "Mike Johnson",
    photo: agent3,
    bio: "Luxury real estate agent with a passion for architecture and design.",
    details: "Mike has a strong track record in high-end sales, ensuring a personalized experience."
  },
  {
    id: 4,
    name: "Emily Davis",
    photo: agent4, // Path to Emily's photo
    bio: "A dedicated real estate agent specializing in first-time homebuyers.",
    details: "Emily loves helping clients find their perfect starter home and provides guidance throughout the buying process."
  },
  {
    id: 5,
    name: "Sophia Brown",
    photo: agent5, // Path to Sophia's photo
    bio: "Experienced in both residential and commercial real estate, focusing on client satisfaction.",
    details: "Sophia has a proven track record of building lasting relationships with clients and understanding their needs."
  }
];

export default function Agent() {
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleOpenModal = (agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  return (
    <div>
    <div className="agentProfiles">
      <h1>Our Agents</h1>

      <div className="agentCards">
        {agents.map((agent) => (
          <div 
            key={agent.id} 
            className="agentCard" 
            onClick={() => handleOpenModal(agent)}
          >
            <img src={agent.photo} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p>{agent.bio}</p>
          </div>
        ))}
      </div>

      {selectedAgent && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modalContent" onClick={e => e.stopPropagation()}>
            <h2>{selectedAgent.name}</h2>
            <p>{selectedAgent.details}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </div>
  );
}
