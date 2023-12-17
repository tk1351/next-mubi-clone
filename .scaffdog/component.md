---
name: 'component'
root: '.'
output: 'app/components'
questions:
  name: 'Please enter a component name.'
  story:
    confirm: 'Do you need a story?'
    initial: true
  test:
    confirm: 'Do you need a test?'
    initial: true
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { type FC, type PropsWithChildren } from "react";

export type Props = PropsWithChildren<{}>;

export const {{ inputs.name | pascal }}: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css

```

# `{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

const meta = {
    title: "Components/{{ inputs.name | pascal }}",
    component: {{ inputs.name | pascal }},
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {
    args: {
        children: "{{ inputs.name | pascal }}",
    },
};
```

# `{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```tsx
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

describe(`Testing {{ inputs.name | pascal }} Component`, () => {
    it("Render", () => {
        render(<Stack>{"{{ inputs.name | pascal }}"}</Stack>);
        expect(screen.getByText("{{ inputs.name | pascal }}")).toBeInTheDocument();
    });
});
```
