'use strict';

module.exports = {
   hooks: {
      readPackage,
   },
};


function readPackage(packageJson, context) {

   console.log("TESTING PNPMFILECJS")
   
   return packageJson;
}
