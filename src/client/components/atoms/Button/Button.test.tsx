import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { Button } from "./Button";

const user = userEvent.setup();

test("renders button and responds to click event", async () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);

  const button = getByRole("button", { name: /click me/i });
  await user.click(button);

  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalled();
});
