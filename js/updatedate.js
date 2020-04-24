 /*
 const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
 document.getElementById('updatedate').textContent = new Date().toLocaleDateString('en-US', options);
 */

 let date = new Date(document.lastModified);
 let time = date.toLocaleString('en-US');

 document.getElementById("updatedate").textContent = time;