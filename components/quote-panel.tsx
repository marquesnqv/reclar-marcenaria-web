import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { buildWhatsappUrl, defaultQuoteMessage } from "@/content/site";

export default function QuotePanel() {
  return (
    <section className="quote-panel" id="orcamento">
      <div>
        <p className="section-kicker">Orçamento</p>
        <h2>Conte o que você precisa fazer em madeira.</h2>
        <p>
          Envie fotos, medidas e uma descrição do ambiente. A Reclar responde com o
          próximo passo para avaliar material, acabamento, prazo e instalação.
        </p>
      </div>

      <form className="quote-form">
        <label>
          Nome
          <input name="name" placeholder="Seu nome" />
        </label>
        <label>
          Telefone
          <input name="phone" placeholder="11 95894-3182" />
        </label>
        <label>
          Tipo de projeto
          <select name="projectType" defaultValue="">
            <option value="" disabled>
              Selecione
            </option>
            <option>Cozinha planejada</option>
            <option>Quarto ou closet</option>
            <option>Escritório</option>
            <option>Projeto comercial</option>
            <option>Outro</option>
          </select>
        </label>
        <label className="wide">
          Detalhes
          <textarea name="details" placeholder="Medidas, cidade, prazo desejado e observações." />
        </label>
        <Link className="primary-button wide" href={buildWhatsappUrl(defaultQuoteMessage)} target="_blank">
          <MessageCircle size={18} />
          Solicitar pelo WhatsApp
          <ArrowUpRight size={18} />
        </Link>
      </form>
    </section>
  );
}
