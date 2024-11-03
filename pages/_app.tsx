import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import Layout from "@/components/Layout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // const isAuthRoute = router.pathname === "/dashboard";
  const isAuthRoute = router.pathname === "/dashboard" || "/signup";
  const isDashboardRoute = router.pathname.startsWith("/dashboard/hospitaldb");
  return (
    <main>
      <QueryClientProvider client={queryClient}>

      
      <Provider store={store}>
        {isAuthRoute ? (
          <>
            <Component {...pageProps} />
          </>
        ) : isDashboardRoute ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}

        <ToastContainer autoClose={5000} />
      </Provider>

      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}
