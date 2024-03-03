"use client";

interface Props {
  status: string;
  filtroTarefas(arg: string): void;
}

const StatusTarefas = ({ status, filtroTarefas }: Props) => {
  return (
    <div className="relative w-fit space-x-1 flex items-center space-x-1.5 dark:text-white">
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="Todas"
          className="hidden peer"
          onClick={() => filtroTarefas("Todas")}
        ></input>
        <label htmlFor="Todas" className="peer-checked:font-bold">
          Todas
        </label>
      </div>
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="Fazer"
          className="hidden peer"
          onClick={() => filtroTarefas("Fazer")}
        ></input>
        <label htmlFor="Fazer" className="peer-checked:font-bold">
          A fazer
        </label>
      </div>
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="Feitas"
          className="hidden peer"
          onClick={() => filtroTarefas("Feitas")}
        ></input>
        <label htmlFor="Feitas" className="peer-checked:font-bold">
          Feitas
        </label>
      </div>
    </div>
  );
};

export default StatusTarefas;
