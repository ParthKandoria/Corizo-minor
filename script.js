document.getElementById('submitBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const rollNo = document.getElementById('rollNo').value;

    if (firstName && lastName && rollNo) {
        const tableBody = document.getElementById('crudTableBody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
        
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('rollNo').value = '';
        
        addRowEventListeners(row);
    }
});

function addRowEventListeners(row) {
    row.querySelector('.delete-btn').addEventListener('click', function() {
        row.remove();
    });

    row.querySelector('.edit-btn').addEventListener('click', function() {
        const cells = row.children;
        document.getElementById('firstName').value = cells[0].innerText;
        document.getElementById('lastName').value = cells[1].innerText;
        document.getElementById('rollNo').value = cells[2].innerText;
        row.remove();
    });
}
