import { Box } from '@rhino-ui/components/src/components/box/box';
import { Card } from '@rhino-ui/components/src/components/card/card';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';

export default function FullBleedPhoto() {
    return (
        <Box
            alignItems="center"
            alignContent="center"
            padding="2xl"
            background="grey-lightest"
        >
            <Card width="300px">
                <Card.Section padding="0" overflow="hidden" height="300px">
                <img
                    src="https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
                    data-chromatic="ignore"
                />
                </Card.Section>
                <Card.Section childGap="xs">
                    <Heading>Headline</Heading>
                    <Box as="p">This is the body copy of the card.</Box>
                </Card.Section>
            </Card>
        </Box>
    )
}