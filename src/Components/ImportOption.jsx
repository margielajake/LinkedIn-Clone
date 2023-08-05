import React from "react";

const ImportOption = ({ Icon, title, color }) => {
  return (
    <div className="flex hover:bg-slate-200 hover:rounded-[10px] p-3">
      <Icon style={{ color: color }} />
      <h4 className="font-semibold ml-2 text-gray-400">{title}</h4>
    </div>
  );
};

export default ImportOption;
