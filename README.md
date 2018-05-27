# ServerlessServerSideRenderingAngular

A demo of [Angular Universal Rendering](https://github.com/angular/angular-cli/wiki/stories-universal-rendering) a.k.a Server-Side Rendering(SSR) with [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) 

## Local

```
npm run build:ssr && npm run serve:ssr
```

Open http://localhost:4000, SSR is work.

## Serverless

### Build

Build to dist-lamnda directory.

```
npm run build:ssr:lambda
```

### Setup

This guide assumes you have already set up an AWS account and have the latest version of the AWS CLI installed.

1. Run npm run config -- --account-id="<accountId>" --bucket-name="<bucketName>" [--region="<region>" --function-name="<functionName>"] to configure the example, eg. npm run config -- --account-id="123456789012" --bucket-name="my-unique-bucket". This modifies package.json, simple-proxy-api.yaml and cloudformation.yaml with your account ID, bucket, region and function name (region defaults to us-east-1 and function name defaults to AwsServerlessExpressFunction). If the bucket you specify does not yet exist, the next step will create it for you. This step modifies the existing files in-place; if you wish to make changes to these settings, you will need to modify package.json, simple-proxy-api.yaml and cloudformation.yaml manually.
2. Run npm run setup (Windows users: npm run win-setup) - this installs the node dependencies, creates an S3 bucket (if it does not already exist), packages and deploys your serverless Express application to AWS Lambda, and creates an API Gateway proxy API.
3. After the setup command completes, open the AWS CloudFormation console https://console.aws.amazon.com/cloudformation/home and switch to the region you specified. Select the AwsServerlessExpressStack stack, then click the ApiUrl value under the Outputs section - this will open a new page with your running API. The API index lists the resources available in the example Express server (app.js), along with example curl commands.

More detail is [steps for running the example](https://github.com/awslabs/aws-serverless-express/tree/master/example#steps-for-running-the-example)

### Deploy

When update angular app, run build for serverless and deploy to AWS.

```
npm run build:ssr:lambda
npm run package-deploy
```
