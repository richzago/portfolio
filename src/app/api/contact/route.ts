import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Limitamos o tamanho da mensagem recebida.
    const rawBody = await request.text();

    if (rawBody.length > 12000) {
      return Response.json(
        { message: "A mensagem excede o limite permitido." },
        { status: 413 },
      );
    }

    let payload: unknown;

    try {
      payload = JSON.parse(rawBody);
    } catch {
      return Response.json({ message: "Dados inválidos." }, { status: 400 });
    }

    if (!payload || typeof payload !== "object") {
      return Response.json({ message: "Dados inválidos." }, { status: 400 });
    }

    const data = payload as Record<string, unknown>;

    // Campo oculto para barrar robôs simples.
    if (typeof data.website === "string" && data.website.trim()) {
      return Response.json({ message: "Mensagem recebida." });
    }

    if (
      typeof data.name !== "string" ||
      typeof data.email !== "string" ||
      typeof data.subject !== "string" ||
      typeof data.message !== "string"
    ) {
      return Response.json(
        { message: "Preencha todos os campos corretamente." },
        { status: 400 },
      );
    }

    const name = data.name.trim();
    const email = data.email.trim();
    const subject = data.subject.trim();
    const message = data.message.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name.length < 2 ||
      name.length > 100 ||
      !emailRegex.test(email) ||
      email.length > 254 ||
      subject.length < 3 ||
      subject.length > 150 ||
      message.length < 10 ||
      message.length > 3000
    ) {
      return Response.json(
        { message: "Verifique os dados informados." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Configuração de e-mail incompleta.");

      return Response.json(
        { message: "Serviço indisponível no momento." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `[Portfólio] ${subject.replace(/[\r\n]/g, " ")}`,
      text: [
        `Nome: ${name}`,
        `E-mail: ${email}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Falha ao enviar e-mail:", error.name);

      return Response.json(
        { message: "Não foi possível enviar a mensagem." },
        { status: 502 },
      );
    }

    return Response.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro interno no contato:", error);

    return Response.json(
      { message: "Erro inesperado. Tente novamente." },
      { status: 500 },
    );
  }
}
