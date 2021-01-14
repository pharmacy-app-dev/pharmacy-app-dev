import ActionButton from "./ActionButton";

let Data = [];
for (let i = 1; i <= 100; i++) {
    Data.push({
        id: i,
        name: "Paracetamol " + i,
        category: "Safe",
    });
}

const Column = [
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
];

export { Data,Column };
