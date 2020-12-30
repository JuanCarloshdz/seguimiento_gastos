import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core'

import {Doughnut} from 'react-chartjs-2';

import useStyles from './styles';
import useTransaction from '../../useTransaction';


const Details = ({tittle}) => {

    const classes = useStyles();

    const  {  total, chartData } = useTransaction(tittle);

    return (
        <Card className={ tittle=== 'Income' ?  classes.income : classes.expense}>
            <CardHeader title={tittle} />
            <CardContent  >
                <Typography variant="h5">
                    ${total}
                </Typography>
                <Doughnut 
                    data={chartData} />*
            </CardContent> 
        </Card>
    )
}

export default Details;
