import { render, screen } from '@testing-library/react';
import Hint from '../Hint';

describe('Hint', () => {
  it('renders hint', () => {
    const hintContent = 'This is a hint.';
    render(<Hint hint={hintContent} isHintClicked={true} />);
    const hint = screen.getByText('This is a hint.');
    expect(hint).toBeVisible();
  });
});
