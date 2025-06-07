import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow numbers in phone field
    if (name === 'phone' && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length !== 10) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white px-6 pt-28 pb-16 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-base md:text-lg text-gray-300">
          Looking to collaborate with us? Share your expectations and specific requirements. <br />
          Get in touch today, and let's discuss how we can work together successfully!
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/5 p-8 rounded-lg backdrop-blur-md shadow-lg space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded outline-none"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded outline-none"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            maxLength={10}
            className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded outline-none"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 bg-white/10 border border-gray-500 rounded outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="mx-auto block w-40 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
