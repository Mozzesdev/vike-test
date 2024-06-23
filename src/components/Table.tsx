import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TableRow from "./TableRow";
import { ColumnTable } from "../interfaces/tables";
import { classNames } from "../../utils/classNames";
import noDataImg from "../../renderer/assets/no-data.svg";

const Table = ({
  columns = [],
  data = [],
  pagination,
  setterPage = () => {},
  currentPage,
  loading = true,
  editRow = () => {},
  deleteRow = () => {},
}: TableInterface) => {
  const handlePageChange = (pageNumber: any) => {
    if (pageNumber !== currentPage) {
      setterPage(pageNumber);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage && currentPage > 1) {
      setterPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage && currentPage < (pagination?.allPages ?? 0)) {
      setterPage(currentPage + 1);
    }
  };

  const getPagesToShow = () => {
    const totalPages = pagination?.allPages ?? 0;
    const maxPagesToShow = 5;
    let startPage = Math.max(
      1,
      currentPage ?? 0 - Math.floor(maxPagesToShow / 2)
    );
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  return (
    <>
      <div className="overflow-auto rounded-lg">
        <table className="w-full">
          <thead className="text-sm bg-neutral-700 relative max-xl:text-xs">
            <tr>
              {columns.map(
                (col) =>
                  col.show && (
                    <th
                      key={col.name}
                      className="px-4 py-3 text-center text-neutral-200 font-inter-medium text-nowrap"
                    >
                      {col.name}
                    </th>
                  )
              )}
              <th className="px-4 py-3 text-center text-neutral-200 font-inter-medium right-0 sticky bg-neutral-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-neutral-800">
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow
                  key={row.id}
                  editRow={() => editRow(row)}
                  deleteRow={() => deleteRow({ id: row.id, open: true })}
                  rowData={columns
                    .filter((col) => col.show)
                    .map((col) =>
                      col.index
                        ? index + 1
                        : col.isDate
                        ? new Date(row[col.value[0]]).toLocaleDateString()
                        : row[col.value[0]]
                    )}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-4 text-neutral-400 table-row-empty"
                >
                  <div className="min-h-[600px] grid place-items-center">
                    {loading ? (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="text-xl font-inter-bold tracking-wider uppercase pl-4">
                          Loading...
                        </span>
                      </div>
                    ) : (
                      <div>
                        <img src={noDataImg} alt="" className="max-w-32" />
                        <span>No data available</span>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <nav
          aria-label="Page navigation example"
          className="w-full flex justify-center mt-6"
        >
          <ul className="flex items-center -space-x-px h-10 text-base rounded-lg overflow-hidden text-neutral-300 border border-solid border-neutral-600">
            <li
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight cursor-pointer bg-neutral-900 hover:bg-neutral-800"
              onClick={handlePreviousPage}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-4 h-4" />
            </li>
            {pages.map((page) => (
              <li
                className={classNames(
                  page === currentPage ? "bg-neutral-800" : "bg-neutral-900",
                  "flex cursor-pointer items-center justify-center px-5 h-10 leading-tight hover:bg-neutral-900"
                )}
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </li>
            ))}
            <li
              className="flex items-center justify-center px-4 h-10 leading-tight rounded-e-lg cursor-pointer bg-neutral-900 hover:bg-neutral-800"
              onClick={handleNextPage}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-4 h-4" />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Table;

export interface TableInterface {
  columns?: ColumnTable[];
  children?: React.ReactNode;
  pagination?: Pagination;
  currentPage?: number;
  data?: any[];
  setterPage?: (value: number) => void;
  loading?: boolean;
  editRow?: (row: any) => void;
  deleteRow?: (row: any) => void;
}

export interface Pagination {
  total: number;
  perPage: number;
  allPages: number;
  page: number;
}
