import BrowserOnly from '@docusaurus/BrowserOnly';
import { BrowserRouter, Link } from 'react-router-dom';
import { Alert } from '@rhino-ui/components/src/components/alert/alert';
import { Box } from "@rhino-ui/components/src/components/box/box";
import { Button } from "@rhino-ui/components/src/components/button/button";

export function Variants() {
    return (
        <Box alignItems="center" gap="sm" direction="row">
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Box background="grey-500" padding="2xs">
                <Button variant="white">White</Button>
            </Box>
        </Box>
    )
}

export function Outlined() {
    return (
        <Box alignItems="center" gap="sm" direction="row">
            <Button variant="primary" isOutlined>
                Primary
            </Button>
            <Button variant="success" isOutlined>
                Success
            </Button>
            <Button variant="danger" isOutlined>
                Danger
            </Button>
            <Button variant="light" isOutlined>
                Light
            </Button>
            <Button variant="dark" isOutlined>
                Dark
            </Button>
            <Box background="grey-500" padding="2xs">
                <Button variant="white" isOutlined>
                    White
                </Button>
            </Box>
        </Box>
    )
}

export function Sizes() {
    return (
        <Box gap="sm" direction="row" alignItems="flex-start">
            <Button size="xs" variant="light">
                Extra Small
            </Button>
            <Button size="sm" variant="light">
                Small
            </Button>
            <Button size="md" variant="light">
                Medium
            </Button>
            <Button size="lg" variant="light">
                Large
            </Button>
            <Button
            size={{
                base: 'xs',
                tablet: 'sm',
                desktop: 'md',
                hd: 'lg',
            }}
            variant="light"
            >
                Responsive
            </Button>
        </Box>
    )
}

export function Naked() {
    return (
        <Box display="block" fontSize="sm" color="secondary-500">
          <Button isNaked>Naked Button</Button>
        </Box>
    )
}

export function FullWidth() {
    return (
        <Box gap="md">
            <Button fullWidth>Full Width</Button>
            <Button fullWidth isOutlined>
                Full Width
            </Button>
        </Box>
    )
}

export function Icons() {
    return (
        <>
            <Box display="flex" direction="row" gap="md">
                <Button variant="primary" iconPrefix="mail">
                    Email
                </Button>
                <Button variant="primary" isOutlined iconSuffix="chat">
                    Chat Now
                </Button>
            </Box>
            <Box display="flex" direction="row" gap="xs" margin="lg 0 0 0">
                <Button
                    onClick={() => alert('clicked')}
                    variant="light"
                    iconPrefix="caret-left"
                >
                    Prev
                </Button>
                <Button
                    onClick={() => alert('clicked')}
                    variant="light"
                    iconSuffix="caret-right"
                >
                    Next
                </Button>
            </Box>
        </>
    )
}

export function ReactRouterLink() {
    return (
        <BrowserOnly>
        {() =>
            <BrowserRouter>
                <Link to="/" as="a" component={Button}>
                    React Router Link
                </Link>
                <Box margin="md 0 0 0">
                    <Alert
                        hasIcon
                        message="NOTE: this link will not work in storybook but the code example is correct if used in a React application with react-router-dom."
                        variant="warning"
                    />
                </Box>
            </BrowserRouter>
        }
        </BrowserOnly>
    )
}

export function CustomTheme() {
    return (
        <Box
            gap="sm"
            direction="row"
            alignItems="flex-start"
            style={{
                '--button-font-family': 'var(--asset-fonts-brand)',
                '--button-font-weight': 'var(--size-font-weight-regular)',
                '--button-size-xs-border-radius': '0',
                '--button-size-sm-border-radius': '0',
                '--button-size-md-border-radius': '0',
                '--button-size-lg-border-radius': '0',
            }}
        >
            <Button size="xs">Get Solar</Button>
            <Button size="sm">Get Solar</Button>
            <Button size="md">Get Solar</Button>
            <Button size="lg">Get Solar</Button>
        </Box>
    )
}

export function DesignTokens() {
    const tokens = {
        '--button-font-family': '--asset-fonts-body',
        '--button-font-weight': '--size-font-weight-bold',
        '--button-size-xs-border-radius': '--form-control-size-sm-border-radius',
        '--button-size-xs-font-size': '--form-control-size-xs-font-size',
        '--button-size-xs-padding-vertical': '--size-spacing-2xs',
        '--button-size-xs-padding-horizontal': '--size-spacing-xs',
        '--button-size-sm-border-radius': '--form-control-size-sm-border-radius',
        '--button-size-sm-font-size': '--form-control-size-sm-font-size',
        '--button-size-sm-padding-vertical': '--form-control-size-sm-padding',
        '--button-size-sm-padding-horizontal': '--size-spacing-sm',
        '--button-size-md-border-radius': '--form-control-size-md-border-radius',
        '--button-size-md-font-size': '--form-control-size-md-font-size',
        '--button-size-md-padding-vertical': '--form-control-size-md-padding',
        '--button-size-md-padding-horizontal': '--size-spacing-md',
        '--button-size-lg-border-radius': '--form-control-size-lg-border-radius',
        '--button-size-lg-font-size': '--form-control-size-lg-font-size',
        '--button-size-lg-padding-vertical': '--form-control-size-lg-padding',
        '--button-size-lg-padding-horizontal': '--size-spacing-lg',
        '--button-primary-background-color': '--color-brand-primary-500',
        '--button-primary-background-color-hover': '--color-brand-primary-600',
        '--button-primary-font-color': '--color-brand-white-base',
        '--button-primary-font-color-hover': '--color-brand-white-base',
        '--button-primary-outline-border-color': '--color-brand-primary-500',
        '--button-primary-outline-border-color-hover': '--color-brand-primary-500',
        '--button-primary-outline-background-color': 'transparent',
        '--button-primary-outline-background-color-hover': '--color-brand-primary-50',
        '--button-primary-outline-font-color': '--color-brand-primary-500',
        '--button-primary-outline-font-color-hover': '--color-brand-primary-600',
        '--button-primary-box-shadow-focus': 'form-control-box-shadow-focus',
        '--button-success-background-color': '--color-brand-success-500',
        '--button-success-background-color-hover': '--color-brand-success-600',
        '--button-success-font-color': '--color-brand-white-base',
        '--button-success-font-color-hover': '--color-brand-white-base',
        '--button-success-outline-background-color': 'transparent',
        '--button-success-outline-background-color-hover': '--color-brand-success-50',
        '--button-success-outline-border-color': '--color-brand-success-500',
        '--button-success-outline-border-color-hover': '--color-brand-success-500',
        '--button-success-outline-font-color': '--color-brand-success-500',
        '--button-success-outline-font-color-hover': '--color-brand-success-600',
        '--button-success-box-shadow-focus': 'form-control-box-shadow-focus',
        '--button-danger-background-color': '--color-brand-danger-500',
        '--button-danger-background-color-hover': '--color-brand-danger-600',
        '--button-danger-font-color': '--color-brand-white-base',
        '--button-danger-font-color-hover': '--color-brand-white-base',
        '--button-danger-outline-background-color': 'transparent',
        '--button-danger-outline-background-color-hover': '--color-brand-danger-50',
        '--button-danger-outline-border-color': '--color-brand-danger-500',
        '--button-danger-outline-border-hover-color': '--color-brand-danger-500',
        '--button-danger-outline-font-color': '--color-brand-danger-500',
        '--button-danger-outline-font-color-hover': '--color-brand-danger-500',
        '--button-danger-box-shadow-focus': '0 0 0 4px --color-brand-danger-200',
        '--button-dark-background-color': '--color-brand-dark-base',
        '--button-dark-background-color-hover': '--color-brand-black-base',
        '--button-dark-font-color': '--color-brand-white-base',
        '--button-dark-font-color-hover': '--color-brand-white-base',
        '--button-dark-outline-background-color': 'transparent',
        '--button-dark-outline-background-color-hover': '--color-brand-grey-50',
        '--button-dark-outline-border-color': '--color-brand-dark-base',
        '--button-dark-outline-border-hover-color': '--color-brand-grey-900',
        '--button-dark-outline-font-color': '--color-brand-dark-base',
        '--button-dark-outline-font-color-hover': '--color-brand-white-base',
        '--button-dark-box-shadow-focus': '0 0 0 4px --color-brand-grey-200',
        '--button-light-background-color': '--color-brand-grey-100',
        '--button-light-background-color-hover': '--color-brand-grey-200',
        '--button-light-font-color': '--color-brand-dark-base',
        '--button-light-font-color-hover': '--color-brand-dark-base',
        '--button-light-outline-background-color': 'transparent',
        '--button-light-outline-background-color-hover': '--color-brand-grey-50',
        '--button-light-outline-border-color': '--color-brand-light-base',
        '--button-light-outline-border-color-hover': '--color-brand-grey-300',
        '--button-light-outline-font-color': '--color-brand-dark-base',
        '--button-light-outline-font-color-hover': '--color-brand-dark-base',
        '--button-light-box-shadow-focus': '0 0 0 4px --color-brand-grey-200',
        '--button-white-background-color': '--color-brand-white-base',
        '--button-white-background-color-hover': '--color-brand-grey-50',
        '--button-white-font-color': '--color-brand-grey-600',
        '--button-white-font-color-hover': '--color-brand-grey-700',
        '--button-white-outline-background-color': 'transparent',
        '--button-white-outline-background-color-hover': 'rgba(255, 255, 255, .1)',
        '--button-white-outline-border-color': '--color-brand-white-base',
        '--button-white-outline-border-color-hover': '--color-brand-white-base',
        '--button-white-outline-font-color': '--color-brand-white-base',
        '--button-white-outline-font-color-hover': '--color-brand-white-base',
        '--button-white-box-shadow-focus': '0 0 0 4px --color-brand-grey-200',
        '--button-naked-font-color': '',
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