import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function Outlined() {
    const [files, setFiles] = useState(null);
      const [lightFiles, setLightFiles] = useState(null);
      const [primaryFiles, setPrimaryFiles] = useState(null);
      const [whiteFiles, setWhiteFiles] = useState(null);
      const handleChange = event => {
        setFiles(event.target.files);
      };
      const handleLightChange = event => {
        setLightFiles(event.target.files);
      };
      const handlePrimaryChange = event => {
        setPrimaryFiles(event.target.files);
      };
      return (
        <Box direction="row" gap="md" alignItems="center">
          <FileUpload
            buttonText="Dark"
            labelText="My File"
            id="darkUpload"
            onChange={handleChange}
            files={files}
            variant="dark"
            isOutlined
          />
          <FileUpload
            buttonText="Light"
            labelText="My File"
            id="lightUpload"
            onChange={handleLightChange}
            files={lightFiles}
            variant="light"
            isOutlined
          />
          <FileUpload
            buttonText="Primary"
            labelText="My File"
            id="primaryUpload"
            onChange={handlePrimaryChange}
            files={primaryFiles}
            variant="primary"
            isOutlined
          />
          <Box background="grey-500" padding="2xs">
            <FileUpload
              buttonText="White"
              labelText="My File"
              id="whiteUpload"
              onChange={handlePrimaryChange}
              files={whiteFiles}
              variant="white"
              isOutlined
            />
          </Box>
        </Box>
      );
}