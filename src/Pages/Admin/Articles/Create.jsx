import React, { useState } from 'react'

//Tiny mce
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

//html parse
// import parse from 'html-react-parser';

//style
import '../../../contents/css/admin_style.css'


const Create = () => {



    const editorRef = useRef(null);
    const [desc, setDesc] = useState('');
    const [title, setTitle] = useState('');

    const SavePost = () => {

        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
            setDesc(editorRef.current.getContent());
        }


        if(!title){
            alert('Description Can not Empty');
        } else if(!desc){
            alert('Title Can not Empty')
        }
    };

    const Title = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    

    return (
        <React.Fragment>
            <div className="create_post">
                <div className="container">
                    <div className="create_post_container">
                        <div className="create_post_content ">
                            <div className="create_post_welcome">
                                <h2>Welcome Back Bro!</h2>
                            </div>

                            <div className="create_post_title">
                                <label htmlFor="">Title</label>
                                <input onChange={Title} className='form-control' type="text" name="title" id="" value={title} />
                            </div>

                            <div className="create_post_desc">
                                <label htmlFor="content">Content Body</label>
                                <Editor 
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>This is the initial content of the editor.</p>"
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        plugins: [

                                            "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                                            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                                            "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
                                        ],

                                        toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
                                        toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
                                        toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",


                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />

                                <button onClick={() => SavePost()} >Create Post</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>
    )
}

export default Create