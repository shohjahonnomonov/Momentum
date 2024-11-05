export function greetingInp() {
    const greetingInp = document.querySelector('.greeting-container input');

    greetingInp.addEventListener('input', (e) => {
        localStorage.setItem('greeting', e.target.value);
    });

    greetingInp.value = localStorage.getItem('greeting');
}