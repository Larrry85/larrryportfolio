const username = "Larrry85"; // Replace with your GitHub username
const apiUrl = `https://api.github.com/users/${username}/repos`;

async function fetchRepos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch repositories");

    const repos = await response.json();
    const projectsDiv = document.getElementById("projects");

    // Sort repositories by last updated date, newest first
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    repos.forEach(repo => {
      const repoDiv = document.createElement("div");
      repoDiv.className = "repo";

      // Assuming images are stored locally with the same name as the repository
      const imageUrl = `../../images/projects/${repo.name}.png`;
      const defaultImageUrl = `../../images/projects/default.png`; // Default image

      repoDiv.innerHTML = `
        <img src="${imageUrl}" alt="${repo.name} screenshot" onerror="this.onerror=null;this.src='${defaultImageUrl}';">
        <div>
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <p>${repo.description || "No description available."}</p>
          <p>Last updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
        </div>
      `;

      projectsDiv.appendChild(repoDiv);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepos();