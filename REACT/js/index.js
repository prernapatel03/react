let showForm = document.getElementById("form");
let btn = document.getElementById("btn");
let container = document.getElementById("container");
let contain = document.getElementById('contain')
let body_text = document.getElementById("body-text");

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;

let editIndex = null;
let final_data = {};
let list =JSON.parse( localStorage.getItem('list')) || [
  {
    name_item: "prerna",
    email_item: "prernapatel@gmail.com",
    ph_number_item: 6352652007,
    gender: female.value,
  },
  {
    name_item: "meet",
    email_item: "meetraval@gmail.com",
    ph_number_item: 6352652007,
    gender: male.value,
  },
  {
    name_item: "nirav",
    email_item: "niravparikh@gmail.com",
    ph_number_item: 6352652007,
    gender: male.value,
  },
];

display();
function searchfun() {

let searchId = document.getElementById('searchId').value.toLowerCase();


let main_data = document.querySelectorAll('#main_data');

main_data.forEach((e)=>{
    let first_data = e.querySelector('td:first-child');
    if(first_data){
        let name_val = first_data.textContent.toLowerCase()
        if(name_val.includes(searchId)){
             e.style.display = ''
        }
        else{
            e.style.display = 'none'
        }
    }

})
}

function addFunction() {
  btn.innerText = "Add";

  body_text.style.opacity = "0.3";
  showForm.style.display = "flex";
}

function hideFormFunction() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let ph_number = document.getElementById("ph_number");
  let female = document.getElementById("female");
  let male = document.getElementById("male");
  
  let name_item = name.value;
  let email_item = email.value;
  let ph_number_item = ph_number.value;
  let female_item = female.value;
  let male_item = male.value;
  
  let gender =  female.checked ?  female.value : male.checked ? male.value : '';

  if (name_item == "" || name_item == null) {
    alert("please enter name");
    return false;
  } 
  else if (!emailPattern.test(email_item)) {
    alert("please enter valid email");
    return false;
  } 
  else if (ph_number_item.length > 10 || ph_number_item.length < 10) {
    alert("please enter 10 digit number");
    return true;
  } 
  else if (female.checked == false && male.checked == false) {
    alert("please enter gender");
    // console.log(female_item, male_item);

    return true;
  } 
  else {
    final_data = {
      name_item,
      email_item,
      ph_number_item,
      gender,
    };

    if (editIndex !== null) {
      list[editIndex] = final_data;
      editIndex = null;
  localStorage.setItem("list", JSON.stringify(list));

      console.log(list)

    } else {
      list.push(final_data);
      localStorage.setItem("list", JSON.stringify(list));
      console.log(list)

    }
    // resetForm();
    name.value = "";
    email.value = "";
    ph_number.value = "";
    // gender = ''
    female.checked= '';
    male.checked = ''

  }

  display();

  showForm.style.display = "none";
  body_text.style.opacity = "1";
}

function display() {
  let HTML = "";
  (HTML = `<table> <tr>
          <th>name</th>
            <th>email</th>
            <th>phone number</th>
            <th>gender</th>
            <th colspan="2">Actions</th>
     </tr>`),
    list.forEach((e, i) => {
      HTML += `<tr id='main_data'>
        <td>${e.name_item}</td>
          <td>${e.email_item}</td>
          <td>${e.ph_number_item}</td>
          <td>${e.gender}</td>
          <td><button onclick='deleteFun(${i})'>Delete</button></td>
          <td><button onclick='editFun(${i})'>Edit</button></td>
    </tr>`;
    }),
    `</table>`;

  container.innerHTML = HTML;
  // localStorage.setItem('list' , JSON.stringify(list))
  
}

function deleteFun(index) {
  list.splice(index, 1);
  display();
}

function editFun(index) {
  let name1 = document.getElementById("name");
  let email1 = document.getElementById("email");
  let ph_number1 = document.getElementById("ph_number");
  

  let female1 = document.getElementById("female");
  let male1 = document.getElementById("male");
 

  let gender1 =  female1.checked ? female1.value : male1.value;

  btn.innerText = "Save";
  body_text.style.opacity = "0.3";

  showForm.style.display = "flex";
  
  
  
  let item = list[index];

  name1.value = item.name_item,
  (email1.value = item.email_item), 
  (ph_number1.value = item.ph_number_item), 
  (gender1 = item.gender),


  
  console.log(gender1)
  editIndex = index;
  // localStorage.setItem("list", JSON.stringify(list));


  display();
}
function closeFun(){
  showForm.style.display = "none";
  body_text.style.opacity = "1";
}
// function resetForm() {
//   document.getElementById("myForm").reset();
// }
display();