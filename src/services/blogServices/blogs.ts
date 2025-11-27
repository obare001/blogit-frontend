export const blogServices = {
  getAllBlogs: async () => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch("http://localhost:3000/blogs/get-all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },

  createBlog: async (blogData: any) => {
    console.log("Creating blog with data on service:", blogData);

    const token = localStorage.getItem("auth_token");
    const response = await fetch("http://localhost:3000/blogs/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // must set for JSON
      },
      body: JSON.stringify(blogData),
    });

    const data = await response.json();
    console.log("Create blog response:", data);
    return data;
  },

  updateBlog : async (blogId: string, blogData: any) => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(`http://localhost:3000/blogs/update/${blogId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });
    return response.json();
  },

  deleteBlog: async (blogId: string) => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(`http://localhost:3000/blogs/delete/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  },

  getBlogById: async (blogId: string| null | undefined) => {
    const token = localStorage.getItem("auth_token");
    const response = await fetch(`http://localhost:3000/blogs/${blogId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  }

};
