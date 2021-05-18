import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import data from "@public/meta.json";

export const Cards: React.FC = () => {
    return (
        <div>
            {(data?.plugins ?? []).map(plugin => (
                <Card>
                    <CardContent>
                        <h1>{plugin.name}</h1>
                        <p>{plugin.description}</p>
                    </CardContent>
                    <CardActions>
                        <Button size={'small'}>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}



