module.exports = {
   "extends": ["config:base"],
   "stabilityDays": 7,
   "labels": ["dependencies", "renovate"],
   "git-submodules": {
      "enabled": true
   },
   "dependencyDashboard": true,
   "dependencyDashboardOSVVulnerabilitySummary": "all",
   "osvVulnerabilityAlerts": true,
   "major": {
      "dependencyDashboardApproval": true
   },
   "onboarding": false,
   "requireConfig": false,
   "prHourlyLimit": 0,
   "packageRules": [
      {
         "matchDepTypes": ["dependencies", "require"],
         "prPriority": 1
      },
      {
         "matchDepTypes": ["devDependencies", "requireDev"],
         "prPriority": 0
      },
      {
         "description": "Disabled Paths",
         "matchPaths": ["Testing/**"],
         // "dependencyDashboardApproval": true
         "schedule": ["* 0 31 2 *"],
         "prPriority": -1
      }
   ],
   "rebaseWhen": "conflicted",
   "enabledManagers": ["npm", "composer", "git-submodules", "github-actions"],
   "force": {
      "constraints": {
         "node": "16.14.0",
         "pnpm": "8.5.0"
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
};
