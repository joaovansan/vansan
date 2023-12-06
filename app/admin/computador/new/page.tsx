import UploadButton from "@/app/components/UploadButton";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate = 0

export default function NewComputador({
  searchParams,
}: {
  searchParams?: {
    url?: string;
  };
}) {

  const urlImage = searchParams?.url || '';

  async function saveComputador(formData: FormData) {
    "use server"
    const marca = formData.get("title") as string;
    const modelo = formData.get("description") as string;
    await sql`INSERT INTO computador (marca, modelo) VALUES( ${marca}, ${modelo})`
    console.log("Acessou a função")
  }
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="Digite o Título do Curso" /><br /><br />
        <input type="text" name="description" placeholder="Digite a Descriçao do curso" /> <br /><br />
        <br />
        <UploadButton /> <br />
        <button formAction={saveComputador} className="text-black">Salvar</button>
      </form>
    </div>

  )
}