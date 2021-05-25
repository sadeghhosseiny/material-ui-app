import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import { Grid, IconButton, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}))

function CardItem({data}) {
    const classes = useStyle();
    const [expand, setExpand] = useState();

    const handleExpand = () => {
        setExpand(!expand);
    }

    return (
        <div>
            <Card key={data.id} className="ic">
                <CardContent content="p">
                  {data.title}
                </CardContent>
                <CardActions>
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