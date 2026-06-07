import "./index.css";

function ErrorPage() {
  return (
    <div className="flex flex-col grow shrink w-full bg-bg-primary/50 rounded-xl p-6 space-x-2.5">
      <h1 className="text-accent-bright text-6xl font-mono font-bold mt-6">
        Something went wrong.
      </h1>
      <p className="text-text-primary text-3xl font-sans leading-10 mt-12">
        Please try again later.
      </p>
    </div>
  );
}

export default ErrorPage;
