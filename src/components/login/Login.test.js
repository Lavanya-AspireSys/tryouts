import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Login from './Login';

test('renders Login component', () => {
  render(<Login />);
  
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: 'Login' });
  
  act(() => {
    // Trigger state updates
    emailInput.value = 'test@example.com';
    passwordInput.value = 'password123';
    submitButton.click();
  });
  
  // Assert on the output
  // ...
});
