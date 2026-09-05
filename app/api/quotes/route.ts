import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      reason: "quote_storage_not_configured",
      nextStep:
        "Connect Supabase or an email provider, then replace this placeholder with quote persistence.",
    },
    { status: 501 },
  );
}
