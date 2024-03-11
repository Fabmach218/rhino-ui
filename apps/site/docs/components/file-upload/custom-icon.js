import { useState } from 'react';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function CustomIcon() {
    const [files, setFiles] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
      };
      return (
        <FileUpload
          labelText="My File"
          buttonText="Take Photo"
          id="myFile"
          onChange={handleChange}
          files={files}
          iconName="camera"
          accept="images/*"
          capture="environment"
        />
      );
}