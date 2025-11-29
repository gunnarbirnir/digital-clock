pipeline {
    agent { docker { 
        image 'node:24.11.1-alpine3.22' 
        args '-u root:root' 
    } }
    stages {
        stage('Install') { 
            steps {
                sh 'yarn install' 
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
