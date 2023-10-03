import React, { useState } from 'react';

export default function Blogs(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(props.titleprop);
    const [updatedContent, setUpdatedContent] = useState(props.contentprop);

    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        const delConfirm = window.confirm(`DO YOU WANT TO DELETE BLOG → ${updatedTitle}`);
        if (delConfirm) {
            localStorage.removeItem(props.titleprop);
            props.showAlert("BLOG DELETED", "success");
        }
    }
    
    const handleUpdateSubmit = (event) => {
        event.preventDefault();
            // Update localStorage with the edited values
            localStorage.removeItem(props.titleprop); // Remove the old key
            localStorage.setItem((updatedTitle),(updatedContent)); // Set the new key-value pair
            props.showAlert("BLOG UPDATED", "success");
            setIsEditing(false);
    }
    
   
    return (
        <div className='allblogs'>
            <div className="container mt-4">
                <div className="card my-5 py-5 px-5 ">
                    <div className="card-body">
                        {isEditing ? (
                            <div>
                                <input type="text" id="updatedTitle" name="updatedTitle" placeholder='ENTER UPDATED TITLE' value={(updatedTitle)} onChange={(e) => setUpdatedTitle(e.target.value)} required /><br />
                                <textarea id="updatedContent" name="updatedContent" rows="10" placeholder='ENTER UPDATED CONTENT' value={(updatedContent).replace(/\\n/g, '\n')} onChange={(e) => setUpdatedContent(e.target.value.replace(/\n/g, '\\n'))} required></textarea><br />
                                <button disabled={updatedTitle.length === 0 || updatedContent.length === 0} className="btn btn-success mx-1 my-1" onClick={handleUpdateSubmit}>SAVE</button>
                            </div>
                        ) : (
                            <div >
                                <h3 className="card-title text-center">{(updatedTitle)}</h3>
                                {/* <p className="card-text text-justify">{(updatedContent).replace(/\\n/g, '<br/>')}</p> */}
                                <p className="card-text text-justify" dangerouslySetInnerHTML={{ __html: updatedContent.replace(/\\n/g, '<br/>') }}></p>
                                <button disabled={updatedTitle.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleDeleteSubmit}>DELETE</button>
                                <button disabled={updatedTitle.length === 0} className="btn btn-warning mx-1 my-1" onClick={() => setIsEditing(true)}>UPDATE</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
