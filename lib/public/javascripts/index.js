$(function(){
  var opts = {
    container: 'epiceditor',
    textarea: null,
    basePath: 'epiceditor',
    clientSideStorage: true,
    localStorageName: 'epiceditor',
    useNativeFullsreen: true,
    parser: marked,
    file: {
      name: 'epiceditor',
      defaultContent: '',
      autoSave: 100
    },
    theme: {
      base: '/themes/base/epiceditor.css',
      preview: '/themes/preview/bartik.css',
      editor: '/themes/editor/epic-dark.css'
    },
    button: {
      preview: true,
      fullscreen: true
    },
    focusOnLoad: false,
    shortcut: {
      modifier: 18,
      fullscreen: 70,
      preview: 80
    },
    string: {
      togglePreview: 'Toggle Preview Mode',
      toggleEdit: 'Toggle Edit Mode',
      toggleFullscreen: 'Enter Fullscreen'
    }
  }
  editor = new EpicEditor(opts).load();

  $('.submit-btn').click(function(){
    title = $('.title').val();
    content = editor.getElement('editor').body.innerHTML;

    $.post('/', {title: title, content: content}, function(data){
      $('.alert-section').html(data);
    });
  });
});
