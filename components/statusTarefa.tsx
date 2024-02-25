"use client";

export function StatusTarefas() {
  return (
    <div className="relative w-fit space-x-1 flex items-center space-x-1.5">
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="todas"
          className="hidden peer"
        ></input>
        <label htmlFor="todas" className="peer-checked:font-bold">
          Todas
        </label>
      </div>
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="fazer"
          className="hidden peer"
        ></input>
        <label htmlFor="fazer" className="peer-checked:font-bold">
          A fazer
        </label>
      </div>
      <div className="relative">
        <input
          type="radio"
          name="estado"
          id="feitas"
          className="hidden peer"
        ></input>
        <label htmlFor="feitas" className="peer-checked:font-bold">
          Feitas
        </label>
      </div>
    </div>
  );
}

export default StatusTarefas;
