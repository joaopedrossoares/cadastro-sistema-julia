const userForm = document.getElementById('signup');

userForm.addEventListener('click', (e) => {
    e.preventDefault();
    let userObject = {
        error: true 
    };
    let name = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
    let typeUser = document.getElementsByName('type_user');
    let selectedTypeUser;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('password_confirm').value;

    let confirmedPassword = password === passwordConfirm ? password : "WRONG";

    typeUser.forEach((type) => {
        if(type.checked){
            selectedTypeUser = type.value;
        }
    })

    if(confirmedPassword != "WRONG") {
        userObject = {
            name: name,
            cpf: cpf,
            email: email,
            typeUser: selectedTypeUser,
            password: confirmedPassword
        }
    }

    registryUserService(userObject);

})


function registryUserService(userObject) {
    const URL = 'https://localhost:{PORTA_DO_SERVICO}';

    fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: userObject
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}