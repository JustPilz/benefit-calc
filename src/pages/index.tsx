import * as React from "react";

import Layout from "@/components/layout/Layout";
import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import Seo from "@/components/Seo";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from "~/svg/Vercel.svg";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className="bg-white">
          <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
            <Vercel className="text-5xl" />
            <h1 className="mt-4">
              Next.js + Tailwind CSS + TypeScript Starter
            </h1>
            <p className="mt-2 text-sm text-gray-800">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{" "}
            </p>
            <p className="mt-2 text-sm text-gray-700">
              <ArrowLink href="https://github.com/theodorusclarence/ts-nextjs-tailwind-starter">
                See the repository
              </ArrowLink>
            </p>

            <ButtonLink className="mt-6" href="/components" variant="light">
              See all components
            </ButtonLink>
            <ButtonLink className="mt-6" href="/calc" variant="light">
              Calc
            </ButtonLink>

            <UnstyledLink
              href="https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter"
              className="mt-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="92"
                height="32"
                src="https://vercel.com/button"
                alt="Deploy with Vercel"
              />
            </UnstyledLink>

            <footer className="absolute bottom-2 text-gray-700">
              © {new Date().getFullYear()} By{" "}
              <UnderlineLink href="https://theodorusclarence.com?ref=tsnextstarter">
                Theodorus Clarence
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
      {/* <div className="flex font-sans">
        <div className="relative w-48 flex-none">
          <img
            src="/classic-utility-jacket.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              Classic Utility Jacket
            </h1>
            <div className="text-lg font-semibold text-slate-500">$110.00</div>
            <div className="mt-2 w-full flex-none text-sm font-medium text-slate-700">
              In stock
            </div>
          </div>
          <div className="mt-4 mb-6 flex items-baseline border-b border-slate-200 pb-6">
            <div className="flex space-x-2 text-sm">
              <label>
                <input
                  className="peer sr-only"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input
                  className="peer sr-only"
                  name="size"
                  type="radio"
                  value="s"
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input
                  className="peer sr-only"
                  name="size"
                  type="radio"
                  value="m"
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input
                  className="peer sr-only"
                  name="size"
                  type="radio"
                  value="l"
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input
                  className="peer sr-only"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <div className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 peer-checked:bg-slate-900 peer-checked:font-semibold peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className="mb-6 flex space-x-4 text-sm font-medium">
            <div className="flex flex-auto space-x-4">
              <button
                className="h-10 rounded-md bg-black px-6 font-semibold text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 rounded-md border border-slate-200 px-6 font-semibold text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 text-slate-300"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div> */}
    </Layout>
  );
}
