"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import ITarefas from "./interface";
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

  const addTarefa = (tarefa: string) => {
    i++;
    setTarefas([{ id: i, tarefa: tarefa, completa: false }, ...tarefas]);
  };

  const notificacao = (mensagem: string) => {
    toast.success(mensagem, { autoClose: 2500, position: "top-center" });
  };

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

  const filtroTarefas = (filtro: string) => {
    const copiaTarefas = [...tarefas];
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
          className="p-1 rounded bg-terracota text-white"
        >
          Adicionar
        </button>
      </form>
      <p className="flex center bg-rose">PROGRESS BAR AQUI</p>
      <div className="to-do-list static flex-col p-3 space-y-3 h-[21rem] overflow-y-auto">
        {/*<ToDoList(tarefas)*/}
        {tarefas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            statusTarefa={handleStatusTarefa}
          />
        ))}
      </div>
    </div>
  );
};

export default HandlerTarefas;
