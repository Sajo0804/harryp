import React from 'react';
import { css } from '@emotion/css'

//rubrik
const CharacterGreeting = () => {
    return (
        <div>
            {<h3 className={css`  
            color: dark;
            margin-bottom 50px;
  font-family: fantasy;
  font-size: xx-large;`}>Välkommen att bläddra runt bland karaktärerna i Harry Potter</h3>}
        </div>
    );
};

export default CharacterGreeting;