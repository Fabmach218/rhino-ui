import { Box } from '@rhino-ui/components/src/components/box/box';
import { Card } from '@rhino-ui/components/src/components/card/card';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';

export default function SignUpForm() {
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