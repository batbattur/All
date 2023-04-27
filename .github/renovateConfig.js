const FONTAWESOME_TOKEN = process.env.RENOVATE_FONTAWESOME_TOKEN;

module.exports = {
   "extends": ["config:base"],
   "stabilityDays": 7,
   "timezone": "America/Los_Angeles",
   "schedule": ["after 9pm and before 12am every weekday"],
   "prHourlyLimit": 1,
   "prConcurrentLimit": 1,
   "labels": ["dependencies", "renovate"],
   "git-submodules": {
      "enabled": true
   },
   "dependencyDashboard": true,
   "major": {
      "dependencyDashboardApproval": true
   },
   "packageRules": [
      {
         "matchPackageNames": ["aws/aws-sdk-php", "rector/rector"],
         "matchUpdateTypes": ["patch"],
         "enabled": false
      },
      {
         "matchPackageNames": ["react-commerce"],
         "prPriority": 2
      },
      {
         "matchDepTypes": ["dependencies", "require"],
         "prPriority": 1
      },
      {
         "matchDepTypes": ["devDependencies", "requireDev"],
         "prPriority": 0
      }
   ],
   "rebaseWhen": "conflicted",
   "enabledManagers": ["npm", "composer", "git-submodules", "github-actions"],
   "force": {
      "constraints": {
         "node": "14.20.1",
         "pnpm": "7.27.0"
      }
   },
   "cloneSubmodules": true,
   "allowScripts": true,
   "ignoreScripts": false,
   "platform": "github",
   "branchPrefix": "test-renovate/",
   "repositories": [
      {"repository": "batbattur/All"}
   ],
   "gitAuthor": "Renovate Bot <bot@renovateapp.com>",
   "hostRules": [
      {
         "hostType": "npm",
         "matchHost": "https://npm.fontawesome.com/",
         "token": FONTAWESOME_TOKEN,
      }
   ],
};