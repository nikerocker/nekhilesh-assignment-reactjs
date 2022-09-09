import React from "react";

import Items from './Items'
const styles = {
  margin: "50px auto",
  fontFamily: "sans-serif",
  textAlign: "left",
};
const Task = ({data,fullData, setFullData}) => {
  const showMoreData = () => {
    setFullData(!fullData)
   }
   console.log(data)
  return (
    <div>
      <h1>Task Data</h1>
      <button type="button" onClick={() => showMoreData()}>More/Less</button>
      <table border="1" style={styles}>
        <thead>
          <th>• name</th>
          <th>🌟 stars</th>
          <th>🍴 forks</th>
          <th>🍴 Repo</th>
          {data.length > 0 && data.map((obj,id) => {
            return <tr key={id}>
                <td>{obj.name}</td>
                <td>{obj.stargazers_count}</td>
                <td>{obj.forks}</td>
                <td>{obj.url}</td>
            </tr>
            
        })}
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
};
export default Items(Task);
