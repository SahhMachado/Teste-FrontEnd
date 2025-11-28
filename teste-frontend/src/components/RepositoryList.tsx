import RepositoryItem, { type RepositoryItemProps } from "./RepositoryItem"

type RepositoryListProps = {
  repoItems: RepositoryItemProps[]
}

function RepositoryList({ repoItems }: RepositoryListProps) {
  return (
    <div className="w-full max-h-150 overflow-y-auto scroll-hidden">
      {repoItems.map((item) => (
        <RepositoryItem
          key={item.fullName}
          fullName={item.fullName}
          description={item.description}
          starred={item.starred}
          branches={item.branches}
        />
      ))}
    </div>
  )
}

export default RepositoryList
