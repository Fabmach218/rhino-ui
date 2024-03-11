import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function MinMaxDates() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 18));
      const min = new Date(2019, 11, 18);
      min.setDate(min.getDate() - 5);
      const max = new Date(2019, 11, 18);
      max.setDate(max.getDate() + 5);
      return (
        <Box gap="md">
          <DatePicker selected={startDate} onChange={setStartDate} minDate={min} maxDate={max} />
          <p>Selected Date: {startDate.toISOString()}</p>
        </Box>
      );
}