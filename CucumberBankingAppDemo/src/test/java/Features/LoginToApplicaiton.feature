Feature: Login to Banking application

  @Sanity
  Scenario: Login to Banking application with username
    Given User is on the Login Page
    And User clicks on Customer Login button
    And User selects the user name
    And User clicks on Login button
    Then User should be logged in to application.