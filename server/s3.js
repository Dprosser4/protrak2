
const util = require('util');
const crypto = require('crypto');
const { S3 } = require('aws-sdk');

require('dotenv/config');
const randomBytes = util.promisify(crypto.randomBytes);

const region = 'us-west-1';
const bucketName = 'protrak2-images';
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});

module.exports.generateUploadURL = async function () {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString('hex');

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  });

  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
};
