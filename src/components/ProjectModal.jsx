import { IoClose, IoGlobeOutline, IoLogoGithub } from "react-icons/io5";

function ProjectModal({ project, isOpen, onClose, onVisit }) {
  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-zinc-900 p-6 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            {project.isPrivate && (
              <div className="mt-2 flex items-center gap-2">
                <span className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
                  Private Project
                </span>
                {project.note && (
                  <span className="text-gray-400 text-sm">
                    ({project.note})
                  </span>
                )}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="relative w-full h-[300px] mb-4">
          <img
            src={project.imagePath}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="mb-4">
          <h3 className="text-white font-medium mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white"
          >
            Close
          </button>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700"
          >
            View Code
          </a>
          <button
            onClick={() => onVisit(project.liveLink)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {project.isPrivate ? "Visit Demo Site" : "Visit Site"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal; 