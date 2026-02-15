import { useState } from 'react';
import { Mail, MapPin, Link as LinkIcon, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: false });

    try {
      // Simulation d'envoi (remplace par EmailJS ou ton API)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Exemple avec EmailJS (à configurer) :
      // import emailjs from '@emailjs/browser';
      // const result = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );

      setFormStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus({ loading: false, success: false, error: true });
      
      setTimeout(() => {
        setFormStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  return (
    <section className="my-10 md:my-32" id="contact">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Me <span className="text-accent">Contacter</span>
          </h1>
          <p className="text-md my-4">
            Une question ? Un projet ? N'hésitez pas à me contacter, <br className="hidden md:block"/>
            je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Informations de contact */}
          <div className="flex flex-col gap-5">
            {/* Email */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] bg-accent rounded-xl flex items-center justify-center text-accent-content">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg mb-1">Email</h3>
                    <a href="mailto:julienfz59@gmail.com" className="link link-hover text-base-content/70">
                      julienfz59@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Localisation */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] bg-accent rounded-xl flex items-center justify-center text-accent-content">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg mb-1">Localisation</h3>
                    <p className="text-base-content/70">Lille, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="card-body p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 min-w-[48px] bg-accent rounded-xl flex items-center justify-center text-accent-content">
                    <LinkIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg mb-3">Réseaux sociaux</h3>
                    <div className="flex gap-3">
                      <a 
                        href="https://github.com/JulienF-OC" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub"
                        className="btn btn-square btn-sm hover:btn-accent transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/julien-franz/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn"
                        className="btn btn-square btn-sm hover:btn-accent transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Nom et Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label htmlFor="name" className="label">
                      <span className="label-text font-semibold">Nom *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input input-bordered ${errors.name ? 'input-error' : ''}`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <label className="label">
                        <span className="label-text-alt text-error">{errors.name}</span>
                      </label>
                    )}
                  </div>

                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      <span className="label-text font-semibold">Email *</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                      placeholder="votre@email.fr"
                    />
                    {errors.email && (
                      <label className="label">
                        <span className="label-text-alt text-error">{errors.email}</span>
                      </label>
                    )}
                  </div>
                </div>

                {/* Sujet */}
                <div className="form-control">
                  <label htmlFor="subject" className="label">
                    <span className="label-text font-semibold">Sujet *</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input input-bordered md:w-165 ${errors.subject ? 'input-error' : ''}`}
                    placeholder="Le sujet de votre message"
                  />
                  {errors.subject && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.subject}</span>
                    </label>
                  )}
                </div>

                {/* Message */}
                <div className="form-control">
                  <label htmlFor="message" className="label">
                    <span className="label-text font-semibold">Message *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`textarea textarea-bordered resize-y min-h-[120px] md:w-150 ${errors.message ? 'textarea-error' : ''}`}
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.message}</span>
                    </label>
                  )}
                </div>

                {/* Bouton Submit */}
                <button 
                  type="submit" 
                  disabled={formStatus.loading}
                  className="btn btn-accent w-full text-lg"
                >
                  {formStatus.loading ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Message de succès */}
                {formStatus.success && (
                  <div className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Message envoyé avec succès ! Je vous répondrai bientôt.</span>
                  </div>
                )}

                {/* Message d'erreur */}
                {formStatus.error && (
                  <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Une erreur s'est produite. Veuillez réessayer.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
