import { useState, memo } from "react";
import { ShoppingCart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NavButton = memo(({ label, target, currentPage, onClick }) => (
  <Button
    variant={currentPage === target ? "default" : "ghost"}
    className="text-white border border-black font-semibold hover:text-[#ff0000] text-xl"
    onClick={() => onClick(target)}
  >
    {label}
  </Button>
));

const ProductCard = memo(({ product }) => (
  <Card className="bg-[#ba9f54] border-none shadow-md rounded-2xl">
    <CardContent className="p-4 space-y-2 text-white border border-black text-xl">
      <h3 className="font-bold text-2xl">{product.name}</h3>
      <p className="text-lg">{product.desc}</p>
      <p className="text-[#623617] border border-black font-extrabold text-3xl drop-shadow-md">
        {product.price}
      </p>
      <Button className="bg-[#527a4c] hover:bg-[#ff0000] text-white w-full border border-black text-lg">
        Adicionar ao carrinho
      </Button>
    </CardContent>
  </Card>
));

export default function RioSeeds() {
  const [page, setPage] = useState("home");

  const products = [
    {
      name: "Sementes de Lavanda Mística",
      desc: "Aromática e calmante, ideal para jardins e banhos energéticos.",
      price: "R$ 19,90",
    },
    {
      name: "Kit Verde Essencial",
      desc: "Mix de sementes de manjericão, alecrim e hortelã.",
      price: "R$ 39,90",
    },
    {
      name: "Sálvia Purificadora",
      desc: "Sementes de sálvia branca para cultivo doméstico.",
      price: "R$ 24,90",
    },
    {
      name: "Essência de Alecrim Natural",
      desc: "Óleo essencial 100% puro e artesanal.",
      price: "R$ 29,90",
    },
  ];

  return (
    <div
      className="min-h-screen text-white text-xl"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/lucas-delate/RioSeeds420/main/assests/FundoRioSeeds420.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="relative h-[20rem] flex items-center justify-between px-8 overflow-hidden bg-[#e4912e] border-b-4 border-[#e4912e]">
        <div className="absolute inset-0 bg-[#e4912e] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/lucas-delate/RioSeeds420/main/assests/CapaRioSeeds420.png?raw=true')] bg-cover bg-no-repeat bg-center opacity-80"></div>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/lucas-delate/RioSeeds420/main/assests/LogoRioSeeds420.png"
          alt="Logo Rio Seeds"
          className="relative z-10 h-[24rem] w-auto drop-shadow-lg mr-8"
        />

        <nav className="relative z-10 flex gap-6">
          {[{ label: "Início", target: "home" }, { label: "Loja", target: "store" }, { label: "Sobre", target: "about" }, { label: "Contato", target: "contact" }].map((item) => (
            <NavButton
              key={item.target}
              label={item.label}
              target={item.target}
              currentPage={page}
              onClick={setPage}
            />
          ))}
        </nav>

        <div className="absolute bottom-6 right-6 z-10">
          <Button className="bg-[#e4912e] hover:bg-[#ff0000] text-white border border-black text-lg">
            <ShoppingCart className="mr-2" /> Carrinho
          </Button>
        </div>
      </header>

      <main className="p-8 min-h-[120vh]">
        {page === "home" && (
          <section className="text-center space-y-6">
            <h1 className="text-5xl text-white drop-shadow-lg border border-black inline-block px-4 py-2 rounded-2xl bg-[#623617]/70">
              🌴 Bem-vindo à Rio Seeds 🌴
            </h1>
            <p className="text-2xl max-w-2xl mx-auto border border-black bg-[#ba9f54]/60 p-4 rounded-xl">
              Viva o espírito praiano e natural com nossas ervas e sementes. Liberdade, natureza e boas vibrações — direto da areia para o seu jardim.
            </p>
            <Button
              onClick={() => setPage("store")}
              className="bg-[#e4912e] hover:bg-[#527a4c] text-white border border-black px-8 py-4 rounded-2xl text-lg"
            >
              Ver produtos 🌺
            </Button>
          </section>
        )}

        {page === "store" && (
          <section>
            <h2 className="text-4xl text-center mb-8 border border-black bg-[#623617]/60 inline-block px-6 py-2 rounded-xl">
              Nossa Loja 🏝️
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-4xl border border-black bg-[#623617]/70 inline-block px-6 py-2 rounded-xl">
              Sobre a Rio Seeds 🌿
            </h2>
            <p className="border border-black bg-[#ba9f54]/70 p-4 rounded-xl text-2xl">
              A Rio Seeds nasceu à beira-mar, inspirada na energia do sol, da areia e da natureza. Nosso propósito é espalhar liberdade e conexão verde por todos os cantos.
            </p>
            <p className="border border-black bg-[#ba9f54]/70 p-4 rounded-xl text-2xl">
              Somos uma marca que acredita na diversidade, na sustentabilidade e em boas vibrações. Cultive o seu paraíso pessoal com a gente. 🌺
            </p>
          </section>
        )}

        {page === "contact" && (
          <section className="max-w-md mx-auto text-center space-y-6">
            <h2 className="text-4xl border border-black bg-[#623617]/70 inline-block px-6 py-2 rounded-xl">
              Fale conosco 🌊
            </h2>
            <p className="border border-black bg-[#ba9f54]/70 p-4 rounded-xl text-2xl">
              Envie uma mensagem e venha trocar uma ideia sobre natureza, liberdade e boas vibrações.
            </p>
            <form className="flex flex-col gap-4 text-left text-2xl">
              <input type="text" placeholder="Seu nome" className="p-3 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white" />
              <input type="email" placeholder="Seu e-mail" className="p-3 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white" />
              <textarea placeholder="Sua mensagem" rows="4" className="p-3 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white"></textarea>
              <Button className="bg-[#e4912e] hover:bg-[#527a4c] text-white border border-black w-full text-lg">
                <Mail className="mr-2" /> Enviar mensagem
              </Button>
            </form>
          </section>
        )}
      </main>

      <footer className="mt-12 text-center p-6 bg-[#623617]/90 text-white border-t-4 border-[#e4912e] text-xl">
        © {new Date().getFullYear()} Rio Seeds — Liberdade, praia e natureza 🌴
      </footer>
    </div>
  );
}
