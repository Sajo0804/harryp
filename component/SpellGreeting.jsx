import React from 'react';
import { css } from '@emotion/css'

//rubrik
const SpellGreeting = () => {
    return (
        <div>
            {<h3 className={css`  
            color: dark;
            margin-top:60px;
  font-family: fantasy;
  font-size: xx-large;`}>Passa på att lära dig lite trollformler</h3>}
        </div>
    );
};

export default SpellGreeting;