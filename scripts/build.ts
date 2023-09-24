import * as esbuild from 'npm:esbuild';
import cfg from '@manifest' assert { type: 'json' };

const VERSION = cfg.VERSION || "v0.0.0";

const BANNER = `/**
 * C.L.U. - Coded Likeness Utility
 * @license MIT (see LICENSE)
 * @version ${VERSION} (built ${new Date().toUTCString()})
 * @AtomicGamer9523 <https://matveit.dev>
*/

// deno-lint-ignore-file
`;

console.log(`Building C.L.U. ${VERSION}...`);

await esbuild.build({
    entryPoints: ["example.js"],
    alias: {
        'types+': './CLU/libs/tss/tss/types+.ts'
    },
    banner: {
        js: BANNER,
    },
    bundle: true,
    keepNames: true,
    outdir: './build',
    charset: 'utf8',
    absWorkingDir: Deno.cwd(),
    platform: 'browser',
    minify: cfg.DEBUG ? false : true
});

console.log(`Build complete!`);
