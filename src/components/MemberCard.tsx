import type { Member } from "@/data/roster";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

interface MemberCardProps {
  member: Member;
  accent: string;
}

export default function MemberCard({ member, accent }: MemberCardProps) {
  return (
    <div
      className="member-card"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="member-avatar-wrap">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={`${member.name}'s avatar`}
            className="member-avatar"
          />
        ) : (
          <div className="member-avatar member-avatar-initials">
            {getInitials(member.name)}
          </div>
        )}
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-bio">{member.bio}</p>
      </div>
    </div>
  );
}
