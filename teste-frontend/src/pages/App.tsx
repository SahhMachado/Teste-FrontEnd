import Header from "../components/Header"
import Profile from "../components/Profile"
import RepositoryExplorer from "../components/RepositoryExplorer"

function App() {

  return (
    <div>
      <Header />
      <div className="flex mt-20">
          <Profile/>
          <RepositoryExplorer />
      </div>
    </div>
  )
}

export default App