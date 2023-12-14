// about.js

// Function to fetch team members' data from a JSON file and populate the table
async function fetchAndDisplayTeamMembers() {
   try {
       const response = await fetch('/json/team.json'); // Replace with the correct path to your JSON file
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

// Function to display team members in the table
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

// Function to update contact details
function updateContactDetails(email, phone) {
   const emailElement = document.getElementById('email');
   const phoneElement = document.getElementById('phone');

   emailElement.textContent = email;
   phoneElement.textContent = phone;
}

// Fetch team members' data and update contact details when the page loads
window.addEventListener('load', async () => {
   await fetchAndDisplayTeamMembers();

   // Sample contact details (replace with your actual contact info)
   const email = 'info@example.com';
   const phone = '+1234567890';
   updateContactDetails(email, phone);
});
