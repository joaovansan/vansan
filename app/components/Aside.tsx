export default function Aside() {
    return (
        <>

            <div className="w-1/4 border-r">
                <div>
                    <h2>Dashboard</h2>
                    <a href="/admin">
                        <Button variant="ghost">
                            <HomeIcon className="h-4 mr-2" />
                            Home
                        </Button>
                    </a>
                    <br />

                    <a href="/admin/course">
                        <Button variant="ghost">
                            <Bars4Icon className="h-4 mr-2" />
                            Listar Curso
                        </Button>
                    </a>
                    <br />
                    <a href="/admin/course/new">
                        <Button variant="ghost">
                            <NewspaperIcon className="h-4 mr-2" />
                            Cadastrar Curso
                        </Button>
                    </a>
                </div>
            


            <div>
                <h2>Configurações</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <HomeIcon className="h-4 mr-2" />
                        Home
                    </Button>
                </a>
                <br />

                <a href="/admin/course">
                    <Button variant="ghost">
                        <Bars4Icon className="h-4 mr-2" />
                        Listar Curso
                    </Button>
                </a>
                <br />
                <a href="/admin/course/new">
                    <Button variant="ghost">
                        <NewspaperIcon className="h-4 mr-2" />
                        Cadastrar Curso
                    </Button>
                </a>
            </div>
        </div>
        </>




    )
}