"use server";

import fs from "fs";
import path from "path";

import { Stay } from "@/components/main/stays/stay-card";

const staysJsonPath = path.join(process.cwd(), "public/data/stays.json");

/**
 * Adds a stay to database.
 * @param stay - The stay object.
 */
export default async function addStay(stay: Stay) {
  // Read the current stays from the json file.
  const stays = JSON.parse(fs.readFileSync(staysJsonPath, "utf-8"));

  // Find the maximum id in the list of stays.
  const maxid = Math.max.apply(
    Math,
    stays.map((stay: Stay) => {
      return stay.id;
    }),
  );

  // Set the id of the new stay.
  stay.id = maxid + 1;

  // save image to public/data/images
  const image = stay.image;
  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Data, "base64");
  const imagePath = path.join("public/data/images");
  const imageName = `${stay.id}.jpg`;
  fs.writeFileSync(`${imagePath}/${imageName}`, imageBuffer);

  // Create the images directory if it doesn't exist.
  if (!fs.existsSync(imagePath)) {
    fs.mkdirSync(imagePath, { recursive: true });
  }

  fs.writeFileSync(path.join(imagePath, imageName), imageBuffer);

  // Update the image path of the stay.
  stay.image = `/data/images/${imageName}`;

  // Add the new stay to the list of stays.
  stays.push(stay);

  // Write the updated stays to the json file.
  fs.writeFileSync(staysJsonPath, JSON.stringify(stays, null, 2));
}
