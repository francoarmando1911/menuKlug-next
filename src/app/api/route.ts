
/*EN ESTE ARCHIVO IRIAN LOS ENDPOINTS*/

import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ message: "Prueba desde la API!" });
}
