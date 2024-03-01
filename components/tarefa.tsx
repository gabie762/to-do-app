import ITarefas from "./interface";

interface Props {
  tarefa: ITarefas;
  statusTarefa(arg: number): void;
}

export const Tarefa = ({ tarefa, statusTarefa }: Props) => {
  return (
    <li className="flex flex-wrap gap-1 items-center border p-1">
      <input
        id={tarefa.id.toString()}
        type="checkbox"
        className="static relative border-terracota w-4 h-4 rounded checked:accent-terracota peer active:accent-terracota"
        //checked={tarefa.completa}
        onClick={() => statusTarefa(tarefa.id)}
      />
      <label
        htmlFor={tarefa.id.toString()}
        className="cursor-pointer text-gray peer-checked:line-through peer-checked:text-terracota peer-checked:text-opacity-50"
      >
        {tarefa.tarefa}
      </label>
    </li>
  );
};
