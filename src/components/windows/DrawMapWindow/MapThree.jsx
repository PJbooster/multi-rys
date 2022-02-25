import {Box, Grid, GridItem} from "@chakra-ui/layout";
import {useState} from "react";

export default function MapThree({draws, n = 80}) {

    const [numbers, setNumbers] = useState([]);

    const initNumbers = () => {
        let numbersArray = [];

        for(let i = 0; i < 80; i++) {
            numbersArray.push(0);
        }

        draws.map((draw) => {
            draw.results.map((result) => {
                numbersArray[result-1]++;
            })
        })

        return numbersArray;
    }

    useState(() => {
        setNumbers(initNumbers());
    }, [])

    const getMax = () => {
        return Math.max(...numbers)
    }

    const getMin = () => {
        return Math.min(...numbers)
    }

    return (
        <>
            { numbers.length === 80 &&
                <Box display="flex">
                    <Box width="400px" sx={{margin: '20px'}} display="flex">
                        <Box width="90%">

                        </Box>
                        <Box width="10%">
                            <Box width="20px" height="100%" backgroundImage={`linear-gradient(rgb(${getMin()}, ${getMin()}, ${getMin()}), rgb(${getMax()}, ${getMax()}, ${getMax()}))`} borderRadius="50px">
                            </Box>
                        </Box>
                    </Box>
                    <Box width="300px">
                        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                            {[...Array(80)].map((e, i) => (
                                <GridItem>
                                    <Box
                                        w={30}
                                        h={30}
                                        bgColor={`rgb(${250 - numbers[i]}, ${250 - numbers[i]}, ${250 - numbers[i]})`}
                                        color="#ffffff"
                                    >
                                        <Box p={5}>{i+1}</Box>
                                    </Box>
                                </GridItem>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            }
        </>
    );
}