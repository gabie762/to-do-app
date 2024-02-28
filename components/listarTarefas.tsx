"use client";

type ListaDeTarefas = {
  tarefas: {
    id: number;
    tarefa: string;
    completa: boolean;
  }[]
}

export function ListarTarefas({tarefas}:ListaDeTarefas) {
  return (
    <div className="static flex bg-black min-h-[21rem] overflow-y-auto text-white">
      <ul>

      </ul>
    </div>
  );
}

export default ListarTarefas;
