import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


export default function AppProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <BrowserRouter>{children}</BrowserRouter>
        </Suspense>
    </QueryClientProvider>
  );
}
