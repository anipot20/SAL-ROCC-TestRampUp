#Feature: Withdraw amount from account
#
##  Background: Launch Browser
##    Given Validate the browser
##    When Browser is launched
##    Then Check if the browser is launched
#
#
#@Sanity
#  Scenario: Withdraw positive amount within balance
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters positive amount within balance
#    And user clicks on Withdraw button
#    Then The amount should be deducted from account
#
#  @FirefoxSanity
#  Scenario: Withdraw positive amount within balance
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters positive amount within balance
#    And user clicks on Withdraw button
#    Then The amount should be deducted from account
#
#  @Regression
#  Scenario: Withdraw positive amount out of balance
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters positive amount out of balance
#    And user clicks on Withdraw button
#    Then Error message should be displayed
#
#  @Regression
#  Scenario: Withdraw negative amount
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters negative amount
#    And user clicks on Withdraw button
#    Then Error message should be displayed
#
#  @Regression
#  Scenario: Withdraw NaN amount
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters NaN amount
#    And user clicks on Withdraw button
#    Then Error message should be displayed
#
#  @Regression
#  Scenario: Withdraw OutOfRange amount
#    Given User is logged into account
#    And User selects Withdrawl page
#    And user enters OutOfRange amount
#    And user clicks on Withdraw button
#    Then Error message should be displayed