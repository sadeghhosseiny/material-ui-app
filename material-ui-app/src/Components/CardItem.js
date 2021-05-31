import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import { IconButton, Paper } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';

const useStyle = makeStyles((theme)=>({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },

      card:{
        transition: "transform 0.5s",
        transition:"0.5s",
        "&:hover":{
          transform: "scale(1.2)",
          boxShadow:"3px 3px 3px 5px rgb(0.5, 0.5, 0, 0.5)"
        }
      },

      link:{
        textDecoration:"none"
      }
}))

function CardItem({data}) {
    const classes = useStyle();
    const [expand, setExpand] = useState();

    const handleExpand = () => {
        setExpand(!expand);
    }

    const exe = () => {
      console.log("<<<<<<clicked>>>>>>>>>>")
            
      }
    

    return (
        <div>
            <Card key={data.id} className={classes.card} onClick={() => exe()}>
                <CardContent content="p">
                  {data.title}
                </CardContent>
                <CardActions disableSpacing>             
                    <Link className={classes.link} to="/CardPage">
                      <Button size="small" variant="contained" color="secondary">
                        Go to card
                      </Button>
                    </Link>
                  <IconButton className={clsx(classes.expand, {
                    [classes.expandOpen]: expand,
                  })}
                  onClick={handleExpand}
                  aria-expanded={expand}
                  aria-label="show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse key={data.id} in={expand} timeout={250} unmountOnExit>
                  <CardContent>
                    <Typography>
                      {data.body}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
        </div>
    )
}

export default CardItem
