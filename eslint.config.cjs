const nx = require("@nx/eslint-plugin");
const stylisticTs = require("@stylistic/eslint-plugin-ts");
const importPlugin = require("eslint-plugin-import");

module.exports = [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    {
        "ignores": ["**/dist"]
    },
    {
        "files": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        "rules": {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    "enforceBuildableLibDependency": true,
                    "allow": ["^.*/eslint(\\.base)?\\.config\\.[cm]?js$"],
                    "depConstraints": [
                        {
                            "sourceTag": "*",
                            "onlyDependOnLibsWithTags": ["type:util"]
                        }
                    ]
                }
            ]
        }
    },
    {
        "files": [
            "**/*.ts",
            "**/*.tsx",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs"
        ],
        "plugins": {"@stylistic/ts": stylisticTs}
    },
    stylisticTs.configs["all-flat"],
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    {
        "files": ["**/*.{js,mjs,cjs,ts}"],
        "rules": {
            "import/order": [
                "error",
                {
                    "alphabetize": {
                        "order": "asc",
                        "caseInsensitive": false
                    },
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index"
                    ],
                    "newlines-between": "always",
                    "pathGroups": []
                }
            ]
        }
    }];
