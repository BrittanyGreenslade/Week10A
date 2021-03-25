//Collaborated with Shawn

//1
//created a variable that carries out the .querySelector method inside of the document object
//which finds the FIRST element that is an h2 inside of the element 'main'
var h2Tag = document.querySelector("main>h2");
h2Tag.innerText = "I don't want to be a page header anymore";
//changed the innerText of the results of the querySelector method

//2
//created a variable that carries out the .querySelectorAll method inside of the document object
//which finds ALL of the elements that are p tags inside of the element 'main' and the
//element 'footer'
//ps, is there a better way to do this when the p tags aren't children of the same parents?
var pTags = document.querySelectorAll("main>p, footer>p");
for (var i = 0; i < pTags.length; i++) {
  pTags[i].style.background = "red";
}
//looped through the returned results of the .querySelectorAll method and changed the
//background of all of them to 'p'

//3
//created a variable that carries out the .getElementById method inside of the document object
//which finds the ONE element labelled 'pageHeader' in my HTML
var pageHeader = document.getElementById("pageHeader");
pageHeader.style.fontSize = "50px";
//changedthe font size of the returned 'pageHeader' element ot 50px

//4
//created a variable that carries out the .getElementsByClassName method inside of the
//document object which finds ANY elementS labelled 'bunchaLinks' in my HTML
var bunchaLinks = document.getElementsByClassName("bunchaLinks");
for (var i = 0; i < bunchaLinks.length; i++) {
  bunchaLinks[i].innerHTML = "<p>no longer a link MFs</p>";
}
//looped through the returned results of the method and changed the innerHTML
// of all of them to 'p'.
//I tried to do this without a div container surrounding each of them, with just a tags,
//and tried to change the .outerHTML, and it was skipping over the second one for some
//reason? It was behaving weirdly.

//5
//created a variable that carries out the .getElementsByTagName method inside of the
//document object which finds ANY elementS that are an h1 tag in my HTML
var h1Tags = document.getElementsByTagName("h1");
for (var i = 0; i < h1Tags.length; i++) {
  h1Tags[i].innerText = `There are ${i + 1} h1 tags`;
}
//looped through the returned results of the method and changed the innerText of all of them

//6
//created a variable that carries out the .createElement method inside of the
//document object to create an 'a' tag.
//googled to find out that you can use setAttribute to ADD an attribute if there isn't one
//so, used setAttribute to add the attribute href and make it = google.ca
var newExtLink = document.createElement("a");
var extLinkParent = document.querySelector("body>header");
newExtLink.setAttribute("href", "www.google.ca");
newExtLink.innerText = "GOOOOOOOGLE";
extLinkParent.append(newExtLink);
//then changed the innerText of the a tag
//then appended the newExtLink element to the extLinkParent which I chose to be the header.

//7
//created a variable that carries out the .createTextNode method inside of the
//document object to create a text node.
//then created a p tag
//then declared a variable stating where the text nose would append to (footer)
var newTxtNode = document.createTextNode(`I'm a text node`);
var useTxtNode = document.createElement("p");
var txtNodeParent = document.querySelector("body>footer");
useTxtNode.append(newTxtNode);
txtNodeParent.append(useTxtNode);
//appended the text node to the newly created p tag I created so it was visible on the page
//appended the p tag to the footer

//8
//used .getElementById method to select the node 'ftr' from my HTML.
//used .getElementById to select the node 'copyRight' and create a variable to call
//as an argument in 'remove child' method
var ewKids = document.getElementById("ftr");
var copyRight = document.getElementById("copyRight");
ewKids.removeChild(copyRight);
//performed the removeChild method on the variable copyRight
// the return of 'ewKids' variable to removeChild

// var removed = ewKids.removeChild(copyRight);
// console.log(removed);
//Shawn taught me this for fun so I'm going to leave it here to remember :)

//9
var h20ne = document.getElementById("h20ne");
h20ne.classList.add("firstClass");
var h2Two = document.getElementById("h2Two");
h2Two.classList.remove("removeClass");
var h2Three = document.getElementById("h2Three");
h2Three.classList.toggle("thirdClass");
h2Three.classList.toggle("thirdClass");
//tried this twice to see it toggle on/off
//is there a way to get rid of the empty "class" thing here?
