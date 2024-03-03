"use client";

interface Props {
  cleanAll(arg: number | boolean): void;
  typeBool: boolean;
}

const CleanAllBtn = ({ cleanAll, typeBool }: Props) => {
  return (
    <div>
      <button
        type="submit"
        className="border p-1 rounded dark:text-white"
        onClick={() => cleanAll(typeBool)}
      >
        Limpar completas
      </button>
    </div>
  );
};

export default CleanAllBtn;
