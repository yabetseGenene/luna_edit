/*
    Tools
*/
let bold = document.querySelector('#edtr-bold');
let italic = document.querySelector('#edtr-italic');
let underline = document.querySelector('#edtr-underline');
let strikethrough = document.querySelector('#edtr-strikethrough');
let justifyFull = document.querySelector('#edtr-justify-full');
let justifyLeft = document.querySelector('#edtr-justify-left');
let justifyRight = document.querySelector('#edtr-justify-right');
let justifyCenter = document.querySelector('#edtr-justify-center');
let undo = document.querySelector('#edtr-undo');
let redo = document.querySelector('#edtr-redo');
let subscript = document.querySelector('#edtr-subscript');
let superscript = document.querySelector('#edtr-superscript');
let link = document.querySelector('#edtr-link');
let unlink = document.querySelector('#edtr-unlink');
let indent = document.querySelector('#edtr-indent');
let outdent = document.querySelector('#edtr-outdent');
let orderedList = document.querySelector('#edtr-orderedList');
let unorderedList = document.querySelector('#edtr-unorderedList');
let header = document.querySelector('#edtr-heading-selection');
let image = document.querySelector('#edtr-image');
let font = document.querySelector('#edtr-font');
let fontSize = document.querySelector('#edtr-font-size');
let color = document.querySelector('#edtr-color');
let horizontalLine = document.querySelector('#edtr-horizontal-line');
let highlighter = document.querySelector('#edtr-highlight')
let highight_color_selector = document.querySelector('#edtr-actual-hilight');
let sidebarToggle = document.querySelector('#edtr-sidebar-toggle');
let sidebarBack = document.querySelector('.edtr-sidebar-back');

sidebarToggle.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('hiddenSidebar');
});

sidebarBack.addEventListener('click', () => {
  sidebarToggle.click();
})

let toggleEdit = document.querySelectorAll('.edtr-toggle');

let saveModal = document.querySelector('#save-to-cloud');
let save = document.querySelectorAll('.edtr-save');
let cancelSaveToCloud = document.querySelector('#cancel-stc');

let exportModal = document.querySelector('#exprot-file');
let export_ = document.querySelectorAll('.edtr-export');
let cancelExport = document.querySelector('#cancel-exp');

let uploadButton = document.querySelectorAll('.edtr-upload');
let fileButton = document.querySelector('#actualFileBtn');

let lang = document.querySelectorAll('.edtr-lang');
let noticeModal = document.querySelector('#eng-to-amh-notice');
let cancelLang = document.querySelector('#cancel-lang');
let continueConversion = document.querySelector('#continueConversion');

let enterLink = document.querySelector('#edtr-enter-link');
let setLink = document.querySelector('#setLink');
let cancel = document.querySelector('#cancel');
let linkEntry = document.querySelector('#link_entry_input');


let exportHtml = document.querySelector('#edtr-export-html');
let exportMD = document.querySelector('#edtr-export-markdown');
let exportPdf = document.querySelector('#edtr-export-pdf');

let isInEditMode = false;
let toggleDesingMode = () => {
    if(isInEditMode){
      editorContent.document.designMode = 'Off';
      isInEditMode = false;
    }else{
      editorContent.document.designMode = 'On';
      isInEditMode = true;
    }
}

let executeCommand = (command, arg) => {
    arg = arg || null;
    editorContent.document.execCommand(command, false, arg);
}

let newTabLink = () => {
  let selection = editorContent.document.getSelection();
  selection.anchorNode.parentElement.target = '_blank';
}

let returnSelection = (value, emptyVal) => {
    emptyVal = emptyVal || null;
    let selection = value === '' ? emptyVal : value;
    return selection;
}

let sendEditorContent = (html, url) => {
  let xhr = new XMLHttpRequest();
  var params = JSON.stringify({ 'content': html });
  xhr.open("POST", url, true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let binaryData = [];
      let contentDispositoin = this.getResponseHeader('Content-Disposition');
      let fileName = contentDispositoin.match(/filename="(.+)"/)[1];
      let link = document.createElement('a');

      binaryData.push(this.response);
      link.href = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
      link.download = fileName;
      link.click();
    }
  };

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(params);
}


bold.addEventListener('click', () => {
    executeCommand('bold');
});

italic.addEventListener('click', () => {
    executeCommand('italic');
});

underline.addEventListener('click', () => {
    executeCommand('underline');
});

strikethrough.addEventListener('click', () => {
    executeCommand('strikethrough');
});

justifyFull.addEventListener('click', () => {
    executeCommand('justifyFull');
});

justifyCenter.addEventListener('click', () => {
    executeCommand('justifyCenter');
});

justifyLeft.addEventListener('click', () => {
    executeCommand('justifyLeft');
});

justifyRight.addEventListener('click', () => {
    executeCommand('justifyRight');
});

undo.addEventListener('click', () => {
    executeCommand('undo');
});

redo.addEventListener('click', () => {
    executeCommand('redo');
});

subscript.addEventListener('click', () => {
    executeCommand('subscript');
});

superscript.addEventListener('click', () => {
    executeCommand('superscript');
});

link.addEventListener('click', () => {
    executeCommand('link');
});

indent.addEventListener('click', () => {
    executeCommand('indent');
});

outdent.addEventListener('click', () => {
    executeCommand('outdent');
});

orderedList.addEventListener('click', () => {
    executeCommand('insertOrderedList');
});

unorderedList.addEventListener('click', () => {
    executeCommand('insertUnorderedList');
});

header.addEventListener('change', e => {
    executeCommand('formatBlock', returnSelection(e.target.value, 'p'));
});

image.addEventListener('click', () => {
    executeCommand('dedent');
});

fontSize.addEventListener('change', e => {
    executeCommand('fontSize', returnSelection(e.target.value));
});

font.addEventListener('change', e => {
    executeCommand('fontName', returnSelection(e.target.value, '3'));
});

color.addEventListener('change', e => {
    executeCommand('foreColor', returnSelection(e.target.value, '000'));
});

highlighter.addEventListener('click', () => {
    highight_color_selector.click();
});

highight_color_selector.addEventListener('change', e => {
    executeCommand('hiliteColor', returnSelection(e.target.value, '000'));
})

horizontalLine.addEventListener('click', () => {
    executeCommand('insertHorizontalRule');
});

unlink.addEventListener('click', () => {
    executeCommand('unlink');
});

link.addEventListener('click', () => {
  enterLink.classList.toggle('hide');
});

setLink.addEventListener('click', function () {
    if(linkEntry.value.trim() !== ''){
      executeCommand('createLink', linkEntry.value.trim());
      newTabLink();
      cancel.click();
    }
});

cancel.addEventListener('click', function () {
    linkEntry.value = '';
    link.click();
});

toggleEdit.forEach( btn => {
  btn.addEventListener('click', e => {
    toggleDesingMode();
    document.querySelector('.luna_logo').style.display = 'none';
    toggleEdit.forEach( btn => {
      btn.classList.toggle('edit-mode-on');
    })
  });

  btn.addEventListener("mouseover", e => {
    document.querySelector('#edit-popup').classList.toggle('hovered');
  }, false);

  btn.addEventListener("mouseout", e => {
    document.querySelector('#edit-popup').classList.toggle('hovered');
  }, false);

});

save.forEach( btn => {
  btn.addEventListener('click', () => {
    saveModal.classList.toggle('hide');
  });

  btn.addEventListener("mouseover", e => {
    document.querySelector('#save-popup').classList.toggle('hovered');
  }, false);

  btn.addEventListener("mouseout", e => {
    document.querySelector('#save-popup').classList.toggle('hovered');
  }, false);

});

export_.forEach( btn => {
  btn.addEventListener('click', () => {
    exportModal.classList.toggle('hide');
  });

  btn.addEventListener("mouseover", e => {
    document.querySelector('#export-popup').classList.toggle('hovered');
  }, false);

  btn.addEventListener("mouseout", e => {
    document.querySelector('#export-popup').classList.toggle('hovered');
  }, false);

});

uploadButton.forEach( btn => {
  btn.addEventListener('click', () => {
      fileButton.click();
  });

  btn.addEventListener("mouseover", e => {
    document.querySelector('#upload-popup').classList.toggle('hovered');
  }, false);

  btn.addEventListener("mouseout", e => {
    document.querySelector('#upload-popup').classList.toggle('hovered');
  }, false);

});

fileButton.addEventListener('change', () => {
  let file = fileButton.files[0];
  if (file) {
      editorContent.document.designMode = 'On';
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evt) {
          window.frames[0].document.body.innerHTML = evt.target.result;
      }
  }
});

lang.forEach( btn => {
  btn.addEventListener('click', () => {
    noticeModal.classList.toggle('hide');
  });

  btn.addEventListener("mouseover", e => {
    document.querySelector('#lang-popup').classList.toggle('hovered');
  }, false);

  btn.addEventListener("mouseout", e => {
    document.querySelector('#lang-popup').classList.toggle('hovered');
  }, false);

});


cancelSaveToCloud.addEventListener('click', () => {
  saveModal.classList.toggle('hide');
});

cancelExport.addEventListener('click', () => {
  exportModal.classList.toggle('hide');
});


continueConversion.addEventListener('click', () => {
  let content = window.frames[0].document.body.innerHTML
  sendEditorContent(content, '/editor_content');
});

cancelLang.addEventListener('click', () => {
  noticeModal.classList.toggle('hide');
});


exportHtml.addEventListener('click', () => {
  let content = window.frames[0].document.body.innerHTML;
  sendEditorContent(content, '/editor_export_html');
});

exportMD.addEventListener('click', () => {
  let content = window.frames[0].document.body.innerHTML;
  sendEditorContent(content, '/editor_export_md');
});

exportPdf.addEventListener('click', () => {
  let content = window.frames[0].document.body.innerHTML;
  var printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>DIV Contents</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
});
