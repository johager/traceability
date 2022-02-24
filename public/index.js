const form = document.querySelector('form')
const p = document.querySelector('p')

function handleSubmit(evt) {
	evt.preventDefault();
    const name = document.querySelector('input[name="name"]').value
	form.style.display = 'none'
    p.textContent = `Thanks for signing up ${name}!`
    p.style.display = 'block'
    document.querySelector('img').src= `https://cataas.com/cat/says/Thanks ${name}!`
}

form.addEventListener('submit', handleSubmit);
p.style.display = 'none'