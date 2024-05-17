import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosStar, IoMdGitCommit } from "react-icons/io";

function GithubRepo() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReposAndCommitsLanguages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${
            import.meta.env.VITE_API_GITHUB_USERNAME
          }/repos`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_API_GITHUB_TOKEN}`,
            },
          }
        );
        const reposWithExtra = await Promise.all(
          response.data.map(async (repo) => {
            const commitsResponse = await axios.get(
              `https://api.github.com/repos/${
                import.meta.env.VITE_API_GITHUB_USERNAME
              }/${repo.name}/commits`,
              {
                headers: {
                  Authorization: `token ${
                    import.meta.env.VITE_API_GITHUB_TOKEN
                  }`,
                },
              }
            );
            const languagesResponse = await axios.get(
              `https://api.github.com/repos/${
                import.meta.env.VITE_API_GITHUB_USERNAME
              }/${repo.name}/languages`,
              {
                headers: {
                  Authorization: `token ${
                    import.meta.env.VITE_API_GITHUB_TOKEN
                  }`,
                },
              }
            );
            return {
              ...repo,
              commitsCount: commitsResponse.data.length,
              languages: languagesResponse.data,
            };
          })
        );
        setRepos(reposWithExtra);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos, commits, and languages:", error);
      }
    };
    fetchReposAndCommitsLanguages();
  }, []);
  3;

  console.log(repos);

  return (
    <div className="w-full h-full">
      {loading ? (
        <></>
      ) : (
        <div className=" text-white grid grid-cols-1 lg:grid-cols-3 gap-4  h-auto">
          {repos.map((repo) => (
            <a
              href={`/${repo.git_url.slice(5)}`}
              key={repo.id}
              className="h-auto flex w-auto bg-other rounded p-3 flex-col"
            >
              <span className="w-full flex flex-row justify-between mb-3">
                <div className="flex flex-grow">
                  <label className="flex flex-row items-center mr-3">
                    <label className="mr-1">{repo.stargazers_count}</label>
                    <IoIosStar className="w-4 h-4 text-yellowClaire" />
                  </label>
                  <label className="flex flex-row items-center">
                    <label className="mr-1">{repo?.commitsCount}</label>
                    <IoMdGitCommit className="w-4 h-4 text-yellowClaire" />
                  </label>
                </div>
                <label>{repo.name}</label>
              </span>
              <p className="text-sm text-grey1 mb-3">{repo.description}</p>
              <ul className="text-sm text-grey1 flex flex-row w-full justify-between">
                {Object.entries(repo.languages).map(([language]) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default GithubRepo;
