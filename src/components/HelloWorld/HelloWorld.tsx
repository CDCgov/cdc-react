interface HelloWorldProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const HelloWorld = ({
  ...props
}: HelloWorldProps) => {
  return (
    <div
      {...props}
    >
      Hello World
    </div>
  );
};
