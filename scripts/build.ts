import * as esbuild from 'npm:esbuild';

interface Config {
    minify: boolean;
    platform: 'node' | 'browser' | 'neutral';
}

const CONFIG: Config = {
    minify: false,
    platform: 'browser'
}

await esbuild.build({
    entryPoints: ['example.js'],
    bundle: true,
    keepNames: true,
    outfile: './build/clu.min.js',
    charset: 'utf8',
    ...CONFIG
});
