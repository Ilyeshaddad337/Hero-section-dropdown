// getting the buttons to control the dropdown
const featBtn = document.querySelector('.nav-link.drop');
const companyBtn = document.querySelectorAll('.nav-link.drop')[1];

//get the dropdowns 
const featDrop = document.querySelector('.dropdown-feat');
const companyDrop = document.querySelector('.dropdown-comp');


const handleClick = (dropdown) => {
    dropdown.classList.toggle('hide')
}

featBtn.addEventListener('click',() => {
    handleClick(featDrop)
})
companyBtn.addEventListener('click',() => {
    handleClick(companyDrop)
})
