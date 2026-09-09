import Link from "next/link";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center px-6 text-center"><div><p className="font-mono text-sm text-sky-400">404</p><h1 className="mt-3 text-4xl font-bold text-white">Page not found</h1><p className="mt-4 text-slate-300">The page you requested does not exist.</p><Link className="mt-8 inline-block rounded-lg bg-sky-500 px-5 py-3 font-semibold text-slate-950" href="/">Return home</Link></div></main>;
}
