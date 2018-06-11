## Setup

1. run `yarn add eslint-config-appwithus`

2. Install the correct versions of each package, which are listed by the command:

    `npm info "eslint-config-appwithus@latest" peerDependencies`

3. Add the following to your `.eslintrc` depending on your platform

   ```
   {
     "extends": "appwithus/native"
   }
   ```
   ```
   {
     "extends": "appwithus/browser"
   }
   ```

   ```
   {
     "extends": "appwithus/node"
   }
   ```

As soon as you add a `prettier.rc` you'll overwrite the prettier-config, even if your file is empty,
