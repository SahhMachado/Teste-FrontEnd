import Header from "../components/Header"
import Profile, { type Links } from "../components/Profile"
import Icon1 from "../assets/icon1.svg"
import Icon2 from "../assets/icon2.svg"
import Icon3 from "../assets/icon3.svg"
import Icon4 from "../assets/icon4.svg"
import RepositoryExplorer from "../components/RepositoryExplorer"

const mockLinks : Links[] = [
    {
        nome: "Link",
        href: "#",
        icon: Icon1
    },
     {
        nome: "Link",
        href: "#",
        icon: Icon2
    },
     {
        nome: "Link",
        href: "#",
        icon: Icon3
    },
     {
        nome: "Link",
        href: "#",
        icon: Icon4
    }
]

function App() {
    return (
        <div>
            <Header />
            <div className="flex mt-20">
                <Profile nome="Nome Teste" bio="Teste FrontEnd" links={mockLinks} />
                <RepositoryExplorer />
            </div>
        </div>
    )
}

export default App