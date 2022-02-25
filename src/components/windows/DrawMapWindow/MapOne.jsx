import {Box, Grid, GridItem} from "@chakra-ui/layout";
import {Chip} from "@mui/material";
import moment from "moment";
import {grey} from "@mui/material/colors";

export default function MapOne({draws, n = 80, i = 1}) {

    const bgColor = grey[50];

    const checkNumberInDraw = (draw, number) => {
        return draw.results.includes(number);
    }

    return (
        <>
            {draws &&
                <Box
                    sx={{
                        width: '800px' ,
                        overflowX: 'scroll',
                        display: 'flex',
                        scrollbarWidth: 'thin',
                    }}
                >
                    <Grid templateColumns='repeat(81, 1fr)' gap={1}>
                        <>
                            {[...Array(15)].map((e, i) => (
                                <>
                                    <GridItem>
                                        <Box
                                            p={3}
                                            pr={5}
                                            bgColor={bgColor}
                                        >
                                            {moment(draws[i].data).format('DD-MM-YYYY')}
                                        </Box>
                                    </GridItem>
                                    {[...Array(n)].map((e, j) => (
                                        <GridItem w='100%'>
                                            <Chip
                                                key={`num${j}`}
                                                sx={{width: '30px'}}
                                                color={checkNumberInDraw(draws[i], (j + 1)) ? `error` : 'default'}
                                                label={checkNumberInDraw(draws[i], (j + 1)) ? `${j + 1}` : '♦'}
                                                size="small"
                                            />
                                        </GridItem>
                                    ))}
                                </>
                            ))}
                        </>
                    </Grid>
                </Box>
            }
        </>
    );
}