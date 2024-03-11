import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';
import { Heading } from '@rhino-ui/components/src/components/heading/heading';

export default function MonthPicker() {
    const [startDateOne, setStartDateOne] = useState(new Date(2019, 10));
      const [startDateTwo, setStartDateTwo] = useState(new Date(2019, 10));
      const [startDateThree, setStartDateThree] = useState(new Date(2019, 10));
      return (
        <Box display="flex" direction="row" gap="md">
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">Default</Heading>
            <DatePicker selected={startDateOne} onChange={setStartDateOne} showMonthYearPicker />
            <p>{startDateOne.toISOString()}</p>
          </Box>
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">With full month name</Heading>
            <DatePicker
              selected={startDateTwo}
              onChange={setStartDateTwo}
              showMonthYearPicker
              showFullMonthYearPicker
            />
            <p>{startDateTwo.toISOString()}</p>
          </Box>
          <Box gap="md" display="flex" direction="column" alignItems="center" width="33">
            <Heading size="md">With Two-column layout</Heading>
            <DatePicker
              selected={startDateThree}
              onChange={setStartDateThree}
              showMonthYearPicker
              showFullMonthYearPicker
              showTwoColumnMonthYearPicker
            />
            <p>{startDateThree.toISOString()}</p>
          </Box>
        </Box>
      );
}