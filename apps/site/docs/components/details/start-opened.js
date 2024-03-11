import { Box } from '@rhino-ui/components/src/components/box/box';
import { Details } from '@rhino-ui/components/src/components/details/details';
import { useOpenClose } from '@rhino-ui/components/src/hooks/use-open-close/use-open-close';

export default function StartOpened() {
    const { isOpen, handleToggle } = useOpenClose({ defaultIsOpen: true });
      return (
        <Details isOpen={isOpen}>
          <Details.Summary
            fontWeight="bold"
            color="primary-500"
            hover={{ color: 'primary-600' }}
            isDetailsOpen={isOpen}
            onToggle={handleToggle}
          >
            Do you have my reservation?
          </Details.Summary>
          <Box padding="md 0" as="p">
            See, you know how to take the reservation, you just don't know how
            to hold the reservation and that's really the most important part of
            the reservation, the holding. Anybody can just take them.
          </Box>
        </Details>
      );
}