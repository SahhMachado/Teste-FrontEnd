import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

type MoreInfoProps = {
    conteudo: React.ReactNode;
};

function MoreInfo({ conteudo }: MoreInfoProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className="mb-[10%] flex justify-center flex-wrap">
                {/* Título + botão */}
                <button 
                    className="flex flex-col items-center"
                    onClick={() => setOpen(!open)}
                >
                    <p className="text-[#0587FF]">Informações Adicionais</p>
                    <FaChevronDown 
                        className={`text-[#0587FF] transition-transform ${open ? "rotate-180" : ""}`} 
                    />
                </button>

                {/* Conteúdo toggle */}
                {open && (
                    <div className="mt-3 w-full flex justify-center">
                        {conteudo}
                    </div>
                )}
            </div>
    );
}

export default MoreInfo;