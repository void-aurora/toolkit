module.exports = {
  rules: {
    // ==== `@`-each ====

    // This is a rule that checks for situations where users have done a loop using map-keys and grabbed the value for that key inside of the loop.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-each-key-value-single-line/README.md
    'scss/at-each-key-value-single-line': true,

    // ==== `@`-else ====

    // Require or disallow a newline after the closing brace of `@else` statements (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    // Require a single space or disallow whitespace after the closing brace of `@else` statements (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md
    'scss/at-else-closing-brace-space-after': 'always-intermediate',

    // Require an empty line or disallow empty lines before `@`-else (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md
    'scss/at-else-empty-line-before': 'never',

    // Require or disallow a space before `@else if` parentheses (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-if-parentheses-space-before/README.md
    'scss/at-else-if-parentheses-space-before': 'always',

    // ==== `@`-extend ====

    // Disallow at-extends (`@extend`) with missing placeholders.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-extend-no-missing-placeholder/README.md
    'scss/at-extend-no-missing-placeholder': true,

    // ==== `@`-function ====

    // Require named parameters in SCSS function call rule.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-named-arguments/README.md
    'scss/at-function-named-arguments': null,

    // Require or disallow a space before `@function` parentheses (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md
    'scss/at-function-parentheses-space-before': 'always',

    // Specify a pattern for Sass/SCSS-like function names.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-pattern/README.md
    'scss/at-function-pattern': null,

    // ==== `@`-if ====

    // Require or disallow a newline after the closing brace of `@if` statements (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

    // Require a single space or disallow whitespace after the closing brace of `@if` statements (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // Disallow `null` in `@if` statements.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-no-null/README.md
    'scss/at-if-no-null': true,

    // ==== `@`-import ====

    // Disallow leading underscore in partial names in `@import`.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-no-partial-leading-underscore/README.md
    'scss/at-import-no-partial-leading-underscore': true,

    // Require or disallow extension in `@import` commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md
    'scss/at-import-partial-extension': 'never',

    // Specify blacklist of disallowed file extensions for partial names in `@import` commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-blacklist/README.md
    'scss/at-import-partial-extension-blacklist': null,

    // Specify whitelist of allowed file extensions for partial names in `@import` commands.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-import-partial-extension-whitelist/README.md
    'scss/at-import-partial-extension-whitelist': null,

    // ==== `@`-mixin ====

    // Require or disallow parentheses in argumentless `@mixin` calls (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // Require named parameters in at-mixin call rule.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-named-arguments/README.md
    'scss/at-mixin-named-arguments': null,

    // Require or disallow a space before `@mixin` parentheses (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md
    'scss/at-mixin-parentheses-space-before': 'never',

    // Specify a pattern for Sass/SCSS-like mixin names.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-pattern/README.md
    'scss/at-mixin-pattern': null,

    // ==== `@`-rule ====

    // Disallow parentheses in conditional @ rules (if, elsif, while).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-conditional-no-parentheses/README.md
    'scss/at-rule-conditional-no-parentheses': null,

    // Disallow unknown at-rules. Should be used **instead of** stylelint's [at-rule-no-unknown](https://stylelint.io/user-guide/rules/at-rule-no-unknown).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    // ==== `$`-variable ====

    // Require a newline after the colon in `$`-variable declarations (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md
    'scss/dollar-variable-colon-newline-after': null,

    // Require or disallow whitespace after the colon in `$`-variable declarations (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md
    'scss/dollar-variable-colon-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the colon in `$`-variable declarations (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md
    'scss/dollar-variable-colon-space-before': 'never',

    // Require `!default` flag for `$`-variable declarations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-default/README.md
    'scss/dollar-variable-default': null,

    // Require an empty line or disallow empty lines after `$`-variable declarations.,
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-after/README.md,
    'scss/dollar-variable-empty-line-after': [
      'always',
      {
        except: ['last-nested', 'before-dollar-variable'],
      },
    ],

    // Require a single empty line or disallow empty lines before `$`-variable declarations (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md
    'scss/dollar-variable-empty-line-before': null,

    // Require `$`-variable declarations to be placed first in a block (root or a rule).,
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-first-in-block/README.md,
    'scss/dollar-variable-first-in-block': null,

    // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md
    'scss/dollar-variable-no-missing-interpolation': true,

    // Specify a pattern for Sass-like variables.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md
    'scss/dollar-variable-pattern': null,

    // ==== `%`-placeholder ====

    // Specify a pattern for `%`-placeholders.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/percent-placeholder-pattern/README.md
    'scss/percent-placeholder-pattern': null,

    // ==== `//`-comment ====

    // Require or disallow an empty line before `//`-comments (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md
    'scss/double-slash-comment-empty-line-before': null,

    // Require or disallow `//`-comments to be inline comments.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-inline/README.md
    'scss/double-slash-comment-inline': null,

    // Require or disallow whitespace after the `//` in `//`-comments
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md
    'scss/double-slash-comment-whitespace-inside': 'always',

    // ==== Comment ====

    // Disallow `/*`-comments.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/comment-no-loud/README.md
    'scss/comment-no-loud': null,

    // ==== Declaration ====

    // Require or disallow properties with `-` in their names to be in a form of a nested group.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md
    'scss/declaration-nested-properties': 'never',

    // Disallow nested properties of the same "namespace" be divided into multiple groups.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties-no-divided-groups/README.md
    'scss/declaration-nested-properties-no-divided-groups': null,

    // ==== Dimension ====

    // Disallow non-numeric values when interpolating a value with a unit.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dimension-no-non-numeric-values/README.md
    'scss/dimension-no-non-numeric-values': true,

    // ==== Function ====

    // Encourage the use of the [scale-color](https://sass-lang.com/documentation/modules/color#scale-color) function over regular color functions.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-color-relative/README.md
    'scss/function-color-relative': true,

    // Disallow quoted strings inside the [quote function](https://sass-lang.com/documentation/modules/string#quote) (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-quote-no-quoted-strings-inside/README.md
    'scss/function-quote-no-quoted-strings-inside': true,

    // Disallow unquoted strings inside the [unquote function](https://sass-lang.com/documentation/modules/string#unquote) (Autofixable).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/function-unquote-no-unquoted-strings-inside/README.md
    'scss/function-unquote-no-unquoted-strings-inside': true,

    // ==== Map ====

    // Require quoted keys in Sass maps.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/map-keys-quotes/README.md
    'scss/map-keys-quotes': 'always',

    // ==== Media feature ====

    // Require a media feature value be a `$`-variable or disallow `$`-variables in media feature values.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/media-feature-value-dollar-variable/README.md
    'scss/media-feature-value-dollar-variable': [
      'always',
      {
        ignore: ['keywords'],
      },
    ],

    // ==== Operator ====

    // Disallow linebreaks after Sass operators.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-after/README.md
    'scss/operator-no-newline-after': null,

    // Disallow linebreaks before Sass operators.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-newline-before/README.md
    'scss/operator-no-newline-before': null,

    // Disallow unspaced operators in Sass operations.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/operator-no-unspaced/README.md
    'scss/operator-no-unspaced': true,

    // ==== Partial ====

    // Disallow non-CSS `@import`s in partial files.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/partial-no-import/README.md
    'scss/partial-no-import': null,

    // ==== Selector ====

    // Require or disallow nesting of combinators in selectors.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-nest-combinators/README.md
    'scss/selector-nest-combinators': 'always',

    // Disallow redundant nesting selectors (`&`).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md
    'scss/selector-no-redundant-nesting-selector': true,

    // Disallow union class names with the parent selector (`&`).
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-union-class-name/README.md
    'scss/selector-no-union-class-name': true,

    // ==== General / Sheet ====

    // Disallow dollar variables within a stylesheet.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md
    'scss/no-dollar-variables': null,

    // Disallow duplicate dollar variables within a stylesheet.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: ['at-rule', 'nested-at-rule'],
      },
    ],

    // Disallow duplicate mixins within a stylesheet.
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-mixins/README.md
    'scss/no-duplicate-mixins': true,

    // Disallows the use of global function names, as these global functions are now located inside built-in Sass modules.,
    // https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-global-function-names/README.md,
    'scss/no-global-function-names': true,
  },
};
