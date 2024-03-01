"use client";

const StatusTarefas = () => {
  return (
    <div className="relative w-fit space-x-1 flex items-center space-x-1.5">
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="Todas"
          className="hidden peer"
          //onClick={() => filtrar todas}
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
          //onClick={() => filtrar as para fazer}
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
          //onClick={() => feitas}
        ></input>
        <label htmlFor="Feitas" className="peer-checked:font-bold">
          Feitas
        </label>
      </div>
    </div>
  );
};

export default StatusTarefas;
