/** @type {import('tailwindcss').Config} */
import HandlerTarefas from "@/components/handlerTarefas";
import MudarTema from "@/components/mudarTema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 dark:bg-black">
      <div>
        <div className="flex justify-between">
          <div className="flex flex-nowrap space-x-1">
            <ToastContainer />
            <h1 className="text-3xl text-black">PraFazê!</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#000"
              viewBox="0 0 256 256"
            >
              <path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
            </svg>
          </div>
          <MudarTema />
        </div>

        <div className="relative min-h-[28rem] w-96 border-2 border-black pt-2 rounded-xl font-patrick">
          <HandlerTarefas />
        </div>
      </div>
    </main>
  );
}
