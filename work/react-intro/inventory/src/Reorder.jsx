import './Reorder.css';

function Reorder({onReorder}) {
    return (
        <>
            <button className={'button'} type="button" onClick={onReorder}>Reorder</button>
        </>
    );
}

export default Reorder;