import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const supabase = createClient();

    const { data, error } = await supabase.from("notes").select().eq("id", id);
    if (data) {
        return NextResponse.json({ data: data[0] }, { status: 200 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id');

        const supabase = createClient();


        const { status } = await supabase.from("notes").delete().match({ id: parseInt(id as string) });
        console.log('Delete', { status });
        return NextResponse.json({ data: true }, { status: 200 });
    } catch (error) {
        console.log('Delete', { error })
    }
}