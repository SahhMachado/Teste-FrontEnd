import { useState } from "react"
import { useStore } from "../store/useStore"
import { FaChevronDown } from "react-icons/fa6"

type FilterItem = {
  label: string
  value: string
}

type FilterDropdownProps = {
  title: string
  filterType: "type" | "language"
  items: FilterItem[]
}

export function FilterDropdown({
    title,
    filterType,
    items,
  }: FilterDropdownProps) {
    const [open, setOpen] = useState(false);

  const {
    type,
    language,
    toggleRepoType,
    toggleLanguage,
  } = useStore();
  
  const selected = filterType === "type" ? type : language;
  const toggle =  filterType === "type" ? toggleRepoType : toggleLanguage;

  return (
    <div className="relative inline-block z-10 lg:mt-0 md:mt-0 mt-[10%]">
      <button
        onClick={() => setOpen(!open)}
        className="relative inline-flex items-center rounded-full 
                    bg-linear-to-r from-[#0056A6] to-[#0587FF]
                    px-[16%] py-[4%] pl-10 text-white lg:mr-[2vw] md:mr-[3.5vw]
                    mr-[8vw] ml-[8%]"
      >
        <FaChevronDown
          className={`absolute lg:w-[0.7vw] md:w-[1.8vw] w-[3vw] left-4 transition-transform ${
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
                checked={selected.includes(item.value as any)}
                onChange={() => toggle(item.value as any)}
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