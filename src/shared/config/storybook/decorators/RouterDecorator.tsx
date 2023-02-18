import { BrowserRouter } from 'react-router-dom';
import { Story } from '@storybook/react';

export const RouterDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  );
};
