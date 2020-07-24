#Author: Anilkumar Potula
Feature: Deposit amount to account

  @Sanity
  @Regression
  Scenario: Deposit positive amount
    Given User is logged into account
    And User selects Deposits page
    And user enters positive amount
    And user clicks on Deposit button
    Then The amount should be added to account

  @Regression
  Scenario: Deposit negative amount
    Given User is logged into account
    And User selects Deposits page
    And user enters negative amount
    And user clicks on Deposit button
    Then Error message should be displayed

  @Regression
  Scenario: Deposit NaN amount
    Given User is logged into account
    And User selects Deposits page
    And user enters NaN amount
    And user clicks on Deposit button
    Then Error message should be displayed

  @Regression
  Scenario: Deposit OutOfRange amount
    Given User is logged into account
    And User selects Deposits page
    And user enters OutOfRange amount
    And user clicks on Deposit button
    Then Error message should be displayed

