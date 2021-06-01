const base = {
    _app: {
        import: ['import "tailwindcss/tailwind.css";',
        'import { Layout } from "@components";'],
        inner: [],
        wrapper: [["<Layout>", "</Layout>"]],
    },
    _document: {
        import: [],
        inner: [],
        wrapper: [],
    },
};

module.exports = {
    extend() {
        return base;
    },
};
