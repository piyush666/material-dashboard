import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import PYBarChart from './PYBarChart';
import PYPieChart from './PYPieChart';
import PYTable from './PYTable';

const App = (props) => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item xs={12} >
                    <FirstRow />
                </Grid>
                <Grid container item xs={12} >
                    <SecondRow />
                </Grid>
                <Grid container item xs={12} >
                    <ThirdRow />
                </Grid>
            </Grid>
        </div>
    );
}

function Items(props) {
    return (
        <>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.sub}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.sub}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}

const FirstRow = (props) => {

    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} sm={6} md={3} spacing={1}>
                <Items title=' Head Count' sub=' 100' />
            </Grid>
            <Grid container item xs={12} sm={6} md={3}>
                <Items title=' Average Employee age' sub='29 years' />
            </Grid>
            <Grid container item xs={12} sm={6} md={3}>
                <Items title=' Gender Diversity Ratio' sub='63.99%' />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card>
                    <PYPieChart inRadius={40} colorFill='#33B8FF' />
                </Card>
            </Grid>

        </Grid>
    )
}

const SecondRow = (props) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={8}>
                <Card>
                    <PYBarChart />
                </Card>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <PYPieChart colorFill='#FF5E33' />
                </Card>
            </Grid>

        </Grid>
    )
}

const ThirdRow = (props) => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={8}>
                <Card><PYTable /></Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <PYBarChart />
                </Card>
            </Grid>

        </Grid>
    )
}
export default App; 