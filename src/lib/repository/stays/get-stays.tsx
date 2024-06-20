"use server";

import fs from "fs";

import { Stay } from "@/components/main/stays/stay-card";
import { Stays } from "@/components/main/stays/stays-list";

/**
 * Get all stays from database.
 * @param stay - The stay object.
 */
export default async function getStays() {
  // Read the current stays from the json file.
  const stays: Stays = JSON.parse(
    fs.readFileSync("public/data/stays.json", "utf-8"),
  );

  return stays;
}
