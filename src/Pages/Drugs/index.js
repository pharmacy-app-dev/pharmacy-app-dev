import React from "react";
import Table from './Table';
import Search from './Search';

const Drugs = () => {
    const [inputSearch,setInputSearch] = React.useState('');  
    return (                                                                                                                                                                                                                                                                                                                                
        <>
            <div className="w-52 mb-3">
                <Search setInputSearch={setInputSearch} inputSearch={inputSearch}/>
            </div>
            <Table inputSearch={inputSearch} className="h-4 text-dark" />
        </>
    );
};
export default Drugs;
