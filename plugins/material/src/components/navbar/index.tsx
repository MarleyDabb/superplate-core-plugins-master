import React from 'react';
import {AppBar, Button, CssBaseline, IconButton, Link, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link: {
            margin: theme.spacing(1, 1.5),
            color: 'white'
        },
    }),
);


export const NavigationBar: React.FC  = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Company Name
                    </Typography>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        About
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Link #2
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        Link #3
                    </Link>
                    <Button color="inherit" variant={'outlined'}>Login</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
};

