module.exports = (bundle, productionMode) => {
    const js = productionMode ? `/static/${bundle.js}` : `/${bundle.js}`;
    const css = productionMode ? `/static/${bundle.css}` : `/${bundle.css}`;

    return (`
        <!doctype html>
            <html>
            <head>
                <title>Media Page</title>
                <link href="${css}" rel="stylesheet" type="text/css">
            </head>
            <body>
            <div id="root"></div>
            <script>
                window.IS_LIVE = ${productionMode}
            </script>
            <script src="${js}"></script>
            </body>
        </html>
    `);
};
