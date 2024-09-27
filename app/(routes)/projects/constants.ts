interface project {
  title: string;
  description: string;
  image: string;
  repository: string;
  deployment: string;
  techUsed: string[];
}
export const projects: project[] = [
  {
    title: "Video player with notes",
    description: "A video player to play youtube videos with the feature to take notes.",
    image: "/videoplayerwithnotes.png",
    repository: "https://github.com/narayan-raghuwanshi/Video-Player-with-Notes",
    deployment: "https://video-player-with-notes-pi.vercel.app/",
    techUsed: [
      "Nextjs",
      "Tailwind CSS",
      "Reactjs",
      "Youtube API",
      "Javascript"
    ],
  },
  {
    title: "Managewise Replica",
    description: "Landing page replica of a SaaS company",
    image: "/managewisereplica.jpg",
    repository: "https://github.com/narayan-raghuwanshi/managewise-replica",
    deployment: "https://managewise-replica.vercel.app/",
    techUsed: ["Nextjs", "Typesrcipt", "Tailwind CSS", "Reactjs"],
  },
  {
    title: "AWS Presigned URL",
    description: "React app to upload and download objects from s3 using presigned url.",
    image: "/presignedurl.png",
    repository: "https://github.com/narayan-raghuwanshi/presigned-url-s3.git",
    deployment: "https://presigned-url-s3.vercel.app/",
    techUsed: [
      "AWS S3",
      "Nextjs",
      "Typesrcipt",
      "Tailwind CSS",
      "Reactjs",
    ],
  },
  {
    title: "Mail manager",
    description: "Automatically reply and add label to unread emails.",
    image: "/mailmanager.jpg",
    repository: "https://github.com/narayan-raghuwanshi/mail-manager",
    deployment: "",
    techUsed: ["Nodejs", "Google API", "Javascript"],
  },
  {
    title: "Ecommerce app",
    description: "Full stack ecommerce app",
    image: "/ecommerceapp.jpg",
    repository: "https://github.com/narayan-raghuwanshi/ecommerce-app",
    deployment: "",
    techUsed: [
      "Nodejs",
      "AWS EC2",
      "CI/CD",
      "Typesrcipt",
      "Material UI",
      "Reactjs",
      "MongoDB",
    ],
  },
  {
    title: "Redesign Andromeda",
    description: "Redesign Andromeda Surgical Website",
    image: "/andromeda.jpg",
    repository: "https://github.com/narayan-raghuwanshi/andromeda",
    deployment: "https://andromeda-narayan-raghuwanshi.vercel.app/",
    techUsed: ["Nextjs", "Typesrcipt", "Emailjs", "Tailwind CSS", "Reactjs"],
  },
  {
    title: "Admin Dashboard",
    description: "Admin dashboard to manage users",
    image: "/admindashboard.jpg",
    repository: "https://github.com/narayan-raghuwanshi/admin-dashboard",
    deployment: "https://admin-dashboard-narayan-raghuwanshi.vercel.app/",
    techUsed: ["Nextjs", "Typesrcipt", "Tailwind CSS", "Reactjs"],
  },
];
