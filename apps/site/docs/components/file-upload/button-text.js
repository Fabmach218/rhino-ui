import { useState } from 'react';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function ButtonText() {
    const [files, setFiles] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
      };
      return (
        <FileUpload
          labelText="My File"
          id="myFile"
          onChange={handleChange}
          files={files}
          buttonText="Upload Your Power Bill"
        />
      );
}