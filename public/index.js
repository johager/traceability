const signupBtn = document.querySelector('button[name="signup"]')
const criticalBtn = document.querySelector('button[name="critical"]')
const warningBtn = document.querySelector('button[name="warning"]')
const p = document.querySelector('p')

function handleSubmit(evt) {
	evt.preventDefault();
    const name = document.querySelector('input[name="name"]').value
    const email = document.querySelector('input[name="email"]').value

    axios.post('/api/signup', {name: name, email: email})
    .then(res => {
        console.log("res:", res)
        console.log("res.data:", res.data)
        document.querySelector('form').style.display = 'none'
        p.textContent = `Thanks for signing up ${name}!`
        p.style.display = 'block'
        document.querySelector('img').src= `https://cataas.com/cat/says/Thanks ${name}!`
    })
    .catch(err => {
        console.log(err)
    })
}

function handleForceFailCritical(evt) {
	evt.preventDefault();

    console.log("do get critical")

    axios.get('/api/critical')
    .then(res => {
        console.log("returned from critical")
    })
    .catch(err => {
        console.log(err)
    })
}

function handleForceFailWarning(evt) {
	evt.preventDefault();

    console.log("do get warning")

    axios.get('/api/warning')
    .then(res => {
        console.log("returned from warning")
    })
    .catch(err => {
        console.log(err)
    })
}

signupBtn.addEventListener('click', handleSubmit);
criticalBtn.addEventListener('click', handleForceFailCritical);
warningBtn.addEventListener('click', handleForceFailWarning);

p.style.display = 'none'