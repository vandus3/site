import "../css/Repos.css";
import arrow from "../assets/arrow.svg";
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

  // create a card for every repository yaptık
  return (
    <div className="repos-container">
      <h1 className="repos-title">My Repositories</h1>
      <div className="repos-cards">
        <a href="" className="card">
          <h2 className="card-title">özgürün reposu</h2>
          <p className="card-description">
            bir gün bir özgür başka bir özgüre gel beraber özgürleyelim demiş
          </p>
          <img src={arrow} className="card-arrow" />
        </a>
      </div>
    </div>
  );
}
