const userForm = document.getElementById('userForm');
const displayedName = document.getElementById('displayedName');
const displayedPhone = document.getElementById('displayedPhone');
const displayedVillage = document.getElementById('displayedVillage');
const displayedCity = document.getElementById('displayedCity');
const cardColorInput = document.getElementById('color');

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const village = document.getElementById('village').value;
    const city = document.getElementById('city').value;
    const color = cardColorInput.value;

    displayedName.textContent = name;
    displayedPhone.textContent = phone;
    displayedVillage.textContent = village;
    displayedCity.textContent = city;

    const userInfoCard = document.getElementById('userInfo');
    userInfoCard.style.backgroundColor = color;

    const userInfo = {
        name,
        phone,
        village,
        city,
        color,
    };
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
});

const storedUserInfo = localStorage.getItem('userInfo');
if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    displayedName.textContent = userInfo.name;
    displayedPhone.textContent = userInfo.phone;
    displayedVillage.textContent = userInfo.village;
    displayedCity.textContent = userInfo.city;

    const userInfoCard = document.getElementById('userInfo');
    userInfoCard.style.backgroundColor = userInfo.color || '#fff';
}