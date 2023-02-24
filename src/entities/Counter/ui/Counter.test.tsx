import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { StateSchema, createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: async () => await new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

export interface ComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

const customRender = ({ initialState }: ComponentRenderOptions = { initialState: { counter: { value: 10 } } }) => {
  const store = createReduxStore(initialState as StateSchema);
  return render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

describe('Sidebar', () => {
  test('should render', () => {
    customRender();
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    customRender();
    const toggleBtn = screen.getByTestId('increment-btn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    customRender();
    const toggleBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
