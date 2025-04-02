import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CtaButton } from "../../../../src/components/cta-button/cta-button";

describe("CtaButton", () => {
  it("renders with provided label", () => {
    render(<CtaButton label="Clique aqui" />);
    expect(
      screen.getByRole("button", { name: /clique aqui/i })
    ).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    render(<CtaButton label="Clique" onClick={onClick} />);

    fireEvent.click(screen.getByRole("button", { name: /clique/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { container } = render(<CtaButton label="Snapshot Test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
