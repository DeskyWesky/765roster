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
      { name: "deskk", bio: "mothership goat and backend skid" },
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
