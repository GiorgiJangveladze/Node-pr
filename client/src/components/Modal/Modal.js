import React, { Fragment } from 'react';

import "./Modal.css";
import closeIcon from '../../assets/icons/closeIcon.png';

const Modal = props => {
    
    const calkCenteredPosition = () => {
        let width = props.width || '500px';
        let top = props.top ?  props.top : "";
        let display = props.show ? "block" : "none";
        // return {width: width + "px", marginLeft: "-" + (width / 2) + "px", display: display, top: top };
        return {width: width, display: display, top: top };
    }
    

    return (<Fragment>
                {
                    props.show ?
                    <div className={"custom-modal-overlay"} onClick={props.onHide.bind(this)}> </div> : null 
                }
                <div className={"custom-modal-wrapper"}
                     style={calkCenteredPosition()}
                >   
                    <div className={"custom-modal-header"}>
                        {
                            props.title ?
                                <div className="custom-modal-header-title"> {props.title} </div> 
                            : null
                        }
                        {
                            !props.hideClose ? 
                                <img src={ closeIcon } className={ 'custom-modal-close' } onClick={props.onHide.bind(this)} alt="close" />
                            : null
                        }
                    </div>
                    <div className={"custom-modal-body"}>
                        {props.children}
                    </div>
                </div>
            </Fragment>
        );
}

export default Modal;