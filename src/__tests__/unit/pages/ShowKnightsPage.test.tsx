import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import { ShowKnightsPage } from "../../../pages/ShowKnightsPage";
import '@testing-library/jest-dom'

describe('ShowKnightsPage', () => {
  it('displays "Nome" on the page', () => {
    render(<ShowKnightsPage />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
  });
});