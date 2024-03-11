import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function MultipleMonths() {
    const [startDate, setStartDate] = useState(new Date(2019, 11, 3));
      const [endDate, setEndDate] = useState(new Date(2019, 12, 20));
      const setDate = ([startDate, endDate]) => {
        console.log(startDate, endDate);
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
            monthsShown={2}
          />
          <p>Start Date: {startDate && startDate.toISOString()}</p>
          <p>End Date: {endDate && endDate.toISOString()}</p>
        </Box>
      );
}