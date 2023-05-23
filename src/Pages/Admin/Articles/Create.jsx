import React, { useState } from "react";

//Tiny mce
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

//html parse
// import parse from 'html-react-parser';

//style
import "../../../contents/css/admin_style.css";

const Create = () => {
  const editorRef = useRef(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [short_desc, setShort_desc] = "";

  const Description = (content) => {
    setDesc(content);
  };

  const Title = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const Slug = (e) => {};

  const SavePost = () => {
    if (!title) {
      alert("Title can not empty");
    } else if (!slug) {
      alert("Slug can not empty");
    } else if (!short_desc) {
      alert("Short Description can not empty");
    } else if (!desc) {
      alert("Description can not empty");
    }
  };

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
                <input
                  onChange={Title}
                  className="form-control"
                  type="text"
                  name="title"
                  id=""
                  value={title}
                />
              </div>

              <div className="create_post_slug">
                <label htmlFor="">Slug</label>
                <input
                  onChange={Slug}
                  className="form-control"
                  type="text"
                  name="title"
                  id=""
                  value={slug}
                />
              </div>

              <div className="create_post_shortdesc">
                <label htmlFor="">Short Description</label>
                <input
                  onChange={Title}
                  className="form-control"
                  type="text"
                  name="title"
                  id=""
                  value={title}
                />
              </div>

              <div className="create_post_desc">
                <label htmlFor="content">Content Description</label>
                <Editor
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                      "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                      "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern",
                    ],

                    toolbar1:
                      "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
                    toolbar2:
                      "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
                    toolbar3:
                      "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",

                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                  onEditorChange={Description}
                />

                <button className="save_post" onClick={() => SavePost()}>
                  Create Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;
