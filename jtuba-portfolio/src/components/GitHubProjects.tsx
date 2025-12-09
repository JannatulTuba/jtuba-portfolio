import React, { useEffect, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

type GitHubProjectsProps = {
  username: string;
};

export const GitHubProjects: React.FC<GitHubProjectsProps> = ({ username }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    fetch(
      `https://api.github.com/users/JannatulTuba/repos?sort=updated&per_page=6`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch repositories.");
        }
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        setRepos(data);
      })
      .catch((err: Error) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  if (!username) {
    return <p>Please provide a GitHub username in the code.</p>;
  }

  return (
    <div className="github-list">
      {loading && <p>Loading repositories...</p>}
      {error && <p className="error-text">Error: {error}</p>}
      {!loading && !error && repos.length === 0 && (
        <p>No repositories found for this user.</p>
      )}

      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="github-item">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            <p>{repo.description || "No description provided."}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
