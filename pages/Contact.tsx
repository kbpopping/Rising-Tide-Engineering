import React, { useState, useRef, useEffect } from 'react';

interface FormData {
  services: string[];
  description: string;
  file: File | null;
  fullName: string;
  companyName: string;
  position: string;
  email: string;
  phone: string;
}

interface FormErrors {
  services?: string;
  description?: string;
  fullName?: string;
  companyName?: string;
  position?: string;
  email?: string;
  phone?: string;
}

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    description: '',
    file: null,
    fullName: '',
    companyName: '',
    position: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: number;
    if (showSuccess) {
      timer = window.setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showSuccess]);

  const handleServiceChange = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
    if (errors.services) setErrors(prev => ({ ...prev, services: undefined }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name as keyof FormErrors]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (formData.services.length === 0) {
        newErrors.services = "Please select at least one service.";
        isValid = false;
      }
    } else if (currentStep === 2) {
      if (!formData.description.trim()) {
        newErrors.description = "Please provide some project details.";
        isValid = false;
      }
    } else if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
      if (!formData.position.trim()) newErrors.position = "Position/Title is required.";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
      
      if (Object.keys(newErrors).length > 0) isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(step)) {
      // Handle form submission logic here
      setShowSuccess(true);
      // Reset logic can be placed here if needed
    }
  };

  const steps = [
    { num: 1, label: "Service" },
    { num: 2, label: "Details" },
    { num: 3, label: "Contact" }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-body transition-colors duration-300 min-h-screen flex flex-col relative">
      {/* Success Modal */}
      {showSuccess && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setShowSuccess(false)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-sm w-full relative animate-fade-in-up flex flex-col items-center text-center gap-4 border border-gray-100 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowSuccess(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-2 shadow-sm animate-bounce">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">Success!</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Your request has been submitted successfully. You'll be contacted shortly by a member of our team.
            </p>
          </div>
        </div>
      )}

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">Start Your Engineering Project</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up-delay-1">Providing world-class engineering solutions across Nigeria. Tell us about your needs, and our team in Port Harcourt will respond within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-fade-in-up-delay-2">
            {/* Stepper Header */}
            <div className="bg-gray-50 dark:bg-gray-900/50 px-6 py-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between max-w-lg mx-auto">
                {steps.map((s, idx) => (
                  <React.Fragment key={s.num}>
                    <div className="flex flex-col items-center relative z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 transition-colors duration-300 ${
                        step >= s.num 
                          ? 'bg-primary text-white shadow-md' 
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-2 border-gray-300 dark:border-gray-600'
                      }`}>
                        {step > s.num ? <span className="material-symbols-outlined text-sm">check</span> : s.num}
                      </div>
                      <span className={`text-xs font-semibold ${step >= s.num ? 'text-primary' : 'text-gray-500 dark:text-gray-400'}`}>
                        {s.label}
                      </span>
                    </div>
                    {idx < steps.length - 1 && (
                      <div className={`flex-1 h-1 mx-2 rounded transition-colors duration-300 ${step > s.num ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <form className="p-8" onSubmit={handleSubmit}>
              {/* Step 1: Services */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-safety">engineering</span>
                    Select Required Services
                  </h2>
                  
                  {errors.services && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">error</span>
                      {errors.services}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Civil Engineering', 'Marine Engineering', 'Oil & Gas Services', 'Consultancy'].map((service) => (
                      <label 
                        key={service}
                        className={`relative flex cursor-pointer rounded-lg border p-4 shadow-sm focus:outline-none transition-all group ${
                          formData.services.includes(service)
                            ? 'border-primary bg-green-50 dark:bg-green-900/10'
                            : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:border-primary'
                        }`}
                      >
                        <input 
                          className="sr-only" 
                          type="checkbox" 
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                        />
                        <span className="flex flex-1">
                          <span className="flex flex-col">
                            <span className={`block text-sm font-medium transition-colors ${
                              formData.services.includes(service) ? 'text-primary' : 'text-gray-900 dark:text-white group-hover:text-primary'
                            }`}>
                              {service}
                            </span>
                            <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                              {service === 'Civil Engineering' && 'Construction, Infrastructure & Roads'}
                              {service === 'Marine Engineering' && 'Offshore Structures & Dredging'}
                              {service === 'Oil & Gas Services' && 'Pipeline Maintenance & Supply'}
                              {service === 'Consultancy' && 'Project Management & Surveying'}
                            </span>
                          </span>
                        </span>
                        <span aria-hidden="true" className={`material-symbols-outlined ${
                          formData.services.includes(service) ? 'text-primary' : 'text-gray-300 group-hover:text-primary'
                        }`}>
                          check_circle
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-safety">description</span>
                    Project Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Tell us about your project <span className="text-safety">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={6}
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        placeholder="Please describe the scope, timeline, and specific requirements..."
                        value={formData.description}
                        onChange={handleInputChange}
                      ></textarea>
                      {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Documents (Optional)
                      </label>
                      <div 
                        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg hover:border-primary transition-colors cursor-pointer bg-gray-50 dark:bg-gray-900/50"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className="space-y-1 text-center">
                          {formData.file ? (
                            <div className="flex flex-col items-center">
                              <span className="material-symbols-outlined text-primary text-4xl mb-2">description</span>
                              <p className="text-sm text-gray-900 dark:text-white font-medium">{formData.file.name}</p>
                              <p className="text-xs text-gray-500">{(formData.file.size / 1024 / 1024).toFixed(2)} MB</p>
                              <button 
                                type="button" 
                                className="mt-2 text-xs text-red-500 hover:text-red-700 font-medium"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFormData(prev => ({...prev, file: null}));
                                  if (fileInputRef.current) fileInputRef.current.value = '';
                                }}
                              >
                                Remove file
                              </button>
                            </div>
                          ) : (
                            <>
                              <span className="material-symbols-outlined text-gray-400 text-4xl mx-auto mb-2">cloud_upload</span>
                              <div className="flex text-sm text-gray-600 dark:text-gray-400 justify-center">
                                <span className="relative cursor-pointer rounded-md font-medium text-primary hover:text-green-700 focus-within:outline-none">
                                  <span>Upload a file</span>
                                </span>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500 dark:text-gray-500">
                                PDF, DOCX, XLSX up to 10MB
                              </p>
                            </>
                          )}
                          <input 
                            ref={fileInputRef}
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in-up">
                  <h2 className="text-xl font-display font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-safety">contact_mail</span>
                    Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name <span className="text-safety">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.fullName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                    </div>

                    <div className="col-span-1">
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Position / Title <span className="text-safety">*</span>
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.position ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        value={formData.position}
                        onChange={handleInputChange}
                      />
                      {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position}</p>}
                    </div>

                    <div className="col-span-1 md:col-span-2">
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company Name <span className="text-safety">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.companyName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                      {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
                    </div>

                    <div className="col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address <span className="text-safety">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="col-span-1">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number <span className="text-safety">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`w-full rounded-lg border bg-white dark:bg-gray-900 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-safety focus:border-transparent outline-none transition-shadow ${
                          errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                        }`}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-between">
                {step > 1 ? (
                  <button 
                    onClick={handleBack}
                    type="button"
                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-bold py-3 px-6 rounded-lg shadow border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div> // Spacer
                )}
                
                {step < 3 ? (
                  <button 
                    onClick={handleNext}
                    type="button"
                    className="bg-primary hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Next Step
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                ) : (
                  <button 
                    type="submit"
                    className="bg-safety hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-orange-500/30 transform transition hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    Submit Request
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up-delay-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">location_on</span>
                Head Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-safety mt-1">map</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Port Harcourt</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Plot 143, Trans Amadi Industrial Layout,<br/>
                      Port Harcourt, Rivers State,<br/>
                      Nigeria.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gray-100 dark:bg-gray-700 w-full my-4"></div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-safety">phone_in_talk</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">Phone</p>
                    <a className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors" href="tel:+2348001234567">+234 800 123 4567</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-safety">mail</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">Email</p>
                    <a className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors" href="mailto:info@trtel.com.ng">info@trtel.com.ng</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-safety">schedule</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">Business Hours</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 h-64 overflow-hidden relative group">
              <iframe 
                allowFullScreen={true}
                className="w-full h-full rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500" 
                loading="lazy" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6669480302825!2d7.037146314762886!3d4.827599996504245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cda4e197368d%3A0x6a0532292f70650!2sTrans%20Amadi%20Industrial%20Layout%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                style={{ border: 0 }}
              ></iframe>
              <div className="absolute bottom-4 left-4">
                <a className="bg-white dark:bg-gray-900 text-xs px-3 py-1.5 rounded shadow text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View Larger Map</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;