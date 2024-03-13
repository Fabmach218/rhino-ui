import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";
import { Card } from "@rhino-ui/components/src/components/card/card";
import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { Table } from "@rhino-ui/components/src/components/table/table";

export function ProfileCardExample() {
    return (
        <Card>
            <Card.Header title="Profile Card Example">
                <Box as="p" color="grey" fontSize="sm">
                    Personal and Contact Details
                </Box>
            </Card.Header>
            <Box overflow="hidden" height="130px">
                <img src="https://images.unsplash.com/photo-1555412654-72a95a495858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
            </Box>
            <Card.Section title="profile">
                <Box direction="row" gap="lg">
                    <Box flex="auto" gap="lg">
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Full Name
                            </Box>
                            <Box>Jessica Ramirez</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Email
                            </Box>
                            <Box>jw1416@rhinolabs.agency</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Phone
                            </Box>
                            <Box>(123) 555-5555</Box>
                        </Box>
                    </Box>
                    <Box flex="auto" gap="lg">
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Preferred Language
                            </Box>
                            <Box>English</Box>
                        </Box>
                        <Box gap="2xs">
                            <Box fontSize="sm" color="grey">
                                Country
                            </Box>
                            <Box>United States</Box>
                        </Box>
                    </Box>
                </Box>
            </Card.Section>
            <Card.Section title="site location">
                <Box gap="2xs">
                    <Box>12345 Jones Rd</Box>
                    <Box>Seattle, WA 98123</Box>
                </Box>
            </Card.Section>
            <Card.Footer>
                <Box
                    display="flex"
                    direction="row"
                    justify="between"
                    overflow="hidden"
                    gap="md"
                >
                    <Box direction="row" gap="sm">
                        <Button size="sm" variant="light">
                            Edit
                        </Button>
                        <Button size="sm" variant="light">
                            Remove
                        </Button>
                    </Box>
                    <Button variant="danger" isOutlined size="sm">
                        Delete
                    </Button>
                </Box>
            </Card.Footer>
        </Card>
    )
}

export function SignUpForm() {
    return (
        <Box
            alignItems="center"
            alignContent="center"
            padding="2xl"
            background="grey-lightest"
        >
            <Card maxWidth="4xl">
                <Card.Section padding="3xl">
                    <Box gap="xl">
                        <Box gap="sm" alignItems="center">
                            <Heading as="h1" size="xl">
                                Sign Up
                            </Heading>
                            <Box as="p" color="grey" fontSize="sm">
                                Create your account to create leads and proposals
                            </Box>
                        </Box>
                        <Box gap="lg">
                            <TextInput
                                id="email"
                                value=""
                                label="Email Address"
                                onChange={() => null}
                            />
                            <TextInput
                                id="password"
                                type="password"
                                value=""
                                label="Password"
                                onChange={() => null}
                            />
                            <Button fullWidth variant="primary">
                                Sign Up
                            </Button>
                        </Box>
                        <Box alignItems="center" fontSize="sm" color="grey">
                            <p>
                                Already have an account?{' '}
                                <a href="#" className="font-color-primary">
                                    Log in
                                </a>
                                .
                            </p>
                        </Box>
                    </Box>
                </Card.Section>
            </Card>
        </Box>
    )
}

export function CardWithTable() {
    const columnConfig = [
        { heading: 'ID', dataKey: 'id' },
        { heading: 'Color', dataKey: 'color' },
        { heading: 'Flavor', dataKey: 'flavor' },
      ];
      const tableData = [
        { id: 1, color: 'red', flavor: 'vanilla' },
        { id: 2, color: 'blue', flavor: 'chocolate' },
        { id: 3, color: 'green', flavor: 'strawberry' },
      ];
      return (
        <Card>
          <Card.Header title="Flavor Table" />
          <Card.Section padding="0">
            <Table rowKey="id" columns={columnConfig} rows={tableData} />
          </Card.Section>
        </Card>
      );
}

export function FullBleedPhoto() {
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

export function SingleInstanceStyling() {
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

export function DesignTokens() {
    const tokens = {
        '--card-background-color': '--color-brand-white-500',
        '--card-border-radius': '--size-border-radius-md',
        '--card-box-shadow': '--size-box-shadow-sm',
        '--card-subdued-background-color': '--color-brand-grey-50',
        '--card-section-border-color': '--color-brand-grey-100',
        '--card-section-subdued-border-color': '--color-brand-grey-100',
        '--card-footer-background-color': '--color-brand-grey-50',
      };
      return Object.entries(tokens).map(([name, entry], i) => (
        <tr key={i}>
          <td>
            <code>{name}</code>
          </td>
          <td>
            <code>{entry}</code>
          </td>
        </tr>
      ));
}