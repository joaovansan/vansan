import { sql } from "@vercel/postgres";

export const revalidate =0

export default async function Listcomputador() {
    const { rows } = await sql`SELECT * from computador`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Computadores</h1>

            <table>
                <thead>
                    <tr> <td>Nome do computador </td> <td>Descrição</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((computador) => {
                            return (
                                <tr key={computador.id}><td>{computador.marca}</td> <td>{computador.modelo}</td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}