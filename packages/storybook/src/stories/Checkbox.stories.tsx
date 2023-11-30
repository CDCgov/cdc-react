import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../cdc-react/src/components/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  component: Checkbox,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: {},
};
export const CheckboxSample: Story = {
  args: {},
  render: function Render() {
    return (
      <>
        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Select any historical figure</legend>

          <Checkbox
            id="person1"
            label="Sojourner Truth"
            description="This is optional text that can be used to describe the label in more detail."
          />
          <Checkbox
            id="person2"
            label="Frederick Douglass"
            description="This is optional text that can be used to describe the label in more detail."
            checkedBox={true}
          />
          <Checkbox
            id="person3"
            label="Booker T. Washington"
            description="This is optional text that can be used to describe the label in more detail."
          />
          <Checkbox
            id="person4"
            label="George Washington Carver"
            description="This is optional text that can be used to describe the label in more detail."
            checkedBox={true}
            disabled={true}
          />
        </fieldset>

        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Select any historical figure</legend>

          <Checkbox id="person1-nd" label="Sojourner Truth" checkedBox={true} />
          <Checkbox id="person2-nd" label="Frederick Douglass" />
          <Checkbox id="person3-nd" label="Booker T. Washington" />
          <Checkbox
            id="person4-nd"
            label="George Washington Carver"
            disabled={true}
          />
        </fieldset>
      </>
    );
  },
};
