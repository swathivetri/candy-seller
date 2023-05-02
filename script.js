var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
    insertNewRecord(formData);
}
    else{
        updateRecord(formData);
    }
    resetForm();
}
async function saveToCrudCrud(event){
try{
 event.preventDefault();
    const description = event.target.description.value;
    const candy = event.target.candy.value;
    const quantity = event.target.quantity.value;
    const perPrice = event.target.perPrice.value;

    const obj = {
        description,
        candy,
        quantity,
        perPrice
    }
    const response=await axios.post("https://crudcrud.com/api/173fe744b9084fe88e462c4ce4eb5037/candyshopDetails",obj)
    showNewUserOnScreen(response.data)
    console.log(response)
 }
    catch(err){
     console.log(err);
   } 
}
   localStorage.setItem("selectedRow", JSON.stringify(selectedRow));
   showNewUserOnScreen(selectedRow)

window.addEventListener("DOMContentLoaded",async ()=>{
    try{
const response= await axios.get(`https://crudcrud.com/api/173fe744b9084fe88e462c4ce4eb5037/candyshopDetails`)
  for(let i=0;i<response.data.length;i++)
  {
    showNewUserOnScreen(response.data[i]);
  }
}
catch(err){
    console.log(err);
  }
})
async function showNewUserOnScreen(obj){
    var description = document.getElementById("description").value;
    var candy = document.getElementById("candy").value;
    var quantity = document.getElementById("quantity").value;
    var perPrice = document.getElementById("perPrice").value;
}
function submit() {
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered) ;
}

function readFormData(){
    var formData = {};
    formData["description"] = document.getElementById("description").value;
    formData["candy"] = document.getElementById("candy").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
   }
    function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.description;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.candy;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.quantity;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
    }

function onEdit(td){
    try{
         selectedRow = td.parentElement.parentElement;
         document.getElementById('description').value = selectedRow.cells[0].innerHTML;
         document.getElementById('candy').value = selectedRow.cells[1].innerHTML;
         document.getElementById('quantity').value = selectedRow.cells[2].innerHTML;
         document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
        childElem.innerHTML = `${obj.description}-${obj.candy}-${obj.quantity}-${obj.perPrice}`;
        localStorage.setItem("selectedRow", JSON.stringify(newRow));
        }
    catch(err){
      console.log(err);
    }
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.description;
    selectedRow.cells[1].innerHTML = formData.candy;
    selectedRow.cells[2].innerHTML = formData.quantity;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}
function readingDataFromLocalStorage(dataEntered) {
 localStorage.setItem("description",dataEntered[0]);
 localStorage.setItem("candy",dataEntered[1]);
 localStorage.setItem("quantity",dataEntered[2]);
 localStorage.setItem("perPrice",dataEntered[3]);
 
   localStorage.getItem("Description",description);
   localStorage.getItem("Candy",candy);
   localStorage.getItem("Quantity",quantity);
   localStorage.getItem("PerPrice",perPrice);
 }
function onDelete(td){
    try{
  if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
    localStorage.setItem("selectedRow", JSON.stringify(newRow));
}
catch(err){
  console.log(err);
   }
}
  function resetForm(){
    try{
    document.getElementById('description').value = '';
    document.getElementById('candy').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('perPrice').value = '';
}
catch(err){
  console.log(err);
   }
}

    


