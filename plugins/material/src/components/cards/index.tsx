import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import data from "@public/meta.json";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontWeight: 500
    },
    main: {
        fontWeight: "lighter"
    },
    pos: {
        marginBottom: 12,
    },
});

export const Cards: React.FC = (context) => {
    console.log(context);
    const classes = useStyles();
    return (
        <div className={'row'}>
            {(data?.plugins ?? []).map((plugin) => (
                <div key={plugin.name} className={'col s3'}>
                    <Card variant={'outlined'}>
                        <CardContent>
                            <Typography variant={'h5'} gutterBottom className={classes.title}>
                                {plugin.name}
                            </Typography>
                            <Typography variant={'body2'} component={'p'} className={classes.main}>
                                {plugin.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="primary" size={'small'} href={plugin.url}>Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    )
}



