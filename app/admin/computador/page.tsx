import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListComputador() {
    async function deleteComputador(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from computador where id=${id}`
        revalidatePath("/admin/computador")
    }
    const { rows } = await sql`SELECT * from computador`;
    return (
        <div>
            <h1 className="text-center">Lista de Computadores</h1>

            <table>
                <thead>
                    <tr> <td>COMPUTADOR</td> </tr>
                </thead>
                <tbody>
                    {
                        rows.map((computador) => {
                            return (
                                <tr key={computador.id}><td>{computador.marca}</td> <td>{computador.modelo}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={computador.id}/>   
                                    <button variant = "destructive" formAction={deleteComputador}> Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}