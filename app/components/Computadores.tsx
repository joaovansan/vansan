import { sql } from "@vercel/postgres";
export default async function Computadores() {
    // const courses = [
    //     { title: "Curso de HTML", url: "/img/html.svg", description: "O curso é realizado por..." },
    //     { title: "Curso de CSS", url: "/img/css.svg", description: "O curso CSS é realizado por..." },
    //     { title: "Curso de JS", url: "/img/js.svg", description: "O curso JSS é realizado por..." }
    // ]
    const { rows } = await sql`SELECT * from computador`;
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
	@@ -14,9 +14,9 @@ export default function Computadores() {
                </h2>
            </div>
            {
                rows.map((computador) => {
                    return (
                        <div key={computador.id} className="bg-[#4d4d4d] rounded-md pb-2">
                            <a href="/curso_html.html">
                                <img className="hover:scale-105" src={computador.url} alt="" />
                                <div className="text-white text-center"></div>