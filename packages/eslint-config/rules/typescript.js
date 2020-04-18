/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const configErrors = require('./errors');
const configBestPractices = require('./best-practices');
const configStrict = require('./strict');
const configVariables = require('./variables');
const configNode = require('./node');
const configStylistic = require('./stylistic');
const configES6 = require('./es6');

const originRules = {
  ...configErrors.rules,
  ...configBestPractices.rules,
  ...configStrict.rules,
  ...configVariables.rules,
  ...configNode.rules,
  ...configStylistic.rules,
  ...configES6.rules,
};

/**
 * rules which require type information
 */
const ruleNamesRequireTypeInfo = [
  '@typescript-eslint/await-thenable',
  '@typescript-eslint/naming-convention',
  '@typescript-eslint/no-base-to-string',
  '@typescript-eslint/no-floating-promises',
  '@typescript-eslint/no-for-in-array',
  '@typescript-eslint/no-implied-eval',
  '@typescript-eslint/no-misused-promises',
  '@typescript-eslint/no-throw-literal',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare',
  '@typescript-eslint/no-unnecessary-condition',
  '@typescript-eslint/no-unnecessary-qualifier',
  '@typescript-eslint/no-unnecessary-type-arguments',
  '@typescript-eslint/no-unnecessary-type-assertion',
  '@typescript-eslint/no-unsafe-call',
  '@typescript-eslint/no-unsafe-member-access',
  '@typescript-eslint/no-unsafe-return',
  '@typescript-eslint/no-unused-vars-experimental',
  '@typescript-eslint/prefer-includes',
  '@typescript-eslint/prefer-nullish-coalescing',
  '@typescript-eslint/prefer-readonly',
  '@typescript-eslint/prefer-readonly-parameter-types',
  '@typescript-eslint/prefer-regexp-exec',
  '@typescript-eslint/prefer-string-starts-ends-with',
  '@typescript-eslint/promise-function-async',
  '@typescript-eslint/require-array-sort-compare',
  '@typescript-eslint/require-await',
  '@typescript-eslint/restrict-plus-operands',
  '@typescript-eslint/restrict-template-expressions',
  '@typescript-eslint/return-await',
  '@typescript-eslint/strict-boolean-expressions',
  '@typescript-eslint/switch-exhaustiveness-check',
  '@typescript-eslint/unbound-method',
];

/**
 * rules from `@typescript-eslint/eslint-plugin`
 */
const rules = {
  // Require that member overloads be consecutive
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Requires using either `T[]` or `Array<T>` for arrays
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
  '@typescript-eslint/array-type': ['error', { default: 'array' }],

  // Disallows awaiting a value that is not a Thenable
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
  // requires type information
  '@typescript-eslint/await-thenable': 'error',

  // Bans `// @ts-<directive>` comments from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
  '@typescript-eslint/ban-ts-comment': 'error',

  // Bans “// @ts-ignore” comments from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
  // deprecated, replace by: `['@typescript-eslint/ban-ts-comment']`
  // '@typescript-eslint/ban-ts-ignore': 'error',

  // Bans specific types from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
  '@typescript-eslint/ban-types': 'error',

  // Enforce consistent brace style for blocks
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
  // extends base rule
  'brace-style': 'off',
  '@typescript-eslint/brace-style': originRules['brace-style'],

  // Enforce camelCase naming convention
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
  // deprecated, replace by: `['naming-convention']`
  // extends base rule
  // '@typescript-eslint/camelcase': 'error',

  // Ensures that literals on classes are exposed in a consistent style
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
  '@typescript-eslint/class-literal-property-style': 'off',

  // Require PascalCased class and interface names
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/class-name-casing': 'error',

  // Enforces consistent spacing before and after commas
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
  // extends base rule
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': originRules['comma-spacing'],

  // Enforces consistent usage of type assertions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  '@typescript-eslint/consistent-type-assertions': 'error',

  // Consistent with type definition either `interface` or `type`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

  // Enforce default parameters to be last
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
  // extends base rule
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': originRules['default-param-last'],

  // Require explicit return types on functions and class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
    },
  ],

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

  // Require explicit return and argument types on exported functions' and classes' public class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  '@typescript-eslint/explicit-module-boundary-types': [
    'error',
    {
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true,
      shouldTrackReferences: true,
    },
  ],

  // Require or disallow spacing between function identifiers and their invocations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': originRules['func-call-spacing'],

  // Enforces naming of generic type variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/generic-type-naming': 'off',

  // Enforce consistent indentation
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  // extends base rule
  indent: 'off',
  '@typescript-eslint/indent': originRules.indent,

  // Require that interface names should or should not prefixed with `I`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/interface-name-prefix': 'error',

  // Require a specific member delimiter style for interfaces and type literals
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
  '@typescript-eslint/member-delimiter-style': 'error',

  // Enforces naming conventions for class members by visibility
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/member-naming': 'off',

  // Require a consistent member declaration order
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
  '@typescript-eslint/member-ordering': [
    'error',
    {
      default: ['signature', 'field', 'constructor', 'method'],
      classes: [
        'static-field',
        'static-method',
        'signature',
        'abstract-field',
        'instance-field',
        'constructor',
        'abstract-method',
        'instance-method',
      ],
    },
  ],

  // Enforces using a particular method signature syntax.
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
  '@typescript-eslint/method-signature-style': ['error', 'method'],

  // Enforces naming conventions for everything across a codebase
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
  // requires type information
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variableLike',
      format: ['camelCase'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
    },
    {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'typeParameter',
      format: ['PascalCase'],
      prefix: ['T', 'K', 'U'],
    },
    {
      selector: 'memberLike',
      format: ['camelCase'],
    },
    {
      selector: 'memberLike',
      modifiers: ['private', 'protected'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
    {
      selector: 'memberLike',
      modifiers: ['static', 'readonly'],
      format: ['UPPER_CASE'],
    },
    {
      selector: 'property',
      format: ['camelCase', 'UPPER_CASE'],
    },
    {
      selector: 'enumMember',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
  ],

  // Disallow generic `Array` constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  // extends base rule
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': originRules['no-array-constructor'],

  // Requires that `.toString()` is only called on objects which provide useful information when stringified
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
  // requires type information
  '@typescript-eslint/no-base-to-string': 'error',

  // Disallow duplicate class members
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
  // extends base rule
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': originRules['no-dupe-class-members'],

  // Disallow the delete operator with computed key expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
  '@typescript-eslint/no-dynamic-delete': 'error',

  // Disallow empty functions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  // extends base rule
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': originRules['no-empty-function'],

  // Disallow the declaration of empty interfaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  '@typescript-eslint/no-empty-interface': 'error',

  // Disallow usage of the `any` type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  '@typescript-eslint/no-explicit-any': [
    'error',
    {
      ignoreRestArgs: true,
    },
  ],

  // Disallow extra non-null assertion
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
  '@typescript-eslint/no-extra-non-null-assertion': 'error',

  // Disallow unnecessary parentheses
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  // extends base rule
  'member-ordering': 'off',
  '@typescript-eslint/no-extra-parens': originRules['no-extra-parens'],

  // Disallow unnecessary semicolons
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  // extends base rule
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': originRules['no-extra-semi'],

  // Forbids the use of classes as namespaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  '@typescript-eslint/no-extraneous-class': 'error',

  // Requires Promise-like values to be handled appropriately
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  // requires type information
  '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: false }],

  // Disallow iterating over an array with a for-in loop
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  // requires type information
  '@typescript-eslint/no-for-in-array': 'error',

  // Disallow the use of `eval()`-like methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  // requires type information
  // extends base rule
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': originRules['no-implied-eval'],

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': 'off',

  // Disallow magic numbers
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  // extends base rule
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    originRules['no-magic-numbers'][0],
    {
      ...originRules['no-magic-numbers'][1],
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
  // requires type information
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

  // Disallows using a non-null assertion after an optional chain expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

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
  // requires type information
  '@typescript-eslint/no-throw-literal': 'error',

  // Disallow the use of type aliases
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  '@typescript-eslint/no-type-alias': 'off',

  // Flags unnecessary equality comparisons against boolean literals
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
  // requires type information
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

  // Prevents conditionals where the type is always truthy or always falsy
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
  // requires type information
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // Warns when a namespace qualifier is unnecessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  // requires type information
  '@typescript-eslint/no-unnecessary-qualifier': 'error',

  // Enforces that type arguments will not be used if not required
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  // requires type information
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // Warns if a type assertion does not change the type of an expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  // requires type information
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // Disallows assigning any to variables and properties
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
  // requires type information
  '@typescript-eslint/no-unsafe-assignment': 'off',

  // Disallows calling an any type value
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
  // requires type information
  '@typescript-eslint/no-unsafe-call': 'error',

  // Disallows member access on any typed variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
  // requires type information
  '@typescript-eslint/no-unsafe-member-access': 'error',

  // Disallows returning any from a function
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
  // requires type information
  '@typescript-eslint/no-unsafe-return': 'error',

  // Disallow untyped public methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
  // deprecated, replace by: `['explicit-module-boundary-types']`
  // '@typescript-eslint/no-untyped-public-signature': 'off',

  // Disallow unused expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  // extends base rule
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': originRules['no-unused-expressions'],

  // Disallow unused variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  // extends base rule
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': originRules['no-unused-vars'],

  // Disallow unused variables and arguments
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
  // requires type information
  '@typescript-eslint/no-unused-vars-experimental': 'off',

  // Disallow the use of variables before they are defined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  // extends base rule
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    originRules['no-use-before-define'][0],
    {
      ...originRules['no-use-before-define'][1],
      enums: true,
      typedefs: true,
    },
  ],

  // Disallow unnecessary constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  // extends base rule
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': originRules['no-useless-constructor'],

  // Disallows the use of require statements except in import statements
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  '@typescript-eslint/no-var-requires': 'error',

  // Prefer usage of `as const` over literal type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
  '@typescript-eslint/prefer-as-const': 'off',

  // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  '@typescript-eslint/prefer-for-of': 'error',

  // Use function types instead of interfaces with call signatures
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  '@typescript-eslint/prefer-function-type': 'error',

  // Enforce `includes` method over `indexOf` method
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
  // requires type information
  '@typescript-eslint/prefer-includes': 'error',

  // Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
  '@typescript-eslint/prefer-namespace-keyword': 'error',

  // Enforce the usage of the nullish coalescing operator instead of logical chaining
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
  // requires type information
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
  // requires type information
  '@typescript-eslint/prefer-readonly': 'error',

  // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
  // requires type information
  '@typescript-eslint/prefer-readonly-parameter-types': [
    'off',
    {
      checkParameterProperties: false,
    },
  ],

  // Prefer using type parameter when calling `Array#reduce` instead of casting
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
  // requires type information
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',

  // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  // requires type information
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  // requires type information
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // Recommends using `// @ts-expect-error` over `// @ts-ignore`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
  '@typescript-eslint/prefer-ts-expect-error': 'error',

  // Requires any function or method that returns a Promise to be marked async
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  // requires type information
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
  // extends base rule
  quotes: 'off',
  '@typescript-eslint/quotes': originRules.quotes,

  // Requires `Array#sort` calls to always provide a `compareFunction`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  // requires type information
  '@typescript-eslint/require-array-sort-compare': 'error',

  // Disallow async functions which have no `await` expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
  // requires type information
  // extends base rule
  'require-await': 'off',
  '@typescript-eslint/require-await': originRules['require-await'],

  // When adding two variables, operands must both be of type number or of type string
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  // requires type information
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    {
      checkCompoundAssignments: true,
    },
  ],

  // Enforce template literal expressions to be of string type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
  // requires type information
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
  // requires type information
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],

  // Require or disallow semicolons instead of ASI
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  // extends base rule
  semi: 'off',
  '@typescript-eslint/semi': originRules.semi,

  // Enforces consistent spacing before function parenthesis
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  // extends base rule
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': originRules['space-before-function-paren'],

  // Restricts the types allowed in boolean expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  // requires type information
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      allowNullable: true,
      allowSafe: true,
      ignoreRhs: false,
    },
  ],

  // Exhaustiveness checking in switch with union type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
  // requires type information
  '@typescript-eslint/switch-exhaustiveness-check': 'error',

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
      arrowParameter: false,
      memberVariableDeclaration: true,
      objectDestructuring: false,
      parameter: true,
      propertyDeclaration: true,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: true,
    },
  ],

  // Enforces unbound methods are called with their expected scope
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
  // requires type information
  '@typescript-eslint/unbound-method': [
    'error',
    {
      ignoreStatic: false,
    },
  ],

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
    {
      files: ['*.d.ts'],
      rules: {
        'init-declarations': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      },
    },
  ],
};
