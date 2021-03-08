
// sideBar Man下拉選單
function openManOption(){
  let option = document.getElementById('man-option');
  option.classList.toggle('option-open');
};

// sideBar Woman下拉選單
function openWomanOption(){
  let option = document.getElementById('woman-option');
  option.classList.toggle('option-open');
};

// sidebar close and open
function clickSide(){
  let menu = document.getElementById('sideBar');
  let cover = document.querySelector('.cover');
  menu.classList.toggle('hide');
  cover.classList.toggle('hide');
}