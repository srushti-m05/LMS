pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "Compiling"'
      }
    }

    stage('Test') {
      steps {
        sh 'echo "Running Tests"'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo "Deploying application"'
      }
    }

    stage('End') {
      steps {
        sh 'echo "Pipeline completed successfully'
      }
    }

    stage('') {
      steps {
        sh 'echo "Pipeline is running successfully"'
      }
    }

  }
}