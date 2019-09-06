import React from 'react';
import { Card, Grid } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';

function PlayerCard(props) {

    return (
          <Grid.Column>
            <Card color='green'>
                <Card.Content>
                    <Card.Header>
                        {console.log(props.playerData.name)}
                        {props.playerData.name}
                    </Card.Header>
                    <Card.Meta>
                        Id: {props.playerData.id}
                    </Card.Meta>               
                    <Card.Description>
                        Country: {props.playerData.country}
                    </Card.Description>
                    <Card.Description>
                        Searches: {props.playerData.searches}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
  }
  
  export default PlayerCard;