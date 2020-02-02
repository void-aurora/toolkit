module.exports = {
  rules: {
    // ==== Color ====

    // Require (where possible) or disallow named colors.
    // https://stylelint.io/user-guide/rules/color-named
    'color-named': ['never'],

    // Disallow hex colors.
    // https://stylelint.io/user-guide/rules/color-no-hex
    'color-no-hex': null,

    // ==== Function ====

    // Specify a blacklist of disallowed functions.
    // https://stylelint.io/user-guide/rules/function-blacklist
    'function-blacklist': null,

    // Disallow scheme-relative urls.
    // https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
    'function-url-no-scheme-relative': true,

    // Specify a blacklist of disallowed URL schemes.
    // https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
    'function-url-scheme-blacklist': ['file', 'ftp', 'http'],

    // Specify a whitelist of allowed URL schemes.
    // https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
    'function-url-scheme-whitelist': ['https'],

    // Specify a whitelist of allowed functions.
    // https://stylelint.io/user-guide/rules/function-whitelist
    'function-whitelist': null,

    // ==== Keyframes ====

    // Specify a pattern for keyframe names.
    // https://stylelint.io/user-guide/rules/keyframes-name-pattern
    'keyframes-name-pattern': null,

    // ==== Number ====

    // Limit the number of decimal places allowed in numbers.
    // https://stylelint.io/user-guide/rules/number-max-precision
    'number-max-precision': null,

    // ==== Time ====

    // Specify the minimum number of milliseconds for time values.
    // https://stylelint.io/user-guide/rules/time-min-milliseconds
    'time-min-milliseconds': null,

    // ==== Unit ====

    // Specify a blacklist of disallowed units.
    // https://stylelint.io/user-guide/rules/unit-blacklist
    'unit-blacklist': null,

    // Specify a whitelist of allowed units.
    // https://stylelint.io/user-guide/rules/unit-whitelist
    'unit-whitelist': null,

    // ==== Shorthand property ====

    // Disallow redundant values in shorthand properties (Autofixable).
    // https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values
    'shorthand-property-no-redundant-values': true,

    // ==== Value ====

    // Disallow vendor prefixes for values.
    // https://stylelint.io/user-guide/rules/value-no-vendor-prefix
    'value-no-vendor-prefix': true,

    // ==== Custom property ====

    // Specify a pattern for custom properties.
    // https://stylelint.io/user-guide/rules/custom-property-pattern
    'custom-property-pattern': null,

    // ==== Property ====

    // Specify a blacklist of disallowed properties.
    // https://stylelint.io/user-guide/rules/property-blacklist
    'property-blacklist': ['float'],

    // Disallow vendor prefixes for properties.
    // https://stylelint.io/user-guide/rules/property-no-vendor-prefix
    'property-no-vendor-prefix': true,

    // Specify a whitelist of allowed properties.
    // https://stylelint.io/user-guide/rules/property-whitelist
    'property-whitelist': null,

    // ==== Declaration ====

    // Disallow longhand properties that can be combined into one shorthand property.
    // https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
    'declaration-block-no-redundant-longhand-properties': true,

    // Disallow !important within declarations.
    // https://stylelint.io/user-guide/rules/declaration-no-important
    'declaration-no-important': true,

    // Specify a blacklist of disallowed property and unit pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
    'declaration-property-unit-blacklist': null,

    // Specify a whitelist of allowed property and unit pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
    'declaration-property-unit-whitelist': null,

    // Specify a blacklist of disallowed property and value pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
    'declaration-property-value-blacklist': null,

    // Specify a whitelist of allowed property and value pairs within declarations.
    // https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
    'declaration-property-value-whitelist': null,

    // ==== Declaration block ====

    // Limit the number of declarations within a single-line declaration block.
    // https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
    'declaration-block-single-line-max-declarations': 1,

    // ==== Selector ====

    // Specify a blacklist of disallowed attribute operators.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
    'selector-attribute-operator-blacklist': null,

    // Specify a whitelist of allowed attribute operators.
    // https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
    'selector-attribute-operator-whitelist': null,

    // Specify a pattern for class selectors.
    // https://stylelint.io/user-guide/rules/selector-class-pattern
    'selector-class-pattern': null,

    // Specify a blacklist of disallowed combinators.
    // https://stylelint.io/user-guide/rules/selector-combinator-blacklist
    'selector-combinator-blacklist': null,

    // Specify a whitelist of allowed combinators.
    // https://stylelint.io/user-guide/rules/selector-combinator-whitelist
    'selector-combinator-whitelist': null,

    // Specify a pattern for ID selectors.
    // https://stylelint.io/user-guide/rules/selector-id-pattern
    'selector-id-pattern': null,

    // Limit the number of attribute selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-attribute
    'selector-max-attribute': null,

    // Limit the number of classes in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-class
    'selector-max-class': null,

    // Limit the number of combinators in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-combinators
    'selector-max-combinators': null,

    // Limit the number of compound selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-compound-selectors
    'selector-max-compound-selectors': null,

    // Limit the number of adjacent empty lines within selectors (Autofixable).
    // https://stylelint.io/user-guide/rules/selector-max-empty-lines
    'selector-max-empty-lines': 1,

    // Limit the number of ID selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-id
    'selector-max-id': null,

    // Limit the number of pseudo-classes in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-pseudo-class
    'selector-max-pseudo-class': null,

    // Limit the specificity of selectors.
    // https://stylelint.io/user-guide/rules/selector-max-specificity
    'selector-max-specificity': null,

    // Limit the number of type in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-type
    'selector-max-type': 0,

    // Limit the number of universal selectors in a selector.
    // https://stylelint.io/user-guide/rules/selector-max-universal
    'selector-max-universal': 1,

    // Specify a pattern for the selectors of rules nested within rules.
    // https://stylelint.io/user-guide/rules/selector-nested-pattern
    'selector-nested-pattern': null,

    // Disallow qualifying a selector by type.
    // https://stylelint.io/user-guide/rules/selector-no-qualifying-type
    'selector-no-qualifying-type': true,

    // Disallow vendor prefixes for selectors.
    // https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
    'selector-no-vendor-prefix': true,

    // Specify a blacklist of disallowed pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
    'selector-pseudo-class-blacklist': null,

    // Specify a whitelist of allowed pseudo-class selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
    'selector-pseudo-class-whitelist': null,

    // Specify a blacklist of disallowed pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
    'selector-pseudo-element-blacklist': null,

    // Specify a whitelist of allowed pseudo-element selectors.
    // https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
    'selector-pseudo-element-whitelist': null,

    // ==== Media feature ====

    // Specify a blacklist of disallowed media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-blacklist
    'media-feature-name-blacklist': null,

    // Disallow vendor prefixes for media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
    'media-feature-name-no-vendor-prefix': true,

    // Specify a whitelist of allowed media feature name and value pairs.
    // https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
    'media-feature-name-value-whitelist': null,

    // Specify a whitelist of allowed media feature names.
    // https://stylelint.io/user-guide/rules/media-feature-name-whitelist
    'media-feature-name-whitelist': null,

    // ==== Custom media ====

    // Specify a pattern for custom media query names.
    // https://stylelint.io/user-guide/rules/custom-media-pattern
    'custom-media-pattern': null,

    // ==== At-rule ====

    // Specify a blacklist of disallowed at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-blacklist
    'at-rule-blacklist': null,

    // Disallow vendor prefixes for at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
    'at-rule-no-vendor-prefix': true,

    // Specify a requirelist of properties for an at-rule.
    // https://stylelint.io/user-guide/rules/at-rule-property-requirelist
    'at-rule-property-requirelist': {
      'font-face': ['font-family', 'font-style', 'font-weight', 'src'],
    },

    // Specify a whitelist of allowed at-rules.
    // https://stylelint.io/user-guide/rules/at-rule-whitelist
    'at-rule-whitelist': null,

    // ==== Comment ====

    // Specify a blacklist of disallowed words within comments.
    // https://stylelint.io/user-guide/rules/comment-word-blacklist
    'comment-word-blacklist': null,

    // ==== General / Sheet ====

    // Limit the depth of nesting.
    // https://stylelint.io/user-guide/rules/max-nesting-depth
    'max-nesting-depth': null,

    // Disallow unknown animations.
    // https://stylelint.io/user-guide/rules/no-unknown-animations
    'no-unknown-animations': null,
  },
};
