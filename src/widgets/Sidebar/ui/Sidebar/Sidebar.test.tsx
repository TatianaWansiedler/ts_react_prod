import { fireEvent, screen } from '@testing-library/react';
import { ComponentRouter } from 'shared/lib/tests/componentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('with only firt param', () => {
        ComponentRouter(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle', () => {
        ComponentRouter(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
