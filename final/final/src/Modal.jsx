import "./Modal.css" 
import { useState } from 'react';
function Modal({showModal, setShowModal}) {
    const [email, setEmail]=useState('');
    const [error, setError]=useState('');
    const [error1, setError1]=useState('');
    const [val, setVal]=useState('');
    const [val1, setVal1]=useState('');
    function check( event ) {
        event.preventDefault();
        
        const x = event.target.value;
        setVal(x);
        const atpos=x.indexOf('@');

        if(!x) {
            setError("The field is required");
        }
        else if (atpos < 1){
            setError("The field should be a valid email address including a @");
        }
        
        else {
            setError("");
        }
    }
    function check1( event ) {
        event.preventDefault();
        
        const xy = event.target.value;
        setVal1(xy);
        if(!xy) {
            setError1("The field is required");
        }
        else if (val != xy){

            console.info(val);
            console.info(xy);
            console.info(val != xy)
            setError1("The field must match the provided email address");
        }
        
        else {
            setError1("");
        }
    }
    function submitCheck( event ) {
        let isInvalid = false;
        const atpos=val.indexOf('@');

        if(!val) {
            setError("The field is required");
            isInvalid = true;
        }
        
        else if (atpos < 1){
            setError("The field should be a valid email address including a @");
            isInvalid = true;
        }

        else if(val != val1) {
            setError1("The field must match the provided email address");
            isInvalid = true;
        }
        
        // prevent submit if not all fields are valid
        if(isInvalid) {
            event.preventDefault();
        }
        
    }
    
    const Modal = (
        <div id="myModal" className="modal">
        <div className="modal-content">
            <h2>Please Give Me Your E-mail!</h2>
            <form className="subscribe" action="/subscribe" method="post">

                <div className="subscribe-email">
                    <label htmlFor="email">E-mail: *reqiured</label>
                    <input className="subscribe-email-input" type="text" name="email" id="email"
                    onChange={check} onSubmit={submitCheck}/>
                    <span className="subscribe-email__error">{error}</span>
                </div>    

                <div className="subscribe-confirm">
                    <label htmlFor="confirm-email">Confirm E-mail: *reqiured</label>

                    <input className="subscribe-confirm-input" type="text" name="confirm-email" id="confirm-email"
                    onChange={check1} onSubmit={submitCheck}/>
                    <span className="subscribe-confirm__error">{error1}</span>
                </div>

                <div className="form-button"> 
                    <input className="subscribe-submit" type="submit" value="Submit"
                    onClick={submitCheck}/>
                    <button className="close" onClick={() => {
                    setShowModal(!showModal);}} aria-label="Close Modal">Cancel</button>
                </div>

            </form>



        </div>
        </div>                
    
    );
    return ( 
        <>
            {showModal && Modal}
        </>
            
        
    );
}

export default Modal;