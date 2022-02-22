import {Box, Chip} from "@mui/material";
import {indigo} from "@mui/material/colors";
import {useTranslation} from "react-i18next";

export default function DataTile({node}) {

    const color = indigo[200];
    const {t} = useTranslation();

    const fontSize = '14px';

    return (
        <>
            {node &&
                <Box m={1} sx={{border: `1px solid ${color}`, borderRadius: 2}}>
                    <Box display="flex" p={1}>
                        <Box sx={{width: '20%', fontSize: fontSize, fontWeight: 'bold'}}>{node.drawSystemId.toString()}</Box>
                        <Box sx={{width: '80%'}} display="flex" justifyContent="flex-end">
                            {node.resultsJson.map((number, index) => (
                                <Chip key={`ssrr${index}`} label={number.toString()} size="small"/>
                            ))}
                        </Box>
                    </Box>
                    <Box display="flex" p={1}>
                        <Box sx={{width: '20%', fontSize: fontSize}}>{t('date')}: {node.drawDate}</Box>
                        <Box sx={{width: '20%'}} display="flex">
                            <Box sx={{fontSize: fontSize}} pl={5}>{t('bonus')}:&emsp;</Box>
                            {node.specialResults.map((number, index) => (
                                <Chip key={`ssr${index}`} label={number} size="small"/>
                            ))}
                        </Box>
                        <Box sx={{width: '60%'}} display="flex" justifyContent="flex-end" px={1}>
                            <Box display="flex">
                                <Box sx={{fontSize: fontSize}}>{t('super_szansa')}:&emsp;</Box>
                                {node.ssResultsJson.map((number, index) => (
                                    <Chip key={`ss${index}`} label={number} size="small" variant="outlined"/>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
}