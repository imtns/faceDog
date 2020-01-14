const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
    wpyExt: '.wpy',
    eslint: false,
    cliLogs: !prod,
    build: {
    },
    resolve: {
        alias: {
            counter: path.join(__dirname, 'src/components/counter'),
            '@': path.join(__dirname, 'src')
        },
        aliasFields: ['wepy', 'weapp'],
        modules: ['node_modules']
    },
    compilers: {
        less: {
            compress: prod
        },
    /* sass: {
      outputStyle: 'compressed'
    }, */
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions'
            ]
        }
    },
    plugins: {
    },
	appConfig: {
		isProd:process.env.NODE_ENV === 'production',
		noPromiseAPI: ['createSelectorQuery'],
		baseUrl: process.env.NODE_ENV === 'production' ? 'https://www.facedog.cn' : 'http://39.97.187.201:8080',
		// baseUrl:'http://39.97.187.201:8080'
		// baseUrl:'https://www.facedog.cn'
    }
};

if (prod) {
  // 压缩sass
    module.exports.compilers['sass'] = {outputStyle: 'compressed'};

  // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.js$/,
            config: {
            }
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    };
}
