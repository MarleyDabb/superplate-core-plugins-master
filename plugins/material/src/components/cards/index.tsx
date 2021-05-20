import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Cards: React.FC = (context) => {
    console.log(context);
    return (
        <Card>
            <CardContent>
                <Typography>
                    Test
                </Typography>
            </CardContent>
            <CardActions>
                <Button size={'small'}>Learn More</Button>
            </CardActions>
        </Card>
    )
}



