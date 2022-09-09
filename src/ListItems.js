import React,{useEffect,useState} from 'react'

const ListItems = (props) => {
    useEffect(() => {
        debugger;
        console.log("List",props.resp)
    },[props.resp])
    
    return (
        <>
        <table>
                <tbody>
            {
                        props.resp.length > 0 && props.resp.map(obj => {
                            return <tr>
                                <td>{obj.name}</td>
                                <td>{obj.stargazers_count}</td>
                                <td>{obj.forks}</td>
                                <td>{obj.html_url}</td>
                            </tr>
                        })
                    }  
                    </tbody>
            </table>      
        </>
    )
}
export default ListItems