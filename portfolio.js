const typeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.txt = '';
  this.wordIndex = 0;
  this.type();
  this.isDeleting = false;
}

//Type()
typeWriter.prototype.type = function() {
  //current index of words
  const current = this.wordIndex % this.words.length;
  // get text
  const fulltxt = this.words[current];
  // check if isDeleting

  if(this.isDeleting){
    // remove a char
    this.txt = fulltxt.substring(0, this.txt.length - 1)
  }
  else {
    //add a char
    this.txt = fulltxt.substring(0, this.txt.length + 1)
  }
    // inserts txt ito txtElement

    this.txtElement.innerHTML = `<span>${this.txt}</span>`;
    // initial type speed
    let typeSpeed = 300;
    if(this.isDeleting){
      typeSpeed /= 2;
    }
    // If word is cpmplete
    if(!this.isDeleting && this.txt === fulltxt){
      // will make a pause at end.
      typeSpeed = this.wait;
      this.isDeleting = true;
    }
    else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      //move to next word.
      this.wordIndex++;
      //pause before typing
      typeSpeed = 400;
    }

  setTimeout(() => this.type(), typeSpeed)
}

//Init on DOM Loader
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  //Initialize typeWriter
  new typeWriter(txtElement, words, wait);
}

window.onscroll = function(){stickyFunc()};
var header = document.getElementById('stickyHeader');
var sticky = header.offsetTop;
var division = document.getElementById('mainDiv')
var stickyColor = division.offsetHeight - 55;
var lio = document.getElementById('lioID')

function stickyFunc() {
  if(window.pageYOffset > sticky){
    header.classList.add('applySticky');
  }
  else{
    header.classList.remove('applySticky');
  }
  if(window.pageYOffset > stickyColor){
    header.classList.add('stickyScrolled');
    lio.classList.add('lio1');
  }
  else{
    header.classList.remove('stickyScrolled');
    lio.classList.remove('lio1');

  }

}

var readmore = document.getElementById('hiddenlist');

function expand(){
  if(readmore.style.display === 'none'){
      readmore.style.display = 'block';
      var extraSki = `<li>C</li>
                     <li>C++</li>`;
      document.getElementById('hiddenlist').innerHTML = extraSki;
  }
  else {
    readmore.style.display = 'none';
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOm8Jz4stLW5y4dYaQ_L_0LfY2zbNBYEAZktsaKX04auiXS3pgo3aBhOrZzZmpemQ/exec'
const form = document.forms['ResponseForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
})
