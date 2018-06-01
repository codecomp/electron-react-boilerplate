# Electron React Webpack Boilerplate

## Prerequisites

* Node [https://nodejs.org/en/download/]
* NPM [https://www.npmjs.com/get-npm]

## Folder structure

```shell
/                           # → Applicaiton Root
├── app                     # → React installation directory
│   ├── dist/               # → Compiled assets directory (never edit)
│   ├── src/                # → React applicaiton source files
│   │   ├── assets          # → Image and relate files for importing
│   │   ├── components      # → React components
│   │   ├── App.js          # → React main component where everything is tied up
│   │   ├── index.css       # → Global CSS and global constants go here 
│   │   └── index.js        # → Electron's renderer-process, where you React app is called
│   └── index.html          # → React entrypoint
├── .babelrc                # → Babel configuration (never edit)
├── .gitignore              # → Git ignore file
├── index.js                # → Electron's main process. Whole app is launched from here
├── package.json            # → Package file
├── README.md               # → Package readme
└── webpack.config.js       # → Webapck 4 setup (never edit)
```

## Roadmap

* Setup file-loader to handle images.
* Separate webpack into common, development and production.
* Setup build scripts and packages for one step build process.

## History

###1.0.0
Initial setup

## Credits

Chris morris [http://codecomposer.co.uk]

## License

The MIT License (MIT)

Copyright (c) 2017 Chris Morris

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
