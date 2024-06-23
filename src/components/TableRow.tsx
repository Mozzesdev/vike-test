import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

const TableRow = ({ rowData, editRow, deleteRow }: any) => {
  return (
    <tr className="border-b border-neutral-700 border-solid last-of-type:border-b-0 text-sm max-xl:text-xs">
      {rowData.map((data: any, index: number) => (
        <td
          key={index}
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
        >
          {data}
        </td>
      ))}
      <td className="right-0 sticky bg-neutral-800">
        <div className="grid place-items-center w-full grid-cols-2 px-4">
          <button title="Edit location" onClick={editRow}>
            <PencilIcon className="text-blue-300 w-6 max-xl:w-5" />
          </button>
          <button title="Delete location" onClick={deleteRow}>
            <TrashIcon className="text-red-500 w-6 max-xl:w-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
