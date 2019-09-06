import React, { useState, useEffect } from 'react';
import { Card, Grid, Image } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';

function PlayerCard(props) {

    return (
      <div className="player-card">
          <h2>playerCard componenet</h2>
          <Grid.Column>
            <Card color='light green'>
                {/* <Image src={} size='medium' /> */}
                <Card.Content>
                    <Card.Header>
                        {props.playerData.name}
                    </Card.Header>
                    <Card.Meta>
                        Login: {props.playerData.id}
                    </Card.Meta>               
                    <Card.Description>
                        Location: {props.playerData.country}
                    </Card.Description>
                    <Card.Description>
                        Followers: {props.playerData.searches}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
      </div>
    );
  }
  
  export default PlayerCard;