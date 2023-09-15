// import BodySingle from 'components/layouts/body/single/body-single'
// import FaqAccordion from 'components/faqs/FaqAccordion'

// import { NextPage } from 'next'
// import { FaqsType } from 'types/faqs'


// interface Props{
//   faqs: FaqsType[]
// }

// const FaqsPage: NextPage<Props> = ({ faqs }) => {

//   return (
//     <BodySingle title={"Preguntas Frecuentes"}>
//       <FaqAccordion faqs={faqs}/>
//     </BodySingle>
//   )
// }

// export const getStaticProps = async () => {

//   // Modificar la url por las que nos da Vercel al hacer deploy
//   const response = await fetch('http://localhost:3000/api/faqs')
//   const faqs = await response.json()

//   return {
//     props: {
//       faqs
//     }
//   }

// }

// export default FaqsPage

import React from 'react'


const FaqsPage = () => {
  return (
    <div>FaqPage</div>
  )
}

export default FaqsPage