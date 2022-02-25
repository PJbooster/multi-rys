import {Box} from "@mui/material";
import * as React from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList } from '@material-ui/lab';
import MapOne from "./MapOne";
import {useEffect, useState} from "react";
import {getLotto} from "../api/lotto";
import {GAME_MULTI_MULTI} from "../../../app/def";
import TabPanel from "./TabPanel";
import {useTranslation} from "react-i18next";
import MapTwo from "./MapTwo";
import MapThree from "./MapThree";

const tabs = [
    {
        label: 'map_one',
        value: '1',
        component: MapOne
    },
    {
        label: 'map_two',
        value: '2',
        component: MapTwo // TODO: change
    },
    {
        label: 'map_three',
        value: '3',
        component: MapThree // TODO: change
    }
]

export default function DrawMapWindow() {

    const {t} = useTranslation();

    const [value, setValue] = React.useState('1');

    const [draws, setDraws] = useState(null);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setIsFetching(true);
            const data = await getLotto(GAME_MULTI_MULTI, 1, 500, 'drawDate');
            setDraws(parseDraws(data));
        } catch(e) {
            console.log(e);
        } finally {
            setIsFetching(false);
        }
    }

    const parseDraws = (rawDraws) => {
        if (!rawDraws?.items || !Array.isArray(rawDraws.items)) {
            throw Error('External API error.')
        }

        let drawsArray = [];

        rawDraws.items.map(result => {
            drawsArray.push({
                results: result.results[0].resultsJson,
                special: result.results[0].specialResults,
                data: result.drawDate,
            })
        })

        return drawsArray;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {tabs.map((tab, index) => (
                                <Tab key={`tab${index}`} label={t(tab.label)} value={tab.value} />
                            ))}
                        </TabList>
                    </Box>
                        <Box>
                            {tabs.map((tab, index) => (
                                <TabPanel
                                    key={`tab-panel${index}`}
                                    value={tab.value}
                                    index={value}
                                >
                                    <tab.component draws={draws} />
                                </TabPanel>
                            ))}
                        </Box>
                </TabContext>
            </Box>
        </>
    );
}
// .MuiTabPanel-root