import BodySingle from 'components/layouts/body/single/body-single'
import { NextPage } from 'next'
import { FaqsType } from 'types/faqs'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface Props{
  faqs: FaqsType[]
}

const FaqsPage: NextPage<Props> = ({ faqs }) => {

  return (
    <BodySingle title={"Preguntas Frecuentes"}>
      <div>
        {faqs.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${faq.id}-content`}
              id={`panel${faq.id}-header`}
            >
              <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </BodySingle>
  )
}

export const getStaticProps = async () => {

  const response = await fetch('https://ctd-esp-fe3-final-blue.vercel.app/api/faqs')
  const faqs = await response.json()

  return {
    props: {
      faqs
    }
  }

}

export default FaqsPage
