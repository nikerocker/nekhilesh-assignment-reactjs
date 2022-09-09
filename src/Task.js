import React, { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  margin: "50px auto",
  fontFamily: "sans-serif",
  textAlign: "left",
};
const Task = () => {
  const [resp, setResp] = useState([]);
  const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";

  useEffect(() => {
    (async () => {
      let res = await getReactRepositories();
      console.log(res);
      setResp(res);
    })();
  }, []);

  const getReactRepositories = () =>
    axios
      .get(SEARCH_ENDPOINT)
      .then((result) => result.data.items)
      .then((repos) =>
        repos.map(({ forks, name, stargazers_count, html_url }) => ({
          forks,
          name,
          stars: stargazers_count,
          url: html_url,
        }))
      );

  return (
    <div>
      <h1>Task Data</h1>
      <table border="1" style={styles}>
        <thead>
          <th>• name</th>
          <th>🌟 stars</th>
          <th>🍴 forks</th>
          {/* <th>url</th> */}
        </thead>
        <tbody>
          {resp.length > 0 &&
            resp.map((obj, key) => {
              return (
                <tr key={key}>
                  <td>• {obj.name}</td>
                  <td>🌟 {obj.stars}</td>
                  <td>🍴 {obj.forks}</td>
                  {/* <td>{obj.url}</td> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Task;
