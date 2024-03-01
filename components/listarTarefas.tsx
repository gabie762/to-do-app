import ITarefas from "./interface";
import { Tarefa } from "./tarefa";

interface Props {
  status: string;
  tarefas: ITarefas[];
  handleStatusTarefa(arg: number): void;
}

export const ListarTarefas = ({
  status,
  tarefas,
  handleStatusTarefa,
}: Props) => {
  if (status === "Todas") {
    return tarefas.map((tarefa) => (
      <Tarefa
        key={tarefa.id}
        tarefa={tarefa}
        statusTarefa={handleStatusTarefa}
      />
    ));
  } else if (status === "Fazer") {
    return tarefas
      .filter((tarefa) => !tarefa.completa)
      .map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          statusTarefa={handleStatusTarefa}
        />
      ));
  } else {
    return tarefas
      .filter((tarefa) => tarefa.completa)
      .map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          statusTarefa={handleStatusTarefa}
        />
      ));
  }
};
