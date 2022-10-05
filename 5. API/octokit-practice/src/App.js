import { graphql } from "@octokit/graphql";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    graphql(
      `
        {
          repository(name: "agora-states-fe", owner: "codestates-seb") {
            discussions(first: 10) {
              nodes {
                title
                author {
                  login
                  avatarUrl
                }
                createdAt
              }
            }
          }
        }
      `,

      {
        headers: {
          authorization: "token " + process.env.REACT_APP_AUTH_TOKEN,
        },
      }
    ).then((res) => setData(res.repository.discussions.nodes));
  }, []);

  console.log(data);

  return (
    <div className="App">
      {data &&
        data.map((v, id) => (
          <div key={id}>
            <h3>{v.title}</h3>
            <div>{v.createdAt}</div>
            <div>{v.author.login}</div>
          </div>
        ))}
    </div>
  );
};

export default App;
