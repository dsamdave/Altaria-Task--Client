import Layout from "@/components/Layout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import '../styles/owl.carousel.min.css';
import '../styles/jquery.countdown.css';
import '../styles/owl.theme.default.min.css';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();



  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/plugin.js";
    script.src = "/js/script.js";
    script.src = "/js/fullpage.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  // const isAuthRoute = router.pathname.startsWith("/dashboard/auth");
  // const isDashboardRoute = router.pathname.startsWith("/dashboard/hospitaldb");
  // const isUsersDashboardRoute = router.pathname.startsWith("/dashboard/users")

  return (
    <main className="color-theme-blue main-wrapper">
      
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {/* {isAuthRoute ? (
          <>
            <Component {...pageProps} />
          </>
        ) : isDashboardRoute ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : isUsersDashboardRoute ? (
          <UsersLayout>
            <Component {...pageProps} />
          </UsersLayout>
        ) :  (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )} */}

          <Layout>
            <Component {...pageProps} />
          </Layout>

          <ToastContainer autoClose={5000} />
        </Provider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </main>
  );
}
