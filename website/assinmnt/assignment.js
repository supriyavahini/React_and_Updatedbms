function myFunction() {

    var table = document.getElementById("myTable");
  
    var Name=document.forms["myform"]["name"].value;
  
    var Salary=document.forms["myform"]["salary"].value;
    var mobile=document.forms["myform"]["mobile"].value;
    var address=document.forms["myform"]["address"].value;
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(1);
     var cell4=row.insertCell(1);
  
    cell1.innerHTML = Name;
    cell2.innerHTML = Salary;
    cell3.innerHTML=mobile;
    cell4.innerHTML=address;
  
  }