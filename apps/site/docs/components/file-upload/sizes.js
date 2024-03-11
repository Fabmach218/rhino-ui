import { Box } from '@rhino-ui/components/src/components/box/box';
import { FileUpload } from '@rhino-ui/components/src/components/file-upload/file-upload';

export default function Sizes() {
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