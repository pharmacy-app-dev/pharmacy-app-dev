import { BiSearch } from "react-icons/bi";

const Search = (Props) => {
    return (
        <div className="relative flex w-full items-center">
            <input
                value={Props.inputSearch}
                onChange={(e) =>Props.setInputSearch(e.target.value)}
                type="search"
                className="bg-purple-white shadow rounded border-0 p-3 w-full"
                placeholder="Search by name..."
            />
            <BiSearch className="absolute right-0 mr-3 text-purple-lighter" />
        </div>
    );
};

export default Search;