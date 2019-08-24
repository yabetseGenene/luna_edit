window.onload = e => {
  setTimeout(() => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        window.location = '/editor'
      }
    };
    xhttp.open("GET", "/editor", true);
    xhttp.send();
  }, 4000);
}
