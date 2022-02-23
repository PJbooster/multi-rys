import {Box} from "@mui/material";
import * as React from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabPanel, TabList } from '@material-ui/lab';
import MapOne from "./MapOne";

const tabs = [
    {
        label: 'map_one',
        value: '1',
        component: MapOne
    },
    {
        label: 'map_two',
        value: '2',
        component: MapOne // TODO: change
    }
]

export default function DrawMapWindow() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {tabs.map((tab, index) => (
                                <Tab key={`tab${index}`} label={tab.label} value={tab.value} />
                            ))}
                        </TabList>
                    </Box>
                    {tabs.map((tab, index) => (
                        <TabPanel key={`tabpanel${index}`} value={tab.value}><tab.component /></TabPanel>
                    ))}
                </TabContext>
            </Box>
        </>
    );
}