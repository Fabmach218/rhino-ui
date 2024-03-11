import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function CustomRequiredIndicator() {
    const [files, setFiles] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
      };
      return (
        <Box gap="md">
          <FileUpload
            labelText="My File"
            id="myFile"
            onChange={handleChange}
            files={files}
            buttonText="Without Indicator"
            isRequired
            requiredIndicator={null}
          />
          <FileUpload
            labelText="My File"
            id="myFile"
            onChange={handleChange}
            files={files}
            buttonText="Custom Indicator"
            isRequired
            requiredIndicator={<>&nbsp;(required)</>}
          />
        </Box>
      );
}