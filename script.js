document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.verification-step');

    steps.forEach((step, index) => {
        const progressBar = step.querySelector('.progress-bar');
        const checkmark = step.querySelector('.dog');

        setTimeout(() => {
            progressBar.style.width = '100%'; // Animate the progress bar

            setTimeout(() => {
                checkmark.style.display = 'flex'; // Display the checkmark after the animation
            }, 2000); // Time for progress bar to fill
        }, index * 3000); // Delay each step by 3 seconds
    });
});
document.getElementById('goobtn').addEventListener('click', () => {
  window.location.href = 'main.html';
});