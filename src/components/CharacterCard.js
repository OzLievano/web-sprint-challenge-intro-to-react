import React, { Component,useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,CardHeader
  } from 'reactstrap';
import styled from 'styled-components';

const DivInfo = styled.div`
  font-size:2em;
  margin-bottom:1%;
`;

const CharacterCard = (props) =>{
    const [info,setInfo] = useState('');

    const showInfo = () =>{
        let text = document.querySelector('.card p')
        setInfo(`${props.character.name} weighs ${props.character.mass} kg and is ${props.character.height} cm's tall with ${props.character.hair_color} hair and ${props.character.skin_color} skin`) 
    }
    const removeInfo = () =>{
        let text = document.querySelector('.card')
        setInfo('') 
    }


    return (
        <div>
            <Card>
                <CardHeader>{props.character.name}</CardHeader>
                    <div className="card">
                        <CardBody>
                            <DivInfo>{info}</DivInfo>
                            <Button color="warning" onClick={showInfo}>Show Info</Button>
                            <Button color="primary" onClick={removeInfo}>Hide Info</Button>
                        </CardBody>
                    </div>
            </Card>
        </div>
    )
}


export default CharacterCard;