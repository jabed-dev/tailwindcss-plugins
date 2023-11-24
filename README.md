# tailwindcss-plugins
> how to create tailwindcss plugins


* **[plugin()](plugins/plugin.js)** Plugin functions receive a single object argument that can be destructured into several helper functions.
* **[plugin.withOptions()](plugins/plugin.withOptions.js)** For cases like this, you can use `plugin.withOptions` to define a plugin that can be invoked with a configuration object.
* **[addBase()](plugins/addBase.js)**, for registering new base styles.
* **[addUtilities()](plugins/addUtilities.js)**, for registering new static utility styles..
* **[matchUtilities()](plugins/matchUtilities.js)**, for registering new dynamic utility styles.
* **[addComponents()](plugins/addComponents.js)**, for registering new static component styles.
* **[matchComponents()](plugins/matchComponents.js)**, for registering new dynamic component styles.
* **[addVariant()](plugins/addVariant.js)**, for registering custom static variants.
* **[matchVariant()](plugins/matchVariant.js)**, for registering custom dynamic variants.
* **[theme()](plugins/theme.js)**, for looking up values in the user’s theme configuration.
* **[config()](plugins/config.js)**, for looking up values in the user’s Tailwind configuration.
* **[corePlugins()](plugins/corePlugins.js)**, for checking if a core plugin is enabled.
* **[e()](plugins/e.js)**, for manually escaping strings meant to be used in class names.
* **[match-with-modifier](plugins/match-with-modifier.js)**, modifier can be used with `matchUtilities()` and `matchComponents()`.
