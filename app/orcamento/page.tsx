import QuotePanel from "@/components/quote-panel";

export const metadata = {
  title: "Orçamento",
};

export default function OrcamentoPage() {
  return (
    <main>
      <section className="page-hero">
        <p className="section-kicker">Orçamento</p>
        <h1>Comece pelo ambiente.</h1>
        <p>
          Para um retorno mais rápido, envie medidas aproximadas, fotos do local,
          cidade e o tipo de móvel que deseja fazer.
        </p>
      </section>
      <QuotePanel />
    </main>
  );
}
