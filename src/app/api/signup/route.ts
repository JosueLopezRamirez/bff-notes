import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: any) {
  const supabase = createClient();
  const data = await req.json();
  const origin = headers().get("origin");
  
  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error)
    return new Response(null, {
      status: 400,
      statusText: "invalid credentialss",
    });
  return NextResponse.json({ success: true }, { status: 200 });
}
