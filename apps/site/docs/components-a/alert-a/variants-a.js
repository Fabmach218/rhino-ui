import { Alert } from "@rhino-ui/components/src/components/alert/alert";

export default function Variants() {
    const variants = ['default', 'info', 'success', 'warning', 'danger'];
      const message = variant => `
        This is a ${variant} alert. It also has longer text to see what these alerts
        can look like when broken into multiple lines. This one will definitely
        break into multiple lines in most standard screen resolutions.
      `;
      return (
        <>
          {variants.map(variant => (
            <Alert
              message={message(variant)}
              key={variant}
              title={variant.charAt(0).toUpperCase() + variant.slice(1)}
              variant={variant}
              hasIcon
              className="m-bottom-md"
            />
          ))}
        </>
      );
}