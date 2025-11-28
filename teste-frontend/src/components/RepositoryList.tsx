import RepositoryItem, { type RepositoryItemProps } from "./RepositoryItem"

const mockItems : RepositoryItemProps[] = [
    {
        title: "Node",
        subtitle: "Release",
        description: "Node.js Release Working Group.",
        starred: 1559,
        branches: 142
    },   
    {
        title: "Cordeiro",
        subtitle: "Angular Choosen",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis vel etiam tellus velit pellentesque scelerisque ut risus.",
        starred: 726,
        branches: 91
    },
    {
        title: "Teste",
        subtitle: "App Release 1.03",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis vel etiam tellus velit pellentesque scelerisque ut risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisis vel etiam tellus velit pellentesque ",
        starred: 9327,
        branches: 562
    },
]


function RepositoryList() {
    return(
         <div className="w-full h-180 overflow-auto">       
            {
                mockItems.map((item) => { 
                    return(
                        <RepositoryItem title={item.title} 
                                        subtitle={item.subtitle} 
                                        description={item.description} 
                                        starred={item.starred} 
                                        branches={item.branches}/>
                    )
                }) 
            }
         </div>
    )
}

export default RepositoryList
