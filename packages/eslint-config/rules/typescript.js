/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { rules: rulesErrors } = require('./errors');
const { rules: rulesBestPractices } = require('./best-practices');
const { rules: rulesStrict } = require('./strict');
const { rules: rulesVariables } = require('./variables');
const { rules: rulesNode } = require('./node');
const { rules: rulesStylistic } = require('./stylistic');
const { rules: rulesES6 } = require('./es6');

const rules = {
  // Require that member overloads be consecutive
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Requires using either `T[]` or `Array<T>` for arrays
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
  '@typescript-eslint/array-type': ['error', { default: 'array' }],

  // Disallows awaiting a value that is not a Thenable
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
  '@typescript-eslint/await-thenable': 'error',

  // Bans “// @ts-ignore” comments from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
  '@typescript-eslint/ban-ts-ignore': 'error',

  // Bans specific types from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
  '@typescript-eslint/ban-types': 'error',

  'brace-style': 'off',
  // Enforce consistent brace style for blocks
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
  '@typescript-eslint/brace-style': rulesStylistic['brace-style'],

  // Enforce camelCase naming convention
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
  camelcase: 'off',
  '@typescript-eslint/camelcase': [
    rulesStylistic.camelcase[0],
    {
      ...rulesStylistic.camelcase[1],
      genericType: 'always',
    },
  ],

  // Require PascalCased class and interface names
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  '@typescript-eslint/class-name-casing': 'error',

  // Enforces consistent usage of type assertions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  '@typescript-eslint/consistent-type-assertions': 'error',

  // Consistent with type definition either `interface` or `type`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // Require explicit return types on functions and class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  '@typescript-eslint/explicit-function-return-type': 'error',

  // Require explicit accessibility modifiers on class properties and methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'no-public',
        properties: 'explicit',
        parameterProperties: 'no-public',
        accessors: 'off',
      },
    },
  ],

  // Require or disallow spacing between function identifiers and their invocations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': rulesStylistic['func-call-spacing'],

  // Enforces naming of generic type variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  '@typescript-eslint/generic-type-naming': ['error', '^T([A-Z][a-zA-Z]+)?$'],

  // Enforce consistent indentation
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  indent: 'off',
  '@typescript-eslint/indent': rulesStylistic.indent,

  // Require that interface names should or should not prefixed with `I`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
  '@typescript-eslint/interface-name-prefix': ['error', 'never'],

  // Require a specific member delimiter style for interfaces and type literals
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  '@typescript-eslint/member-delimiter-style': 'error',

  // Enforces naming conventions for class members by visibility
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
  '@typescript-eslint/member-naming': 'off',

  // Require a consistent member declaration order
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': 'off',

  // Disallow generic `Array` constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': rulesStylistic['no-array-constructor'],

  // Disallow the delete operator with computed key expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
  '@typescript-eslint/no-dynamic-delete': 'error',

  // Disallow empty functions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': rulesBestPractices['no-empty-function'],

  // Disallow the declaration of empty interfaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  '@typescript-eslint/no-empty-interface': 'error',

  // Disallow usage of the `any` type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  '@typescript-eslint/no-explicit-any': 'error',

  // Disallow extra non-null assertion
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // Disallow unnecessary parentheses
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  'member-ordering': 'off',
  '@typescript-eslint/no-extra-parens': rulesErrors['no-extra-parens'],

  // Disallow unnecessary semicolons
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': rulesErrors['no-extra-semi'],

  // Forbids the use of classes as namespaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  '@typescript-eslint/no-extraneous-class': 'error',

  // Requires Promise-like values to be handled appropriately
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false }],

  // Disallow iterating over an array with a for-in loop
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  '@typescript-eslint/no-for-in-array': 'error',

  // Disallow the use of `eval()`-like methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': rulesBestPractices['no-implied-eval'],

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': 'off',

  // Disallow magic numbers
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    rulesBestPractices['no-magic-numbers'][0],
    {
      ...rulesBestPractices['no-magic-numbers'][1],
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreEnums: true,
    },
  ],

  // Enforce valid definition of `new` and `constructor`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
  '@typescript-eslint/no-misused-new': 'error',

  // Avoid using promises in places not designed to handle them
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: true,
      checksVoidReturn: false,
    },
  ],

  // Disallow the use of custom TypeScript modules and namespaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],

  // Disallows non-null assertions using the `!` postfix operator
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  '@typescript-eslint/no-non-null-assertion': 'error',

  // Disallow the use of parameter properties in class constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
  '@typescript-eslint/no-parameter-properties': 'off',

  // Disallows invocation of `require()`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
  '@typescript-eslint/no-require-imports': 'error',

  // Disallow aliasing `this`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
  '@typescript-eslint/no-this-alias': 'error',

  // Disallow throwing literals as exceptions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
  '@typescript-eslint/no-throw-literal': 'error',

  // Disallow the use of type aliases
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  '@typescript-eslint/no-type-alias': 'off',

  // Prevents conditionals where the type is always truthy or always falsy
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // Warns when a namespace qualifier is unnecessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // Enforces that type arguments will not be used if not required
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // Warns if a type assertion does not change the type of an expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  '@typescript-eslint/no-unnecessary-type-assertion': 'off',

  // Disallow untyped public methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
  '@typescript-eslint/no-untyped-public-signature': 'error',

  // Disallow unused expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': rulesBestPractices['no-unused-expressions'],

  // Disallow unused variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': rulesVariables['no-unused-vars'],

  // Disallow unused variables and arguments
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
  // '@typescript-eslint/no-unused-vars-experimental': 'error',

  'no-use-before-define': 'off',
  // Disallow the use of variables before they are defined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  '@typescript-eslint/no-use-before-define': [
    rulesVariables['no-use-before-define'][0],
    {
      ...rulesVariables['no-use-before-define'][1],
      enums: true,
      typedefs: true,
    },
  ],

  // Disallow unnecessary constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': rulesES6['no-useless-constructor'],

  // Disallows the use of require statements except in import statements
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  '@typescript-eslint/no-var-requires': 'error',

  // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  '@typescript-eslint/prefer-for-of': 'error',

  // Use function types instead of interfaces with call signatures
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  '@typescript-eslint/prefer-function-type': 'error',

  // Enforce `includes` method over `indexOf` method
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
  '@typescript-eslint/prefer-includes': 'error',

  // Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Enforce the usage of the nullish coalescing operator instead of logical chaining
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      ignoreConditionalTests: false,
      ignoreMixedLogicalExpressions: false,
      forceSuggestionFixer: true,
    },
  ],

  // Prefer using concise optional chain expressions instead of chained logical ands
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
  '@typescript-eslint/prefer-optional-chain': 'error',

  // Requires that private members are marked as `readonly` if they're never modified outside of the constructor
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  '@typescript-eslint/prefer-readonly': 'error',

  // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // Requires any function or method that returns a Promise to be marked async
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  '@typescript-eslint/promise-function-async': [
    'error',
    {
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  quotes: 'off',
  '@typescript-eslint/quotes': rulesStylistic.quotes,

  // Enforce giving `compare` argument to `Array#sort`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  '@typescript-eslint/require-array-sort-compare': 'error',

  // Disallow async functions which have no `await` expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
  'require-await': 'off',
  '@typescript-eslint/require-await': rulesBestPractices['require-await'],

  // When adding two variables, operands must both be of type number or of type string
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],

  // Enforce template literal expressions to be of string type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allowNumber: true,
      allowBoolean: true,
      allowNullable: false,
    },
  ],

  // Enforces consistent returning of awaited values
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],

  // Require or disallow semicolons instead of ASI
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  semi: 'off',
  '@typescript-eslint/semi': rulesStylistic.semi,

  // Enforces consistent spacing before function parenthesis
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': rulesStylistic['space-before-function-paren'],

  // Restricts the types allowed in boolean expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowNullable: false,
      allowSafe: false,
      ignoreRhs: false,
    },
  ],

  // Sets preference level for triple slash directives versus ES6-style import declarations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
  '@typescript-eslint/triple-slash-reference': 'error',

  // Require consistent spacing around type annotations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
  '@typescript-eslint/type-annotation-spacing': 'error',

  // Requires type annotations to exist
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
  '@typescript-eslint/typedef': [
    'error',
    {
      arrayDestructuring: false,
      arrowParameter: true,
      memberVariableDeclaration: true,
      objectDestructuring: false,
      parameter: true,
      propertyDeclaration: true,
      variableDeclaration: false,
    },
  ],

  // Enforces unbound methods are called with their expected scope
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
  '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],

  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
  '@typescript-eslint/unified-signatures': 'error',
};

module.exports = {
  rules,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disable `no-undef` rule within TypeScript files because it incorrectly errors when exporting default interfaces
        // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
        // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
        'no-undef': 'off',
      },
    },
  ],
};
