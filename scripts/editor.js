// function CkEditorRefresh(id){
//     CKEDITOR.replace(id);
// }

function TinyMCERefresh() {
    tinymce.init({
        selector: 'div.editable',
        inline: true,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'insertdatetime media table contextmenu paste'
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image'
    });
}