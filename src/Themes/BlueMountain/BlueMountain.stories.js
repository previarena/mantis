import React from 'react'
//import { prettyPrintJson } from 'pretty-print-json'; --delete
//import CodeBlock from 'react-copy-code'; --delete
import { blueMountainData } from './BlueMountain'

export default {
    title: 'Themes/BlueMountain',
};

// colors
const background = '#f5f5f5'
const warningLight = 'rgba(253, 200, 69, .3)'
const warningMain = 'rgba(253, 200, 69, .5)'
const warningDark = 'rgba(253, 200, 69, .7)'

// breakpoints
const xl = 1920;
const lg = 1920;
const md = 960;
const sm = 600;
const xs = 0;

export const BlueMountain = () => <div style={{
    display: 'flex',
    flexDirection: 'column',
}}>
    <h3 style={{
        textAlign: 'center'
    }}>Blue Mountain</h3>
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
    }}>{JSON.stringify(blueMountainData,undefined, 2)}</code></pre>
    </div>
</div>
