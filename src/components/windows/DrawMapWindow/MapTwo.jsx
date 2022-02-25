import {Box, Grid, GridItem} from "@chakra-ui/layout";
import moment from "moment";

export default function MapTwo({draws, n = 80, i = 1}) {

    const checkNumberInDraw = (draw, number) => {
        return draw.results.includes(number);
    }

    return (
        <>
            {draws &&
                <Box width="800px">
                    <Grid templateColumns='repeat(81, 1fr)' gap={1}>
                        {[...Array(81)].map((e, i) => (
                            <>
                                <GridItem>
                                    {((i === 1 || i % 10 === 0) && (i !== 0)) && (
                                        <Box sx={{fontSize: '8px', paddingBottom: '5px'}}>{i}</Box>
                                    )}
                                </GridItem>
                            </>
                        ))}
                        {[...Array(50)].map((e, i) => (
                            <>
                                <GridItem w='100%' pr={5}>
                                    {(i === 0 || (i+1) % 10 === 0) ? (
                                        <Box sx={{fontSize: "8px"}}>{moment(draws[i].data).format('DD-MM-YYYY')}</Box>
                                    ) : (
                                        <Box></Box>
                                    )}
                                </GridItem>
                                {[...Array(n)].map((e, j) => (
                                    <GridItem w='100%'>
                                        <Box w={7} h={7} bgColor={checkNumberInDraw(draws[i], (j + 1)) ? `red` : 'white'} m={0.5}>
                                        </Box>
                                    </GridItem>
                                ))}
                            </>
                        ))}
                    </Grid>
                </Box>
            }
        </>
    );
}


// <Chip
//     key={`num${i}`}
//     sx={{width: '30px'}}
//     color={checkNumberInDraw(draw, (i + 1)) ? `error` : 'default'}
//     label={checkNumberInDraw(draw, (i + 1)) ? `${i + 1}` : '♦'}
//     size="small"
// />