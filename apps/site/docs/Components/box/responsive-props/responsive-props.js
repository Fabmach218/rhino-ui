import { Box } from '@rhino-ui/components/src/components/box/box';

export default function ResponsiveProps() {
    return (
        <Box
            background="primary-100"
            borderColor="grey-300"
            padding={{ base: 'sm', tablet: 'md', desktop: 'lg', hd: 'xl' }}
            fontSize={{ base: 'md', tablet: 'lg', desktop: 'xl', hd: '3xl' }}
            borderWidth={{ base: 'sm', tablet: 'xs', desktop: 'md', hd: '0' }}
            textAlign={{ base: 'center', tablet: 'right', desktop: 'left' }}
        >
            <p>Resize the viewport to see how my appearance changes.</p>
        </Box>
    )
}