  import React from "react";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z" />
  </svg>
);

interface Props {
  quantity: number;
}

const ActionBar: React.FC<Props> = ({ quantity }) => {
  return (
    <div className="w-full flex justify-between px-2 py-1 rounded border border-slate-300 bg-slate-100">
      <div className="flex justify-start space-x-2">
        <div className="text-red-400 text-lg">
          <MinusIcon />
        </div>
        <MinusIcon />
      </div>
      <div>
        <p>{quantity}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <PlusIcon />
        <PlusIcon />
      </div>
    </div>
  );
};

export default ActionBar;
