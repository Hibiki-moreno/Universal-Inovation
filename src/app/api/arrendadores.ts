// pages/api/arrendadores.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Cambia "arrendadores" por el nombre real de tu modelo en Prisma
    const arrendadores = await prisma.arrendadores.findMany(); 
    res.status(200).json(arrendadores); // Enviar los datos como respuesta JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' }); // Manejo de errores
  }
}
