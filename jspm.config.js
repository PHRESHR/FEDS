System.config({
  "baseURL": "./",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.1",
    "angular-animate": "github:angular/bower-angular-animate@1.4.1",
    "angular-aria": "github:angular/bower-angular-aria@1.4.1",
    "angular-mocks": "npm:angular-mocks@1.4.1",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.4.1",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "babel": "npm:babel-core@5.5.5",
    "babel-runtime": "npm:babel-runtime@5.5.5",
    "core-js": "npm:core-js@0.9.14",
    "css": "github:systemjs/plugin-css@0.1.13",
    "cssnext": "npm:cssnext@1.7.1",
    "jspm-loader-css": "npm:jspm-loader-css@0.1.5",
    "lodash": "github:lodash/lodash@3.9.3",
    "lost": "npm:lost@6.4.0",
    "postcss-mixins": "npm:postcss-mixins@0.3.0",
    "postcss-nested": "npm:postcss-nested@0.3.2",
    "postcss-simple-extend": "npm:postcss-simple-extend@0.3.1",
    "postcss-simple-vars": "npm:postcss-simple-vars@0.3.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-animate@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-aria@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:angular/bower-angular-sanitize@1.4.1": {
      "angular": "github:angular/bower-angular@1.4.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.2"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:systemjs/plugin-css@0.1.12": {
      "clean-css": "npm:clean-css@3.1.9",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:amdefine@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.0",
      "micromatch": "npm:micromatch@2.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:arr-diff@1.0.1": {
      "array-slice": "npm:array-slice@0.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:asn1.js@2.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:autoprefixer-core@5.2.1": {
      "browserslist": "npm:browserslist@0.4.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000216",
      "num2fraction": "npm:num2fraction@1.1.0",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.5.5": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:binary-extensions@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.0": {
      "expand-range": "npm:expand-range@1.8.1",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browserify-aes@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.2": {
      "bn.js": "npm:bn.js@2.1.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserslist@0.4.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000216",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.2.2": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:caniuse-api@1.3.2": {
      "browserslist": "npm:browserslist@0.4.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000216",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.memoize": "npm:lodash.memoize@2.4.1",
      "lodash.uniq": "npm:lodash.uniq@3.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "shelljs": "npm:shelljs@0.3.0"
    },
    "npm:chalk@1.0.0": {
      "ansi-styles": "npm:ansi-styles@2.0.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-ansi": "npm:strip-ansi@2.0.1",
      "supports-color": "npm:supports-color@1.3.1"
    },
    "npm:chokidar@1.0.3": {
      "anymatch": "npm:anymatch@1.3.0",
      "arrify": "npm:arrify@1.0.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@0.3.6",
      "glob-parent": "npm:glob-parent@1.2.0",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readdirp": "npm:readdirp@1.3.0"
    },
    "npm:clean-css@3.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:color-name@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color-string@0.2.4": {
      "color-name": "npm:color-name@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color-string@0.3.0": {
      "color-name": "npm:color-name@1.0.0"
    },
    "npm:color@0.7.3": {
      "color-convert": "npm:color-convert@0.5.3",
      "color-string": "npm:color-string@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color@0.8.0": {
      "color-convert": "npm:color-convert@0.5.3",
      "color-string": "npm:color-string@0.3.0"
    },
    "npm:colormin@1.0.1": {
      "color": "npm:color@0.8.0",
      "css-color-names": "npm:css-color-names@0.0.1"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "browserify-sign": "npm:browserify-sign@3.0.2",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:css-color-function@1.2.1": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "color": "npm:color@0.7.3",
      "debug": "npm:debug@0.7.4",
      "rgb": "npm:rgb@0.1.0"
    },
    "npm:css-color-names@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:css-modules-loader-core@0.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.13",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@0.0.5",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@0.0.9",
      "postcss-modules-scope": "npm:postcss-modules-scope@0.0.7"
    },
    "npm:css-selector-tokenizer@0.4.1": {
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:css-selector-tokenizer@0.5.2": {
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:cssnano@1.4.3": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "css-list": "npm:css-list@0.1.0",
      "flatten": "npm:flatten@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "indexes-of": "npm:indexes-of@1.0.1",
      "minimist": "npm:minimist@1.1.1",
      "postcss": "npm:postcss@4.1.13",
      "postcss-calc": "npm:postcss-calc@4.1.0",
      "postcss-colormin": "npm:postcss-colormin@1.2.3",
      "postcss-convert-values": "npm:postcss-convert-values@1.2.2",
      "postcss-discard-comments": "npm:postcss-discard-comments@1.2.0",
      "postcss-discard-duplicates": "npm:postcss-discard-duplicates@1.1.3",
      "postcss-discard-empty": "npm:postcss-discard-empty@1.1.1",
      "postcss-discard-unused": "npm:postcss-discard-unused@1.0.0",
      "postcss-font-family": "npm:postcss-font-family@1.1.0",
      "postcss-merge-idents": "npm:postcss-merge-idents@1.0.1",
      "postcss-merge-rules": "npm:postcss-merge-rules@1.3.0",
      "postcss-minify-font-weight": "npm:postcss-minify-font-weight@1.0.1",
      "postcss-minify-selectors": "npm:postcss-minify-selectors@1.4.1",
      "postcss-normalize-url": "npm:postcss-normalize-url@1.2.1",
      "postcss-pseudoelements": "npm:postcss-pseudoelements@2.2.0",
      "postcss-reduce-idents": "npm:postcss-reduce-idents@1.0.1",
      "postcss-single-charset": "npm:postcss-single-charset@0.2.2",
      "postcss-unique-selectors": "npm:postcss-unique-selectors@1.0.0",
      "postcss-zindex": "npm:postcss-zindex@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "read-file-stdin": "npm:read-file-stdin@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "write-file-stdout": "npm:write-file-stdout@0.0.2"
    },
    "npm:cssnext@1.7.1": {
      "autoprefixer-core": "npm:autoprefixer-core@5.2.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caniuse-api": "npm:caniuse-api@1.3.2",
      "chalk": "npm:chalk@1.0.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.0.3",
      "commander": "npm:commander@2.6.0",
      "cssnano": "npm:cssnano@1.4.3",
      "exit": "npm:exit@0.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pixrem": "npm:pixrem@1.2.4",
      "pleeease-filters": "npm:pleeease-filters@1.0.1",
      "postcss": "npm:postcss@4.1.13",
      "postcss-calc": "npm:postcss-calc@4.1.0",
      "postcss-color-function": "npm:postcss-color-function@1.3.0",
      "postcss-color-gray": "npm:postcss-color-gray@2.0.0",
      "postcss-color-hex-alpha": "npm:postcss-color-hex-alpha@1.2.0",
      "postcss-color-hwb": "npm:postcss-color-hwb@1.1.0",
      "postcss-color-rebeccapurple": "npm:postcss-color-rebeccapurple@1.1.0",
      "postcss-color-rgba-fallback": "npm:postcss-color-rgba-fallback@1.3.0",
      "postcss-custom-media": "npm:postcss-custom-media@4.0.0",
      "postcss-custom-properties": "npm:postcss-custom-properties@4.0.0",
      "postcss-custom-selectors": "npm:postcss-custom-selectors@2.1.0",
      "postcss-font-variant": "npm:postcss-font-variant@1.1.0",
      "postcss-import": "npm:postcss-import@6.0.0",
      "postcss-log-warnings": "npm:postcss-log-warnings@0.3.1",
      "postcss-media-minmax": "npm:postcss-media-minmax@1.1.0",
      "postcss-messages": "npm:postcss-messages@0.2.2",
      "postcss-pseudo-class-any-link": "npm:postcss-pseudo-class-any-link@0.2.1",
      "postcss-pseudoelements": "npm:postcss-pseudoelements@2.2.0",
      "postcss-selector-matches": "npm:postcss-selector-matches@1.1.1",
      "postcss-selector-not": "npm:postcss-selector-not@1.2.1",
      "postcss-url": "npm:postcss-url@3.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "read-file-stdin": "npm:read-file-stdin@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "to-slug-case": "npm:to-slug-case@0.1.2",
      "to-space-case": "npm:to-space-case@0.1.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "write-file-stdout": "npm:write-file-stdout@0.0.2"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:directory-encoder@0.6.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-extra": "npm:fs-extra@0.8.1",
      "handlebars": "npm:handlebars@1.1.2",
      "img-stats": "npm:img-stats@0.4.2",
      "lodash": "npm:lodash@2.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.1.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:exit@0.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.2"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fill-range@2.2.2": {
      "is-number": "npm:is-number@1.1.2",
      "isobject": "npm:isobject@1.0.0",
      "randomatic": "npm:randomatic@1.1.0",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:flatten@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:fs-extra@0.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsonfile": "npm:jsonfile@1.1.1",
      "mkdirp": "npm:mkdirp@0.3.5",
      "ncp": "npm:ncp@0.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.2.8"
    },
    "npm:fsevents@0.3.6": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@1.8.4",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gather-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob-base@0.2.0": {
      "glob-parent": "npm:glob-parent@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@1.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.8",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:handlebars@1.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "uglify-js": "npm:uglify-js@2.3.6"
    },
    "npm:has-ansi@1.0.3": {
      "ansi-regex": "npm:ansi-regex@1.1.1",
      "get-stdin": "npm:get-stdin@4.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:img-stats@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "xmldom": "npm:xmldom@0.1.16"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:js-base64@2.1.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jsonfile@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:jspm-loader-css-modules@0.1.2": {
      "jspm-loader-css": "npm:jspm-loader-css@0.1.5"
    },
    "npm:jspm-loader-css@0.1.4": {
      "css-modules-loader-core": "npm:css-modules-loader-core@0.0.10",
      "path": "npm:path@0.11.14"
    },
    "npm:jspm-loader-css@0.1.5": {
      "css-modules-loader-core": "npm:css-modules-loader-core@0.0.10",
      "path": "npm:path@0.11.14"
    },
    "npm:kind-of@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:lodash._basecallback@3.3.0": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.pairs": "npm:lodash.pairs@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._baseisequal@3.0.7": {
      "lodash.isarray": "npm:lodash.isarray@3.0.3",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.1"
    },
    "npm:lodash._baseuniq@3.0.2": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.1"
    },
    "npm:lodash._createcache@3.1.1": {
      "lodash._getnative": "npm:lodash._getnative@3.9.0"
    },
    "npm:lodash._getnative@3.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.isarray@3.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.keys@3.1.1": {
      "lodash._getnative": "npm:lodash._getnative@3.9.0",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash.memoize@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash.pairs@3.0.1": {
      "lodash.keys": "npm:lodash.keys@3.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.uniq@3.2.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.0",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.2",
      "lodash._getnative": "npm:lodash._getnative@3.9.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.3"
    },
    "npm:lodash@2.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lost@6.4.0": {
      "object-assign": "npm:object-assign@2.0.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:micromatch@2.1.6": {
      "arr-diff": "npm:arr-diff@1.0.1",
      "braces": "npm:braces@1.8.0",
      "debug": "npm:debug@2.2.0",
      "expand-brackets": "npm:expand-brackets@0.1.1",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-glob": "npm:is-glob@1.1.3",
      "kind-of": "npm:kind-of@1.1.0",
      "object.omit": "npm:object.omit@0.2.1",
      "parse-glob": "npm:parse-glob@3.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.1.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.6.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.8": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.3.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:nan@1.8.4": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ncp@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:normalize-selector@0.0.3-a": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:normalize-url@1.3.0": {
      "object-assign": "npm:object-assign@3.0.0",
      "prepend-http": "npm:prepend-http@1.0.1",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "query-string": "npm:query-string@2.3.0",
      "sort-keys": "npm:sort-keys@1.0.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:object.omit@0.2.1": {
      "for-own": "npm:for-own@0.1.3",
      "isobject": "npm:isobject@0.2.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wordwrap": "npm:wordwrap@0.0.3"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.1.0",
      "browserify-aes": "npm:browserify-aes@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.2": {
      "glob-base": "npm:glob-base@0.2.0",
      "is-dotfile": "npm:is-dotfile@1.0.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@1.1.3"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path@0.11.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pixrem@1.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reduce-css-calc": "npm:reduce-css-calc@1.2.0"
    },
    "npm:pleeease-filters@1.0.1": {
      "onecolor": "npm:onecolor@2.4.2",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-calc@4.1.0": {
      "postcss": "npm:postcss@4.1.13",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-css-calc": "npm:reduce-css-calc@1.2.0"
    },
    "npm:postcss-color-function@1.3.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "css-color-function": "npm:css-color-function@1.2.1",
      "postcss": "npm:postcss@4.1.13",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-gray@2.0.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-color-hex-alpha@1.2.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-hwb@1.1.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-color-rebeccapurple@1.1.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-rgba-fallback@1.3.0": {
      "color-string": "npm:color-string@0.3.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-colormin@1.2.3": {
      "color": "npm:color@0.8.0",
      "colormin": "npm:colormin@1.0.1",
      "postcss": "npm:postcss@4.1.13",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-convert-values@1.2.2": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "css-list": "npm:css-list@0.0.3",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-custom-media@4.0.0": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-custom-properties@4.0.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-discard-comments@1.2.0": {
      "node-balanced": "npm:node-balanced@0.0.14",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-discard-duplicates@1.1.3": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-discard-empty@1.1.1": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-discard-unused@1.0.0": {
      "flatten": "npm:flatten@0.0.1",
      "postcss": "npm:postcss@4.1.13",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-font-family@1.1.0": {
      "postcss": "npm:postcss@4.1.13",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-import@6.0.0": {
      "clone": "npm:clone@0.1.19",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.11",
      "object-assign": "npm:object-assign@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.13",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6",
      "string-hash": "npm:string-hash@1.1.0"
    },
    "npm:postcss-log-warnings@0.3.1": {
      "chalk": "npm:chalk@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-merge-idents@1.0.1": {
      "css-list": "npm:css-list@0.1.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-merge-rules@1.3.0": {
      "flatten": "npm:flatten@0.0.1",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-messages@0.2.2": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-minify-font-weight@1.0.1": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-minify-selectors@1.4.1": {
      "javascript-natural-sort": "npm:javascript-natural-sort@0.7.1",
      "normalize-selector": "npm:normalize-selector@0.0.3-a",
      "postcss": "npm:postcss@4.1.13",
      "postcss-selector-parser": "npm:postcss-selector-parser@0.0.5",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-mixins@0.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.13",
      "postcss-simple-vars": "npm:postcss-simple-vars@0.3.0"
    },
    "npm:postcss-modules-extract-imports@0.0.5": {
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-local-by-default@0.0.9": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.4.1",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-modules-scope@0.0.7": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.2",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-nested@0.3.2": {
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-normalize-url@1.2.1": {
      "indexes-of": "npm:indexes-of@1.0.1",
      "is-absolute-url": "npm:is-absolute-url@1.0.0",
      "normalize-url": "npm:normalize-url@1.3.0",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-pseudo-class-any-link@0.2.1": {
      "postcss": "npm:postcss@4.1.13",
      "postcss-selector-parser": "npm:postcss-selector-parser@1.1.1"
    },
    "npm:postcss-pseudoelements@2.2.0": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-reduce-idents@1.0.1": {
      "postcss": "npm:postcss@4.1.13",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-selector-matches@1.1.1": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-selector-not@1.2.1": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-selector-parser@0.0.5": {
      "flatten": "npm:flatten@0.0.1",
      "indexes-of": "npm:indexes-of@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "uniq": "npm:uniq@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:postcss-selector-parser@1.1.1": {
      "flatten": "npm:flatten@0.0.1",
      "indexes-of": "npm:indexes-of@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:postcss-simple-extend@0.3.1": {
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-simple-vars@0.3.0": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss-single-charset@0.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:postcss-unique-selectors@1.0.0": {
      "css-list": "npm:css-list@0.1.0",
      "javascript-natural-sort": "npm:javascript-natural-sort@0.7.1",
      "postcss": "npm:postcss@4.1.13",
      "uniqs": "npm:uniqs@2.0.0"
    },
    "npm:postcss-url@3.3.1": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "directory-encoder": "npm:directory-encoder@0.6.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "mime": "npm:mime@1.3.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "postcss": "npm:postcss@4.1.13",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reduce-function-call": "npm:reduce-function-call@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:postcss-zindex@1.1.2": {
      "postcss": "npm:postcss@4.1.13"
    },
    "npm:postcss@4.1.13": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process@0.11.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.1.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randomatic@1.1.0": {
      "is-number": "npm:is-number@1.1.2",
      "kind-of": "npm:kind-of@1.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:read-file-stdin@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gather-stream": "npm:gather-stream@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readdirp@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:reduce-css-calc@1.2.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:reduce-function-call@1.0.1": {
      "balanced-match": "npm:balanced-match@0.1.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rimraf@2.2.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:shelljs@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.2": {
      "amdefine": "npm:amdefine@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string-hash@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@2.0.1": {
      "ansi-regex": "npm:ansi-regex@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@1.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.1"
    },
    "npm:to-slug-case@0.1.2": {
      "to-space-case": "npm:to-space-case@0.1.2"
    },
    "npm:to-space-case@0.1.2": {
      "to-no-case": "npm:to-no-case@0.1.1"
    },
    "npm:to-space-case@0.1.3": {
      "to-no-case": "npm:to-no-case@0.1.2"
    },
    "npm:uglify-js@2.3.6": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:uniqs@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:write-file-stdout@0.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:xmldom@0.1.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

