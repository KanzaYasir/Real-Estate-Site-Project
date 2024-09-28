// Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import agent1 from './navItemsImages/agent1.png';
import agent6 from './navItemsImages/agent6.png';
import agent3 from './navItemsImages/agent3.png';
import agent7 from './navItemsImages/agent7.png'; // Add your new image path
import Footer from '../Footer';


const testimonials = [
  {
    name: "John Doe",
    feedback: "This product changed my life! Highly recommend it.",
    photo: agent1
  },
  {
    name: "Jane Smith",
    feedback: "Excellent service and amazing quality. Will buy again!",
    photo: agent6
  },
  {
    name: "Alice Johnson",
    feedback: "A fantastic experience from start to finish!",
    photo: agent3
  },
  {
    name: "Bob Brown",
    feedback: "Loved it! Can't wait to try more products.",
    photo: agent7
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.photo} alt={testimonial.name} className="testimonial-photo" />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
    <Footer/>
    </div>
  );
};

export default Testimonials;
