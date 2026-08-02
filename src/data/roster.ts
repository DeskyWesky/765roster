export interface Member {
  name: string;
  bio: string;
  avatar?: string;
}

export interface Category {
  id: string;
  label: string;
  accent: string;
  members: Member[];
}

export const roster: Category[] = [
  {
    id: "founders",
    label: "Founders",
    accent: "#4CC3FF",
    members: [
      { name: "deskk", bio: "advanced mothership goat and backend skid", avatar: "https://cdn.discordapp.com/avatars/1362020383846432931/9a5c4c23d06539d3aaf7c8b7708453c3.webp?size=3072" },
      { name: "N/A", bio: "N/A" },
    ],
  },
  {
    id: "co-owners",
    label: "Co Owners",
    accent: "#6C7CFF",
    members: [
      { name: "N/A", bio: "N/A" },
    ],
  },
  {
    id: "admins",
    label: "Admins",
    accent: "#8B7CFF",
    members: [
      { name: "N/A", bio: "N/A" },
    ],
  },
  {
    id: "larps",
    label: "Larps",
    accent: "#4EE1C2",
    members: [
      { name: "N/A", bio: "N/A" },
    ],
  },
];
