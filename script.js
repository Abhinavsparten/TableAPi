//api
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    const tableBody = document.querySelector('#Table tbody');
    let usersData = [...data]; 

    // Function to render the  rows
    function renderTable() {
        tableBody.innerHTML = usersData.map(user => `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
        `).join('');
    }

    // Function to sort the table 
    function sortTable(column, direction) {
        usersData.sort((a, b) => {
            let valA = a[column].toLowerCase();
            let valB = b[column].toLowerCase();
            if (valA < valB) return direction === 'asc' ? -1 : 1;
            if (valA > valB) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        renderTable();
    }

    document.getElementById('sort-name-asc').addEventListener('click', () => {
        sortTable('name', 'asc');
    });

    document.getElementById('sort-name-desc').addEventListener('click', () => {
        sortTable('name', 'desc');
    });

    document.getElementById('sort-email-asc').addEventListener('click', () => {
        sortTable('email', 'asc');
    });

    document.getElementById('sort-email-desc').addEventListener('click', () => {
        sortTable('email', 'desc');
    });

    renderTable();
})
.catch(error => console.error('Error while fetching data', error));
