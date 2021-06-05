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
import {Link} from 'react-router-dom';
import {myStyleCss} from './CardItemJss';


function CardItem({data}) {
    const classes = myStyleCss();
    const [expand, setExpand] = useState();

    const handleExpand = () => {
        setExpand(!expand);
    }

    return (
       <div>
            <Card key={data.id} className={classes.card}>
                <CardContent content="p">
                  {data.title}
                </CardContent>
                <CardActions disableSpacing>             
                    <Link className={classes.link} to={`/CardPage/${data.id}`}>
                      <Button className={classes.buttonTitle} size="small" variant="contained" color="secondary">
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
                    <Typography className={classes.bodyTitle}>
                      {data.body}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
        </div>
    )
}

export default CardItem
