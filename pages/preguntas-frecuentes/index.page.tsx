import BodySingle from 'components/layouts/body/single/body-single'
import FaqAccordion from 'dh-marvel/components/faqs/FaqAccordion'

import { NextPage } from 'next'
import { FaqsType } from 'types/faqs'


interface Props{
  faqs: FaqsType[]
}

const FaqsPage: NextPage<Props> = ({ faqs }) => {

  return (
    <BodySingle title={"Preguntas Frecuentes"}>
      <FaqAccordion faqs={faqs}/>
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
