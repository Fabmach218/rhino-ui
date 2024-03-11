import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function DateRange() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 3));
      const [endDate, setEndDate] = useState(new Date(2019, 11, 28));
      const setDate = ([startDate, endDate]) => {
        setStartDate(startDate);
        setEndDate(endDate);
      };
      return (
        <Box gap="md">
          <DatePicker
            onChange={setDate}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
          <p>
            {`Selected Date Range: ${startDate && startDate.toISOString()} - ${
              endDate && endDate.toISOString()
            }`}
          </p>
        </Box>
      );
}