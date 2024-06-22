"use server";

import fs from "fs";
import path from "path";

import { Stays } from "@/components/main/stays/stays-list";

/**
 * Get all stays from database.
 * @param stay - The stay object.
 */
export default async function getStays() {
  // Read the current stays from the json file.
  const stays: Stays = JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "public", "data", "stays.json"),
      "utf-8",
    ),
  );

  return stays;
}
