import { Html, Head, Main, NextScript } from "next/document";
import { toast } from "react-toastify";

export default function Document() {

  return (
    <Html lang="en">
      <Head> 
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />

      </Head>
      <body>
        <Main />
        <NextScript />
       

        <script src="/js/plugin.js" async />
        <script src="/js/script.js" async />
        <script src="/js/fullpage.js" async />
      <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-QFQW0rP6eUTTzKwFLREYIX8Fu6sb7t0UsAXeVIx8VC15HAOmeG1kI6LJ90k1hJ7U"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
          integrity="sha384-QF++ax+Qs/hy3cC6IZGGEmOGuRUbbnk6gTuIOGhHhP6tnG4Tbmts8cFD+9ozWlF"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
