/*"use client";

import { useState } from "react";
import ITarefas from "./interface";
import ListarTarefas from "./listarTarefas";

export const CriarTarefa = () => {
  let i = 2;
  const[novaTarefa, setNovaTarefa] = useState("");
  const[tarefas, setTarefas] = useState<ITarefas[]>(
    [
        {
            id: 1,
            tarefa: "Passerar",
            completa: true
        },
        {
            id: 2,
            tarefa: "Estudar",
            completa: false
        }
    ]);

  const addTarefa = (tarefa: string) => {
    setTarefas([{id: i++, tarefa: tarefa, completa: false}, ...tarefas]);
    
  }

  const submitNovaTarefa = (e: { preventDefault: () => void; })=>{
      if(novaTarefa){
      e.preventDefault();
      addTarefa(novaTarefa);
      setNovaTarefa("");
      <ListarTarefas lista={tarefas}/>
    }
  };

  return (
    <div className="relative content-center {/*bg-rose*}">
      <form onSubmit={submitNovaTarefa} className="relative flex space-x-1.5 justify-center">
        <input
          type="text"
          placeholder="Sou uma tarefa :)"
          className="relative h-10  border text-black rounded"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit" className="p-1 rounded bg-black text-white">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default CriarTarefa;*/