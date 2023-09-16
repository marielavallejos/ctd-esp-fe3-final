import { render, screen } from "@testing-library/react";
import FaqsPage from "./index.page";

describe('FaqsPage', () => {
    describe('when rendering default', () => {
        it('should render the questions and answers', () => {
            const faqsMock = [
                { id: 1, question: '¿Cuántos comics tienen?', answer: 'Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com' },
                { id: 2, question: '¿Se puede reservar nuevos lanzamientos?', answer: 'Lamentablemente nuestro sitio todavía no acepta reservas anticipadas. Pero nos encontramos trabajando en esa funcionalidad. Seguí nuestro twitter para estar al tanto de las últimas novedades' },
            ];

            render(<FaqsPage faqs={faqsMock} />);

            faqsMock.forEach((faq) => {
                const questionElement = screen.getByText(faq.question);
                const answerElement = screen.getByText(faq.answer);
                expect(questionElement).toBeInTheDocument();
                expect(answerElement).toBeInTheDocument();
            });
        });

        it('should render the title "Preguntas Frecuentes"', () => {
            render(<FaqsPage faqs={[]} />); 

            const title = screen.getByText('Preguntas Frecuentes'); 
            expect(title).toBeInTheDocument();
        });
    });
});



