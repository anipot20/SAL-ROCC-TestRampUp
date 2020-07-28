Feature: Login to Banking application

  @Sanity
  Scenario: Login to Banking application with username
    Given User is on the Login Page
    And User clicks on Customer Login button
    And User selects the user name1
    And User clicks on Login button
    Then User should be logged in to application.

    @Regression
    Scenario Outline: Login to Banking application with different users
      Given User is on the Login Page
      And User clicks on Customer Login button
      And User selects the <username>
      And User clicks on Login button
      Then User should be logged in to application.


      Examples:
      |username|
      |Hermoine Granger|
      |Harry Potter    |
      |Ron Weasly      |