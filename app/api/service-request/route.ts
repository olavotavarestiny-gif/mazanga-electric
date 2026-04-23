import { NextRequest, NextResponse } from "next/server";
import { serviceRequestSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = serviceRequestSchema.safeParse(body);

    if (!data.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: data.error.issues },
        { status: 400 }
      );
    }

    // Log for now — integrate with email/WhatsApp/CRM in Phase 2
    console.log("[Mazanga Electric] Nova solicitação:", {
      timestamp: new Date().toISOString(),
      ...data.data,
    });

    return NextResponse.json(
      { success: true, message: "Solicitação recebida com sucesso." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
