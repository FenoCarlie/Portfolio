import axios from "axios";
import React, { useEffect, useState } from "react";

function GitContribution() {
  const [contributionData, setContributionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributionGraph = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.github.com/graphql", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          params: {
            query: `
              query($userName: String!) {
                user(login: $userName) {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                        }
                      }
                    }
                  }
                }
              }`,
            variables: JSON.stringify({
              userName: `${import.meta.env.VITE_API_GITHUB_USERNAME}`,
            }),
          },
        });
        if (
          response.data &&
          response.data.user &&
          response.data.user.contributionsCollection
        ) {
          setContributionData(
            response.data.user.contributionsCollection.contributionCalendar
              .weeks
          );
        } else {
          console.error("No contributions found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contribution graph:", error);
      }
    };
    fetchContributionGraph();
  }, []);

  console.log(contributionData);

  return <div>GitContribution</div>;
}

export default GitContribution;
