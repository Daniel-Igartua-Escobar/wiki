# fetch
Sirve para hacer llamadas ajax, sustituye a XMLHttpRequest

## Fetch simple
```javaScript
fetch('https://randomuser.me/api/?results=10')
  .then( response => {
    if(response.status == 200) {
      return response.text();
    } else {
      throw "Respuesta incorrecta del servidor" 
    }
  })
  .then( responseText => {
    let users = JSON.parse(responseText).results;
    console.log('Este es el objeto de usuarios', users);
  })
  .catch( err => {
    console.log(err);
  });
```

## Proporcionando nuestro propio objeto request
```javaScript
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest)
.then(function(response) {
  return response.blob();
})
.then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});
```
