import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useBackButton = () => {
  const router = useRouter();
  const onBackClicked = useCallback(() => {
    router.push('/');
  }, [router]);

  return { onBackClicked };
};
