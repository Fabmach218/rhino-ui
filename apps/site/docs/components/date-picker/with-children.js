import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { DatePicker } from '@rhino-ui/components/src/components/date-picker/date-picker';

export default function WithChildren() {
    const [selectedDate, setSelectedDate] = useState(new Date(2019, 11, 3));
      return (
        <Box gap="md">
          <DatePicker onChange={setSelectedDate} selected={selectedDate}>
            <Box display="block" style={{ textAlign: 'center' }} color="primary">
              It will be sunny out today!
            </Box>
          </DatePicker>
          <p>Selected Date: {selectedDate.toISOString()}</p>
        </Box>
      );
}