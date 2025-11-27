export interface BlogProps {
    id: string;
    title: string;
    synopsis: string;
    content: string;    
    featuredImageUrl: string;
    createdAt: string;
    author: {
        firstName: string;
        lastName: string;
    }
}
