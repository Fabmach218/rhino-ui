import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function WithTimePicker() {
    const [startDate, setStartDate] = useState(new Date('1993/09/28'));
      return (
        <Box gap="md">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeIntervals={15}
            timeCaption="Time"
          />
          <p>Selected Date: {startDate && startDate.toISOString()}</p>
        </Box>
      );
}