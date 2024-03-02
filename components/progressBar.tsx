"use client";

interface Props {
  progresso: number;
}

const ProgressBar = ({ progresso }: Props) => {
  const porcentagem = 5;
  return (
    <div className="items-center justify-center px-[1.85rem]">
      <div className="w-[20rem] h-2 mt-1 bg-gray rounded-full overflow-hidden">
        <div
          className="h-full bg-terracota transition-all"
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
