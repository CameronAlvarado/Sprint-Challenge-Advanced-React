import React, { useState, useEffect } from 'react';
import { Container, Grid } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import PlayerCard from './PlayerCard';

function PlayerList(props) {

    // const [players, setPlayers] = useState([])

    useEffect(() => {
        // const getPlayers = () => {
        //   axios
        //     .get('http://localhost:5000/api/players')
        //     .then(response => {
        //         console.log(response.data)
        //         setPlayers(response.data);
        //     })
        //     .catch(error => {
        //       console.error('Server Error', error);
        //     });
        // }
        // getPlayers();
      }, []);

    return (
        <section>
            <Container text>
                <Grid relaxed columns={2} divided="vertically">
                    <Grid.Row padded="vertically" columns={2}>
                        <h2>playerlist componenet</h2>
                        {console.log(props.playerData)}
                        {props.playerData.map(player => {
                            return(<PlayerCard playerData={player}/>)
                        })}
                    </Grid.Row>
                </Grid>
            </Container>
      </section>
    );
  }
  
  export default PlayerList;