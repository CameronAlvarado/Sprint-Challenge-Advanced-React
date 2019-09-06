import React from 'react';
import { Container, Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import PlayerCard from './PlayerCard';

function PlayerList(props) {


    return (
            <Container text>
                <Grid relaxed columns={3} divided="vertically">
                    <Grid.Row padded="vertically" columns={3}>
                        {/* {console.log(props.playerData)} */}
                        {props.playerData.map(player => {
                            return(<PlayerCard 
                                playerData={player}
                                key={player.id} />)
                        })}
                    </Grid.Row>
                </Grid>
            </Container>
    );
  }
  
  export default PlayerList;