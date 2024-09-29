import { Buffer } from "buffer";
import { connectDb } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import blogModel from "@/lib/models/blogModel";

const { NextResponse } = require("next/server");

const loadDb = async () => {
  await connectDb();
};

loadDb();

export async function GET(request) {
  return NextResponse.json({ msg: "api working" });
}

export async function POST(request) {
  const formData = await request.formData();
  const timeStamp = Date.now();

  const image = formData.get("image");
  // const imageByteData = await image.arrayBuffer();
  // const buffer = Buffer.from(imageByteData);
  // const path = `./public/${timeStamp}_${image.name}`;
  // await writeFile(path, buffer);
  // const imageUrl = `/${timeStamp}_${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await blogModel.create(blogData);
  console.log("blog saved");
  return NextResponse.json({ success: true, msg: "blog added" });
}
