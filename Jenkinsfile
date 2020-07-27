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

    stage('Sanity') {
      agent {
        node {
          label 'windows'
        }

      }
      steps {
        bat 'echo hi'
        sh '''cd C:\\Jenkins\\workspace\\Copy-Buils\\CucumberBankingAppDemo
mvn -Dtest=Sanity test'''
      }
    }

  }
}