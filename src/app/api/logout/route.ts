import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: any) {
    const supabase = createClient();
    await supabase.auth.signOut();
    return NextResponse.json({ success: true }, { status: 200 })
}