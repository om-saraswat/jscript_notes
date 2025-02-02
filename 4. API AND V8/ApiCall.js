const api = 'https://api.github.com/users/hiteshchoudhary' //insert api

const xhr = new XMLHttpRequest();  //XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

xhr.open('GET',api);  //get the data from api

xhr.onreadystatechange = function(){  //onreadystatechange do continous track on api call
    console.log(xhr.readyState);      //readystate check the current state of api
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)  //responsetext store the raw data in a string form 
        console.log(typeof data);                   //JSON.parse convert it into object
        console.log(data.followers);           
    }
}
xhr.send();

