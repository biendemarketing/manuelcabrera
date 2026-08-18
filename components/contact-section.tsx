'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { 
  Send, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight,
  ArrowUpRight,
  FileDown,
  Clock, 
  AlertCircle, 
  MessageSquare 
} from 'lucide-react';
import { WhatsAppOfficialIcon } from '@/components/logo';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

interface ContactSectionProps {
  onOpenCV?: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  areaOfInterest: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export function ContactSection({ onOpenCV }: ContactSectionProps = {}) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    areaOfInterest: 'Marketing Digital & Pautas',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'El nombre es obligatorio.';
        if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'El correo electrónico es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Ingresa un correo electrónico válido.';
        }
        return undefined;
      case 'subject':
        if (!value.trim()) return 'El asunto es obligatorio.';
        if (value.trim().length < 4) return 'El asunto debe tener al menos 4 caracteres.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Por favor detalla tu mensaje o requerimiento.';
        if (value.trim().length < 15) return 'El mensaje debe contener al menos 15 caracteres.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }, 800);
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const generateWhatsAppDirectUrl = () => {
    const text = `Hola Manuel, mi nombre es ${formData.name || 'un representante'}${formData.company ? ` de ${formData.company}` : ''}. Me interesa conversar sobre ${formData.areaOfInterest}.${formData.message ? ` Mensaje: ${formData.message}` : ''}`;
    return `https://wa.me/18496352835?text=${encodeURIComponent(text)}`;
  };

  return (
    <BlurFadeSection id="contacto" className="py-20 bg-zinc-50 dark:bg-zinc-950 relative w-full transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold uppercase tracking-widest mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-zinc-400" />
            <span>Contacto Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
            Contacto Directo
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
            Canal abierto para empresas, agencias y organizaciones interesadas en evaluar mi experiencia en marketing, desarrollo, branding, 3D o IA. Envíame un mensaje y te responderé con prontitud.
          </p>
        </BlurFadeDiv>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-5">
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                Canales de Comunicación
              </h3>

              {/* WhatsApp Item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-transparent shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
                    <WhatsAppOfficialIcon className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">WhatsApp / Teléfono</p>
                    <p className="text-sm font-bold text-zinc-950 dark:text-white">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
                    title="Copiar teléfono"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600 dark:text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-colors cursor-pointer shadow-xs"
                    title="Abrir WhatsApp"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-transparent shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-950 dark:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="max-w-[180px] sm:max-w-[200px] truncate">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Correo Electrónico</p>
                    <p className="text-sm font-bold text-zinc-950 dark:text-white truncate">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
                    title="Copiar correo"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600 dark:text-white" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-2 rounded-full bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 transition-colors cursor-pointer shadow-xs"
                    title="Enviar Correo"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200/80 dark:border-transparent shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-950 dark:text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Ubicación Actual</p>
                  <p className="text-xs sm:text-sm font-bold text-zinc-950 dark:text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 pt-2 font-medium">
                <Clock className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Tiempo de respuesta promedio: <strong className="text-zinc-950 dark:text-white">menos de 2 horas</strong>.</span>
              </div>
            </div>

            {/* Quick Action: Open WhatsApp Chat */}
            <a
              id="btn-whatsapp-chat-direct"
              href={generateWhatsAppDirectUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <WhatsAppOfficialIcon className="w-5 h-5 text-white" />
              <span>Chatear por WhatsApp ({PERSONAL_INFO.phone})</span>
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md relative">
              
              {isSubmitted ? (
                <div className="p-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-zinc-800 flex items-center justify-center text-emerald-600 dark:text-white mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-white">
                    ¡Mensaje Enviado con Éxito!
                  </h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Gracias por ponerte en contacto, <strong className="text-zinc-950 dark:text-white">{formData.name}</strong>. He recibido tu mensaje sobre <strong className="text-zinc-950 dark:text-white">{formData.areaOfInterest}</strong> y te responderé en breve.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          areaOfInterest: 'Marketing Digital & Pautas',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-bold text-xs cursor-pointer shadow-sm"
                    >
                      Enviar otro mensaje
                    </button>
                    <a
                      href={generateWhatsAppDirectUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-950 dark:text-zinc-100 font-bold text-xs transition-colors shadow-xs"
                    >
                      Continuar en WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-3 mb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                      Formulario de Contacto Profesional
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Envía un mensaje para consultas sobre experiencia laboral, colaboraciones o proyectos.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ej. Alexander Valdez"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 ${
                          errors.name 
                            ? 'ring-2 ring-red-500/50' 
                            : 'focus:ring-2 focus:ring-zinc-400'
                        } text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none shadow-xs`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 mt-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                        Correo Electrónico Corporativo / Personal *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tuempresa@dominio.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 ${
                          errors.email 
                            ? 'ring-2 ring-red-500/50' 
                            : 'focus:ring-2 focus:ring-zinc-400'
                        } text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none shadow-xs`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 mt-1 font-medium">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Company and Area of Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Company (Optional) */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                        Empresa u Organización (Opcional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Ej. Grupo Empresarial / Agencia"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400 shadow-xs"
                      />
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label htmlFor="areaOfInterest" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                        Área de Interés
                      </label>
                      <select
                        id="areaOfInterest"
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer shadow-xs"
                      >
                        <option value="Marketing Digital & Pautas">Marketing Digital & Pautas (Meta / Google)</option>
                        <option value="Desarrollo Web & Software">Desarrollo Web & Software (Next.js / Cloud)</option>
                        <option value="Branding & Identidad Corporativa">Branding & Identidad Corporativa</option>
                        <option value="Diseño UI/UX & Producto Digital">Diseño UI/UX & Producto Digital</option>
                        <option value="Modelado 3D & Fachadas">Modelado 3D & Fachadas</option>
                        <option value="Flujos de IA & Automatización">Flujos de IA & Automatización</option>
                        <option value="Fotografía & Producción Comercial">Fotografía & Producción Comercial</option>
                        <option value="Oportunidad Laboral / Contratación">Oportunidad Laboral / Contratación</option>
                      </select>
                    </div>

                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Ej. Interés en colaborar para campaña y desarrollo digital"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 ${
                        errors.subject 
                          ? 'ring-2 ring-red-500/50' 
                            : 'focus:ring-2 focus:ring-zinc-400'
                      } text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none shadow-xs`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Escribe tu mensaje, requerimientos o detalles de la oportunidad..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 ${
                        errors.message 
                          ? 'ring-2 ring-red-500/50' 
                          : 'focus:ring-2 focus:ring-zinc-400'
                      } text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none resize-none shadow-xs`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-bold text-sm shadow-md active:scale-95 transition-all cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white dark:border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Enviando mensaje...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar Mensaje a Manuel Cabrera</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </BlurFadeSection>
  );
}

export default ContactSection;
