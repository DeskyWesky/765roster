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
    accent: "#4169E1",
    members: [
      { name: "deskk", bio: "advanced mothership goat and backend skid", avatar: "https://cdn.discordapp.com/avatars/1362020383846432931/9a5c4c23d06539d3aaf7c8b7708453c3.webp?size=3072" },
      { name: "N/A", bio: "N/A" },
    ],
  },
  {
    id: "co-owners",
    label: "Co Owners",
    accent: "#964B00",
    members: [
      { name: "policyterms", bio: "obsessed with femboys and goated skid | will harm you and your e girl", avatar: "https://cdn.discordapp.com/avatars/1413850215718326353/3765f2571eaff0d8532ec9f2601e52ed.webp?size=1024" },
      { name: "mez", bio: "pip install opsec 😈", avatar: "https://cdn.discordapp.com/avatars/1509951430528598108/6845b20d16cdd1513939c9b3be5cd1c3.webp?size=1024" },
    ],
  },
    {
    id: "nibbers",
    label: "NIBBERS",
    accent: "#8B0000",
    members: [
      { name: "BigboiTheBiggest", bio: "Your common opsec demon 😈 ", avatar: "https://cdn.discordapp.com/avatars/1384781399252402317/a4a83084cce159896d31aef419ec73e1.webp?size=1024" },
      { name: "Cloudy", bio: "Your Main harm comboss guy don’t mess with me 😈", avatar: "https://cdn.discordapp.com/avatars/1106344507458469938/39b32e79e875fbe5207c3eada3fb84de.webp?size=1024" },
    ],
  },
  {
    id: "admins",
    label: "Admins",
    accent: "#FF8C00",
    members: [
      { name: "vohjer", bio: "skidder and ai vibecoder", avatar: "https://cdn.discordapp.com/avatars/1382812173608419398/4284901d662656d93f63178e7ec857b8.webp?size=3072" },
    ],
  },
  {
    id: "larps",
    label: "Larps",
    accent: "#D2B48C",
    members: [
      { name: "Oreo", bio: "i am big com larp boss 😡", avatar: "https://cdn.discordapp.com/avatars/931703946341400620/9cd37676af9332738dd96dcb3578aaba.webp?size=1024" },
      { name: "Exe.Kdot", bio: "gtag cumboss don’t mess with me", avatar: "https://cdn.discordapp.com/avatars/1526682528424005846/a_3fd1d0c604e8d46b5f52c27c115366ed.webp?size=1024&animated=true" },
    ],
  },
    {
    id: "skids",
    label: "Skidders",
    accent: "#7A5901",
    members: [
      { name: "Quinn", bio: "skidder and uses ai for everything 💩", avatar: "https://cdn.discordapp.com/avatars/1525544874919854098/8198e4184c230219afa239492dd9f686.webp?size=1024" },
      { name: "/bigpluh", bio: "i am a gay neegy pls  boi asokok; for 765 cuz i am cumbuss 🤑", avatar: "https://cdn.discordapp.com/avatars/1153777050818195557/970dd32b0be3dfc9c6a86795abb2b619.webp?size=1024" },
    ],
  },
];
