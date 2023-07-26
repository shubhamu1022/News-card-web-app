import { useEffect, useState, React } from "react";
import NewsList from "../components/NewsList";
import { Grid } from "@material-ui/core";
import { Backdrop, CircularProgress } from "@mui/material";

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleClose = () => {
        setLoading(false);
    };
    const [dataStatus, setDataStatus] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(
            "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=20&withThumbnails=true&location=in",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "",
                    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                setNews(data.value);
                setLoading(false);
                setDataStatus(true);
            });
    }, []);
    return (
        dataStatus && (
            <Grid
                container
                direction="row"
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                className=" home_grid"
            >
               
         <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading} onClick={handleClose}>
         <CircularProgress color="inherit" />
         Fetching Data...
        </Backdrop>
                {<NewsList data={news} />}
            </Grid>
        )
    );
};

export default Home;
