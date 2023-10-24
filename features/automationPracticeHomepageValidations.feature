Feature: Validating Automation Practice Home Page
  '''

  As a user I want to Validate The Automation Practice Home Page

  '''
  @reg
  Scenario: Validating Automation Practice Home Page Fields
    Given I Navigate To The Automation Practice Home Page
    Then I Should See The "My Account" Element On Home Page
    Then I Should See The Search Input Element
    Then I Should See The Back To Home Button