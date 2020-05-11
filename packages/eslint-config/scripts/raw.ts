/* eslint-disable */

const rulesOrigin = {
  'Best Practices': {
    // enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    'accessor-pairs': 'off',

    // enforce `return` statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'off',

    // enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'off',

    // enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': 'off',

    // enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    complexity: 'off',

    // require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: 'off',

    // require `default` cases in `switch` statements
    // https://eslint.org/docs/rules/default-case
    'default-case': 'off',

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'off',

    // enforce consistent newlines before and after dots
    // https://eslint.org/docs/rules/dot-location
    'dot-location': 'off',

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': 'off',

    // require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: 'off',

    // require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': 'off',

    // require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    'guard-for-in': 'off',

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': 'off',

    // disallow the use of `alert`, `confirm`, and `prompt`
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'off',

    // disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'off',

    // disallow lexical declarations in case clauses
    // https://eslint.org/docs/rules/no-case-declarations
    'no-case-declarations': 'off',

    // disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    'no-constructor-return': 'off',

    // disallow division operators explicitly at the beginning of regular expressions
    // https://eslint.org/docs/rules/no-div-regex
    'no-div-regex': 'off',

    // disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': 'off',

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'off',

    // disallow `null` comparisons without type-checking operators
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'off',

    // disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'off',

    // disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    'no-extend-native': 'off',

    // disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'off',

    // disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'off',

    // disallow fallthrough of `case` statements
    // https://eslint.org/docs/rules/no-fallthrough
    'no-fallthrough': 'off',

    // disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    'no-floating-decimal': 'off',

    // disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': 'off',

    // disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'off',

    // disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    'no-implicit-globals': 'off',

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'off',

    // disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    'no-invalid-this': 'off',

    // disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'off',

    // disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    'no-labels': 'off',

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'off',

    // disallow function declarations that contain unsafe references inside loop statements
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'off',

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': 'off',

    // disallow multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'off',

    // disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    'no-multi-str': 'off',

    // disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-native-reassign
    // @deprecated replace by: `no-global-assign`
    'no-native-reassign': 'off',

    // disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    'no-new': 'off',

    // disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'off',

    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'off',

    // disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'off',

    // disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'off',

    // disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 'off',

    // disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    'no-proto': 'off',

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'off',

    // disallow certain properties on certain objects
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': 'off',

    // disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': 'off',

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'off',

    // disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    'no-script-url': 'off',

    // disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'off',

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'off',

    // disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'off',

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    'no-throw-literal': 'off',

    // disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'off',

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'off',

    // disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    'no-useless-call': 'off',

    // disallow unnecessary `catch` clauses
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'off',

    // disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'off',

    // disallow unnecessary escape characters
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'off',

    // disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'off',

    // disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    'no-void': 'off',

    // disallow specified warning terms in comments
    // https://eslint.org/docs/rules/no-warning-comments
    'no-warning-comments': 'off',

    // disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    'no-with': 'off',

    // enforce using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    'prefer-named-capture-group': 'off',

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',

    // disallow use of the `RegExp` constructor in favor of regular expression literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    'prefer-regex-literals': 'off',

    // enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    radix: 'off',

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    'require-await': 'off',

    // enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    'require-unicode-regexp': 'off',

    // require `var` declarations be placed at the top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    'vars-on-top': 'off',

    // require parentheses around immediate `function` invocations
    // https://eslint.org/docs/rules/wrap-iife
    'wrap-iife': 'off',

    // require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    yoda: 'off',
  },

  'ECMAScript 6': {
    // require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': 'off',

    // require parentheses around arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',

    // enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': 'off',

    // require `super()` calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    'constructor-super': 'off',

    // enforce consistent spacing around `*` operators in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': 'off',

    // disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'off',

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': 'off',

    // disallow reassigning `const` variables
    // https://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'off',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',

    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'off',

    // disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'off',

    // disallow specified modules when loaded by `import`
    // https://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // disallow `this`/`super` before calling `super()` in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'off',

    // disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'off',

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'off',

    // disallow renaming import, export, and destructured assignments to the same name
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'off',

    // require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    'no-var': 'off',

    // require or disallow method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': 'off',

    // require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'off',

    // require `const` declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'off',

    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': 'off',

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'off',

    // require `Reflect` methods where applicable
    // https://eslint.org/docs/rules/prefer-reflect
    // @deprecated replace by:
    'prefer-reflect': 'off',

    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'off',

    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'off',

    // require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    'prefer-template': 'off',

    // require generator functions to contain `yield`
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'off',

    // enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': 'off',

    // enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'off',

    // require or disallow spacing around embedded expressions of template strings
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'off',

    // require or disallow spacing around the `*` in `yield*` expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': 'off',
  },

  'Node.js and CommonJS': {
    // require `return` statements after callbacks
    // https://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // require `require()` calls to be placed at top-level module scope
    // https://eslint.org/docs/rules/global-require
    'global-require': 'off',

    // require error handling in callbacks
    // https://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // disallow use of the `Buffer()` constructor
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'off',

    // disallow `require` calls to be mixed with regular variable declarations
    // https://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'off',

    // disallow `new` operators with calls to `require`
    // https://eslint.org/docs/rules/no-new-require
    'no-new-require': 'off',

    // disallow string concatenation with `__dirname` and `__filename`
    // https://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'off',

    // disallow the use of `process.env`
    // https://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // disallow the use of `process.exit()`
    // https://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // disallow specified modules when loaded by `require`
    // https://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // disallow synchronous methods
    // https://eslint.org/docs/rules/no-sync
    'no-sync': 'off',
  },

  'Possible Errors': {
    // enforce "for" loop update clause moving the counter in the right direction.
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'off',

    // enforce `return` statements in getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': 'off',

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    'no-async-promise-executor': 'off',

    // disallow `await` inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'off',

    // disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 'off',

    // disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    'no-console': 'off',

    // disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'off',

    // disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'off',

    // disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': 'off',

    // disallow duplicate arguments in `function` definitions
    // https://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'off',

    // disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    'no-dupe-else-if': 'off',

    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'off',

    // disallow duplicate case labels
    // https://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'off',

    // disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    'no-empty': 'off',

    // disallow empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'off',

    // disallow reassigning exceptions in `catch` clauses
    // https://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'off',

    // disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'off',

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 'off',

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'off',

    // disallow reassigning `function` declarations
    // https://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'off',

    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    'no-import-assign': 'off',

    // disallow variable or `function` declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'off',

    // disallow invalid regular expression strings in `RegExp` constructors
    // https://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'off',

    // disallow irregular whitespace
    // https://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'off',

    // disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'off',

    // disallow negating the left operand in `in` expressions
    // https://eslint.org/docs/rules/no-negated-in-lhs
    // @deprecated replace by: `no-unsafe-negation`
    'no-negated-in-lhs': 'off',

    // disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'off',

    // disallow calling some `Object.prototype` methods directly on objects
    // https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',

    // disallow multiple spaces in regular expressions
    // https://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'off',

    // disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    'no-setter-return': 'off',

    // disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'off',

    // disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'off',

    // disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'off',

    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    // https://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'off',

    // disallow control flow statements in `finally` blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'off',

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',

    // disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'off',

    // require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    'use-isnan': 'off',

    // enforce valid JSDoc comments
    // https://eslint.org/docs/rules/valid-jsdoc
    // @deprecated replace by:
    'valid-jsdoc': 'off',

    // enforce comparing `typeof` expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'off',
  },

  'Strict Mode': {
    // require or disallow strict mode directives
    // https://eslint.org/docs/rules/strict
    strict: 'off',
  },

  'Stylistic Issues': {
    // enforce linebreaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': 'off',

    // enforce consistent spacing inside array brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': 'off',

    // enforce line breaks after each array element
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': 'off',

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://eslint.org/docs/rules/block-spacing
    'block-spacing': 'off',

    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    'brace-style': 'off',

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    camelcase: 'off',

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': 'off',

    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'off',

    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    'comma-spacing': 'off',

    // enforce consistent comma style
    // https://eslint.org/docs/rules/comma-style
    'comma-style': 'off',

    // enforce consistent spacing inside computed property brackets
    // https://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': 'off',

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    'consistent-this': 'off',

    // require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': 'off',

    // require or disallow spacing between function identifiers and their invocations
    // https://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': 'off',

    // require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // enforce the consistent use of either `function` declarations or expressions
    // https://eslint.org/docs/rules/func-style
    'func-style': 'off',

    // enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    'function-call-argument-newline': 'off',

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    'function-paren-newline': 'off',

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    'implicit-arrow-linebreak': 'off',

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    indent: 'off',

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent-legacy
    // @deprecated replace by: `indent`
    'indent-legacy': 'off',

    // enforce the consistent use of either double or single quotes in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': 'off',

    // enforce consistent spacing between keys and values in object literal properties
    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': 'off',

    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'off',

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',

    // require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // https://eslint.org/docs/rules/lines-around-directive
    // @deprecated replace by: `padding-line-between-statements`
    'lines-around-directive': 'off',

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': 'off',

    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // enforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    'max-len': 'off',

    // enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // enforce a maximum number of line of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',

    // enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': 'off',

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    'multiline-comment-style': 'off',

    // enforce newlines between operands of ternary expressions
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    'new-cap': 'off',

    // enforce or disallow parentheses when invoking a constructor with no arguments
    // https://eslint.org/docs/rules/new-parens
    'new-parens': 'off',

    // require or disallow an empty line after variable declarations
    // https://eslint.org/docs/rules/newline-after-var
    // @deprecated replace by: `padding-line-between-statements`
    'newline-after-var': 'off',

    // require an empty line before `return` statements
    // https://eslint.org/docs/rules/newline-before-return
    // @deprecated replace by: `padding-line-between-statements`
    'newline-before-return': 'off',

    // require a newline after each call in a method chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'off',

    // disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'off',

    // disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'off',

    // disallow mixed binary operators
    // https://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'off',

    // disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'off',

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    'no-multi-assign': 'off',

    // disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': 'off',

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',

    // disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    'no-new-object': 'off',

    // disallow the unary operators `++` and `--`
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // disallow specified syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': 'off',

    // disallow spacing between function identifiers and their applications (deprecated)
    // https://eslint.org/docs/rules/no-spaced-func
    // @deprecated replace by: `func-call-spacing`
    'no-spaced-func': 'off',

    // disallow all tabs
    // https://eslint.org/docs/rules/no-tabs
    'no-tabs': 'off',

    // disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'off',

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'off',

    // disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'off',

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'off',

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    'nonblock-statement-body-position': 'off',

    // enforce consistent line breaks inside braces
    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': 'off',

    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': 'off',

    // enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    'object-property-newline': 'off',

    // enforce variables to be declared either together or separately in functions
    // https://eslint.org/docs/rules/one-var
    'one-var': 'off',

    // require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'off',

    // require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'off',

    // enforce consistent linebreak style for operators
    // https://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': 'off',

    // require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    'padded-blocks': 'off',

    // require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': 'off',

    // disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'off',

    // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'off',

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    'quote-props': 'off',

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    quotes: 'off',

    // require JSDoc comments
    // https://eslint.org/docs/rules/require-jsdoc
    // @deprecated replace by:
    'require-jsdoc': 'off',

    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    semi: 'off',

    // enforce consistent spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    'semi-spacing': 'off',

    // enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    'semi-style': 'off',

    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    // https://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // enforce consistent spacing before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': 'off',

    // enforce consistent spacing before `function` definition opening parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': 'off',

    // enforce consistent spacing inside parentheses
    // https://eslint.org/docs/rules/space-in-parens
    'space-in-parens': 'off',

    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'off',

    // enforce consistent spacing before or after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'off',

    // enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
    'spaced-comment': 'off',

    // enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    'switch-colon-spacing': 'off',

    // require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': 'off',

    // require or disallow Unicode byte order mark (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    'unicode-bom': 'off',

    // require parenthesis around regex literals
    // https://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'off',
  },

  Variables: {
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // disallow `catch` clause parameters from shadowing variables in the outer scope
    // https://eslint.org/docs/rules/no-catch-shadow
    // @deprecated replace by: `no-shadow`
    'no-catch-shadow': 'off',

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'off',

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    'no-label-var': 'off',

    // disallow specified global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // disallow variable declarations from shadowing variables declared in the outer scope
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'off',

    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // disallow initializing variables to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'off',

    // disallow the use of `undefined` as an identifier
    // https://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'off',

    // disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off',
  },
};

const rulesImport = {
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/default.md
  'import/default': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/dynamic-import-chunkname.md
  'import/dynamic-import-chunkname': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/export.md
  'import/export': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/exports-last.md
  'import/exports-last': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/extensions.md
  'import/extensions': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/first.md
  'import/first': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/group-exports.md
  'import/group-exports': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md
  // @deprecated
  'import/imports-first': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/max-dependencies.md
  'import/max-dependencies': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/named.md
  'import/named': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/namespace.md
  'import/namespace': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/newline-after-import.md
  'import/newline-after-import': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-amd.md
  'import/no-amd': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-commonjs.md
  'import/no-commonjs': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-cycle.md
  'import/no-cycle': 'off',

  'import/no-default-export': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-deprecated.md
  'import/no-deprecated': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-duplicates.md
  'import/no-duplicates': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-internal-modules.md
  'import/no-internal-modules': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-named-default.md
  'import/no-named-default': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-named-export.md
  'import/no-named-export': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-namespace.md
  'import/no-namespace': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // Forbid a module from importing itself
  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-self-import.md
  'import/no-self-import': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-unassigned-import.md
  'import/no-unassigned-import': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-unresolved.md
  'import/no-unresolved': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-unused-modules.md
  'import/no-unused-modules': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/order.md
  'import/order': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 'off',

  // https://github.com/benmosher/eslint-plugin-import/blob/v2.20.2/docs/rules/unambiguous.md
  'import/unambiguous': 'off',
};

const rulesTS = {
  'Best Practices': {
    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'off',

    // Disallows awaiting a value that is not a Thenable
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/await-thenable.md
    // @requires-type-checking
    '@typescript-eslint/await-thenable': 'off',

    // Bans `// @ts-<directive>` comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'off',

    // Bans “// @ts-ignore” comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    // @deprecated replace by: `ban-ts-comment`
    '@typescript-eslint/ban-ts-ignore': 'off',

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': 'off',

    // Ensures that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': 'off',

    // Require PascalCased class and interface names
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/class-name-casing.md
    // @deprecated replace by: `naming-convention`
    '@typescript-eslint/class-name-casing': 'off',

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': 'off',

    // Enforce default parameters to be last
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/default-param-last.md
    // @extends-base-rule
    '@typescript-eslint/default-param-last': 'off',

    // enforce dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/dot-notation.md
    // @requires-type-checking
    // @extends-base-rule
    '@typescript-eslint/dot-notation': 'off',

    // Enforces using a particular method signature syntax.
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': 'off',

    // Requires that `.toString()` is only called on objects which provide useful information when stringified
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-base-to-string.md
    // @requires-type-checking
    '@typescript-eslint/no-base-to-string': 'off',

    // Disallow the delete operator with computed key expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'off',

    // Disallow empty functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-empty-function.md
    // @extends-base-rule
    '@typescript-eslint/no-empty-function': 'off',

    // Disallow the declaration of empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'off',

    // Disallow usage of the `any` type
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 'off',

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'off',

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-floating-promises.md
    // @requires-type-checking
    '@typescript-eslint/no-floating-promises': 'off',

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-for-in-array.md
    // @requires-type-checking
    '@typescript-eslint/no-for-in-array': 'off',

    // Disallow the use of `eval()`-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-implied-eval.md
    // @requires-type-checking
    '@typescript-eslint/no-implied-eval': 'off',

    // Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': 'off',

    // Disallows usage of `void` type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': 'off',

    // Disallow magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // @extends-base-rule
    '@typescript-eslint/no-magic-numbers': 'off',

    // Enforce valid definition of `new` and `constructor`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'off',

    // Avoid using promises in places not designed to handle them
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-misused-promises.md
    // @requires-type-checking
    '@typescript-eslint/no-misused-promises': 'off',

    // Disallow the use of custom TypeScript modules and namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': 'off',

    // Disallows invocation of `require()`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'off',

    // Disallow aliasing `this`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': 'off',

    // Disallow throwing literals as exceptions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-throw-literal.md
    // @requires-type-checking
    '@typescript-eslint/no-throw-literal': 'off',

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    // @requires-type-checking
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Warns when a namespace qualifier is unnecessary
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    // @requires-type-checking
    '@typescript-eslint/no-unnecessary-qualifier': 'off',

    // Enforces that type arguments will not be used if not required
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    // @requires-type-checking
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    // @requires-type-checking
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    // Disallow untyped public methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-untyped-public-signature.md
    // @deprecated replace by: `explicit-module-boundary-types`
    '@typescript-eslint/no-untyped-public-signature': 'off',

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    // @extends-base-rule
    '@typescript-eslint/no-unused-expressions': 'off',

    // Disallow unused variables and arguments
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
    // @requires-type-checking
    '@typescript-eslint/no-unused-vars-experimental': 'off',

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    // @extends-base-rule
    '@typescript-eslint/no-useless-constructor': 'off',

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 'off',

    // Prefer usage of `as const` over literal type
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': 'off',

    // Use function types instead of interfaces with call signatures
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': 'off',

    // Enforce `includes` method over `indexOf` method
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-includes.md
    // @requires-type-checking
    '@typescript-eslint/prefer-includes': 'off',

    // Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    '@typescript-eslint/prefer-namespace-keyword': 'off',

    // Enforce the usage of the nullish coalescing operator instead of logical chaining
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    // @requires-type-checking
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    '@typescript-eslint/prefer-optional-chain': 'off',

    // Requires that private members are marked as `readonly` if they're never modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-readonly.md
    // @requires-type-checking
    '@typescript-eslint/prefer-readonly': 'off',

    // Prefer using type parameter when calling `Array#reduce` instead of casting
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    // @requires-type-checking
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',

    // Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    // @requires-type-checking
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    // @requires-type-checking
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',

    // Recommends using `// @ts-expect-error` over `// @ts-ignore`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    // Requires any function or method that returns a Promise to be marked async
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/promise-function-async.md
    // @requires-type-checking
    '@typescript-eslint/promise-function-async': 'off',

    // Requires `Array#sort` calls to always provide a `compareFunction`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    // @requires-type-checking
    '@typescript-eslint/require-array-sort-compare': 'off',

    // Disallow async functions which have no `await` expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/require-await.md
    // @requires-type-checking
    // @extends-base-rule
    '@typescript-eslint/require-await': 'off',

    // When adding two variables, operands must both be of type number or of type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    // @requires-type-checking
    '@typescript-eslint/restrict-plus-operands': 'off',

    // Enforce template literal expressions to be of string type
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    // @requires-type-checking
    '@typescript-eslint/restrict-template-expressions': 'off',

    // Enforces consistent returning of awaited values
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/return-await.md
    // @requires-type-checking
    // @extends-base-rule no-return-await
    '@typescript-eslint/return-await': 'off',

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    // @requires-type-checking
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Exhaustiveness checking in switch with union type
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    // @requires-type-checking
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // Sets preference level for triple slash directives versus ES6-style import declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': 'off',

    // Enforces unbound methods are called with their expected scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/unbound-method.md
    // @requires-type-checking
    '@typescript-eslint/unbound-method': 'off',
  },

  'Possible Errors': {
    // Disallow duplicate class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    // @extends-base-rule
    '@typescript-eslint/no-dupe-class-members': 'off',

    // Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-extra-parens.md
    // @extends-base-rule
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-extra-semi.md
    // @extends-base-rule
    '@typescript-eslint/no-extra-semi': 'off',

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',

    // Disallows assigning any to variables and properties
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    // @requires-type-checking
    '@typescript-eslint/no-unsafe-assignment': 'off',

    // Disallows calling an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    // @requires-type-checking
    '@typescript-eslint/no-unsafe-call': 'off',

    // Disallows member access on any typed variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    // @requires-type-checking
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Disallows returning any from a function
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    // @requires-type-checking
    '@typescript-eslint/no-unsafe-return': 'off',

    // Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    // @requires-type-checking
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },

  'Stylistic Issues': {
    // Requires using either `T[]` or `Array<T>` for arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': 'off',

    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/brace-style.md
    // @extends-base-rule
    '@typescript-eslint/brace-style': 'off',

    // Enforce camelCase naming convention
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/camelcase.md
    // @extends-base-rule
    // @deprecated replace by: `naming-convention`
    '@typescript-eslint/camelcase': 'off',

    // Enforces consistent spacing before and after commas
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/comma-spacing.md
    // @extends-base-rule
    '@typescript-eslint/comma-spacing': 'off',

    // Consistent with type definition either `interface` or `type`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': 'off',

    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Require explicit accessibility modifiers on class properties and methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/func-call-spacing.md
    // @extends-base-rule
    '@typescript-eslint/func-call-spacing': 'off',

    // Enforces naming of generic type variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/generic-type-naming.md
    // @deprecated replace by: `naming-convention`
    '@typescript-eslint/generic-type-naming': 'off',

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/indent.md
    // @extends-base-rule
    '@typescript-eslint/indent': 'off',

    // Require that interface names should or should not prefixed with `I`
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    // @deprecated replace by: `naming-convention`
    '@typescript-eslint/interface-name-prefix': 'off',

    // Enforce consistent spacing before and after keywords
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/keyword-spacing.md
    // @extends-base-rule
    '@typescript-eslint/keyword-spacing': 'off',

    // Require a specific member delimiter style for interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': 'off',

    // Enforces naming conventions for class members by visibility
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/member-naming.md
    // @deprecated replace by: `naming-convention`
    '@typescript-eslint/member-naming': 'off',

    // Require a consistent member declaration order
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': 'off',

    // Disallow generic `Array` constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-array-constructor.md
    // @extends-base-rule
    '@typescript-eslint/no-array-constructor': 'off',

    // Disallow extra non-null assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    '@typescript-eslint/no-extra-non-null-assertion': 'off',

    // Disallows non-null assertions using the `!` postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': 'off',

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-type-alias.md
    '@typescript-eslint/no-type-alias': 'off',

    // Flags unnecessary equality comparisons against boolean literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    // @requires-type-checking
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/quotes.md
    // @extends-base-rule
    '@typescript-eslint/quotes': 'off',

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/semi.md
    // @extends-base-rule
    '@typescript-eslint/semi': 'off',

    // Enforces consistent spacing before function parenthesis
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    // @extends-base-rule
    '@typescript-eslint/space-before-function-paren': 'off',

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': 'off',

    // Requires type annotations to exist
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/typedef.md
    '@typescript-eslint/typedef': 'off',
  },

  Variables: {
    // require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/init-declarations.md
    // @extends-base-rule
    '@typescript-eslint/init-declarations': 'off',

    // Enforces naming conventions for everything across a codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/naming-convention.md
    // @requires-type-checking
    '@typescript-eslint/naming-convention': 'off',

    // Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // @extends-base-rule
    '@typescript-eslint/no-unused-vars': 'off',

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/no-use-before-define.md
    // @extends-base-rule
    '@typescript-eslint/no-use-before-define': 'off',

    // Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/v2.30.0/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': 'off',
  },
};

const misc = {
  deprecated: {
    origin: [
      'no-native-reassign',
      'prefer-reflect',
      'no-negated-in-lhs',
      'valid-jsdoc',
      'indent-legacy',
      'lines-around-directive',
      'newline-after-var',
      'newline-before-return',
      'no-spaced-func',
      'require-jsdoc',
      'no-catch-shadow',
    ],
    import: ['import/imports-first'],
    ts: [
      '@typescript-eslint/ban-ts-ignore',
      '@typescript-eslint/class-name-casing',
      '@typescript-eslint/no-untyped-public-signature',
      '@typescript-eslint/camelcase',
      '@typescript-eslint/generic-type-naming',
      '@typescript-eslint/interface-name-prefix',
      '@typescript-eslint/member-naming',
    ],
  },
  requiresTypeChecking: [
    '@typescript-eslint/await-thenable',
    '@typescript-eslint/dot-notation',
    '@typescript-eslint/no-base-to-string',
    '@typescript-eslint/no-floating-promises',
    '@typescript-eslint/no-for-in-array',
    '@typescript-eslint/no-implied-eval',
    '@typescript-eslint/no-misused-promises',
    '@typescript-eslint/no-throw-literal',
    '@typescript-eslint/no-unnecessary-condition',
    '@typescript-eslint/no-unnecessary-qualifier',
    '@typescript-eslint/no-unnecessary-type-arguments',
    '@typescript-eslint/no-unnecessary-type-assertion',
    '@typescript-eslint/no-unused-vars-experimental',
    '@typescript-eslint/prefer-includes',
    '@typescript-eslint/prefer-nullish-coalescing',
    '@typescript-eslint/prefer-readonly',
    '@typescript-eslint/prefer-reduce-type-parameter',
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
    '@typescript-eslint/no-unsafe-assignment',
    '@typescript-eslint/no-unsafe-call',
    '@typescript-eslint/no-unsafe-member-access',
    '@typescript-eslint/no-unsafe-return',
    '@typescript-eslint/prefer-readonly-parameter-types',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare',
    '@typescript-eslint/naming-convention',
  ],
};
