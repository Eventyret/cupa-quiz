# Cupa / Errors find

## Optimizations

## Error Handling

## What could be done better

## Scale

## Deployment AWS S3 Bucket (With Github Actions)

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

### Setup IAM Policy & User for Github Actions

#### Creating a IAM Policy

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

### Create IAM UserGroup

1. Select `Services` and search for `IAM`
2. Select `User Groups`
3. Select `Create New Group`
4. Enter a `Group name`
5. Select Newly Created Policy name.
6. Select `Create Group`

### Create IAM User

1. Select `Services` and search for `IAM`
2. Select `Users`
3. Select `Add user`
4. Enter a `User name`
5. Select `Next: Permissions`
6. Select `Add user to group`
   a. Add the newly created group
7. Select `Next:`

### Create Access Key

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

### Configure github Actions.

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

## Deployment to Github Pages

## Deployment using Docker

## CORS Issues

Cors issues was introduced in local development.
I have setup my own Proxy server taken from [here]("https://github.com/Rob--W/cors-anywhere")

I have my own domain and host "fairytales.dev"
Hosting this using [dokku]("https://dokku.com")
