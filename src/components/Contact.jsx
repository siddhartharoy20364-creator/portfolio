import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { useScrollReveal } from '../hooks/useAnimations';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);
  const [status, setStatus] = useState('idle');

  const emailAddress = 'kunalkumar.dev03@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div ref={ref} className={`contact-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's Connect.</h2>
            <p className="section-subtitle">
              Whether you have an internship opportunity, a project proposal, or simply want to chat about web development.
            </p>
          </div>

          <div className="contact-layout">
            {/* Direct Info */}
            <div className="contact-sidebar">
              <div className="contact-status-box glass-card">
                <div className="status-ping-wrap">
                  <span className="status-core-dot" />
                </div>
                <div className="status-copy">
                  <h4 className="status-title">Active &amp; Available</h4>
                  <p className="status-text">
                    Open to frontend internships, junior engineering roles, and open-source collaboration.
                  </p>
                </div>
              </div>

              <div className="contact-channels">
                <div className="channel-card glass-card">
                  <div className="channel-icon">
                    <Mail size={16} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Email</span>
                    <a href={`mailto:${emailAddress}`} className="channel-value">
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="channel-copy-btn"
                    title="Copy email address"
                    aria-label="Copy email"
                  >
                    {isCopied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="channel-card glass-card">
                  <div className="channel-icon">
                    <MapPin size={16} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">Jamshedpur, Jharkhand, India</span>
                    <span className="channel-subtext">Remote &amp; On-site</span>
                  </div>
                </div>

                <div className="social-links-grid">
                  <a
                    href="https://www.linkedin.com/in/kunal-kumar-572722393/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-strip-item glass-card"
                  >
                    <div className="social-left">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight size={14} className="social-arrow" />
                  </a>

                  <a
                    href="https://github.com/kunalkumar-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-strip-item glass-card"
                  >
                    <div className="social-left">
                      <Github size={16} />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight size={14} className="social-arrow" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-card glass-card">
              <div className="form-card-header">
                <h3 className="form-card-title">Send a Direct Message</h3>
                <p className="form-card-subtitle">
                  Drop a message below and I will get back to you promptly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="form-success-state">
                  <CheckCircle2 size={44} className="text-success" />
                  <h4>Message Ready</h4>
                  <p>
                    Your mail client draft has been prepared. Thank you for reaching out!
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setStatus('idle')}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="form-input-clean"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="form-input-clean"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Project inquiry"
                      className="form-input-clean"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="form-input-clean form-textarea-clean"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="form-error-clean">
                      Please fill out all required fields.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary form-submit-btn"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
