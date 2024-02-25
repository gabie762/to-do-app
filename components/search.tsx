"use client";

export function Search() {
  return (
    <div className="relative content-center {/*bg-rose*/}">
      <form action="" className="relative flex space-x-1.5 justify-center">
        <input
          type="text"
          placeholder="Sou uma tarefa :)"
          className="relative h-10  border text-black rounded"
        />
        <button type="submit" className=" p-1 rounded bg-black text-white">
          Button!
        </button>
      </form>
    </div>
  );
}

export default Search;
