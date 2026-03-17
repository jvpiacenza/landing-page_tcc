
export default function Header() {
    return (
        <header className="bg-[#a1afc4]">
            <nav>

                <ul className="flex space-x-5 p-10 justify-center">

                    <li className="hover:underline">
                        <a href="/" >HOME</a>
                    </li>

                    <li className="hover:underline">
                        <a href="/" >CURSOS</a>
                    </li>

                    <li className="hover:underline">
                        <a href="/" >TESTE VOCACIONAL</a>
                    </li>

                    <li className="hover:underline">
                        <a href="/login" >LOGIN</a>
                    </li>

                    <li className="hover:underline">
                        <a href="/sobre" >SOBRE</a>
                    </li>

                    
            

                </ul>

            </nav>
        </header>
    )
}


