import React from 'react';


// Example icons (you can replace these with your own or use a library like FontAwesome)
import buyIcon from './navItemsImages/buyIcon.png'
import SellIcon from './navItemsImages/sellIcon.png';
import RentIcon from './navItemsImages/rentIcon.png';
import ConsultIcon from './navItemsImages/consultIcon.png';
import Footer from '../Footer';

const services = [
  {
    id: 1,
    icon: buyIcon,
    title: "Buying",
    description: "Expert guidance for purchasing your dream home with comprehensive market analysis."
  },
  {
    id: 2,
    icon: SellIcon,
    title: "Selling",
    description: "Maximize your property's value with our strategic marketing and expert negotiation."
  },
  {
    id: 3,
    icon: RentIcon,
    title: "Renting",
    description: "Assistance in finding the perfect rental property or leasing your own with ease."
  },
  {
    id: 4,
    icon: ConsultIcon,
    title: "Consultation",
    description: "Personalized real estate consultations to help you make informed decisions."
  }
];

export default function Services() {
  return (
    <div>
    <div className="servicesSection">
      <h1>Our Services</h1>
      <div className="servicesGrid">
        {services.map(service => (
          <div key={service.id} className="serviceCard">
            <img src={service.icon} alt={service.title} className="serviceIcon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}
