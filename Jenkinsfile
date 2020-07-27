pipeline {
  agent {
    node {
      label 'master'
    }

  }
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/Anilkumar-potula/SAL-ROCC-TestRampUp', branch: 'master', poll: true, credentialsId: '7c5057cd-01bd-4cfe-b7a7-4ec0882e2032', changelog: true)
        echo 'Build Successful'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploy Successful'
        sleep 2
      }
    }

    stage('CopyBuilds') {
      parallel {
        stage('CopyBuilds') {
          steps {
            git(url: 'https://github.com/Anilkumar-potula/SAL-ROCC-TestRampUp.git', credentialsId: '7c5057cd-01bd-4cfe-b7a7-4ec0882e2032')
          }
        }

        stage('CopyBuildsToAPIAgent') {
          agent {
            node {
              label 'win-api'
            }

          }
          steps {
            git(url: 'https://github.com/Anilkumar-potula/SAL-ROCC-TestRampUp.git', credentialsId: '7c5057cd-01bd-4cfe-b7a7-4ec0882e2032')
          }
        }

      }
    }

    stage('Sanity') {
      parallel {
        stage('Sanity') {
          agent {
            node {
              label 'windows'
            }

          }
          steps {
            catchError(stageResult: 'FAILURE', buildResult: 'SUCCESS') {
              bat(script: 'cd %WORKSPACE%\\CucumberBankingAppDemo && mvn -Dtest=Sanity test', label: 'SanityTests UI')
            }

          }
        }

        stage('API Sanity') {
          agent {
            node {
              label 'win-api'
            }

          }
          steps {
            bat(script: 'cd %WORKSPACE%\\RestAssured && mvn clean test -DsuiteXmlFile=functional.xml', label: 'API Sanity')
          }
        }

      }
    }

    stage('Regression') {
      parallel {
        stage('Regression') {
          agent {
            node {
              label 'windows'
            }

          }
          steps {
            catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
              bat(script: 'cd %WORKSPACE%\\CucumberBankingAppDemo && mvn -Dtest=Regression test', label: 'Regression')
            }

          }
        }

        stage('API Regression') {
          agent {
            node {
              label 'win-api'
            }

          }
          steps {
            bat(script: 'cd %WORKSPACE%\\RestAssured && mvn clean test -DsuiteXmlFile=regression.xml', label: 'API Regression')
          }
        }

      }
    }

    stage('SystemWorkflows') {
      agent {
        node {
          label 'windows'
        }

      }
      steps {
        bat(script: 'cd %WORKSPACE%\\CucumberBankingAppDemo && mvn -Dtest=SystemWorkflow test', label: 'SystemWorkflow')
      }
    }

  }
}