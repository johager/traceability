const form = document.querySelector('form')
const p = document.querySelector('p')

function handleSubmit(evt) {
	evt.preventDefault();
    const name = document.querySelector('input[name="name"]').value
    const email = document.querySelector('input[name="email"]').value

    axios.post('/api/signup', {name: name, email: email})
    .then(res => {
        console.log("res:", res)
        console.log("res.data:", res.data)
        form.style.display = 'none'
        p.textContent = `Thanks for signing up ${name}!`
        p.style.display = 'block'
        document.querySelector('img').src= `https://cataas.com/cat/says/Thanks ${name}!`
    })
    .catch(err => {
        console.log(err)
    })
}

form.addEventListener('submit', handleSubmit);
p.style.display = 'none'