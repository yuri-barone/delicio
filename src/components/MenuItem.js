import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Menu.css';

class MenuItem extends Component {
    fullScreen(){
        console.log("i've tried")
        document.documentElement.webkitRequestFullScreen()
      }

        
    render() {
        return (
            <div className="padding-left">
            <Card style={{minHeight:"583.34px"}} >
                <CardMedia
                    component="img"
                    height="340"
                    image={this.props.imgURL}
                    className="media"
                    onClick={this.fullScreen}
                />
                <CardContent>
                    <Typography gutterBottom variant="title" component="h4">
                        {this.props.name}
                    </Typography>
                    <Typography className="min-height" component="p">
                        {this.props.description}
                    </Typography>
                    
                    <Typography align="right" color="primary" variant="headline" component="h2">
                        {this.props.price}
                    </Typography>
                </CardContent>


            </Card>
            </div>






        );
    }
}

export default MenuItem;