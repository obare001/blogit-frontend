import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

function UserProfile() {
  // HARD-CODED USER DATA
  const user = {
    id: "123",
    firstName: "Babra",
    lastName: "Obare",
    username: "babra_obare",
    emailAddress: "babra@example.com",
    dateJoined: "2024-03-10T00:00:00.000Z",
    profileImage: "/default-avatar.png",
  };

  // HARD-CODED BLOGS
  const blogs = [
    {
      id: "1",
      title: "How to Learn React the Smart Way",
      synopsis:
        "A simple step-by-step guide for beginners who want to master React quickly.",
      featuredImageUrl: "/react-cover.jpg",
    },
    {
      id: "2",
      title: "Why Football Is the Most Loved Sport",
      synopsis:
        "An analysis on why fans across the world are obsessed with the beautiful game.",
      featuredImageUrl: "/sports.jpg",
    },
    {
      id: "3",
      title: "Mastering Tailwind CSS in 2 Weeks",
      synopsis:
        "Learn how to build modern, responsive UIs with Tailwind CSS efficiently.",
      featuredImageUrl: "/tailwind.jpg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4">

      {/* USER HEADER */}
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        
        {/* Profile Avatar */}
        <img
          src={user.profileImage}
          className="w-32 h-32 object-cover rounded-full shadow-md"
        />

        {/* User Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="text-gray-500 mt-1">@{user.username}</p>
          <p className="text-gray-500 text-sm">{user.emailAddress}</p>

          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge variant="secondary">Member</Badge>
            <Badge variant="outline">
              Joined: {new Date(user.dateJoined).toLocaleDateString()}
            </Badge>
          </div>

          <div className="mt-4 flex gap-4">
            <Button>Edit Profile</Button>
            <Button variant="outline">Account Settings</Button>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-semibold mb-3">About</h3>
        <p className="text-gray-600 leading-relaxed">
          Babra Obare is a passionate writer who loves web development, technology,
          and creative storytelling.
        </p>
      </div>

      {/* BLOGS */}
      <div className="bg-white shadow-md rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Blogs by {user.firstName}</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="border rounded-xl p-4 hover:shadow-md transition"
            >
              <img
                src={blog.featuredImageUrl}
                className="w-full h-40 object-cover rounded-lg"
              />

              <h4 className="text-lg font-semibold mt-3">{blog.title}</h4>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {blog.synopsis}
              </p>

              <Button className="mt-3 w-full">Read More</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
