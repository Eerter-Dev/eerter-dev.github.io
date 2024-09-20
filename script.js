async function fetchGitHubRepos() {
    const username = 'Eerter-dev'; // Replace with your GitHub username
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();

    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = ''; // Clear any existing projects

    repos.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available.'}</p>
            <a href="${repo.html_url}" class="project-link">View on GitHub</a>
        `;
        projectContainer.appendChild(projectCard);
    });
}

// Call the function to fetch repositories
fetchGitHubRepos();
