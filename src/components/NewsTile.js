import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, Snackbar } from "@material-ui/core";
import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function NewsTile({ news }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const horizontal='left';
    const vertical='bottom';
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media} image={news.image.url} title={news.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {news.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        dangerouslySetInnerHTML={{ __html: `${news.description}` }}
                    ></Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                        navigator.clipboard.writeText(`${news.url}`);
                        setOpen(true);
                    }}
                >
                    Share
                </Button>
                <Button size="small" color="primary">
                    <Link href={news.url}> Learn More</Link>
                </Button>
            </CardActions>
            <Snackbar anchorOrigin={{vertical,horizontal}} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Link Copied!{" "}
                </Alert>
            </Snackbar>
        </Card>
    );
}

// import { Typography} from "@material-ui/core";

// const NewsTile = ({news}) => {
//     var newsContent;
//     if(news.content===null){
//         newsContent="";
//     }
//     else
//     {
//         newsContent=news.content;
//     }
//     let endindex = newsContent.indexOf('[');
//     newsContent = newsContent.slice(0,endindex);
//     newsContent = newsContent.substr(0,newsContent.length-3);
//     newsContent+="...";

//         return (

//       <div className="news_tile">
//             <img src={news.urlToImage} alt="" style={{maxHeight:100,maxWidth:"max-content"}} />
//             <br />
//             <Typography variant="h5" component="h2" className="news_typo"><b> <u>{news.title} </u></b><br/></Typography>
//             <br/>
//             <Typography variant="h6" component="h1" className="news_typo" dangerouslySetInnerHTML={{__html: newsContent+`<a href=${news.url}>More</a>`}}></Typography>
//            </div>

//     );
// }

// export default NewsTile;
