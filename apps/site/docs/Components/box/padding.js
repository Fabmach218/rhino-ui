import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Padding() {
    return (
        <>
            <Box padding="lg" margin="sm 0" background="primary-lighter">
                lg padding
            </Box>
            <Box padding="lg md" margin="sm 0" background="primary-lighter">
                lg vertical and md horizontal
            </Box>
            <Box padding="0 2xl" margin="sm 0" background="primary-lighter">
                0 vertical and 2xl horizontal
            </Box>
            <Box padding="sm md 2xl" margin="sm 0" background="primary-lighter">
                sm top, md horizontal, 2xl bottom
            </Box>
            <Box padding="sm lg 2xl 0" margin="sm 0" background="primary-lighter">
                sm top, lg right, 2xl bottom, 0 left
            </Box>
        </>
    )
}