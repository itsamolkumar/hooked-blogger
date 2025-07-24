// src/pages/AddPost.jsx


import { Editor } from "@tinymce/tinymce-react";

export default function RTE({editorRef}) {
  return(
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-xl my-8 max-h-full h-full" >
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Content
          </label>
          <Editor
            apiKey="nfha0mwjx83nrogktzx1ep4g8esswyxqd63o8i2fufxoomug" // optional TinyMCE API key
            tinymceScriptSrc="https://cdn.tiny.cloud/1/nfha0mwjx83nrogktzx1ep4g8esswyxqd63o8i2fufxoomug/tinymce/6/tinymce.min.js"
            onInit={(_evt, editor) => (editorRef.current = editor)}
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap",
                "preview", "anchor", "searchreplace", "visualblocks", "code",
                "fullscreen", "insertdatetime", "media", "table", "wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

       
        
    
  );
}
