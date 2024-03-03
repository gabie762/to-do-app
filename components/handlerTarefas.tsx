"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import ITarefas from "./interface";
import CleanAllBtn from "./limparCompletas";
import { ListarTarefas } from "./listarTarefas";
import ProgressBar from "./progressBar";
import StatusTarefas from "./statusTarefa";
import { Tarefa } from "./tarefa";
let i = 2;

export const HandlerTarefas = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("Todas");
  const [tarefas, setTarefas] = useState<ITarefas[]>([
    {
      id: 1,
      tarefa: "Passear com o doguinho",
      completa: false,
    },
    {
      id: 2,
      tarefa: "Dominar o mundo",
      completa: false,
    },
  ]);

  const tarefasRestantes = tarefas.filter((tarefa) => !tarefa.completa).length;

  const addTarefa = (tarefa: string) => {
    i++;
    setTarefas([{ id: i, tarefa: tarefa, completa: false }, ...tarefas]);
  };

  const notificacao = (mensagem: string) => {
    toast.success(mensagem, {
      autoClose: 1225,
      position: "top-center",
      closeOnClick: true,
      hideProgressBar: true,
    });
  };

  const progressoPorcentagem =
    tarefas.length &&
    (100 * tarefas.filter((tarefa) => tarefa.completa).length) / tarefas.length;

  const submitNovaTarefa = (e: { preventDefault: () => void }) => {
    if (novaTarefa) {
      e.preventDefault();
      addTarefa(novaTarefa);
      notificacao("Tarefa adicionada!");
      setNovaTarefa("");
    } else {
      e.preventDefault();
    }
  };

  const filtrarTarefas = (filtro: string) => {
    const copiaTarefas = [...tarefas];
    setFiltroStatus(filtro);
    if (filtro === "Todas") {
      {
        copiaTarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            statusTarefa={handleStatusTarefa}
            removeTarefa={removeTarefa}
          />
        ));
      }
    } else if (filtro === "Fazer") {
      copiaTarefas
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
      copiaTarefas
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

  const handleStatusTarefa = (id: number) => {
    const copiaTarefas = [...tarefas];
    copiaTarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
        if (tarefa.completa) {
          notificacao("Tarefa concluida!");
        }
      }
    });
    setTarefas(copiaTarefas);
  };

  const removeTarefa = (identificador: number | boolean) => {
    if (typeof identificador == "boolean") {
      if (tarefas.filter((tarefa) => tarefa.completa).length === 0) {
        return;
      }
      const copiaTarefas = tarefas.filter((tarefa) =>
        tarefa.completa ? null : tarefa
      );
      setTarefas(copiaTarefas);
      notificacao("Tarefas completas apagadas!");
    } else {
      const copiaTarefas = tarefas.filter((tarefa) =>
        tarefa.id !== identificador ? tarefa : null
      );
      setTarefas(copiaTarefas);
      notificacao("Tarefa apagada!");
    }
  };

  return (
    <div className="relative content-center {/*bg-rose*/}">
      <form
        onSubmit={(e) => {
          submitNovaTarefa(e);
        }}
        className="relative flex space-x-2 justify-center"
      >
        <input
          type="text"
          placeholder="Sou uma tarefa :)"
          className="relative h-10 w-[15rem] p-2 border rounded"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => submitNovaTarefa(e)}
          className="p-2 rounded bg-terracota text-white"
        >
          Adicionar
        </button>
      </form>
      <ProgressBar progresso={progressoPorcentagem} />
      <div className="to-do-list static flex-col p-3 space-y-3 h-[21rem] overflow-y-auto">
        <ListarTarefas
          status={filtroStatus}
          tarefas={tarefas}
          handleStatusTarefa={handleStatusTarefa}
          removeTarefa={removeTarefa}
        />
      </div>
      <div className="flex border-t-2 border-t-black border-opacity-50 text-black text-opacity-70 inset-x-0 bottom-0 h-12 p-1 items-center justify-center space-x-3">
        <div className="flex items-center">
          <h1>{tarefasRestantes} itens restantes</h1>
        </div>
        <StatusTarefas status={filtroStatus} filtroTarefas={filtrarTarefas} />
        <CleanAllBtn cleanAll={removeTarefa} typeBool={true} />
      </div>
    </div>
  );
};

export default HandlerTarefas;
