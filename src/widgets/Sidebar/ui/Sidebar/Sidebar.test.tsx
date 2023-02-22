import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from 'widgets/Sidebar';

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
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

const customRender = () =>
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );

describe('Sidebar', () => {
  test('should render', () => {
    customRender();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle', () => {
    customRender();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
