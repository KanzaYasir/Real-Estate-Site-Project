import React from 'react';
import Slider from 'react-slick';
import pg1 from './navItemsImages/pg1.png';
import project2 from './navItemsImages/project2.png'; // Add more project images
import project3 from './navItemsImages/project3.png'; // Add more project images
import pg4 from './navItemsImages/pg4.png'
import pg5 from './navItemsImages/pg5.png'
import pg6 from './navItemsImages/pg6.png'
import pg7 from './navItemsImages/pg7.png'
import pg8 from './navItemsImages/pg8.png'
import pg9 from './navItemsImages/pg9.png'
import pg10 from './navItemsImages/pg10.png'
import pg11 from './navItemsImages/pg11.png'
import pg12 from './navItemsImages/pg12.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Footer';



export default function Projects() {
  const projects = [
    {
      title: 'Modern Villa',
      description: "A stunning modern villa featuring open spaces and large windows, perfect for enjoying the sunset.",
      image: pg1,
      cost: "$1,200,000",
    },
    {
      title: 'Luxury Apartment',
      description: "An elegant apartment located in the heart of the city, boasting state-of-the-art amenities and breathtaking views.",
      image: project2,
      cost: "$950,000",
    },
    {
      title: 'Cozy Cottage',
      description: "A charming cottage nestled in the woods, ideal for weekend getaways or year-round living.",
      image: project3,
      cost: "$450,000",
    },
    {
      title: 'Stylish Loft',
      description: "A contemporary loft with high ceilings and chic finishes, situated in a vibrant neighborhood.",
      image: pg4, // Replace with another image
      cost: "$800,000",
    },
    {
      title: 'Beachfront Bungalow',
      description: "A picturesque bungalow right on the beach, perfect for relaxation and ocean views.",
      image: pg5, // Replace with another image
      cost: "$1,500,000",
    },
    {
      title: 'Rustic Farmhouse',
      description: "A beautifully restored farmhouse with modern amenities while maintaining its rustic charm.",
      image: pg6, // Replace with another image
      cost: "$600,000",
    },
    {
      title: 'Contemporary Townhouse',
      description: "A sleek townhouse in a prime location, featuring a spacious layout and private outdoor space.",
      image: pg7, // Replace with another image
      cost: "$750,000",
    },
    {
      title: 'Elegant Mansion',
      description: "An opulent mansion with luxurious finishes and sprawling grounds, perfect for entertaining guests.",
      image: pg8, // Replace with another image
      cost: "$3,500,000",
    },
    {
      title: 'Charming Victorian',
      description: "A classic Victorian home with beautiful architecture and modern updates throughout.",
      image: pg9, // Replace with another image
      cost: "$900,000",
    },
    {
      title: 'Urban Penthouse',
      description: "A luxurious penthouse with panoramic city views, offering the ultimate urban living experience.",
      image: pg10, // Replace with another image
      cost: "$2,000,000",
    },
    {
      title: 'Modern Retreat',
      description: "A serene retreat surrounded by nature, featuring eco-friendly design and peaceful surroundings.",
      image: pg11, // Replace with another image
      cost: "$1,100,000",
    },
    {
      title: 'Sleek Condo',
      description: "A modern condo in a bustling area, perfect for young professionals seeking convenience and style.",
      image: pg12, // Replace with another image
      cost: "$650,000",
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Optional: Enables autoplay
    autoplaySpeed: 3000, // Optional: Duration between slides
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Completed Projects since 12 - 24</h1><br />
      <p style={{width:"85vw", textAlign:"center"}}>At Real Estate Company, we take pride in delivering exceptional real estate solutions that reflect our commitment to quality and professionalism. Since 2022, we have successfully completed a diverse portfolio of projects that showcase our expertise and dedication to excellence.</p>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p><b>Description:</b>  {project.description}</p>
            <h4>{`Price:  ${project.cost}`}</h4>
          </div>
        ))}
      </Slider>
    <Footer/>
    </div>


  );
}
