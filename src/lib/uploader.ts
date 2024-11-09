'use server'

import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from '~/env';

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
      accessKeyId: env.ACCESS_KEY_ID,
      secretAccessKey: env.SECRET_ACCESS_KEY,
    },
});


export default async function uploadPDF(bucketName: string, formData: FormData, key: string) {
    try {
      const file = formData.get('file') as File | null;
      if(!file) return JSON.stringify({ success: false, error: 'File not provide' });
      console.log(file.name);
      // Ensure the file is a PDF
      if (file.name.toLowerCase().split('.')[file.name.toLowerCase().split('.').length-1] !== "pdf") {
        throw new Error("Only PDF files are allowed");
      }

      const buffer = Buffer.from(await file.arrayBuffer());
  
      // Configure the upload parameters
      const uploadParams = {
        Bucket: bucketName,
        Key: key,
        Body: buffer,
        ContentType: "application/pdf",
      };
  
      // Upload the file
      const data = await s3Client.send(new PutObjectCommand(uploadParams));

      // const getCommand = new GetObjectCommand({
      //   Bucket: bucketName,
      //   Key: key,
      // });
      // const signedUrl: string = await getSignedUrl(s3Client, getCommand, { expiresIn: 0000000 });

      console.log("Upload successful: ", data);

      return JSON.stringify({ success: true, message: 'File upload to object store', url: key });
    } catch (error) {
      console.error("Error uploading PDF:", error);
      return JSON.stringify({ success: false, error: error });
    }
}