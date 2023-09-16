import {render, screen} from "@testing-library/react";
import Index from "./index.page";


describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', async () => {
            render(<Index comics={{
                code: "",
                status: "",
                copyright: "",
                attributionText: "",
                attributionHTML: "",
                etag: "",
                data: {
                    offset: 0,
                    limit: 0,
                    total: 0,
                    count: 0,
                    results: []
                }
            }}/>)
            const title = await screen.findByText('MARVEL');
            expect(title).toBeInTheDocument()
        })
    })

})