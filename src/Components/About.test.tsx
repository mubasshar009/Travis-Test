import {render} from '@testing-library/react';

import About from './About';

test("About Test",() => {
    const {getByText} = render(<About />)
    const linkElement = getByText(/About Us/i)
    expect(linkElement).toBeInTheDocument();
})