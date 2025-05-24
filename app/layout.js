import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "Next.js E-Store",
  description: "Mock e-store capable of holding items and products to sell",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={'/'}>
                  <h1>Main Store</h1>
                </Link>
                <h5 className="mid-text">- Things for cool people -</h5>
                <Cart />
              </div>
              
              
            </header>
            <main>
              {children}
            </main>
            <div className="hr" />

            <footer>
              <div className="email-container">
                <h5>Get a sneak peak at new store additions, special offers,
                  and so much more.
                </h5>
                <EmailInput />
              </div>

              <div className="links-container">
                <div>
                  <h3>Ecosystem</h3>
                  <Link target="_blank" href={'/'}>Project GitHub</Link>
                  <Link target="_blank" href={'/'}>Roadmap</Link>
                </div>
                <div>
                  <h3>Store</h3>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/cart'}>Cart</Link>
                </div>
                <div>
                  <h3>Support</h3>
                  <Link target="_blank" href={'/contact'}>Contact</Link>
                  <Link target="_blank" href={'/faq'}>FAQs</Link>
                </div>
              </div>
              <div className="socials">
                <p>
                  © <a href="" target="_blank">Neehad Morshed</a> 2025
                </p>
                  <br />
                  <p>Built with NextJS & <a target="_blank" href="https://www.fatacss.smiljames.com">FantaCSS</a></p>
                  <div className="social-links">
                    <Link href={'https://github.com/nmorshe'} target="_blank"><i className="fa-brands fa-github"></i></Link>
                    <Link href={'https://www.linkedin.com/in/neehad-morshed-61871629b/'} target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                    <Link href={'/'} target="_blank"></Link>
                  </div>
                
              </div>
            </footer>
          </div>
          
        </body>
      </html>
    </ProductsProvider>
  );
}
