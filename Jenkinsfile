pipeline {
  agent { docker { 
    image 'node:24.11.1-alpine3.22' 
    args '-u root:root -e NPM_TOKEN=$NPM_TOKEN'
  } }
  stages {
    stage('Install') {
      steps {
        withCredentials([string(credentialsId: 'jenkins-npm-token', variable: 'NPM_TOKEN')]) {
          sh 'yarn install'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'yarn clean'
        sh 'yarn build'
      }
    }

    stage('Checks') {
      steps {
        sh 'yarn type-check'
        sh 'yarn lint'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn test:unit'
      }
    }
  }
}
