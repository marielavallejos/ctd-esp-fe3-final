import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import LayoutCheckout from 'dh-marvel/components/layouts/layout-checkout';
import { getComic, getComics } from 'dh-marvel/services/marvel/marvel.service';
import ComicFormCard from 'dh-marvel/components/Comic/ComicFormCard';
import CustomerForm from 'dh-marvel/components/form/Customer/CustomerForm';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Forms from "components/form/Forms"
import { Comic, ComicResponse } from 'types/marvelAPI';
import DeliveryForm from 'dh-marvel/components/form/Delivery/DeliveryForm';
import PaymentForm from 'dh-marvel/components/form/Payment/PaymentForm';
import { schema } from 'dh-marvel/components/Rules';


interface Props {
  comic: Comic;
}


const CheckoutPage: NextPage<Props> = ({ comic }) => {
  const [activeStep, setActiveStep] = useState(0);
  
  // type DataForm = yup.InferType<typeof schema>;
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  return (
    <LayoutCheckout>
      <Container maxWidth="md">
        <ComicFormCard comic={comic} />
        <FormProvider {...methods} >
          <Forms/>
        </FormProvider>
      </Container>
    </LayoutCheckout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = parseInt(params?.id as string);
  const data: Comic = await getComic(id);
  return {
    props: {
      comic: data,
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: ComicResponse = await getComics();
  const paths = data.data.results.map((comic) => {
    return { params: { id: comic.id.toString() } };
  });
  return {
    paths,
    fallback: 'blocking',
  };
};

export default CheckoutPage;


