import axios from "axios";

export async function addBookmarkAPI({ websiteUrl, tags, comments }) {
  const data = {
    linkname: websiteUrl,
    tags,
    comment: comments,
  };

  try {
    console.log("trying to add bookmark", data);
    const result = await axios.post("/api/links", data);
    console.log("result", result);
    if (result.data.success) {
      return true;
    }
    console.log("failed to add bookmark", result.data.error);
    return false;
  } catch (error) {
    console.log("failed to add bookmark", error);
  }
}

export async function getLinks() {
  try {
    const { data } = await axios.get("/api/links");
    return data.links;
  } catch (error) {
    throw error;
  }
}

export async function incrementClickCount(link) {
  try {
    const { data } = await axios.put(`/api/links/${link.id}/visit`);
    return data.link;
  } catch (error) {
    throw error;
  }
}