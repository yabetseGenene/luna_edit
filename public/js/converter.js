let convertButton = document.querySelector('.button_convert');
let textarea = document.querySelector('.converter_area');
let display_area = document.querySelector('.conversion_display');

setMapping();

let populateDisplayArea = (array) => {
  array.forEach(word => {
      word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
      console.log(word);
      let conversions = matchToAmharicPhonems(extractPhonemes(word));
      createElement(conversions);
  });
}

let createElement = (array) => {
  if(array.length > 1){
    let select = document.createElement('select');
    array.forEach(option => {
      select.innerHTML += `<option>${option}</option>`;
    });

    select.classList.add('covert_selector');
    display_area.appendChild(select);
  }
  else{
    display_area.innerHTML += `<span class="text_element">${array[0]}</span>`;
  }
}

convertButton.addEventListener('click', () => {
  let content = textarea.value.trim();
  if(content.trim() === ''){
    alert('please write something');
  }else{
    display_area.innerHTML = "";
    populateDisplayArea(content.split(' '));
  }
});
