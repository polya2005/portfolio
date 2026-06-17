import "../index.css";

function H1(props: object) {
  return (
    <h1
      className="grow-0 shrink text-accent text-5xl font-mono font-bold mt-12 mb-8"
      {...props}
    />
  );
}

function H2(props: object) {
  return (
    <h2
      className="grow-0 shrink text-accent text-3xl font-mono font-semibold mt-8 mb-6"
      {...props}
    />
  );
}

function H3(props: object) {
  return (
    <h3
      className="grow-0 shrink w-full text-text-primary text-[28px] font-mono font-semibold mt-6 mb-4"
      {...props}
    />
  );
}

function H4(props: object) {
  return (
    <h4
      className="grow-0 shrink w-full text-text-primary text-2xl font-mono font-semibold mt-4 mb-2"
      {...props}
    />
  );
}

function P(props: object) {
  return (
    <p
      className="text-text-secondary text-2xl text-sans w-full h-auto"
      {...props}
    />
  );
}

function A(props: object) {
  return (
    <a className="text-accent hover:underline text-2xl text-sans" {...props} />
  );
}

function OL(props: object) {
  return (
    <ol
      className="list-decimal list-inside text-text-secondary text-2xl text-sans w-full h-auto px-6"
      {...props}
    />
  );
}

function UL(props: object) {
  return (
    <ul
      className="list-disc list-inside text-text-secondary text-2xl text-sans w-full h-auto px-6"
      {...props}
    />
  );
}

function Blockquote(props: object) {
  return (
    <blockquote
      className="border-l-4 border-text-primary bg-white/5 pl-4 py-2 italic text-gray-600 my-4"
      {...props}
    />
  );
}

function Table(props: object) {
  return (
    <table
      className="my-4 border-collapse border border-text-primary w-full text-text-secondary text-2xl text-sans"
      {...props}
    />
  );
}

function TR(props: object) {
  return <tr className="border border-text-primary" {...props} />;
}

function TH(props: object) {
  return (
    <th
      className="border border-text-primary px-4 py-3 bg-accent-soft text-center"
      {...props}
    />
  );
}

function TD(props: object) {
  return <td className="border border-text-primary px-4 py-2" {...props} />;
}

function Code(props: object) {
  return (
    <code
      className="bg-bg-elevated text-text-secondary font-mono p-1 rounded"
      {...props}
    />
  );
}

const MarkdownComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  blockquote: Blockquote,
  table: Table,
  tr: TR,
  td: TD,
  th: TH,
  code: Code,
};

export default MarkdownComponents;
