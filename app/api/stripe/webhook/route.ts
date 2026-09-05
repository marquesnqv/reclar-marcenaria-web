import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      received: false,
      reason: "stripe_not_configured",
      nextStep:
        "Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET, then implement deposit or payment event handling.",
    },
    { status: 501 },
  );
}
