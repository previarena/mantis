import React from "react";
import Table from '@mantis/table';
import ThemeKnob from "../../Themes/ThemeKnob";
import { withKnobs } from "@storybook/addon-knobs";

export const Simple = (args) => {

    const isLoading = false
    const headers = [
        {
            displayTitle: "Country",
            keyName: 'country'
        },
        {
            displayTitle: "Population",
            keyName: 'population'
        }
    ]
    const tableData = [
        {
            country: "Chile",
            population: '17.000.000'
        },
        {
            country: "Perú",
            population: '32.000.000'
        }
    ]

    return <ThemeKnob>
        <Table 
            headers={headers}
            data={tableData}
            isLoading={isLoading}
        />
        <br/>
        <br/>
        <br/>
        <Table 
            headers={headers}
            data={tableData}
            isLoading={!isLoading}
        />
        <br/>
        <br/>
        <br/>
        <Table 
            headers={headers}
            data={[]}
            isLoading={!isLoading}
        />
    </ThemeKnob>

}

const args = {
    isLoading: {
        name: 'isLoading',
        type: { name: 'string', required: true },
        defaultValue: true,
        description: 'Loading indicator',
        control: {
            type: null
        }
    },
    data: {
        name: 'data',
        type: { name: 'array', required: false },
        description: 'The data in rows',
        control: {
            type: null
        }

    },
    headers: {
        name: 'headers',
        type: { name: 'array', required: false },
        description: 'The header in rows',
        control: {
            type: null
        }

    },
}

export default {
    title: "Components/Table",
    argTypes: args,
    decorators: [withKnobs]
};