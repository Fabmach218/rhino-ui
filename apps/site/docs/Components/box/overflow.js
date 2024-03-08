import { Box } from '@rhino-ui/components/src/components/box/box';

export default function Overflow() {
    return (
        <Box
            overflow="auto"
            padding="md"
            gap="md"
            flex="auto"
            background="primary-lighter"
            borderColor="grey"
            height="100px"
        >
            <p>
                Most homeowners are stuck with a single option for their power company,
                and that utility just keeps increasing rates year after year. With
                solar, you take back control over where your energy comes from, how much
                it costs, and what you can do with it. Use it, store it, or sell it, all
                on your own terms.
            </p>
            <p>
                Solar can be complicated, but Rhinolabs makes it easy. We have solar,
                storage, and maintenance, all under one roof. Plus, you can monitor your
                entire system from the palm of your hand, and we have an award-winning
                customer service team standing by to help you with anything you might
                need.
            </p>
            <p>
                Switching to solar saves the average Rhinolabs customer $18,471 over 25
                years. Add in national tax credits and local rebates and incentives, and
                you can save even more. Like many things in life though, these discounts
                won’t be around forever, so take advantage of them while you can.
            </p>
        </Box>
    )
}