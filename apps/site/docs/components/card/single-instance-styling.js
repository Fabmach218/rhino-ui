import { Box } from '@rhino-ui/components/src/components/box/box';
import { Card } from '@rhino-ui/components/src/components/card/card';

export default function SingleInstanceStyling() {
    return (
        <Box gap="xl">
            <Card>
                <Card.Section>Default appearance</Card.Section>
                <Card.Section>Default appearance</Card.Section>
                <Card.Footer>footer</Card.Footer>
            </Card>
            <Box
                gap="xl"
                style={{
                '--card-background-color': 'var(--color-brand-tertiary-50)',
                '--card-footer-background-color': 'var(--color-brand-tertiary-900)',
                '--card-border-radius': 'var(--size-border-radius-lg)',
                '--card-section-border-color': 'var(--color-brand-tertiary-100)',
                '--card-box-shadow': '0',
                }}
            >
                <Card>
                    <Card.Section>Themed card using component design tokens</Card.Section>
                    <Card.Section>Themed card using component design tokens</Card.Section>
                    <Card.Footer color="white">footer</Card.Footer>
                </Card>
                <Card shadow="xl" radius="sm" background="secondary-50">
                    <Card.Section>BoxProps are used instead of tokens</Card.Section>
                    <Card.Section borderWidth="sm 0 0 0" borderColor="secondary-100">
                        BoxProps are used instead of tokens
                    </Card.Section>
                    <Card.Footer background="secondary-900" color="grey-100">
                        footer
                    </Card.Footer>
                </Card>
            </Box>
        </Box>
    )
}