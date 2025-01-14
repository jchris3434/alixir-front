import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import "../styles/testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('test recup api', testimonials);

  // Appel de l'API pour récupérer les testimonials du back
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/testimonials/top');
        const data = await response.json();
        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur de récupération du json testimonials', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <h2>Chargement...</h2>;
  }

  return (
    <section className='testimonials-wrapper'>
      <h1 className='testi-title'>Our clients speak</h1>
      <div className="testimonials-card-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-text-wrapper">
              <h3 className='testimonial-client-title'>{testimonial.title}</h3>
              <span className='testimonial-client-comment'>{testimonial.body}</span>
            </div>
            <div className="testimonial-client-wrapper">
              <img className="testimonial-client-avatar" src={testimonial.personPicture} alt={testimonial.personName} />
              <span className="testimonial-client-name">{testimonial.personName}</span>
              <span className="testimonial-client-company">{testimonial.personCompany}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('testimonials-root'));
root.render(<Testimonials />);
