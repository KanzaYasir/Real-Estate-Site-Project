import React, { useState } from 'react';
import pg1 from './navItemsImages/pg1.png';
import project2 from './navItemsImages/project2.png';
import project3 from './navItemsImages/project3.png';
import pg4 from './navItemsImages/pg4.png'
import pg5 from './navItemsImages/pg5.png'
import pg6 from './navItemsImages/pg6.png'
import pg7 from './navItemsImages/pg7.png'
import pg8 from './navItemsImages/pg8.png'
import pg9 from './navItemsImages/pg9.png'
import pg10 from './navItemsImages/pg10.png'

import Footer from '../Footer';

const properties = [
    {
        id: 1,
        title: 'Luxury Apartment',
        location: 'New York',
        type: 'Apartment',
        price: 1500,
        image: pg1,
        description: 'A beautiful luxury apartment in the heart of New York.',
    },
    {
        id: 2,
        title: 'Cozy Cottage',
        location: 'California',
        type: 'Cottage',
        price: 1200,
        image: project2,
        description: 'A cozy cottage surrounded by nature.',
    },
    {
        id: 3,
        title: 'Modern House',
        location: 'Texas',
        type: 'House',
        price: 2000,
        image: project3,
        description: 'A spacious modern house with a backyard.',
    },
    {
        id: 4,
        title: 'Charming Bungalow',
        location: 'Florida',
        type: 'House',
        price: 1800,
        image: pg4,
        description: 'A charming bungalow near the beach.',
    },
    {
        id: 5,
        title: 'Stylish Loft',
        location: 'New York',
        type: 'Apartment',
        price: 2200,
        image: pg5,
        description: 'A stylish loft with city views.',
    },
    {
        id: 6,
        title: 'Rustic Cabin',
        location: 'Montana',
        type: 'Cottage',
        price: 1300,
        image: pg6,
        description: 'A rustic cabin in the mountains.',
    },
    {
        id: 7,
        title: 'Elegant Villa',
        location: 'California',
        type: 'House',
        price: 2500,
        image: pg7,
        description: 'An elegant villa with a pool.',
    },
    {
        id: 8,
        title: 'Family Home',
        location: 'Texas',
        type: 'House',
        price: 1750,
        image: pg8,
        description: 'A spacious family home in a quiet neighborhood.',
    },
    {
        id: 9,
        title: 'Urban Apartment',
        location: 'Chicago',
        type: 'Apartment',
        price: 1600,
        image: pg9,
        description: 'An urban apartment close to public transport.',
    },
    {
        id: 10,
        title: 'Coastal Retreat',
        location: 'Florida',
        type: 'Cottage',
        price: 1900,
        image: pg10,
        description: 'A coastal retreat with stunning ocean views.',
    },
];

const PropertyListings = () => {
    const [filters, setFilters] = useState({
        location: '',
        type: '',
        price: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const filteredProperties = properties.filter((property) => {
        return (
            (!filters.location || property.location === filters.location) &&
            (!filters.type || property.type === filters.type) &&
            (!filters.price || property.price <= Number(filters.price))
        );
    });

    return (
      <div>


      
        <div className="property-listings">
            <h1>Property Listings</h1>

            <div className="filters">
                <select name="location" onChange={handleFilterChange}>
                    <option value="">Select Location</option>
                    <option value="New York">New York</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    <option value="Florida">Florida</option>
                    <option value="Montana">Montana</option>
                    <option value="Chicago">Chicago</option>
                </select>

                <select name="type" onChange={handleFilterChange}>
                    <option value="">Select Type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Cottage">Cottage</option>
                    <option value="House">House</option>
                </select>

                <select name="price" onChange={handleFilterChange}>
                    <option value="">Select Max Price</option>
                    <option value="1000">Up to $1000</option>
                    <option value="1500">Up to $1500</option>
                    <option value="2000">Up to $2000</option>
                    <option value="2500">Up to $2500</option>
                </select>
            </div>

            <div className="listings">
                {filteredProperties.map((property) => (
                    <div key={property.id} className="listing">
                        <img src={property.image} alt={property.title} />
                        <h2>{property.title}</h2>
                        <p>{property.description}</p>
                        <p>Location: {property.location}</p>
                        <p>Type: {property.type}</p>
                        <p>Price: ${property.price}</p>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default PropertyListings;
