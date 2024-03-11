import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function CustomDayClassName() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker
            onChange={setSelectedDate}
            selected={selectedDate}
            dayClassName={date => (date.getDay() < 3 ? 'font-color-danger' : undefined)}
          />
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}