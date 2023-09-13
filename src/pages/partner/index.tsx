import { NextPage } from 'next';
import Header from '../../components/header/header.component';
import { useMyQueryQuery } from '../../libs/graphql';
import { useMemo } from 'react';

const PartnerIndexPage: NextPage = () => {
  const context = useMemo(
    () => ({
      additionalTypenames: [],
    }),
    []
  );

  const [result] = useMyQueryQuery({
    context,
  });

  console.log(result);
  return (
    <>
      <Header />
      Partner Index Page.
    </>
  );
};

export default PartnerIndexPage;
