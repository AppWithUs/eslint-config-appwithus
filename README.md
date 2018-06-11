## Setup

1. run `yarn add eslint-config-appwithus`

2. Install the correct versions of each package, which are listed by the command:

    `npm info "eslint-config-appwithus@latest" peerDependencies`

3. Add the following to your `.eslintrc`

   ```
   {
     "extends": "appwithus"
   }
   ```
   If you’re using React Native, add the React Native extension as follows:
   ```
   {
     "extends": [
       "appwithus",
       "appwithus/reactnative"
     ]
   }
   ```
