import {render, screen} from "@testing-library/react";
import IndexPage from "pages/index.page";
import Index from "pages/index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index/>)
            const title = screen.getByText('Sample')
            expect(title).toBeInTheDocument()
        })
    })

})