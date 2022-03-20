let inputArray = [];
const inputEl = document.querySelector(".input-el");
const saveEl = document.querySelector(".save-btn");
const removeEl = document.querySelector(".remove-btn");
const ulEl = document.querySelector(".ul-el");

// this section is to save data ---save button ---listeener
saveEl.addEventListener("click", function(){
   
    removeEl.style.display = "inline-block";
    inputArray.push(inputEl.value);
    displayList();
    inputEl.value = ""
})

//function to display the url in list form

function displayList(){
    let initialValue = ""

    for(let i = 0; i < inputArray.length; i++){
        initialValue += "<li><a target='_blank' href='#'>" + inputArray[i] + "</a></li>";

    }
    ulEl.innerHTML = initialValue
}

removeEl.addEventListener("click", function(){
    ulEl.removeChild(ulEl.lastChild)
})

