import React from "react";
import ActionButton from "./ActionButton";
import {
    useFilters,
    useTable,
    useSortBy,
    useGlobalFilter,
    useAsyncDebounce,
} from "react-table";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Table = (Props) => {
    const { inputSearch, setInputSearch } = React.useState("");
    const data = React.useMemo(
        () => [
            {
                id: 1,
                name: "Paracetamol",
                category: "Safe",
            },
            {
                id: 2,
                name: "Paracetamol",
                category: "Safe",
            },
        ],
        []
    );

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
        // console.log(Props.inputSearch) 
        setGlobalFilter(Props.inputSearch || undefined);
    });

    const tableInstance = useTable(
        { columns, data },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        useSortBy
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = tableInstance;

    return (
        // apply the table props
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
                    rows.map((row) => {
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
    );
};

export default Table;
