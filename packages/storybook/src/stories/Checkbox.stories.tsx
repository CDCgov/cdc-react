import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@us-gov-cdc/cdc-react";
import { ChangeEvent, useState } from "react";

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
  render: function Render() {
    const [isChecked, setIsChecked] = useState(true);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

    return (
      <>
        <Checkbox isChecked={isChecked} onChange={toggleCheckbox} label="Single Checkbox" />
      </>
    );
  },
};

export const IndeterminateCheckbox: Story = {
  args: {},
  render: function Render() {
    const [checkedItems, setCheckedItems] = useState([false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    return (
      <>
        <Checkbox
          label="Parent Checkbox"
          isChecked={allChecked}
          indeterminate={isIndeterminate}
          onChange={(e: { target: { checked: boolean; }; }) =>
            setCheckedItems([e.target.checked, e.target.checked])
          }></Checkbox>

        <Checkbox
          label="Child Checkbox 1"
          isChecked={checkedItems[0]}
          onChange={(e: { target: { checked: boolean; }; }) =>
            setCheckedItems([e.target.checked, checkedItems[1]])
          }></Checkbox>
        <Checkbox
          label="Child Checkbox 2"
          isChecked={checkedItems[1]}
          onChange={(e: { target: { checked: boolean; }; }) =>
            setCheckedItems([checkedItems[0], e.target.checked])
          }></Checkbox>
      </>
    );
  },
};
export const CheckboxDescription: Story = {
  args: {},
  render: function Render() {
    const [isChecked, setIsChecked] = useState(true);

    const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!e.target.checked);
    };
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
            isChecked={isChecked}
            onChange={toggleCheckbox}
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
            isChecked={isChecked}
            disabled={true}
          />
        </fieldset>
      </>
    );
  },
};
export const CheckboxList: Story = {
  args: {},
  render: function Render() {
    const [isChecked, setIsChecked] = useState(true);

    const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked);
    };
    return (
      <>
        <fieldset className="usa-fieldset">
          <legend className="usa-legend">Select any historical figure</legend>

          <Checkbox
            id="person1-nd"
            label="Sojourner Truth"
            isChecked={isChecked}
            onChange={toggleCheckbox}
          />
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