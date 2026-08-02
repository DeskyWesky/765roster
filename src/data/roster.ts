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
      { name: "N/A", bio: "N/A", avatar: "" },
    ],
  },
    {
    id: "nibbers",
    label: "NIBBERS",
    accent: "#8B0000",
    members: [
      { name: "BigboiTheBiggest", bio: "Your common opsec demon 😈 ", avatar: "https://cdn.discordapp.com/avatars/1384781399252402317/a4a83084cce159896d31aef419ec73e1.webp?size=1024" },
    ],
  },
  {
    id: "admins",
    label: "Admins",
    accent: "#8B7CFF",
    members: [
      { name: "vohjer", bio: "skidder and ai vibecoder", avatar: "https://cdn.discordapp.com/avatars/1382812173608419398/4284901d662656d93f63178e7ec857b8.webp?size=3072" },
    ],
  },
  {
    id: "larps",
    label: "Larps",
    accent: "#4EE1C2",
    members: [
      { name: "N/A", bio: "N/A", avatar: "" },
    ],
  },
];
