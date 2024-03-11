import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function ClearingFiles() {
    const [files, setFiles] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
      };
      const handleClear = event => {
        setFiles(null);
      };
      return (
        <Box gap="md" direction="row">
          <FileUpload
            labelText="My File"
            id="myFile"
            onChange={handleChange}
            files={files}
            onClearFiles={handleClear}
          />
        </Box>
      );
}