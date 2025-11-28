import { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

type FilterItem = {
  label: string
  value: string
}

type FilterDropdownProps = {
  title: string
  items: FilterItem[]
}

export function FilterDropdown({ title, items }: FilterDropdownProps) {
  //Controla os estados aberto/fechado
  const [open, setOpen] = useState(false)
  //Controla se a opção está selecionada ou não
  const [selected, setSelected] = useState<string[]>([])

  //Marca ou desmarca o item da lista
  function toggleItem(value: string) {
    setSelected(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="relative inline-flex items-center rounded-full 
                   bg-[#0B67D1] px-4 py-2 pl-10 text-white 
                   hover:bg-[#095bb8] transition ml-5"
      >
        <FaAngleDown
          size={18}
          className={`absolute left-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
        <span className="whitespace-nowrap">{title}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-56 rounded-xl 
                        bg-white shadow-lg p-3 space-y-2 z-50">
          {items.map(item => (
            <label
              key={item.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(item.value)}
                onChange={() => toggleItem(item.value)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span>{item.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}