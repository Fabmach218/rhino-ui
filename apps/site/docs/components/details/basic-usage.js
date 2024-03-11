import { Box } from '@rhino-ui/components/src/components/box/box';
import { Details } from '@rhino-ui/components/src/components/details/details';
import { useOpenClose } from '@rhino-ui/components/src/hooks/use-open-close/use-open-close';

export default function BasicUsage() {
    const { isOpen, handleToggle } = useOpenClose();
      return (
        <Details isOpen={isOpen}>
          <Details.Summary
            isDetailsOpen={isOpen}
            onToggle={handleToggle}
            display="inline"
          >
            What is Rhinolabs's Mission?
          </Details.Summary>
          <Box padding="md 0" gap="sm">
            <Box fontSize="lg" as="h4">
              Leading the World Towards a Clean Energy Future
            </Box>
            <Box as="p">
              We are on a mission to stop climate change before we reach an
              irreversible tipping point. Yes, this requires large shifts by
              entire nations and entire populations. It requires urgency and
              change on a massive scale. But technological advancements have put
              it within reach.
            </Box>
          </Box>
        </Details>
      );
}