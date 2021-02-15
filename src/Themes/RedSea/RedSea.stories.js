import React from "react";
import { redSeaData } from './RedSea' 

export default {
    title: 'Themes/RedSea',
};

export const RedSea = () => <div style={{
    display: 'flex',
    flexDirection: 'column',
}}>
    <h3 style={{
        textAlign: 'center'
    }}>Red Sea</h3>
    <div style={{
        display: 'flex',
        justifyContent: 'center'
    }}>
        <pre style={{
        backgroundColor: '#D1D1D0',
        fontFamily: 'Monaco, monospace',
        padding: '0 1em',
        maxWidth: 500,
        border: '1px solid black'
    }}><code style={{
        fontFamily: 'Monaco, monospace',
        lineHeight: '100%',
        letterSpacing: '-0.05em',
        wordBreak: 'normal'
    }}>{JSON.stringify(redSeaData,undefined, 2)}</code></pre>
    </div>
</div>
