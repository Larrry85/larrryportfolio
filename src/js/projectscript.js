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

      // Try repository name first, then lowercase version, then default
      const imageUrl = `../../images/projects/${repo.name}.png`;
      const imageUrlLowercase = `../../images/projects/${repo.name.toLowerCase()}.png`;
      const defaultImageUrl = `../../images/projects/default.png`; // Default image

      // Create image element with fallback logic
      const img = document.createElement("img");
      img.alt = `${repo.name} screenshot`;
      
      // Try original name first
      img.src = imageUrl;
      img.onerror = function() {
        // If original fails, try lowercase
        this.onerror = function() {
          // If lowercase also fails, use default
          this.onerror = null;
          this.src = defaultImageUrl;
        };
        this.src = imageUrlLowercase;
      };

      const div = document.createElement("div");
      div.innerHTML = `
        <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
        <p>${repo.description || "No description available."}</p>
      `;

      repoDiv.appendChild(img);
      repoDiv.appendChild(div);
      projectsDiv.appendChild(repoDiv);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
  }
}

fetchRepos();