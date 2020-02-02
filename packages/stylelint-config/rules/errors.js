module.exports = {
  rules: {
    // ==== Color ====

    // Disallow invalid hex colors.
    // https://stylelint.io/user-guide/rules/color-no-invalid-hex
    'color-no-invalid-hex': true,

    // ==== Font family ====

    // Disallow duplicate font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
    'font-family-no-duplicate-names': true,

    // Disallow missing generic families in lists of font family names.
    // https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
    'font-family-no-missing-generic-family-keyword': true,

    // ==== Function ====

    // Disallow an invalid expression within calc functions.
    // https://stylelint.io/user-guide/rules/function-calc-no-invalid
    'function-calc-no-invalid': true,

    // Disallow an unspaced operator within calc functions.
    // https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
    'function-calc-no-unspaced-operator': true,

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
    'function-linear-gradient-no-nonstandard-direction': true,

    // ==== String ====

    // Disallow (unescaped) newlines in strings.
    // https://stylelint.io/user-guide/rules/string-no-newline
    'string-no-newline': true,

    // ==== Unit ====

    // Disallow unknown units.
    // https://stylelint.io/user-guide/rules/unit-no-unknown
    'unit-no-unknown': true,

    // ==== Property ====

    // Disallow unknown properties.
    // https://stylelint.io/user-guide/rules/property-no-unknown
    'property-no-unknown': true,

    // ==== Keyframe declaration ====

    // Disallow !important within keyframe declarations.
    // https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
    'keyframe-declaration-no-important': true,

    // ==== Declaration block ====

    // Disallow duplicate properties within declaration blocks.
    // https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
    'declaration-block-no-duplicate-properties': true,

    // Disallow shorthand properties that override related longhand properties.
    // https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
    'declaration-block-no-shorthand-property-overrides': true,

    // ==== Block ====

    // Disallow empty blocks.
    // https://stylelint.io/user-guide/rules/block-no-empty
    'block-no-empty': [
      true,
      {
        ignore: ['comments'],
      },
    ],

    // ==== Selector ====

    // Disallow unknown pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
    'selector-pseudo-class-no-unknown': true,

    // Disallow unknown pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
    'selector-pseudo-element-no-unknown': true,

    // Disallow unknown type selectors.
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],

    // ==== Media feature ====

    // Disallow unknown media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
    'media-feature-name-no-unknown': true,

    // ==== At-rule ====

    // Disallow unknown at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // SCSS At-Rules https://sass-lang.com/documentation/at-rules
          'use',
          'forward',
          'import',
          'mixin',
          'include',
          'function',
          'extend',
          'at-root',
          'error',
          'warn',
          'debug',
          'if',
          'each',
          'for',
          'while',
        ],
      },
    ],

    // ==== Comment ====

    // Disallow empty comments.
    // https://stylelint.io/user-guide/rules/comment-no-empty
    'comment-no-empty': true,

    // ==== General / Sheet ====

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    // https://stylelint.io/user-guide/rules/no-descending-specificity
    'no-descending-specificity': [
      true,
      {
        ignore: ['selectors-within-list'],
      },
    ],

    // Disallow duplicate @import rules within a stylesheet.
    // https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
    'no-duplicate-at-import-rules': true,

    // Disallow duplicate selectors within a stylesheet.
    // https://stylelint.io/user-guide/rules/no-duplicate-selectors
    'no-duplicate-selectors': true,

    // Disallow empty sources.
    // https://stylelint.io/user-guide/rules/no-empty-source
    'no-empty-source': true,

    // Disallow extra semicolons (Autofixable).
    // https://stylelint.io/user-guide/rules/no-extra-semicolons
    'no-extra-semicolons': true,

    // Disallow double-slash comments (//...) which are not supported by CSS.
    // https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
    'no-invalid-double-slash-comments': null,
  },
};
