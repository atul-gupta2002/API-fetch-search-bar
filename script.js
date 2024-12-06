// https://jsonplaceholder.typicode.com/users
const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
        addSearchFunctionality(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};


const displayUsers = (users) => {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; 
    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><i class="fas fa-envelope"></i> <a href="mailto:${user.email}">${user.email}</a></p>
            <p><i class="fas fa-phone"></i> ${user.phone}</p>
            <p><i class="fas fa-globe"></i> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            <p><i class="fas fa-building"></i> ${user.company.name}</p>
        `;
        container.appendChild(card);
    });
};


const addSearchFunctionality = (users) => {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm)
        );
        displayUsers(filteredUsers);
    });
};


document.addEventListener('DOMContentLoaded', fetchUsers);