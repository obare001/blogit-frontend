import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { blogServices } from "../../services/blogServices/blogs";
import { toast } from "sonner";
import type { BlogProps } from "./types";
import { useNavigate } from "react-router-dom";

export function AddBlog() {
  const [formData, setFormData] = useState<any>({
    title: "",
    synopsis: "",
    content: "",
    featuredImageUrl: "",
  });

  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const { mutate, isPending } = useMutation({
    mutationFn: (data: BlogProps) => blogServices.createBlog(data),
    onSuccess: (data) => {
      if (data?.error || data?.message?.includes("error")) {
        toast.error(data?.error || data?.message || data?.statusText);
      } else {
        toast.success("Blog created successfully");
        queryClient.invalidateQueries({ queryKey: ["blogs"] });
        setFormData({ title: "", synopsis: "", content: "", featuredImage: "" });
        navigate("/");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to create blog");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div className="container m-auto">
      <h2 className="font-medium text-2xl text-primary pb-3">Create New Blog</h2>
      <Card className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter blog title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="synopsis">Synopsis *</Label>
              <Textarea
                id="synopsis"
                name="synopsis"
                placeholder="Short summary"
                value={formData.synopsis}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                name="featuredImage"
                type="text"
                placeholder="Enter image URL"
                value={formData.featuredImageUrl}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog content..."
                className="min-h-[150px]"
                value={formData.content}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating..." : "Create Blog"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
