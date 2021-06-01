module.exports = {
    apply(package, answers) {
        if (answers.database === 'mongodb') {
            package.dependencies["mongodb"] = "^3.6.8";
            package.dependencies["bcryptjs"] = "^2.4.3";
        }

        return package;
    }
}