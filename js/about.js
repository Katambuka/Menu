async function fetchAndDisplayTeamMembers() {
    try {
        const response = await fetch('json/team.json');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        const teamMembers = data.teamMembers;
        displayTeamMembers(teamMembers);
    } catch (error) {
        console.error('Error fetching team members:', error);
    }
 }
 
 function displayTeamMembers(teamMembers) {
    const teamTable = document.getElementById('team-table');
 
    teamMembers.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.position}</td>
            <td>${member.email}</td>
        `;
        teamTable.appendChild(row);
    });
 }
 
 function updateContactDetails(email, phone) {
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
 
    emailElement.textContent = email;
    phoneElement.textContent = phone;
 }
 
 window.addEventListener('load', async () => {
    await fetchAndDisplayTeamMembers();
 
    const email = 'info@nathan.com';
    const phone = '+1234567890';
    updateContactDetails(email, phone);
 });
 