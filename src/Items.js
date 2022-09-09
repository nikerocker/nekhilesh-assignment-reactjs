import React,{useEffect,useState} from 'react'
import axios from "axios";

const Items =(WrappedComponent) => {
    return function Items(props) {
        const [resp, setResp] = useState([]);
        const SEARCH_ENDPOINT = "https://api.github.com/search/repositories?q=react";
        const [fullData,setFullData] = useState(false)
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
            
       let data = !fullData ? resp.slice(0, 10) : resp
       return (
            <>
            {/* <table>
                    <tbody>
                {
                            
                        }  
                        </tbody>
                </table>       */}
                <WrappedComponent data={data} setFullData={setFullData} fullData={fullData}/>
            </>
        )
    }
}
export default Items