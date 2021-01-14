import React from "react";
import Table from '../../Components/Table';
import Search from './Search';
import {Data,Column} from './Datasource';

const Drugs = () => {
    const [inputSearch,setInputSearch] = React.useState('');  
    return (                                                                                                                                                                                                                                                                                                                                
        <>
            <div className="w-52 mb-3">
                <Search setInputSearch={setInputSearch} inputSearch={inputSearch}/>
            </div>
            <Table data={Data} column={Column} inputSearch={inputSearch} className="h-4 text-dark" />
        </>
    );
};
export default Drugs;
