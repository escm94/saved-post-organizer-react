const projects = [
  {
    name: "AskReddit",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "CSCareerQuestions",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "DankChristianMemes",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Soccer",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "Cooking",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "EatCheapAndHealthy",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Programming",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "CoolGuides",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
  {
    name: "WallStreetBets",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Politics",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "CatastrophicFailure",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "Space",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Folders = (props) => {
  return (
    <div>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div className="flex flex-1 items-center justify-between truncate rounded-md border border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Posts</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folders;
