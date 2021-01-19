import {Link} from 'react-router-dom'
// use for action button in Table.js
const ActionButton = ({id}) => {
    const buttonStyle = "mr-1";
    return (
        <>
            <button className={buttonStyle} onClick={() => alert(`detail/${id}`)}>
                Detail
            </button>
            <Link to={`/drugs/edit/${id}`} className={buttonStyle} >
                Edit
            </Link>
            <button className={buttonStyle} onClick={() => alert(`delete/${id}`)}>
                Delete
            </button>
        </>
    );
};

export default ActionButton;