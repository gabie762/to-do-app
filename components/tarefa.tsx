import ITarefas from "./interface";
import RemoveTarefa from "./removeTarefa";

interface Props {
  tarefa: ITarefas;
  statusTarefa(arg: number): void;
  removeTarefa(arg: number | boolean): void;
}

export const Tarefa = ({ tarefa, statusTarefa, removeTarefa }: Props) => {
  return (
    <li className="flex flex-wrap gap-1 items-center border p-1 justify-between">
      <div className="flex flex-wrap gap-1.5 items-center">
        <input
          id={tarefa.id.toString()}
          type="checkbox"
          className="static relative border-terracota w-4 h-4 rounded checked:accent-terracota peer active:accent-terracota"
          checked={tarefa.completa}
          onClick={() => statusTarefa(tarefa.id)}
        />
        <label
          htmlFor={tarefa.id.toString()}
          className="cursor-pointer text-gray peer-checked:line-through peer-checked:text-terracota peer-checked:text-opacity-50"
        >
          {tarefa.tarefa}
        </label>
      </div>
      <RemoveTarefa remover={removeTarefa} tarefa={tarefa} />
    </li>
  );
};
