// use for action button in Table.js
const ActionButton = ({id}) => {
    const buttonStyle = "mr-1";
    return (
        <>
            <button className={buttonStyle} onClick={() => alert(`detail/${id}`)}>
                Detail
            </button>
            <button className={buttonStyle} onClick={() => alert(`edit/${id}`)}>
                Edit
            </button>
            <button className={buttonStyle} onClick={() => alert(`delete/${id}`)}>
                Delete
            </button>
        </>
    );
};

export default ActionButton;