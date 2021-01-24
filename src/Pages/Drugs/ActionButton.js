import {useState} from 'react';
import SweetAlert from 'sweetalert2-react';
import {Link} from 'react-router-dom';
// use for action button in Table.js
const ActionButton = ({id}) => {
    const [modalShow,setModalShow] = useState(false)
    const buttonStyle = "mr-1";

    return (
        <>
            <Link to={`/drugs/detail/${id}`} className={buttonStyle} >
                Detail
            </Link>
            <button onClick={() => setModalShow(true)}>
                Delete
            </button>

            <SweetAlert
                show={modalShow}
                title= 'Are you sure?'
                text= "You won't be able to revert this!"
                icon= 'Warning'
                showCancelButton= {true}
                confirmButtonColor= '#dc3545'
                cancelButtonColor= '#d33'
                confirmButtonText= 'Yes'
                onConfirm={() => {
                    setModalShow(false)
                }}
            />
        </>
    );
};

export default ActionButton;