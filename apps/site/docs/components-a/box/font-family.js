import { Box } from "@rhino-ui/components/src/components/box/box";
import { FONT_FAMILY_VALUES } from '@rhino-ui/components/src/lib/tokens';

export default function FontFamily() {
    return (
        <>
            <Box fontFamily="body" margin="0 0 md 0" fontSize="xl">
                Body font
                <Box fontSize="sm">{FONT_FAMILY_VALUES['body'].value}</Box>
            </Box>
            <Box fontFamily="brand" margin="0 0 md 0" fontSize="xl">
                Brand Font
                <Box fontSize="sm">{FONT_FAMILY_VALUES['brand'].value}</Box>
            </Box>
            <Box fontFamily="monospace" margin="0 0 md 0" fontSize="xl">
                Monospace Font
                <Box fontSize="sm">{FONT_FAMILY_VALUES['monospace'].value}</Box>
            </Box>
        </>
    )
}