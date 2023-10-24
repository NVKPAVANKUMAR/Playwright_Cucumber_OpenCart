/**************************************************/

/**  
* @author NVK PAVANKUMAR
*/

/**************************************************/

// This is done to do the mapping for Assertions, Hooks and Step Definition files 
const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.js
    --format json:test-results/cucumber_report.json
    --format html:test-results/cucumber-report.html
    --format @cucumber/pretty-formatter
`
module.exports = {
    default: `${common} features/**/*.feature`,
}
