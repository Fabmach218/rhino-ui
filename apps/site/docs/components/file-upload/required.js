import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { Button } from '@rhino-ui/components/src/components/button/button';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function Required() {
    const [files, setFiles] = useState(null);
      const [error, setError] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
        if (event.target.files.length > 0) {
          setError(null);
        }
      };
      const handleSubmit = event => {
        if (!files || files.length === 0) {
          setError('This field is required');
        } else {
          alert('submitted successfully!');
        }
      };
      return (
        <Box gap="md" direction="row">
          <FileUpload
            labelText="My File"
            id="myFile"
            onChange={handleChange}
            files={files}
            isRequired
            error={error}
            fileNameMaxLength={14}
          />
          <div>
            <Button onClick={handleSubmit}>
              Submit with no files to see error.
            </Button>
          </div>
        </Box>
      );
}