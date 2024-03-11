import { Heading } from "@rhino-ui/components/src/components/heading/heading";

export default function ResponsiveSizes() {
    return (
        <Heading
            as="h3"
            size={{ base: 'sm', tablet: 'lg', desktop: 'xl', hd: '3xl' }}
        >
            Leading the world towards a clean energy future
        </Heading>
    )
}