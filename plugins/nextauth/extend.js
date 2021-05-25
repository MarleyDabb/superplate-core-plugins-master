const base = {
    _app: {
        import: ["import {Provider} from 'next-auth/client';"],
        wrapper: [["<Provider session={pageProps.session}>", "</Provider>"]]
    },
};

module.exports = {
    extend() {
        return base;
    },
};