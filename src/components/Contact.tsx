import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';

interface ContactProps {
  mode: 'developer' | 'gaming';
}

const Contact: React.FC<ContactProps> = ({ mode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Simple validation
    const valid = newFormData.name.length > 0 && 
                  newFormData.email.includes('@') && 
                  newFormData.message.length > 10;
    setIsValid(valid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setIsSubmitted(true);
      // Here you would typically send the form data to your backend
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsValid(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${
      mode === 'gaming' 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
        : 'bg-gray-50 dark:bg-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              mode === 'gaming' ? 'text-white' : 'text-gray-900 dark:text-white'
            }`}>
              Let's Connect!
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              mode === 'gaming' ? 'text-purple-200' : 'text-gray-600 dark:text-gray-400'
            }`}>
              If you have a project, idea, or just want to talk {mode === 'gaming' ? 'gaming or code' : 'tech and innovation'} — hit me up.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${
                  mode === 'gaming' ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <a
                    href="mailto:abhijeet@example.com"
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      mode === 'gaming' 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-white dark:bg-gray-900 hover:shadow-lg text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className={`p-3 rounded-full mr-4 ${
                      mode === 'gaming' ? 'bg-purple-600' : 'bg-blue-100 dark:bg-blue-900'
                    }`}>
                      <Mail className={`${
                        mode === 'gaming' ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                      }`} size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className={mode === 'gaming' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}>
                        abhijeetpillai811@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/1234567890"
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      mode === 'gaming' 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-white dark:bg-gray-900 hover:shadow-lg text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className={`p-3 rounded-full mr-4 ${
                      mode === 'gaming' ? 'bg-green-600' : 'bg-green-100 dark:bg-green-900'
                    }`}>
                      <MessageCircle className={`${
                        mode === 'gaming' ? 'text-white' : 'text-green-600 dark:text-green-400'
                      }`} size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className={mode === 'gaming' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}>
                        +91 7413973109
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+1234567890"
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      mode === 'gaming' 
                        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
                        : 'bg-white dark:bg-gray-900 hover:shadow-lg text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className={`p-3 rounded-full mr-4 ${
                      mode === 'gaming' ? 'bg-blue-600' : 'bg-purple-100 dark:bg-purple-900'
                    }`}>
                      <Phone className={`${
                        mode === 'gaming' ? 'text-white' : 'text-purple-600 dark:text-purple-400'
                      }`} size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className={mode === 'gaming' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}>
                        +91 7413973109
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className={`text-xl font-semibold mb-4 ${
                  mode === 'gaming' ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/abhijeet-pillai-a4ab5b282"
                    target = "_blank"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      mode === 'gaming' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800'
                    }`}
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/jeet.abhi_0?igsh=ODhudWFoanp4ejZk"
                    className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      mode === 'gaming' 
                        ? 'bg-pink-600 hover:bg-pink-700 text-white' 
                        : 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800'
                    }`}
                  >
                    <Instagram size={20} />
                  </a>
                  {mode === 'gaming' && (
                    <a
                      href="https://discord.gg/abhijeet"
                      className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 hover:scale-110"
                    >
                      <MessageCircle size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`p-8 rounded-2xl ${
              mode === 'gaming' 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white dark:bg-gray-900 shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                mode === 'gaming' ? 'text-white' : 'text-gray-900 dark:text-white'
              }`}>
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className={`mx-auto mb-4 ${
                    mode === 'gaming' ? 'text-green-400' : 'text-green-600'
                  }`} size={48} />
                  <h4 className={`text-xl font-semibold mb-2 ${
                    mode === 'gaming' ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    Message Sent!
                  </h4>
                  <p className={mode === 'gaming' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}>
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'gaming' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        mode === 'gaming' 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500'
                      } focus:ring-2 focus:ring-opacity-50`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'gaming' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        mode === 'gaming' 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500'
                      } focus:ring-2 focus:ring-opacity-50`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'gaming' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        mode === 'gaming' 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500'
                      } focus:ring-2 focus:ring-opacity-50`}
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      mode === 'gaming' ? 'text-gray-300' : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        mode === 'gaming' 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500' 
                          : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500'
                      } focus:ring-2 focus:ring-opacity-50`}
                      placeholder="Tell me about your project or just say hello..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      mode === 'gaming'
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Send className="inline mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;