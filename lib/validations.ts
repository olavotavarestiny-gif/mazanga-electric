import { z } from "zod";

export const serviceRequestSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: z
    .string()
    .min(9, "Telefone inválido")
    .regex(/^(\+244\s?)?[0-9]{3}\s?[0-9]{3}\s?[0-9]{3}$/, "Formato: +244 XXX XXX XXX"),
  email: z.string().email("Email inválido"),
  service: z.enum(
    [
      "eletricidade-residencial",
      "cctv-vigilancia",
      "cercas-eletricas",
      "grupos-geradores",
      "eletricidade-industrial",
      "montagem-pt",
    ],
    { error: "Seleccione um serviço" }
  ),
  projectType: z.enum(["residencial", "comercial", "industrial"], {
    error: "Seleccione o tipo de projecto",
  }),
  description: z
    .string()
    .min(20, "Descrição deve ter pelo menos 20 caracteres"),
  urgency: z.enum(["normal", "urgente", "emergencia"], {
    error: "Seleccione a urgência",
  }),
  contactPreference: z.enum(["telefone", "whatsapp", "email"], {
    error: "Seleccione a preferência de contacto",
  }),
});

export type ServiceRequestFormData = z.infer<typeof serviceRequestSchema>;
