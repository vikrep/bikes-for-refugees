function getTitle(document) {
  var elements = document.getElementsByTagName("title")[0].innerHTML;
  return elements;
};

function getNumberOfBikes(document) {
  var bikeNumber = document.getElementById("donation-count-alert").textContent;
  var num = Number(bikeNumber);
  return num;
};

function getAllButtonText(document) {
  var str = '';
  var myArr = [];
  for (i = 0; i < document.getElementsByClassName("btn").length; i++) {
    var btnClass = document.getElementsByClassName("btn")[i].textContent;  // 3 elements
    str = btnClass.trim();
    myArr.push(str);
  };
  return myArr;
};

function getNavLinksText(document) {
  var str = '';
  var myArr = [];
  var element = document.getElementById("navbarSupportedContent");
  for (i = 0; i < element.getElementsByTagName("a").length; i++) {
    var tags = element.getElementsByTagName("a")[i].textContent;
    str = tags.trim();
    myArr.push(str);
  };
  console.log('hit', myArr);
  return myArr;
}

function addDashesToLinks(document) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function (item) {
    item.textContent = '-' + item.textContent + '-';
  });
}

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed
  var tags = document.querySelectorAll('.article-title a');
  tags.forEach(function (item) {
    item.innerHTML = "<i>" + item.textContent + "</i>";
  });
}

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
}

function addLink( document ){
  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. It should have same structure as the other links
  // no return needed
}

module.exports = {
  getTitle,
  getNumberOfBikes,
  getAllButtonText,
  getNavLinksText,
  addDashesToLinks,
  italicTitles,
  greenLinks,
  addLink
};
