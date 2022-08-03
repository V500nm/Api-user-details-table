const src = "https://randomuser.me/api";

let pageSize = 10;
let pageNumber = 1;

function fetchUser(cb) {
  fetch(`${src}?results=${pageSize}&page=${pageNumber}`)
    .then((data) => data.json())
    .then((json) => {
      let output ="";

    for( const detail of json.results){
        output+=`
        
  <tr>
    <td>${detail.name.first}</td>
    <td>${detail.gender}</td>
    <td>${detail.dob.age}</td>
    <td>${detail.email}</td>
    <td>${detail.phone}</td>
    <td>${detail.cell}</td>
    <td>${detail.location.country}</td>
  </tr>
    `;
    }
    document.querySelector("tbody").innerHTML = output
    });
}
var Pdata = 1;
document.querySelector('#num').innerText=Pdata;

function next() {
  pageNumber++;
   Pdata = Pdata + 1;
  document.querySelector("#num").innerText = Pdata;
  fetchUser((data) => {
    console.log(data);
  });
  pageNumber.innerHTML = i++;  
}

function previous() {
  if (pageNumber === 1) true;
  pageNumber--; 
  Pdata = Pdata - 1;
    document.querySelector("#num").innerText = Pdata;
  fetchUser((data) => {
    console.log(data);
  });
}

fetchUser((data) => {
  console.log(data);
});