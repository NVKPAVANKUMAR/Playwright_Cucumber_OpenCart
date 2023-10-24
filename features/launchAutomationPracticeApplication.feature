@reg
Feature: Launching Automation Practice Application
  '''
  As a user I want to Launch The Automation Practice Application
  '''

  Scenario: Launch And Validate Automation Practice Landing Page
    Given I Navigate To The Automation Practice Page
    Then I Should See The "Contact us" Element On Landing Page
    Then I Should See The "My Account" Element On Home Page
    Then Shopping Cart Element Should Be Present


  Scenario Outline: Login To Automation Practice Application - Valid Credentials
    Given I Am On The Automation Practice Login Page
    And I Enter My Mail Address "<Email Address>"
    And I Enter My Password "<Password>"
    When I Click On The Sign Button
    Then I Should Navigate To The Automation Practice Home Page
    Examples:
      | Email Address           | Password      |
      | automationtest@demo.com | automation123 |

  Scenario: Login To Automation Practice Application - Invalid Credentials
    Given I Am On The Automation Practice Login Page
    And I Enter My Mail Address "<Email Address>"
    And I Enter My Password "<Password>"
    When I Click On The Sign Button
    Then I Should See Error Message
    Examples:
      | Email Address       | Password      |
      | automation@demo.com | automation123 |
