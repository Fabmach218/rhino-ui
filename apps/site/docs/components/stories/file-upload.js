import { useState } from 'react';
import { Box } from '@rhino-ui/components/src/components/box/box'; 
import { Button } from '@rhino-ui/components/src/components/button/button'
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export function Default() {
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
        />
      );
}

export function ButtonText() {
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

export function HelpText() {
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
          helpText="image files only (jpg, png, gif)"
          accept="image/*"
        />
      );
}

export function CustomIcon() {
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

export function WithoutIcon() {
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
          hasIcon={false}
        />
      );
}

export function WithoutButtonText() {
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
          buttonText={null}
        />
      );
}

export function Variants() {
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
          />
          <FileUpload
            buttonText="Light"
            labelText="My File"
            id="lightUpload"
            onChange={handleLightChange}
            files={lightFiles}
            variant="light"
          />
          <FileUpload
            buttonText="Primary"
            labelText="My File"
            id="primaryUpload"
            onChange={handlePrimaryChange}
            files={primaryFiles}
            variant="primary"
          />
          <Box background="grey-500" padding="2xs">
            <FileUpload
              buttonText="White"
              labelText="My File"
              id="whiteUpload"
              onChange={handlePrimaryChange}
              files={whiteFiles}
              variant="white"
            />
          </Box>
        </Box>
      );
}

export function Outlined() {
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

export function Sizes() {
    const sizes = [
        { label: 'Extra Small', value: 'xs' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ];
      const handleChange = event => {
        alert(`You picked this file: ${event.target.files[0].name}`);
      };
      return (
        <Box gap="lg" direction="row">
          <Box gap="md">
            <Box gap="sm">
              {sizes.map(size => (
                <FileUpload
                  key={size.label}
                  labelText={size.label}
                  id={size.label}
                  onChange={handleChange}
                  size={size.value}
                  buttonText={size.label}
                  helpText="helpful text"
                />
              ))}
            </Box>
          </Box>
        </Box>
      );
}

export function ClearingFiles() {
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

export function MultipleFiles() {
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
          multiple
          buttonText="Upload Multiple Files"
        />
      );
}

export function FileTypes() {
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
          accept="image/*"
          buttonText="Upload Images"
        />
      );
}

export function TruncatedFileName() {
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
          fileNameMaxLength={16}
        />
      );
}

export function FullWidth() {
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
          fullWidth
        />
      );
}

export function Disabled() {
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
          isDisabled
        />
      );
}

export function Required() {
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

export function CustomRequiredIndicator() {
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