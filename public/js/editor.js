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

let toggleEdit = document.querySelector('#edtr-toggle');

let saveModal = document.querySelector('#save-to-cloud');
let save = document.querySelector('#edtr-save');
let cancelSaveToCloud = document.querySelector('#cancel-stc');

let exportModal = document.querySelector('#exprot-file');
let export_ = document.querySelector('#edtr-export');
let cancelExport = document.querySelector('#cancel-exp');

let uploadButton = document.querySelector('#edtr-upload');
let fileButton = document.querySelector('#actualFileBtn');

let lang = document.querySelector('#edtr-lang');
let noticeModal = document.querySelector('#eng-to-amh-notice');
let cancelLang = document.querySelector('#cancel-lang');
let continueConversion = document.querySelector('#continueConversion');

let enterLink = document.querySelector('#edtr-enter-link');
let setLink = document.querySelector('#setLink');
let cancel = document.querySelector('#cancel');
let linkEntry = document.querySelector('#link_entry_input');


let isInEditMode = false;
let toggleDesingMode = () => {
    if(isInEditMode){
      editorContent.document.designMode = 'Off';
      isInEditMode = false;
    }else{
      editorContent.document.designMode = 'On';
      isInEditMode = true;
    }

    toggleEdit.classList.toggle('edit-mode-on');
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



toggleEdit.addEventListener('click', () => {
  toggleDesingMode();
  document.querySelector('.luna_logo').style.display = 'none';
})

save.addEventListener('click', () => {
  saveModal.classList.toggle('hide');
});

cancelSaveToCloud.addEventListener('click', () => {
  save.click();
});

export_.addEventListener('click', () => {
  exportModal.classList.toggle('hide');
});

cancelExport.addEventListener('click', () => {
  export_.click();
});

uploadButton.addEventListener('click', () => {
    fileButton.click();
});


lang.addEventListener('click', () => {
  noticeModal.classList.toggle('hide');
});

continueConversion.addEventListener('click', () => {
  console.log('conversion started')
});

cancelLang.addEventListener('click', () => {
  lang.click();
});

save.addEventListener("mouseover", e => {
  document.querySelector('#save-popup').classList.toggle('hovered');
}, false);

save.addEventListener("mouseout", e => {
  document.querySelector('#save-popup').classList.toggle('hovered');
}, false);

uploadButton.addEventListener("mouseover", e => {
  document.querySelector('#upload-popup').classList.toggle('hovered');
}, false);

uploadButton.addEventListener("mouseout", e => {
  document.querySelector('#upload-popup').classList.toggle('hovered');
}, false);

export_.addEventListener("mouseover", e => {
  document.querySelector('#export-popup').classList.toggle('hovered');
}, false);

export_.addEventListener("mouseout", e => {
  document.querySelector('#export-popup').classList.toggle('hovered');
}, false);

lang.addEventListener("mouseover", e => {
  document.querySelector('#lang-popup').classList.toggle('hovered');
}, false);

lang.addEventListener("mouseout", e => {
  document.querySelector('#lang-popup').classList.toggle('hovered');
}, false);

toggleEdit.addEventListener("mouseover", e => {
  document.querySelector('#edit-popup').classList.toggle('hovered');
}, false);

toggleEdit.addEventListener("mouseout", e => {
  document.querySelector('#edit-popup').classList.toggle('hovered');
}, false);
