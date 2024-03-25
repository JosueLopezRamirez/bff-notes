import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient();

    try {
        const {
            data: { user },
        } = await supabase.auth.getUser();

        return NextResponse.json({ user: !!user });
    } catch (error) {
        return new Response(null, { status: 403 });
    }
}