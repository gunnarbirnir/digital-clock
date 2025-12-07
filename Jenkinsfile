void setBuildStatus(String message, String state) {
  step([
    $class: "GitHubCommitStatusSetter",
    reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/gunnarbirnir/digital-clock"],
    contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
    errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
    statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
  agent { docker { 
    image 'node:24.11.1-alpine3.22' 
    args '-u root:root -e NPM_TOKEN=$NPM_TOKEN'
  } }
  triggers {
    githubPush()
    pollSCM('H/5 * * * *')
  }
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

  post {
    success {
      setBuildStatus("Build succeeded", "SUCCESS");
    }
    failure {
      setBuildStatus("Build failed", "FAILURE");
    }
  }
}
