import React, { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Modal from '../components/Modal';

const Contact = () => {

  emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for form submission status
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);  // For disabling the submit button
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Disable submit button while sending
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    // Send email using emailjs
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )
      .then(() => {
        setStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setLoading(false);
        setShowModal(true);  // Show the modal after successful submission
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again later.');
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  // Initialize AOS (Animate On Scroll)
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 lg:px-20 py-16 relative top-24">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-2">
          <FaEnvelopeOpenText className="text-cyan-400 text-4xl animate-bounce" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-500">
          Get in Touch with <span className="text-white">Code & Class</span>
        </h1>
        <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about our courses, want to partner,
          or just want to say hi — feel free to reach out. Fill out the form and our team will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form
          className="bg-zinc-900 p-6 rounded-xl border border-zinc-700 shadow-lg space-y-6 animate-fade-in"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-cyan-400 mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-black border border-zinc-600 text-white focus:border-cyan-500 outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-cyan-300' : 'bg-cyan-500 hover:bg-cyan-400'} text-black font-semibold py-2 rounded-md transition-all`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Google Map */}
        <div className="overflow-hidden rounded-xl shadow-lg border border-zinc-700 animate-fade-in">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.137562705409!2d78.4796710739051!3d17.357112403679086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9991afbe2483%3A0x66f496aa418886da!2sCode%20and%20class%20educational%20institute!5e0!3m2!1sen!2sin!4v1753201459727!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="w-full h-[350px] md:h-[65vh]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Show Modal on successful submission */}
      {showModal && (
        <Modal
          message="Thank you for contacting us! We'll get back to you as soon as possible."
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Contact;
