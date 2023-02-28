import DarkModebtn from "components/DarkModebtn";
import Image from "next/image";
import Link from "next/link";
import { ImTwitter, ImGithub } from "react-icons/im";
import "../styles/globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // header and footer props
  const header = (
    <header>
      <div className="text-center border-8 border-double bg-violet-700 drop-shadow-xl p-8 my-6 rounded-md">
        <Image
          src="/derncat.png"
          width={40}
          height={40}
          className="border border-slate-700 mx-auto drop-shadow-xl"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4 drop-shadow-xl">
            dern.blog
          </h1>
        </Link>
        <p className="text-slate-200">
          ✍️ Writing about Bitcoin, Regenerative Agriculture & tech 🤙
        </p>
        <p className="text-slate-200"> 🙏 Thanks for reading! 🙏</p>
        <DarkModebtn />
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-500">
        <h3>Built by Bitdern</h3>
      </div>
      <div className="order-2 flex justify-center text-violet-700 mb-20">
        <Link href="https://twitter.com/bitdern">
          <h4>
            <ImTwitter />
          </h4>
        </Link>
        <Link href="https://github.com/bitdern">
          <h4>
            <ImGithub />
          </h4>
        </Link>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          <Providers>
            {header}
            {children}
            {footer}
          </Providers>
        </div>
      </body>
    </html>
  );
}
