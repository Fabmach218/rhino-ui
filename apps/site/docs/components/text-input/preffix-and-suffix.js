import { Box } from '@rhino-ui/components/src/components/box/box';
import { Icon } from '@rhino-ui/components/src/components/icon/icon';
import { TextInput } from '@rhino-ui/components/src/components/text-input/text-input';
import { useState } from 'react';

export default function PreffixAndSuffix() {
    const [prefixValue1, setPrefixValue1] = useState('rhinolabssolar');
      const [prefixValue2, setPrefixValue2] = useState('49');
      const [prefixValue3, setPrefixValue3] = useState('');
      const [prefixValue4, setPrefixValue4] = useState('Pre-populated Value');
      return (
        <Box gap="md">
          <TextInput
            id="prefixSuffix1"
            value={prefixValue1}
            label="Prefix"
            onChange={event => setPrefixValue1(event.target.value)}
            prefix="@"
          />
          <TextInput
            id="prefixSuffix2"
            value={prefixValue2}
            label="Prefix and Suffix"
            onChange={event => setPrefixValue2(event.target.value)}
            prefix="$"
            suffix="per watt"
          />
          <TextInput
            id="prefixSuffix3"
            value={prefixValue3}
            label="Suffix"
            placeholder="Contact name"
            onChange={event => setPrefixValue3(event.target.value)}
            suffix={<Icon name="book" />}
          />
          <TextInput
            id="prefixSuffix4"
            value={prefixValue4}
            label="Suffix with Clear"
            placeholder="Contact name"
            onChange={event => setPrefixValue4(event.target.value)}
            onClear={event => setPrefixValue4('')}
            suffix={<Icon name="search" />}
          />
        </Box>
      );
}