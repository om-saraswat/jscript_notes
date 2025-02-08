console.log(window);
//it is a global object in a browser contain different different sub classes in it.

//like
console.log(window.document);
//it returns the reference contained document in the window.it also write that
console.log(document);

console.dir(document)
//The console.dir() static method displays a list of the properties of the specified
/*JavaScript object. In browser consoles, the output is presented as a hierarchical
isting with disclosure triangles that let you see the contents of child objects.*/

console.log(document.baseURI);
//it gives the url of website

console.log(document.links)
//it gives all the links present in that window and it store in collection not in an array but we can call like an array.

document.getElementById('ID_NAME')
//with help of this we can access the element by their id and perform different different operation on it.example:

document.getElementById('id_name').innerHTML = "<h1>hello</h1>"
//by innerHTML we can change the inner html things in element.

