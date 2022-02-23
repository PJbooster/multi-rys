import {Grid, GridItem} from "@chakra-ui/layout";
import {Chip} from "@mui/material";
import {useEffect, useState} from "react";
import {getLotto} from "../api/lotto";
import {GAME_MULTI_MULTI} from "../../../app/def";

export default function MapOne({n = 80, i = 1}) {

    const [draws, setDraws] = useState(null);

    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setIsFetching(true);
            const data = await getLotto(GAME_MULTI_MULTI, 1, 10, 'drawDate');
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
            })
        })

        return drawsArray;
    }

    const checkNumberInDraw = (draw, number) => {
        return draw.results.includes(number);
    }

    return (
        <>
            {draws &&
                <Grid templateColumns='repeat(80, 1fr)' gap={1}>
                    {draws.map(draw => (
                        [...Array(n)].map((e, i) => (
                            <GridItem w='100%'>
                                <Chip
                                    key={`num${i}`}
                                    sx={{width: '30px'}}
                                    color={checkNumberInDraw(draw, (i + 1)) ? `error` : 'default'}
                                    label={checkNumberInDraw(draw, (i + 1)) ? `${i + 1}` : '♦'}
                                    size="small"
                                />
                            </GridItem>
                        ))
                    ))}
                </Grid>
            }
        </>
    );
}