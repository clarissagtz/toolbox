import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'
import Ctemp from "./Ctemp"


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from "@material-ui/core/styles"
//import pictures 
import logo from "../images/reddit.jpeg"
import youtube from "../images/youtu.jpeg"
import canvas from "../images/canvas.jpeg"
import fallenstar from "../images/fallenstar.jpeg"
import gradescope from "../images/fg.png"
import Handshake from "../images/handshakeucsd.png"
import gmail from "../images/gmail.jpeg"
import triton from "../images/ucsd.png"
import bear from "../images/bear.jpg"
import sungod from "../images/sungod.jpeg"
import google from "../images/goog.png" // googless.png also works 
import github from "../images/github.png" // i also have gitlogo but is gway need to decide which one 

const useStyles = makeStyles ({
    gridContainer:{
        paddingLeft: "50px",
        paddingRight: "50px"
    }
})
const Dtemp = () => {
    const history = useHistory();
    const classes = useStyles();

    
    return (
        <div>
            <header>
                <Header />
            </header>
            <div style={{paddingTop:"3%"}}>
                <Grid 
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
            allignItems="Center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <a href="https://a5.ucsd.edu/tritON/profile/SAML2/Redirect/SSO?execution=e4s1" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                        <CardActionArea>
                            <CardMedia
                            style={{borderRadius: '10px',  margin: "auto"}}
                            component="img"
                            height="140"
                            img src={fallenstar} 
                            alt="fallen Star"
                            />
                            <CardContent>
                                <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                    WebReg 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://canvas.ucsd.edu/" target="_blank" style={{textDecoration: "none"}}>
                    <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                    <CardActionArea>
                        <CardMedia
                        style={{borderRadius: '10px',  margin: "auto"}}
                        component="img"
                        height="140"
                        img src={canvas} 
                        alt="canvas logo"
                        />
                        <CardContent>
                            <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                Canvas
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.reddit.com/" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={logo} 
                                alt="reddit logo"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Reddit
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <a href="https://www.gradescope.com" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={gradescope}
                                alt="gradescope logo"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Gradescope
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://www.youtube.com/" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={youtube} 
                                alt="reddit logo"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Youtube
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://ucsd.joinhandshake.com" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={Handshake} 
                                alt="HANDSHAKE"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Handshake
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://ucsd.joinhandshake.com" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={gmail} 
                                alt="Gmail Logo"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Gmail
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://students.ucsd.edu/" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={triton} 
                                alt="trident"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        TritonLink
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://a5.ucsd.edu/tritON/profile/SAML2/Redirect/SSO?execution=e2s1" target="_blank" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={bear} 
                                alt="bear ucsd"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Academic History
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://github.com/" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={github} 
                                alt="GithubLogo"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        GitHub
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://a5.ucsd.edu/tritON/profile/SAML2/Redirect/SSO?execution=e3s1" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={sungod} 
                                alt="sungod"
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Degree Audit
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                <a href="https://a5.ucsd.edu/tritON/profile/SAML2/Redirect/SSO?execution=e3s1" target="_blank" style={{textDecoration: "none"}}>
                        <Card sx={{ maxWidth: 345 }} style={{borderRadius: '16px', color: "white", background:"#182B49", margin:"auto"}} > 
                            <CardActionArea>
                                <CardMedia
                                style={{borderRadius: '10px'}}
                                component="img"
                                height="140"
                                img src={google} 
                                alt="Google "
                                />
                                <CardContent>
                                    <Typography component="div"  style={{fontFamily:"Maiden Orange", fontSize: "25px"}}>
                                        Google
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </a>
                </Grid>

            </Grid>
            
               
            </div>
            <Button variant="btn primary" className="mainButton" onClick={() => history.push("/")}>Go to index </Button>
            <div className='footer-container' style={{position:'relative', marginTop:"12vh"}}>
            <Footer />
            </div>
        </div>
    );
}
export default Dtemp;