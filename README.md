## Project Setup

### Installing Dependencies:

1) Install Node.js.

2) Clone the repository:
```
<<git clone <repo-url>
cd <repo-folder>
```

3) Install dependencies:```npm install```

4) Installing Faker.js

The project uses Faker.js for generating test data. Install it with: ```npm install @faker-js/faker```
### Environment Variables:

Add Environment Variables: Pass the application APP_URL through environment variables in Command Prompt: set ```APP_URL=https://fe-delivery.tallinn-learning.ee/signin```

Access the variable in code using: ```const appUrl = process.env.APP_URL;```

## CI/CD Setup

The project uses GitHub Actions for automated testing. Ensure the environment variable is added to the repository secrets:

Go to Settings -> Secrets -> Actions.

Click New Repository Secret.

Add a secret with the name APP_URL and value ```https://fe-delivery.tallinn-learning.ee/signin.```
