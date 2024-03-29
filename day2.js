const form = document.querySelector("form");
const input = document.querySelector("input");
const reposContainer = document.querySelector(".repos");
const mainContainer = document.querySelector(".main-container");

const API = "https://api.github.com/users/";

async function fetchData(username) {
  try {
    const response = await fetch(`${API}${username}`);
    if (!response.ok) throw new Error(response.statusText);

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      location,
      login,
      twitter_username,
    } = await response.json();

    const html = `
    

    
  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();
  document.getElementById("content").innerHTML = b.joke;
}

day2 day2/index.js day2/index.js/index.html day2/index.js/style.css index.js project project/index.html project/index.html/app.js project/index.html/index.html project/index.html/style.css project4 project4/dad5 da5.js day2.js fast.js index.html style.css
const itemHeaders = document.querySelectorAll(".accordion-item-header");

itemHeaders.forEach((accordion) => {
  accordion.addEventListener("click", collapseAccordions);

 

  const itemHeaders = document.querySelectorAll(".accordion-item-header");

  itemHeaders.forEach((accordion) => {
    accordion.addEventListener("click", collapseAccordions);
  
    function collapseAccordions() {
      const activeAccordion = document.querySelector(".active");
      if (activeAccordion && activeAccordion !== accordion) {
        activeAccordion.classList.toggle("active");
        activeAccordion.nextElementSibling.style.maxHeight = 0;
      }
  
      accordion.classList.toggle("active");
      const accordionItemBody = accordion.nextElementSibling;
  
      if (accordion.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    }
  });
  let color1 = document.querySelector(".c1");
  let color2 = document.querySelector(".c2");
  let gradientCont = document.querySelector("#gradient-cont");
  let btn = document.querySelector(".randomColorBtn");
  
  function makeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  
  function generateGradient() {
    color1.value = "#" + makeColor();
    color2.value = "#" + makeColor();
    gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  }
  
  function setGradient() {
    gradientCont.style.background = `linear-gradient(${color1.value}, ${color2.value})`;
  }
  
  document.body.addEventListener("load", generateGradient());
  color1.addEventListener("input", setGradient);
  color2.addEventListener("input", setGradient);
  btn.addEventListener("click", generateGradient);
  // @ts-check
  
  // Using esbuild for faster dev builds.
  // We are still using Rollup for production builds because it generates
  // smaller files and provides better tree-shaking.
  
  import esbuild from 'esbuild';
  import { polyfillNode } from 'esbuild-plugin-polyfill-node';
  import minimist from 'minimist';
  import { createRequire } from 'node:module';
  import { dirname, relative, resolve } from 'node:path';
  import { fileURLToPath } from 'node:url';
  import type { MockInstance } from 'vitest';
  
  const require = createRequire(import.meta.url)
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const args = minimist(process.argv.slice(2))
  const targets = args._.length ? args._ : ['vue']
  const format = args.f || 'global'
  const prod = args.p || false
  const inlineDeps = args.i || args.inline
  
  // resolve output
  const outputFormat = format.startsWith('global')
    ? 'iife'
    : format === 'cjs'
      ? 'cjs'
      : 'esm'
  
  const postfix = format.endsWith('-runtime')
    ? `runtime.${format.replace(/-runtime$/, '')}`
    : format
  
  for (const target of targets) {
    const pkg = require(`../packages/${target}/package.json`)
    const outfile = resolve(
      __dirname,
      `../packages/${target}/dist/${
        target === 'vue-compat' ? `vue` : target
      }.${postfix}.${prod ? `prod.` : ``}js`,
    )
    const relativeOutfile = relative(process.cwd(), outfile)
  
    // resolve externals
    // TODO this logic is largely duplicated from rollup.config.js
    /** @type {string[]} */
    let external = []
    if (!inlineDeps) {
      // cjs & esm-bundler: external all deps
      if (format === 'cjs' || format.includes('esm-bundler')) {
        external = [
          ...external,
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {}),
          // for @vue/compiler-sfc / server-renderer
          'path',
          'url',
          'stream',
        ]
      }
  
      if (target === 'compiler-sfc') {
        const consolidatePkgPath = require.resolve(
          '@vue/consolidate/package.json',
          {
            paths: [resolve(__dirname, `../packages/${target}/`)],
          },
        )
        const consolidateDeps = Object.keys(
          require(consolidatePkgPath).devDependencies,
        )
        external = [
          ...external,
          ...consolidateDeps,
          'fs',
          'vm',
          'crypto',
          'react-dom/server',
          'teacup/lib/express',
          'arc-templates/dist/es5',
          'then-pug',
          'then-jade',
        ]
      }
    }
    /** @type {Array<import('esbuild').Plugin>} */
    const plugins = [
      {
        name: 'log-rebuild',
        setup(build) {
          build.onEnd(() => {
            console.log(`built: ${relativeOutfile}`)
          })
        },
      },
    ]
  
    if (format !== 'cjs' && pkg.buildOptions?.enableNonBrowserBranches) {
      plugins.push(polyfillNode())
    }
  
    esbuild
      .context({
        entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
        outfile,
        bundle: true,
        external,
        sourcemap: true,
        format: outputFormat,
        globalName: pkg.buildOptions?.name,
        platform: format === 'cjs' ? 'node' : 'browser',
        plugins,
        define: {
          __COMMIT__: `"dev"`,
          __VERSION__: `"${pkg.version}"`,
          __DEV__: prod ? `false` : `true`,
          __TEST__: `false`,
          __BROWSER__: String(
            format !== 'cjs' && !pkg.buildOptions?.enableNonBrowserBranches,
          ),
          __GLOBAL__: String(format === 'global'),
          __ESM_BUNDLER__: String(format.includes('esm-bundler')),
          __ESM_BROWSER__: String(format.includes('esm-browser')),
          __CJS__: String(format === 'cjs'),
          __SSR__: String(format === 'cjs' || format.includes('esm-bundler')),
          __COMPAT__: String(target === 'vue-compat'),
          __FEATURE_SUSPENSE__: `true`,
          __FEATURE_OPTIONS_API__: `true`,
          __FEATURE_PROD_DEVTOOLS__: `false`,
          __FEATURE_PROD_HYDRATION_MISMATCH_DETAILS__: `false`,
        },
      })
      .then(ctx => ctx.watch())
  }
  
  vi.stubGlobal('MathMLElement', class MathMLElement {})
  
  expect.extend({
    toHaveBeenWarned(received: string) {
      const passed = warn.mock.calls.some(args => args[0].includes(received))
      if (passed) {
        asserted.add(received)
        return {
          pass: true,
          message: () => `expected "${received}" not to have been warned.`,
        }
      } else {
        const msgs = warn.mock.calls.map(args => args[0]).join('\n - ')
        return {
          pass: false,
          message: () =>
            `expected "${received}" to have been warned` +
            (msgs.length
              ? `.\n\nActual messages:\n\n - ${msgs}`
              : ` but no warning was recorded.`),
        }
      }
    },
  
    toHaveBeenWarnedLast(received: string) {
      const passed =
        warn.mock.calls[warn.mock.calls.length - 1][0].includes(received)
      if (passed) {
        asserted.add(received)
        return {
          pass: true,
          message: () => `expected "${received}" not to have been warned last.`,
        }
      } else {
        const msgs = warn.mock.calls.map(args => args[0]).join('\n - ')
        return {
          pass: false,
          message: () =>
            `expected "${received}" to have been warned last.\n\nActual messages:\n\n - ${msgs}`,
        }
      }
    },
  
    toHaveBeenWarnedTimes(received: string, n: number) {
      let found = 0
      warn.mock.calls.forEach(args => {
        if (args[0].includes(received)) {
          found++
        }
      })
  
      if (found === n) {
        asserted.add(received)
        return {
          pass: true,
          message: () => `expected "${received}" to have been warned ${n} times.`,
        }
      } else {
        return {
          pass: false,
          message: () =>
            `expected "${received}" to have been warned ${n} times but got ${found}.`,
        }
      }
    },
  })
  
  let warn: MockInstance
  const asserted: Set<string> = new Set()
  
  beforeEach(() => {
    asserted.clear()
    warn = vi.spyOn(console, 'warn')
    warn.mockImplementation(() => {})
  })
  
  afterEach(() => {
    const assertedArray = Array.from(asserted)
    const nonAssertedWarnings = warn.mock.calls
      .map(args => args[0])
      .filter(received => {
        return !assertedArray.some(assertedMsg => {
          return received.includes(assertedMsg)
        })
      })
    warn.mockRestore()
    if (nonAssertedWarnings.length) {
      throw new Error(
        `test case threw unexpected warnings:\n - ${nonAssertedWarnings.join(
          '\n - ',
        )}`,
      )
    }
  })
  // @ts-check
  import fs from 'node:fs';
  import pico from 'picocolors';
  
  const require = createRequire(import.meta.url)
  
  export const targets = fs.readdirSync('packages').filter(f => {
    if (
      !fs.statSync(`packages/${f}`).isDirectory() ||
      !fs.existsSync(`packages/${f}/package.json`)
    ) {
      return false
    }
    const pkg = require(`../packages/${f}/package.json`)
    if (pkg.private && !pkg.buildOptions) {
      return false
    }
    return true
  })
  
  /**
   *
   * @param {ReadonlyArray<string>} partialTargets
   * @param {boolean | undefined} includeAllMatching
   */
  export function fuzzyMatchTarget(partialTargets, includeAllMatching) {
    /** @type {Array<string>} */
    const matched = []
    partialTargets.forEach(partialTarget => {
      for (const target of targets) {
        if (target.match(partialTarget)) {
          matched.push(target)
          if (!includeAllMatching) {
            break
          }
        }
      }
    })
    if (matched.length) {
      return matched
    } else {
      console.log()
      console.error(
        `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
          `Target ${pico.underline(partialTargets.toString())} not found!`,
        )}`,
      )
      console.log()
  
      process.exit(1)
    }
  }
  // @ts-check
  
  const require = createRequire(import.meta.url)
  
  export const targets = fs.readdirSync('packages').filter(f => {
    if (
      !fs.statSync(`packages/${f}`).isDirectory() ||
      !fs.existsSync(`packages/${f}/package.json`)
    ) {
      return false
    }
    const pkg = require(`../packages/${f}/package.json`)
    if (pkg.private && !pkg.buildOptions) {
      return false
    }
    return true
  })
  
  /**
   *
   * @param {ReadonlyArray<string>} partialTargets
   * @param {boolean | undefined} includeAllMatching
   */
  export function fuzzyMatchTarget(partialTargets, includeAllMatching) {
    /** @type {Array<string>} */
    const matched = []
    partialTargets.forEach(partialTarget => {
      for (const target of targets) {
        if (target.match(partialTarget)) {
          matched.push(target)
          if (!includeAllMatching) {
            break
          }
        }
      }
    })
    if (matched.length) {
      return matched
    } else {
      console.log()
      console.error(
        `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
          `Target ${pico.underline(partialTargets.toString())} not found!`,
        )}`,
      )
      console.log()
  
      process.exit(1)
    }
  }
  // @ts-check
  
  const require = createRequire(import.meta.url)
  
  export const targets = fs.readdirSync('packages').filter(f => {
    if (
      !fs.statSync(`packages/${f}`).isDirectory() ||
      !fs.existsSync(`packages/${f}/package.json`)
    ) {
      return false
    }
    const pkg = require(`../packages/${f}/package.json`)
    if (pkg.private && !pkg.buildOptions) {
      return false
    }
    return true
  })
  
  /**
   *
   * @param {ReadonlyArray<string>} partialTargets
   * @param {boolean | undefined} includeAllMatching
   */
  export function fuzzyMatchTarget(partialTargets, includeAllMatching) {
    /** @type {Array<string>} */
    const matched = []
    partialTargets.forEach(partialTarget => {
      for (const target of targets) {
        if (target.match(partialTarget)) {
          matched.push(target)
          if (!includeAllMatching) {
            break
          }
        }
      }
    })
    if (matched.length) {
      return matched
    } else {
      console.log()
      console.error(
        `  ${pico.white(pico.bgRed(' ERROR '))} ${pico.red(
          `Target ${pico.underline(partialTargets.toString())} not found!`,
        )}`,
      )
      console.log()
  
      process.exit(1)
    }
  }
  {
    "
      "vitest": "latest"
    }
  }
  
  
  
