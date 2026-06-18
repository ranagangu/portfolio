import React, { useState } from 'react';

export default function Contact({ personalInfo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    isError: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map standard form element IDs to state keys
    const key = id.replace('contact-', '');
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
    // Clear error for this field
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = true;
        isValid = false;
      }
    }
    if (!formData.subject.trim()) {
      newErrors.subject = true;
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const email = personalInfo.email;
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      let response;
      if (web3FormsKey) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: "Portfolio Contact Form"
          })
        });
      } else {
        response = await fetch(`https://formsubmit.co/ajax/${email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: `Portfolio Contact: ${formData.subject}`
          })
        });
      }

      const result = await response.json();
      const isSuccess = result.success === true || result.success === "true";

      if (isSuccess) {
        setToast({
          show: true,
          message: "Your message has been sent successfully!",
          isError: false
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || "Failed to send the message.");
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      setToast({
        show: true,
        message: err.message || "There was an error sending your message. Please try again.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-title-wrap section-title-center" data-aos="fade-up">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-title-bar"></div>
        </div>
        
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="glass-panel contact-info-card">
              <h3 className="mb-4">Let's Connect</h3>
              <p className="text-secondary mb-5">
                Have a project in mind, need technical consultation, or want to arrange a training program for your developers? Reach out using the contact details or drop a message!
              </p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
                  <div>
                    <div className="contact-info-label">Email Me</div>
                    <div className="contact-info-value">
                      <a href={`mailto:${personalInfo.email}`} className="text-secondary">{personalInfo.email}</a>
                    </div>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fa-brands fa-linkedin-in"></i></div>
                  <div>
                    <div className="contact-info-label">LinkedIn</div>
                    <div className="contact-info-value">
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary">linkedin.com/in/debpriya-ganguly</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fa-brands fa-github"></i></div>
                  <div>
                    <div className="contact-info-label">GitHub</div>
                    <div className="contact-info-value">
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-secondary">github.com/debpriya-ganguly</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="fa-solid fa-location-dot"></i></div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">{personalInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="glass-panel contact-form-card">
              <h3 className="mb-4">Send Me a Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <label className="form-label-custom" htmlFor="contact-name">Your Name</label>
                      <input 
                        type="text" 
                        id="contact-name" 
                        className={`form-control-custom ${errors.name ? 'is-invalid' : ''}`}
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                      <span className="invalid-feedback-custom">Please enter your name.</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <label className="form-label-custom" htmlFor="contact-email">Your Email</label>
                      <input 
                        type="email" 
                        id="contact-email" 
                        className={`form-control-custom ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      <span className="invalid-feedback-custom">Please enter a valid email address.</span>
                    </div>
                  </div>
                </div>
                <div className="form-group-custom">
                  <label className="form-label-custom" htmlFor="contact-subject">Subject</label>
                  <input 
                    type="text" 
                    id="contact-subject" 
                    className={`form-control-custom ${errors.subject ? 'is-invalid' : ''}`}
                    placeholder="Project collaboration..."
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                  <span className="invalid-feedback-custom">Please enter a subject.</span>
                </div>
                <div className="form-group-custom">
                  <label className="form-label-custom" htmlFor="contact-message">Message</label>
                  <textarea 
                    id="contact-message" 
                    rows="5" 
                    className={`form-control-custom ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Hi Debpriya, I would love to talk about..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <span className="invalid-feedback-custom">Please enter your message text.</span>
                </div>
                <button type="submit" className="btn-gradient w-100 py-3 d-flex align-items-center justify-content-center gap-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div 
        className={`toast-custom ${toast.show ? 'show' : ''}`} 
        id="toast-notification"
        style={toast.isError ? { borderColor: '#ef4444', boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)' } : {}}
      >
        <div className="toast-custom-icon" style={toast.isError ? { color: '#ef4444' } : {}}>
          <i className={toast.isError ? "fa-solid fa-circle-xmark" : "fa-solid fa-circle-check"}></i>
        </div>
        <div className="toast-custom-msg">{toast.message}</div>
      </div>
    </section>
  );
}
