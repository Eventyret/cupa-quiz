# Cupa / Errors find

This is a tech test for Cambridge University.

## ๐ Table of Content

- [Cupa / Errors find](#cupa--errors-find)
  - [๐ Table of Content](#-table-of-content)
  - [๐ Optimizations](#-optimizations)
  - [๐ฎโโ๏ธ Error Handling](#๏ธ-error-handling)
  - [๐จ What could be done better](#-what-could-be-done-better)
  - [๐ข Scale](#-scale)
  - [๐งช Testing](#-testing)
  - [๐ชฃ Deployment AWS S3 Bucket (With Github Actions)](#-deployment-aws-s3-bucket-with-github-actions)
    - [๐ฉ Setup IAM Policy \& User for Github Actions](#-setup-iam-policy--user-for-github-actions)
      - [๐ Creating a IAM Policy](#-creating-a-iam-policy)
    - [๐จโ๐ฉโ๐ง Create IAM UserGroup](#-create-iam-usergroup)
    - [๐ Create IAM User](#-create-iam-user)
    - [๐ Create Access Key](#-create-access-key)
    - [๐งโ๐ฆฐ Configure github Actions.](#-configure-github-actions)
  - [๐ Deployment to Github Pages](#-deployment-to-github-pages)
  - [๐ณ Deployment using Docker](#-deployment-using-docker)
  - [โ๏ธ CORS Issues](#๏ธ-cors-issues)
  - [๐โโ๏ธ Running the project](#๏ธ-running-the-project)

## ๐ Optimizations

As this was a simple tech test, I have decided to use a simple React app.
Though for more production and stable code i suggest following changes.

Fetching data can be replaced with `react-query` to handle caching and fetching.
This will also allow for better error handling.
Currently we have a simple state for this, but things like `Redux` can be used, to handle state.
In the tech test i'm just using a _simple state_ / _passing props_ etc.

Though in a bigger application this can be cumbersome and also not very efficent.
So i would suggest using a state management library like `Redux` or `Mobx`.

We could also introduce things like a redis cache to handle caching to reduce the amount of requests to the **API**. (_S3 bucket can cost some money in the long run ๐ธ_)

## ๐ฎโโ๏ธ Error Handling

Due to the time i used i did not implement very good error handling, but i have added some basic error handling.
This can most likely be improved and should have dedicated error handling functions.

## ๐จ What could be done better

I feel that i could have maybe spent more time on the design, but also i feel that i could have done a better job on the error handling.
Overall i was quite happy with this project.
Of course not running in development mode but rather in production mode will make it more efficent.
Not hardcode a url for the data, as we don't anyone to just access this.
Using a proxy to keep the url secret or we could use a backend to fetch the data and then send it to the frontend.
Though the task was to just use the frontend, so i did not do this, except for setting up a proxy server see [โ๏ธ CORS Issue](#CORS-Issues)

## ๐ข Scale

This project can be scaled by adding more features and also adding more data.
For Deployment kubernetes can be used to deploy the application, and also to scale the application.
This can be done by adding more pods and also adding more replicas.
I also think in scale using a propper state management is needed. Any large application will have issues with manage state.

## ๐งช Testing

I only did some basics BDD tests in this scenario making sure APP renders and we have a defined function.
Sadly i ran out of time to do more testing.
I feel testing is **_very_** important as a developer and wish i could do more testing.

You can run the tests by running `npm run test` or `yarn test`

## ๐ชฃ Deployment AWS S3 Bucket (With Github Actions)

This step takes into account you have a AWS account and have setup your credentials.

1. Create a S3 bucket
   a. Give the bucket a name
   b. Make sure you have enabled Public Bucket and acknowledge the risks
2. Select your newly created `bucket`
   a. Select `Properties`
   b. Select `Static website hosting`
   c. Select `Use this bucket to host a website`
   d. Enter `index.html` as the index document
   e. Select `Save`
3. Select `Permissions`
   a. Select `Bucket Policy`
   b. Copy the following policy and replace the `BUCKETNAME` with your own values

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKETNAME/*"
    }
  ]
}
```

4. Select `Properties`
   a. Select `Static website hosting`
   b. Copy the `Endpoint` value

### ๐ฉ Setup IAM Policy & User for Github Actions

#### ๐ Creating a IAM Policy

1. Select `Services` and search for `IAM`
2. Select `Policies`
3. Select `Create Policy`
4. Select `JSON` tab
5. Copy the following policy and replace the `BUCKETNAME` with your own values

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowS3SyncCommand",
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:Listbucket", "s3:PutObject"],
      "Resource": ["arn:aws:s3:::BUCKETNAME", "arn:aws:s3:::BUCKETNAME/*"]
    }
  ]
}
```

10. Select `Next: Tags`
11. Select `Review policy`
12. Enter a `Policy name` and select `Create policy`
13. Select `Next: Review`
14. Select `Create policy`

### ๐จโ๐ฉโ๐ง Create IAM UserGroup

1. Select `Services` and search for `IAM`
2. Select `User Groups`
3. Select `Create New Group`
4. Enter a `Group name`
5. Select Newly Created Policy name.
6. Select `Create Group`

### ๐ Create IAM User

1. Select `Services` and search for `IAM`
2. Select `Users`
3. Select `Add user`
4. Enter a `User name`
5. Select `Next: Permissions`
6. Select `Add user to group`
   a. Add the newly created group
7. Select `Next:`

### ๐ Create Access Key

1. Select `Services` and search for `IAM`
2. Select `Users`
3. Select the newly created user
4. Select `Security Credentials`
5. Select `Create Access Key`
   a. Select `Command Line Interface CLI`
   b. Accept the recommendation given
6. Click `Next`
7. Select `Create access key`
8. Copy the `Access Key ID` and `Secret Access Key`
   **NOTE**: Make sure you save this in a secure location as you will not be able to retrieve it again. And we will need it in a bit.

### ๐งโ๐ฆฐ Configure github Actions.

1. Feel free to fork this repo and use it as a template.
2. Select `Settings` and select `Security / Actions` in your repo
3. Select `New repository secret`
4. Enter `AWS_ACCESS_KEY_ID` as the name
5. Paste the `Access Key ID` as the value
6. Select `Add secret`
7. Select `New repository secret`
8. Enter `AWS_SECRET_ACCESS_KEY` as the name
9. Paste the `Secret Access Key` as the value
10. Select `Add secret`
11. Select `New repository secret`
12. Enter `AWS_REGION` as the name
13. Enter the region you created the bucket as the value
    **NOTE:** This is the region you created the bucket in. Not the region you created the user in.
    Example: `eu-west-2`
14. Select `Add secret`
15. Select `New repository secret`
16. Enter `AWS_BUCKET_NAME` as the name
17. Enter the name of the bucket you created as the value
    Example: `cupa-errors-find`

When now pushing to the main branch, the github actions will run and deploy the files to the S3 bucket.

## ๐ Deployment to Github Pages

- This step takes into account you have a Github account and have setup your credentials.

1. You can run `npm run deploy` to deploy to github pages.

## ๐ณ Deployment using Docker

I have prepared a Dockerfile to run.
This does however run in development mode.
And could be optmized with a more multi-step production enviroment build.

Decided due time to create a simple docker file.

## โ๏ธ CORS Issues

Cors issues was introduced in local development.
I have setup my own Proxy server taken from [here]("https://github.com/Rob--W/cors-anywhere")

I have my own domain and host "fairytales.dev"
Hosting this using [dokku]("https://dokku.com")

## ๐โโ๏ธ Running the project

If you want to run this project locally

1. Clone the project
2. Run `npm install / yarn install`
3. Run `npm start / yarn start`
4. Open `http://localhost:3000` in your browser
   If you are running in development mode my proxy server for CORS is set in `api.ts`
