import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function BasicExample() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker onChange={setSelectedDate} selected={selectedDate} />
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}