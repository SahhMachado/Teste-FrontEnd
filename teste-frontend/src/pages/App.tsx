import Header from "../components/Header"
import Profile from "../components/Profile"
import RepositoryExplorer from "../components/RepositoryExplorer"

function App() {

  return (
    <div className="w-screen">
      <div className="hidden lg:block md:block">
        <Header />
      </div>
      <div className="flex mt-[3%] lg:flex-nowrap flex-wrap">
        <Profile />
        <RepositoryExplorer />
      </div>
    </div>
  )
}

export default App