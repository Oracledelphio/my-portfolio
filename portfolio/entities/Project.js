// Project entity matching the schema
export class Project {
  constructor({
    id,
    title,
    tagline,
    description,
    tech_stack,
    github_url,
    demo_url,
    image_url,
    category,
  }) {
    this.id = id || Math.random().toString(36).substr(2, 9);
    this.title = title;
    this.tagline = tagline;
    this.description = description;
    this.tech_stack = tech_stack;
    this.github_url = github_url;
    this.demo_url = demo_url;
    this.image_url = image_url;
    this.category = category;
  }

  // Static method to return sample projects
  static async list() {
    // Replace with real data source or API call as needed
    return [
      new Project({
        title: "AI Portfolio Website",
        tagline: "Showcase your AI/ML projects",
        description: "A modern portfolio to display AI/ML work.",
        tech_stack: ["Next.js", "React", "TailwindCSS"],
        github_url: "https://github.com/example/ai-portfolio",
        demo_url: "https://ai-portfolio.example.com",
        image_url: "https://via.placeholder.com/300x200",
        category: "AI/ML",
      }),
    ];
  }
}
