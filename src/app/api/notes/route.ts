import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();

  const { data: notes } = await supabase.from("notes").select();

  return NextResponse.json({ data: notes }, { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse) {

  const data = await req.json();
  const supabase = createClient();

  const { data: result, error } = await supabase.from("notes").insert({ note: data.note }).select();

  if (error) {
    return new Response(null, { status: 400, statusText: error.message });
  }

  return NextResponse.json({ data: result }, { status: 200 });
}

export async function PUT(req: NextRequest, res: NextResponse) {

  const data = await req.json();
  const supabase = createClient();

  const { data: result, error } = await supabase.from("notes").update({ note: data.note }).eq('id', data.id).select();

  if (error) {
    return new Response(null, { status: 400, statusText: error.message });
  }

  return NextResponse.json({ data: result }, { status: 200 });
}
