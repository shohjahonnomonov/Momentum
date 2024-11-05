export function greeting() {
    const greetingElement = document.querySelector('.greeting');

    const currentDate = new Date();
    const hours = currentDate.getHours();

    greetingElement.textContent = showGreeting(hours);
}

function showGreeting(hour) {
    if (hour >= 6 && hour < 12) {
        return 'Good Morning!';
    } else if (hour >= 12 && hour < 18) {
        return 'Good Afternoon!';
    } else if (hour >= 18 && hour < 24) {
        return 'Good Evening!';

    } else {
        return 'Good Night!';
    }

}