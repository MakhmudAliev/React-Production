import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      data: {
        first: 'John',
        lastname: 'Doe',
      },
    },
  }),
];

// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
// import MainPage from './MainPage';

// export default {
//     title: 'pages/MainPage',
//     component: MainPage,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof MainPage>;

// const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

// export const Normal = Template.bind({});
// Normal.args = {};

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];
