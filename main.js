window.Telegram.WebApp.ready();

document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe?.user;

    if (user) {
        // Hide loading message
        document.getElementById('loading-message').style.display = 'none';

        // Display user information
        const userName = user.username ? `@${user.username}` : `${user.first_name}`;
        document.getElementById('user-name').textContent = `Hello, ${userName}!`;

        // Show user info div
        document.getElementById('user-info').style.display = 'block';

        // Initialize user balance (in a real app, fetch actual balance from your backend)
        let balance = 0;  // Starting balance
        updateBalance(balance);  // Update UI with balance

        // Show referral system
        document.getElementById('referral-system').style.display = 'block';
    } else {
        // Display error if user info is not available
        document.getElementById('loading-message').textContent = 'Unable to retrieve user information.';
    }
});