// import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { Button } from '../../../../components/ui/Button';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom'


describe('Button Component', () => {

  beforeEach(() => {
    render(<Button text='Click me' handleClick={() => {}} />);
  })
  it('should render the Button\'s text', () => {
    screen.debug();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it('calls handleClick when called', async () => {
    await userEvent.click(screen.getByText('Click me'));

  });
});


