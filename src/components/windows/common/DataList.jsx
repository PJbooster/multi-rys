import DataTile from "./DataTile";
import {Box, CircularProgress, IconButton} from "@mui/material";
import {useEffect, useState} from "react";
import {getLotto} from "../api/lotto";
import {GAME_MULTI_MULTI} from "../../../app/def";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function DataList() {

    const [draws, setDraws] = useState(null);
    const [index, setIndex] = useState(1);
    const [size] = useState(5);

    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        fetchData();
    }, [index])

    const fetchData = async () => {
        try {
            setIsFetching(true);
            const data = await getLotto(GAME_MULTI_MULTI, index, size, 'drawDate');
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
                drawSystemId: result.drawSystemId,
                drawDate: result.drawDate,
                gameType: result.gameType,
                resultsJson: result.results[0].resultsJson,
                specialResults: result.results[0].specialResults,
                ssResultsJson: result.results[1].resultsJson
            })
        })

        return drawsArray;
    }

    const incrementIndex = () => {
        setIndex(index + 1);
    }

    const decrementIndex = () => {
        if (index - 1 <= 0) setIndex(1);
        else setIndex(index - 1)
    }

    const spinner = (<><CircularProgress /></>)

    return (
        <>
            {draws ? (
                <>
                    <Box>
                        {draws.map((draw, index) => (
                            <DataTile key={`tile${index}`} node={draw}/>
                        ))}
                    </Box>
                    <Box width="100%" display="flex">
                        <Box width="50%" display="flex">
                            <Box p={1} sx={{fontSize: '20px'}}>
                                {(index - 1) * size} - {(index - 1) * size + 5}
                            </Box>
                        </Box>
                        <Box width="50%" display="flex" justifyContent="flex-end" p={1} pr={3}>
                            <Box pt={1} pr={1}>
                                {isFetching && <CircularProgress size={20} />}
                            </Box>
                            <IconButton
                                size="small"
                                onClick={decrementIndex}
                                disabled={index === 1}
                            >
                                <ArrowBackIosIcon />
                            </IconButton>
                            <IconButton
                                size="small"
                                onClick={incrementIndex}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </>
            ) : (
                spinner
            )}
        </>
    );
}