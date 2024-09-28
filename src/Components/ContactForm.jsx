import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Required';
        if (!formData.email) {
            newErrors.email = 'Required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.message) newErrors.message = 'Required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' }); // Reset form
            setErrors({}); // Clear errors
        }
    };

    return (
        <>
        <h1 style={{margin:"3vw"}}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <br />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div>
                <label>Email:</label>     <br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div>
                <label>Message:</label>      <br />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <button type="submit">Submit</button>
        </form></>
    );
};

export default ContactForm;
