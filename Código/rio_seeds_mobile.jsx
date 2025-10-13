import { useState, memo } from "react";
import { ShoppingCart, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NavButton = memo(({ label, target, currentPage, onClick }) => (
  <Button
    variant={currentPage === target ? "default" : "ghost"}
    className="text-white border border-black font-semibold hover:text-[#ff0000] text-lg w-full"
    onClick={() => onClick(target)}
  >
    {label}
  </Button>
));

const ProductCard = memo(({ product }) => (
  <Card className="bg-[#ba9f54] border-none shadow-md rounded-2xl">
    <CardContent className="p-4 space-y-2 text-white border border-black text-lg">
      <h3 className="font-bold text-xl text-center">{product.name}</h3>
      <p className="text-base text-center">{product.desc}</p>
      <p className="text-[#623617] border border-black font-extrabold text-2xl text-center drop-shadow-md">
        {product.price}
      </p>
      <Button className="bg-[#527a4c] hover:bg-[#ff0000] text-white w-full border border-black text-base">
        Adicionar ao carrinho
      </Button>
    </CardContent>
  </Card>
));

export default function RioSeedsMobile() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    { name: "Lavanda Mística", desc: "Aromática e calmante.", price: "R$ 19,90" },
    { name: "Kit Verde", desc: "Manjericão, alecrim e hortelã.", price: "R$ 39,90" },
    { name: "Sálvia Branca", desc: "Purificadora e natural.", price: "R$ 24,90" },
    { name: "Essência Alecrim", desc: "Óleo essencial puro.", price: "R$ 29,90" },
  ];

  return (
    <div
      className="min-h-screen text-white text-lg"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/lucas-delate/RioSeeds420/main/assests/FundoRioSeeds420.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="relative h-[12rem] flex flex-col items-center justify-between p-4 bg-[#e4912e] border-b-4 border-[#e4912e]">
        <div className="flex justify-between w-full items-center">
          <img
            src="https://raw.githubusercontent.com/lucas-delate/RioSeeds420/main/assests/LogoRioSeeds420.png"
            alt="Logo Rio Seeds"
            className="h-[6rem] w-auto drop-shadow-lg"
          />
          <Button
            variant="ghost"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white border border-black"
          >
            <Menu />
          </Button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-2 w-full mt-4">
            {[{ label: "Início", target: "home" }, { label: "Loja", target: "store" }, { label: "Sobre", target: "about" }, { label: "Contato", target: "contact" }].map((item) => (
              <NavButton
                key={item.target}
                label={item.label}
                target={item.target}
                currentPage={page}
                onClick={(target) => {
                  setPage(target);
                  setMenuOpen(false);
                }}
              />
            ))}
          </nav>
        )}
      </header>

      <main className="p-4 min-h-[100vh] space-y-8">
        {page === "home" && (
          <section className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-white border border-black bg-[#623617]/70 inline-block px-3 py-2 rounded-2xl">
              🌴 Bem-vindo à Rio Seeds 🌴
            </h1>
            <p className="text-lg border border-black bg-[#ba9f54]/60 p-3 rounded-xl">
              Viva o espírito praiano e natural com nossas ervas e sementes.
            </p>
            <Button
              onClick={() => setPage("store")}
              className="bg-[#e4912e] hover:bg-[#527a4c] text-white border border-black px-6 py-3 rounded-2xl text-base"
            >
              Ver produtos 🌺
            </Button>
          </section>
        )}

        {page === "store" && (
          <section>
            <h2 className="text-3xl text-center mb-4 border border-black bg-[#623617]/60 inline-block px-4 py-2 rounded-xl">
              Nossa Loja 🏝️
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {products.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="text-center space-y-4">
            <h2 className="text-3xl border border-black bg-[#623617]/70 inline-block px-4 py-2 rounded-xl">
              Sobre 🌿
            </h2>
            <p className="border border-black bg-[#ba9f54]/70 p-3 rounded-xl text-lg">
              A Rio Seeds nasceu à beira-mar, inspirada na energia do sol e da natureza.
            </p>
          </section>
        )}

        {page === "contact" && (
          <section className="text-center space-y-4">
            <h2 className="text-3xl border border-black bg-[#623617]/70 inline-block px-4 py-2 rounded-xl">
              Contato 🌊
            </h2>
            <form className="flex flex-col gap-3 text-left text-lg">
              <input type="text" placeholder="Nome" className="p-2 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white" />
              <input type="email" placeholder="E-mail" className="p-2 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white" />
              <textarea placeholder="Mensagem" rows="3" className="p-2 rounded-xl border border-black bg-[#ba9f54]/70 text-white placeholder-white"></textarea>
              <Button className="bg-[#e4912e] hover:bg-[#527a4c] text-white border border-black w-full text-base">
                <Mail className="mr-2" /> Enviar
              </Button>
            </form>
          </section>
        )}
      </main>

      <footer className="mt-8 text-center p-4 bg-[#623617]/90 text-white border-t-4 border-[#e4912e] text-base">
        © {new Date().getFullYear()} Rio Seeds 🌴
      </footer>
    </div>
  );
}
