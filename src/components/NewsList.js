import { useEffect } from "react";
import NewsTile from "./NewsTile";
import {Grid, Typography} from '@material-ui/core';
const  NewsList = ({data}) => {
    useEffect(()=>{
     localStorage.setItem('newsArray',JSON.stringify(data));
    },[data])
    return (

       (data && data.map((singleNews,i)=>(
            singleNews && (
        <div style={{margin:25}} key={i} >
           <NewsTile news={singleNews}   />
           </div>
        )) )) ||
        
        (
        <Grid item>
            <Typography>Loading...</Typography>
            </Grid>

           )
    
     );
}
 
export default NewsList ;