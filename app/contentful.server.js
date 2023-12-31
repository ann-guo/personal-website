const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;

async function apiCall(query, variables) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  }
  return await fetch(fetchUrl, options)
}

async function getAllBlogs() {
  const query = `
    {
        blogCollection {
          items {
            title
            slug
            description
            coverImage {
              url
              description
            }
          }
        }
      }
    `
  const response = await apiCall(query);
  const result = await response.json();
  return await result.data.blogCollection.items
}

async function getAbout() {
  const query = `
    {
        aboutCollection {
          items {
            longDescription
            gitHubLink
            linkedLink
            image {
              url
              description
            }
          }
        }
      }
    `
  const response = await apiCall(query);
  const result = await response.json();
  return await result.data.aboutCollection.items[0]
}

async function getSingleBlogBySlug(slug) {
  const query = `
    query($slug: String){
        blogCollection(where: {slug: $slug}) {
          items {
            title
            description
            content {
                json
            }
            coverImage {
              url
              description
            }
          }
        }
      }
    `
  const variables = {
    slug: slug
  };
  const response = await apiCall(query, variables);
  const result = await response.json();
  console.log("result"+result)
  return await result.data.blogCollection.items[0]
}

export { getAllBlogs, getAbout, getSingleBlogBySlug }