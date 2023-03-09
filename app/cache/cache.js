import fs from "fs";
import { cachedPostData } from "@lib/utils";

const blogContent = await cachedPostData("blog");

function createBlogCache(filename) {
  fs.writeFile(`./cache/${filename}.js`, blogContent, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Blog cache file written");
  });
}

createBlogCache("blog");
