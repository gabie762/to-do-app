"use client";

import CleanAllBtn from "./limparCompletas";
import StatusTarefas from "./statusTarefa";

export function Footer() {
  return (
    <div className=" flex inset-x-0 bottom-0 h-12 p-1 items-center justify-center bg-white space-x-3.5">
      <div className="flex items-center">
        <h1>X itens restantes</h1>
      </div>
      <StatusTarefas />
      <CleanAllBtn />
    </div>
  );
}

export default Footer;
