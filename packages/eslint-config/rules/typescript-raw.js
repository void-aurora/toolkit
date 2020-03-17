// rules which deprecated
const ruleNamesDeprecated = [
  '@typescript-eslint/ban-ts-ignore',
  '@typescript-eslint/camelcase',
  '@typescript-eslint/class-name-casing',
  '@typescript-eslint/generic-type-naming',
  '@typescript-eslint/interface-name-prefix',
  '@typescript-eslint/member-naming',
  '@typescript-eslint/no-untyped-public-signature',
];

// rules which require type information
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

// rules from `@typescript-eslint/eslint-plugin`
const rules = {
  // Require that member overloads be consecutive
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
  '@typescript-eslint/adjacent-overload-signatures': 'error',

  // Requires using either `T[]` or `Array<T>` for arrays
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
  '@typescript-eslint/array-type': 'off',

  // Disallows awaiting a value that is not a Thenable
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
  // requires type information
  '@typescript-eslint/await-thenable': 'error',

  // Bans `// @ts-<directive>` comments from being used
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
  '@typescript-eslint/ban-ts-comment': 'off',

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
  '@typescript-eslint/brace-style': 'off',

  // Enforce camelCase naming convention
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
  // deprecated, replace by: `['naming-convention']`
  // extends base rule
  // '@typescript-eslint/camelcase': 'error',

  // Require PascalCased class and interface names
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-name-casing.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/class-name-casing': 'error',

  // Enforces consistent spacing before and after commas
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
  // extends base rule
  '@typescript-eslint/comma-spacing': 'off',

  // Enforces consistent usage of type assertions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
  '@typescript-eslint/consistent-type-assertions': 'error',

  // Consistent with type definition either `interface` or `type`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
  '@typescript-eslint/consistent-type-definitions': 'off',

  // Enforce default parameters to be last
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
  // extends base rule
  '@typescript-eslint/default-param-last': 'off',

  // Require explicit return types on functions and class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
  '@typescript-eslint/explicit-function-return-type': 'warn',

  // Require explicit accessibility modifiers on class properties and methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
  '@typescript-eslint/explicit-member-accessibility': 'off',

  // Require explicit return and argument types on exported functions' and classes' public class methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
  '@typescript-eslint/explicit-module-boundary-types': 'off',

  // Require or disallow spacing between function identifiers and their invocations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
  // extends base rule
  '@typescript-eslint/func-call-spacing': 'off',

  // Enforces naming of generic type variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
  // deprecated, replace by: `['naming-convention']`
  // '@typescript-eslint/generic-type-naming': 'off',

  // Enforce consistent indentation
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  // extends base rule
  '@typescript-eslint/indent': 'off',

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
  '@typescript-eslint/member-ordering': 'off',

  // Enforces naming conventions for everything across a codebase
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
  // requires type information
  '@typescript-eslint/naming-convention': 'off',

  // Disallow generic `Array` constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
  // extends base rule
  '@typescript-eslint/no-array-constructor': 'error',

  // Requires that `.toString()` is only called on objects which provide useful information when stringified
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
  // requires type information
  '@typescript-eslint/no-base-to-string': 'off',

  // Disallow duplicate class members
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
  // extends base rule
  '@typescript-eslint/no-dupe-class-members': 'off',

  // Disallow the delete operator with computed key expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
  '@typescript-eslint/no-dynamic-delete': 'off',

  // Disallow empty functions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
  // extends base rule
  '@typescript-eslint/no-empty-function': 'error',

  // Disallow the declaration of empty interfaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
  '@typescript-eslint/no-empty-interface': 'error',

  // Disallow usage of the `any` type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
  '@typescript-eslint/no-explicit-any': 'warn',

  // Disallow extra non-null assertion
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
  '@typescript-eslint/no-extra-non-null-assertion': 'off',

  // Disallow unnecessary parentheses
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
  // extends base rule
  '@typescript-eslint/no-extra-parens': 'off',

  // Disallow unnecessary semicolons
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
  // extends base rule
  '@typescript-eslint/no-extra-semi': 'off',

  // Forbids the use of classes as namespaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
  '@typescript-eslint/no-extraneous-class': 'off',

  // Requires Promise-like values to be handled appropriately
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
  // requires type information
  '@typescript-eslint/no-floating-promises': 'off',

  // Disallow iterating over an array with a for-in loop
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
  // requires type information
  '@typescript-eslint/no-for-in-array': 'error',

  // Disallow the use of `eval()`-like methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
  // requires type information
  '@typescript-eslint/no-implied-eval': 'off',

  // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
  '@typescript-eslint/no-inferrable-types': 'error',

  // Disallow magic numbers
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
  // extends base rule
  '@typescript-eslint/no-magic-numbers': 'off',

  // Enforce valid definition of `new` and `constructor`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
  '@typescript-eslint/no-misused-new': 'error',

  // Avoid using promises in places not designed to handle them
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
  // requires type information
  '@typescript-eslint/no-misused-promises': 'error',

  // Disallow the use of custom TypeScript modules and namespaces
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
  '@typescript-eslint/no-namespace': 'error',

  // Disallows using a non-null assertion after an optional chain expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

  // Disallows non-null assertions using the `!` postfix operator
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
  '@typescript-eslint/no-non-null-assertion': 'warn',

  // Disallow the use of parameter properties in class constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
  '@typescript-eslint/no-parameter-properties': 'off',

  // Disallows invocation of `require()`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
  '@typescript-eslint/no-require-imports': 'off',

  // Disallow aliasing `this`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
  '@typescript-eslint/no-this-alias': 'error',

  // Disallow throwing literals as exceptions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
  // requires type information
  '@typescript-eslint/no-throw-literal': 'off',

  // Disallow the use of type aliases
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
  '@typescript-eslint/no-type-alias': 'off',

  // Flags unnecessary equality comparisons against boolean literals
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
  // requires type information
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

  // Prevents conditionals where the type is always truthy or always falsy
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
  // requires type information
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // Warns when a namespace qualifier is unnecessary
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
  // requires type information
  '@typescript-eslint/no-unnecessary-qualifier': 'off',

  // Enforces that type arguments will not be used if not required
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
  // requires type information
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',

  // Warns if a type assertion does not change the type of an expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
  // requires type information
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',

  // Disallows calling an any type value
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
  // requires type information
  '@typescript-eslint/no-unsafe-call': 'off',

  // Disallows member access on any typed variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
  // requires type information
  '@typescript-eslint/no-unsafe-member-access': 'off',

  // Disallows returning any from a function
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
  // requires type information
  '@typescript-eslint/no-unsafe-return': 'off',

  // Disallow untyped public methods
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
  // deprecated, replace by: `['explicit-module-boundary-types']`
  // '@typescript-eslint/no-untyped-public-signature': 'off',

  // Disallow unused expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  // extends base rule
  '@typescript-eslint/no-unused-expressions': 'off',

  // Disallow unused variables
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  // extends base rule
  '@typescript-eslint/no-unused-vars': 'warn',

  // Disallow unused variables and arguments
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
  // requires type information
  '@typescript-eslint/no-unused-vars-experimental': 'off',

  // Disallow the use of variables before they are defined
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  // extends base rule
  '@typescript-eslint/no-use-before-define': 'error',

  // Disallow unnecessary constructors
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
  // extends base rule
  '@typescript-eslint/no-useless-constructor': 'off',

  // Disallows the use of require statements except in import statements
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
  '@typescript-eslint/no-var-requires': 'error',

  // Prefer usage of `as const` over literal type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
  '@typescript-eslint/prefer-as-const': 'off',

  // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
  '@typescript-eslint/prefer-for-of': 'off',

  // Use function types instead of interfaces with call signatures
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
  '@typescript-eslint/prefer-function-type': 'off',

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
  '@typescript-eslint/prefer-nullish-coalescing': 'off',

  // Prefer using concise optional chain expressions instead of chained logical ands
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
  '@typescript-eslint/prefer-optional-chain': 'off',

  // Requires that private members are marked as `readonly` if they're never modified outside of the constructor
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
  // requires type information
  '@typescript-eslint/prefer-readonly': 'off',

  // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
  // requires type information
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',

  // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
  // requires type information
  '@typescript-eslint/prefer-regexp-exec': 'error',

  // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
  // requires type information
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',

  // Requires any function or method that returns a Promise to be marked async
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
  // requires type information
  '@typescript-eslint/promise-function-async': 'off',

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
  // extends base rule
  '@typescript-eslint/quotes': 'off',

  // Requires `Array#sort` calls to always provide a `compareFunction`
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
  // requires type information
  '@typescript-eslint/require-array-sort-compare': 'off',

  // Disallow async functions which have no `await` expression
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
  // requires type information
  // extends base rule
  '@typescript-eslint/require-await': 'error',

  // When adding two variables, operands must both be of type number or of type string
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
  // requires type information
  '@typescript-eslint/restrict-plus-operands': 'off',

  // Enforce template literal expressions to be of string type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
  // requires type information
  '@typescript-eslint/restrict-template-expressions': 'off',

  // Enforces consistent returning of awaited values
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
  // requires type information
  '@typescript-eslint/return-await': 'off',

  // Require or disallow semicolons instead of ASI
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
  // extends base rule
  '@typescript-eslint/semi': 'off',

  // Enforces consistent spacing before function parenthesis
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
  // extends base rule
  '@typescript-eslint/space-before-function-paren': 'off',

  // Restricts the types allowed in boolean expressions
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
  // requires type information
  '@typescript-eslint/strict-boolean-expressions': 'off',

  // Exhaustiveness checking in switch with union type
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
  // requires type information
  '@typescript-eslint/switch-exhaustiveness-check': 'off',

  // Sets preference level for triple slash directives versus ES6-style import declarations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
  '@typescript-eslint/triple-slash-reference': 'error',

  // Require consistent spacing around type annotations
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
  '@typescript-eslint/type-annotation-spacing': 'error',

  // Requires type annotations to exist
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
  '@typescript-eslint/typedef': 'off',

  // Enforces unbound methods are called with their expected scope
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
  // requires type information
  '@typescript-eslint/unbound-method': 'error',

  // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
  '@typescript-eslint/unified-signatures': 'off',
};
