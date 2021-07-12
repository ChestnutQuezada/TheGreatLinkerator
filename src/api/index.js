import axios from 'axios';

export async function getSomething() {
  try {
    const { data } = await axios.get('/api');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getLinks() {
  try {
    const { data } = await axios.get(`/api/links`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function  getLinkById(linkId) {
  try {
    const { data } = await axios.get(`/api/links/${linkId}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createLink({ link, comment, tags }) {
  try {
    const { data } = await axios.post("/api/links", {
      link,
      clickCount: 0,
      comment,
      date: new Date(),
      tags
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createTag(tagName) {
  try {
    const { data } = await axios.post("/api/tags", { name: tagName });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getTags() {
  try {
    const { data } = await axios.get("/api/tags");
    return data;
  } catch (error) {
    throw error;
  }
  
}