import ITarefas from "./interface";
import { Tarefa } from "./tarefa";

interface Props {
  status: string;
  tarefas: ITarefas[];
  handleStatusTarefa(arg: number): void;
  removeTarefa(arg: number | boolean): void;
}

export const ListarTarefas = ({
  status,
  tarefas,
  handleStatusTarefa,
  removeTarefa,
}: Props) => {
  if (status === "Todas") {
    return tarefas.map((tarefa) => (
      <Tarefa
        key={tarefa.id}
        tarefa={tarefa}
        statusTarefa={handleStatusTarefa}
        removeTarefa={removeTarefa}
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
          removeTarefa={removeTarefa}
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
          removeTarefa={removeTarefa}
        />
      ));
  }
};
