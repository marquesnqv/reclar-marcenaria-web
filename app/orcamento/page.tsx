import QuotePanel from "@/components/quote-panel";

export const metadata = {
  title: "Orcamento",
};

export default function OrcamentoPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Orcamento</p>
        <h1>Comece pelo ambiente.</h1>
        <p>
          Para um retorno mais rapido, envie medidas aproximadas, fotos do local,
          cidade e o tipo de movel que deseja fazer.
        </p>
      </section>
      <QuotePanel />
    </main>
  );
}
