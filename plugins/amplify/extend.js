const configuration = Amplify.configure({
  ...config, ssr: true
})

const base = {
    _app: {
        import: ["import {Amplify} from 'aws-amplify';", "import config from '../src/aws-exports';", configuration],
    },
    test: {
      config: "test 123"
    }
};

module.exports = {
    extend() {
        return base;
    },
};
