import React, { useState } from 'react'

export default function Createblog(props) {

    const handleOnChangetitle = (event) => {
        console.log("On Change");
        setTitle_text(event.target.value);
        
    }
    const handleOnChangecontent = (event) => {
        console.log("On Change");
        setContent_text(event.target.value);
    }
    const handlecontentsubmit = (event) =>{
        event.preventDefault()
        let check_title = 1;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            console.log(key);
            if(key ===  (title_text)){
                console.log("hello bhai");
                props.showAlert("TITLE  ALREADY  EXIST", "warning");
                check_title = 2;
            }
        }
        if(check_title === 1){
        localStorage.setItem((title_text),(content_text).replace(/\n/g, '\\n'));
        props.showAlert("BLOG PUBLISHED", "success")
        setTitle_text("");
        setContent_text("");
        }
            
        
    }
    const [title_text, setTitle_text] = useState('');
    const [content_text, setContent_text] = useState('');
    return (
        <div className='createblog'>
            <section>
                <h2>Create Post</h2>
                <form id="create-post-form">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" onChange={handleOnChangetitle} value={title_text} placeholder='ENTER TITLE' required /><br />
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" name="content" rows="10" onChange={handleOnChangecontent}  value={content_text} placeholder='ENTER CONTENT'  required></textarea><br />
                    <button disabled={content_text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handlecontentsubmit}>CREATE</button>
                </form>
            </section>
        </div>
    )
}
