import './style.css';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export function AddPostDialog() {
    let active = false;
    return (
        <>
            {active && <div className=" modal-container" >
                <div className="modal">
                    <button className="closeModal"
                    ><Fa icon={faTimes} /></button
                    >
                    <div className="modal-content">
                        <h3>Add omoshiroi post</h3>
                        {/* <Avatar />
                <TextareaPost bind:value={text} />
                <InputImage bind:imageIsSelected bind:imageSelectedFile />
                <ButtonDialog {handleSend} {closeAddDialog} /> */}
                    </div>
                </div>
            </div> }
        </>

    );
}