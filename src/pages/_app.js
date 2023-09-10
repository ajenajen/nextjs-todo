import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen max-w-screen bg-slate-200 p-12">
      <Component {...pageProps} />
    </div>
  );
}
