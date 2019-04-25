module.exports = {
    mode : "production",
    // 入口，是一个对象
    entry: {
        app: './out/myTable.js'
    },

    // 输出
    output: {
        // 带五位hash值的js
        filename: './out/bundle.js'
    },
    module: {

        rules: [

            {

                test: /\.js$/,

                loader: 'babel-loader',

                exclude: __dirname + 'node_modules',

                include: __dirname + 'src',

                options: {

                    presets: ["@babel/preset-react",
                    [
                        "@babel/preset-env",
                        {
                            "loose": true
                        }
                    ]
                ],
                    plugins:[
                        "transform-omodule-variable",
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-class-properties",
                        "@babel/plugin-proposal-export-default-from",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-transform-runtime",
                        ["react-hot-loader/babel"],
                        ["@babel/plugin-syntax-dynamic-import"]
                    ],

                }

            }

        ]

    },
}