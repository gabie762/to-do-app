import { useState } from "react";

export function Tarefas(){
    const [tarefas, setTarefas] = useState(
        [
            {
                id: 1,
                tarefa: "Passerar",
                completa: true
            },
            {
                id: 2,
                tarefa: "Estudar",
                completa: false
            },
        ]
    );

}