module.exports = {
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": ["plugin:react-native/all"],
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 0,
        "react-native/no-color-literals": 0,
        "react-native/no-raw-text": 0,
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    }
};