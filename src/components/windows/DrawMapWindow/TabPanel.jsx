import {Typography} from "@mui/material";
import {Box} from "@chakra-ui/layout";

export default function TabPanel({children, value, index, ...other}) {
    return (
        <>
            <Box
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box py={18} px={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </Box>
        </>
    );
}