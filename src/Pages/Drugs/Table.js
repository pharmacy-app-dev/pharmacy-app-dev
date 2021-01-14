import React from "react";
import ActionButton from "./ActionButton";
import {
    useFilters,
    useTable,
    useSortBy,
    useGlobalFilter,
    usePagination,
} from "react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Datasource from "./Datasource";

const Table = (Props) => {
    const data = React.useMemo(() => Datasource, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id", // accessor is the "key" in the data
            },
            {
                Header: "Nama",
                accessor: "name",
            },
            {
                Header: "Kategori",
                accessor: "category",
            },
            {
                Header: "Aksi",
                Cell: (Props) => <ActionButton id={Props.row.values.id} />,
            },
        ],
        []
    );

    React.useEffect(() => {
        console.log(Props.inputSearch);
        setGlobalFilter(Props.inputSearch || undefined);
    }, [Props.inputSearch]);

    const tableInstance = useTable(
        { columns, data, initialState: { pageIndex: 0 } },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,

        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = tableInstance;

    return (
        <>
            <table {...getTableProps()} className="border-collapse w-full">
                <thead>
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                            className="p-3 font-bold uppercase bg-white text-gray-600 border border-gray-300 hidden lg:table-cell"
                                        >
                                            {
                                                // Render the header
                                                column.render("Header")
                                            }
                                            <span>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <TiArrowSortedDown className="inline-block" />
                                                    ) : (
                                                        <TiArrowSortedUp className="inline-block" />
                                                    )
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody {...getTableBodyProps()}>
                    {
                        // Loop over the table rows
                        page.map((row, i) => {
                            // Prepare the row for display
                            prepareRow(row);
                            return (
                                // Apply the row props
                                <tr
                                    {...row.getRowProps()}
                                    className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                                >
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            // Apply the cell props
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
                                                >
                                                    {
                                                        // Render the cell contents
                                                        cell.render("Cell")
                                                    }
                                                </td>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}

            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
                    <select
                        className="appearance-none mr-2 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                    <div>
                        <nav
                            className="relative z-0 inline-flex shadow-sm -space-x-px"
                            aria-label="Pagination"
                        >
                            <button
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>
                                <HiChevronLeft />
                                <HiChevronLeft />
                            </button>
                            <button
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Previous</span>

                                <HiChevronLeft />
                            </button>

                            <input
                                className="text-center w-16 relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                type="number"
                                value={pageIndex + 1}
                                // defaultValue={pageIndex + 1}
                                onChange={(e) => {
                                    const page = e.target.value
                                        ? Number(e.target.value) - 1
                                        : 0;
                                    gotoPage(page);
                                }}
                            />
                            <button
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                                className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <HiChevronRight />
                            </button>
                            <button
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            >
                                <span className="sr-only">Next</span>
                                <HiChevronRight />
                                <HiChevronRight />
                            </button>
                        </nav>
                        <div className="text-center relative inline-flex items-center px-4 py-2 bg-white text-sm font-medium text-gray-700">
                            Page {pageIndex + 1} of {pageOptions.length}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
