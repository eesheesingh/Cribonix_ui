import React, { useState } from 'react';
import { close } from '../../assets';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [socialMediaLink, setSocialMediaLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (!userType) newErrors.userType = 'User type is required';

    if (userType === 'Influencer' && !socialMediaLink.trim()) {
      newErrors.socialMediaLink = 'Social media link is required';
    }
    if (userType === 'Brand' && !websiteLink.trim()) {
      newErrors.websiteLink = 'Website link is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('Message', message);
    formData.append('UserType', userType);

    if (userType === 'Influencer') {
      formData.append('SocialMediaLink', socialMediaLink);
    } else if (userType === 'Brand') {
      formData.append('WebsiteLink', websiteLink);
    }

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwCafQ78RmUfZXmWdV8vD_2KUphf_X00tqWLKqE05OjCgFUDxvecg8cWUHOLJ2auwbP/exec',
        {
          method: 'POST',
          body: formData,
        }
      );

      setLoading(false);

      if (response.ok) {
        alert('Message sent successfully');
        setName('');
        setEmail('');
        setMessage('');
        setUserType('');
        setPhone('');
        setSocialMediaLink('');
        setWebsiteLink('');
        setErrors({});
        onClose();
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      setLoading(false);
      alert('Error occurred while sending message');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <img src={close} className="w-6" alt="close" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="number"
              name="Phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your number"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Are you an Influencer or a Brand?</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="UserType"
                  value="Influencer"
                  checked={userType === 'Influencer'}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                />
                <span className="ml-2">Influence</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="UserType"
                  value="Brand"
                  checked={userType === 'Brand'}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                />
                <span className="ml-2">Brand</span>
              </label>
            </div>
            {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
          </div>
          {userType === 'Influencer' && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <label className="block text-gray-700 font-medium mb-2 mt-4">Social Media Link</label>
              <input
                type="text"
                name="SocialMediaLink"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your social media link"
                value={socialMediaLink}
                onChange={(e) => setSocialMediaLink(e.target.value)}
                required
              />
              {errors.socialMediaLink && <p className="text-red-500 text-sm">{errors.socialMediaLink}</p>}
            </div>
          )}
          {userType === 'Brand' && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Business Email</label>
              <input
                type="email"
                name="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              <label className="block text-gray-700 font-medium mb-2 mt-4">Website Link</label>
              <input
                type="text"
                name="WebsiteLink"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Your website link"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                required
              />
              {errors.websiteLink && <p className="text-red-500 text-sm">{errors.websiteLink}</p>}
            </div>
          )}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Your message"
              name="Message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={!userType}
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:bg-red-700 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
              disabled={loading}
            >
              {loading ? 'Sending your message...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
