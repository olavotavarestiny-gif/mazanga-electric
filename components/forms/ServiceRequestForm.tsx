"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle, X, Loader, Zap } from "lucide-react";
import { serviceRequestSchema, type ServiceRequestFormData } from "@/lib/validations";
import { Input, Textarea, Select } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

interface ServiceRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceRequestForm({ isOpen, onClose }: ServiceRequestFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ServiceRequestFormData>({
    resolver: zodResolver(serviceRequestSchema),
  });

  const onSubmit = async (data: ServiceRequestFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      // handle error silently — form stays open for retry
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-electric-black/85 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-electric-dark border border-electric-blue-800/60 rounded-2xl w-full max-w-2xl my-8 overflow-hidden shadow-electric-lg z-10"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Top gradient line */}
            <div className="h-px w-full bg-gradient-to-r from-electric-blue-600 via-electric-cyan to-electric-blue-600" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-electric-blue-800/30">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-electric-blue-600/20 border border-electric-blue-600/30">
                  <Zap size={20} className="text-electric-cyan" />
                </div>
                <div>
                  <h2 className="font-montserrat font-bold text-xl text-electric-white">
                    Solicitar Orçamento Técnico
                  </h2>
                  <p className="text-electric-white/40 text-xs font-montserrat">
                    Resposta em até 2 horas úteis
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full border border-electric-blue-800/40 flex items-center justify-center text-electric-white/40 hover:text-electric-white hover:border-electric-cyan transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {/* Success state */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 bg-electric-dark flex flex-col items-center justify-center gap-6 z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15 }}
                    className="w-20 h-20 rounded-full bg-success-green/20 border-2 border-success-green/40 flex items-center justify-center"
                  >
                    <CheckCircle size={40} className="text-success-green" />
                  </motion.div>
                  <div className="text-center px-8">
                    <h3 className="font-montserrat font-bold text-2xl text-electric-white mb-2">
                      Solicitação Enviada!
                    </h3>
                    <p className="text-electric-white/60 leading-relaxed">
                      Entraremos em contacto em até{" "}
                      <span className="text-electric-cyan font-semibold">2 horas úteis</span>
                      {" "}para discutir o seu projeto.
                    </p>
                  </div>
                  <Button onClick={handleClose} variant="outline">
                    Fechar
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 flex flex-col gap-5">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  label="Nome Completo *"
                  placeholder="João da Silva"
                  {...register("name")}
                  error={errors.name?.message}
                />
                <Input
                  label="Telefone *"
                  placeholder="+244 900 000 000"
                  {...register("phone")}
                  error={errors.phone?.message}
                />
              </div>

              {/* Row 2 */}
              <Input
                label="Email *"
                type="email"
                placeholder="joao@empresa.ao"
                {...register("email")}
                error={errors.email?.message}
              />

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Tipo de Serviço *"
                  {...register("service")}
                  error={errors.service?.message}
                >
                  <option value="">Seleccionar serviço...</option>
                  <option value="eletricidade-residencial">Eletricidade Residencial</option>
                  <option value="cctv-vigilancia">CCTV & Vigilância</option>
                  <option value="cercas-eletricas">Cercas Elétricas</option>
                  <option value="grupos-geradores">Grupos Geradores</option>
                  <option value="eletricidade-industrial">Eletricidade Industrial</option>
                  <option value="montagem-pt">Montagem de PT</option>
                </Select>

                <Select
                  label="Tipo de Projecto *"
                  {...register("projectType")}
                  error={errors.projectType?.message}
                >
                  <option value="">Seleccionar tipo...</option>
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="industrial">Industrial</option>
                </Select>
              </div>

              {/* Description */}
              <Textarea
                label="Descrição do Projecto *"
                placeholder="Descreva as suas necessidades elétricas, dimensões do espaço, potência necessária..."
                {...register("description")}
                error={errors.description?.message}
              />

              {/* Row 4 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  label="Urgência *"
                  {...register("urgency")}
                  error={errors.urgency?.message}
                >
                  <option value="">Seleccionar urgência...</option>
                  <option value="normal">Normal (7-14 dias)</option>
                  <option value="urgente">Urgente (2-5 dias)</option>
                  <option value="emergencia">Emergência (24h)</option>
                </Select>

                <Select
                  label="Preferência de Contacto *"
                  {...register("contactPreference")}
                  error={errors.contactPreference?.message}
                >
                  <option value="">Seleccionar...</option>
                  <option value="telefone">Telefone</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                </Select>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-2 border-t border-electric-blue-800/30">
                <p className="text-electric-white/30 text-xs font-montserrat">
                  * Campos obrigatórios
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader size={16} className="animate-spin" />
                      A enviar...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Zap size={16} />
                      Enviar Solicitação
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
