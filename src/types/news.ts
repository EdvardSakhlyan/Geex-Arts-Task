interface Comment {
  avatar: string;
  name: string;
  text: string;
  time: string;
}

export default interface INew {
  date: string;
  title: string;
  description: string;
  images?: string[];
  videoUrl?: string;
  views: number;
  comments: Comment[] | null;
}
