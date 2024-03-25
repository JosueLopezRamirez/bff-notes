import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

interface LoginI {
    email: string;
    password: string;
}

export async function POST(req: NextRequest, res: any) {
    const supabase = createClient();
    const data = await req.json();
    console.log({ data });
    const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
    });

    if (error) return new Response(null, { status: 400, statusText: "invalid credentialss" });
    return NextResponse.json({ success: true }, { status: 200 })
}