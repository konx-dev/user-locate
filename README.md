# user-locate

Simple script to determine a users location from their devices timezone without the need for expensive API calls or 3rd party integrations.

## Basic usage

require the package at a project or component level
```const userLocate = require('@konx-dev/user-locate')```

run function and utilise however required
```userLocate()```

## Roadmap

- [x] Return an object rather than string with timezone, country and code
- [ ] Convert package to typescript
- [ ] Readme & codesandbox.io examples - VanillaJS, React, Vue