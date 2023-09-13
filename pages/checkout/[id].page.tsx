import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import LayoutCheckout from 'components/layouts/layout-checkout';
import { getComic, getComics } from 'services/marvel/marvel.service';
import ComicFormCard from 'components/Comic/ComicFormCard';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import Forms from "components/form/Forms"
import { Comic, ComicResponse } from 'types/marvelAPI';
import { schema } from 'components/Rules';
import Box from '@mui/material/Box';


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
  <Container maxWidth="md">
    <Box display="flex">
        <ComicFormCard comic={comic} />
      <Box flex="2" marginLeft="16px">
        <FormProvider {...methods}>
          <Forms />
        </FormProvider>
      </Box>
    </Box>
  </Container>
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

(CheckoutPage as any).Layout = LayoutCheckout;
export default CheckoutPage;


