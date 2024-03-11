import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function OpenOnDate() {
    const [startDate, setStartDate] = useState(new Date('1993/09/28'));
      return (
        <Box gap="md">
          <DatePicker
            onChange={setStartDate}
            selected={startDate}
            openToDate={new Date('1993/09/28')}
          />
          <p>Selected Date: {startDate && startDate.toISOString()}</p>
        </Box>
      );
}