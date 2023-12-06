import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewComputador() {
    async function saveComputador(formData: FormData){
        "use server"
        const marca = formData.get("marca") as string;
        const modelo = formData.get("modelo") as string;
        await sql`INSERT INTO computador (marca), modelo) VALUES(${marca}, ${modelo},)`
        console.log("Acessou a função")
    }
    
                
                <button formAction={saveComputador} className="text-white">Salvar</button>
}