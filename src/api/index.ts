import { auth } from "@/firebase/config";
import { getIdToken } from "firebase/auth";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

async function Get(endpoint: string) {
  const user = auth.currentUser;
  const token = user ? await getIdToken(user) : "";

  const res = await fetch(`${baseUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      client: "betweysure",
      api_key: "betweysure_f3ae3547d1374eaacaf345",
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  return res.json();
}

async function Delete(endpoint: string) {
  const user = auth.currentUser;
  if (!user) return;
  const token = await getIdToken(user);
  const res = await fetch(`${baseUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      client: "betweysure",
      api_key: "betweysure_f3ae3547d1374eaacaf345",
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });
  return res.json();
}

async function Post(endpoint: string, payload: any) {
  const user = auth.currentUser;
  const token = user ? await getIdToken(user) : "";

  const res = await fetch(`${baseUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      client: "betweysure",
      api_key: "betweysure_f3ae3547d1374eaacaf345",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    method: "POST",
  });
  return res.json();
}

async function Patch(endpoint: string, payload: any) {
  const user = auth.currentUser;
  if (!user) return;
  const token = await getIdToken(user);

  const res = await fetch(`${baseUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      client: "betweysure",
      api_key: "betweysure_f3ae3547d1374eaacaf345",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
    method: "PATCH",
  });
  return res.json();
}

const HTTPRequest = {
  Get,
  Post,
  Patch,
  Delete,
};

export { HTTPRequest };

const query = `
query NewQuery {
  posts {
    nodes {
      id
      content
      featuredImage {
        node {
          id
          sourceUrl
          uri
        }
      }
      uri
      title
    }
  }
}
`;

const endpoint = "https://blog.betweysure.com/graphql";
export const fetchPosts = async () => {
  try {
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }).then((res) => res.json());
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};
