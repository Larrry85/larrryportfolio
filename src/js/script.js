/*  ---------------scripts.js-----------------   */
const username = "Larrry85"; // Replace with your GitHub username
const apiUrl = `https://api.github.com/users/${username}/repos`;

async function fetchRepos() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch repositories");

    const repos = await response.json();
    const projectsDiv = document.getElementById("projects");

    repos.forEach(repo => {
      const repoDiv = document.createElement("div");
      repoDiv.className = "repo";

      repoDiv.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available."}</p>
        <p>⭐ Stars: ${repo.stargazers_count}</p>
      `;

      projectsDiv.appendChild(repoDiv);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepos();