import "../css/Repos.css";
import { use, useEffect, useState } from "react";
type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function Repos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vandus3/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  const repoName = repos[0]?.name || "Loading...";
  const repoDesc = repos[0]?.description || "Loading description...";
  const repoLink = repos[0]?.html_url || "#";
  // create a card for every repository yaptık
  return (
    <div className="repos-container">
      <h1 className="repos-title">My Repositories</h1>
      <div className="repos-cards">
        {repos.map((repo) => (
          <div className="card" key={repo.id}>
            <h1 className="card-title">
              {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
            </h1>
            <p className="card-description">{repo.description}</p>
            <a href={repo.html_url} className="card-link">
              View Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
