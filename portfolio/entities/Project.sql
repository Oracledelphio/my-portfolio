{
  "name": "Project",
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Project title"
    },
    "tagline": {
      "type": "string",
      "description": "Short impactful one-liner"
    },
    "description": {
      "type": "string",
      "description": "Detailed project description"
    },
    "tech_stack": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Technologies used"
    },
    "github_url": {
      "type": "string",
      "description": "GitHub repository URL"
    },
    "demo_url": {
      "type": "string",
      "description": "Live demo URL"
    },
    "image_url": {
      "type": "string",
      "description": "Project screenshot or image"
    },
    "category": {
      "type": "string",
      "enum": ["AI/ML", "Full-Stack", "Mobile", "Research"],
      "description": "Project category"
    }
  },
  "required": ["title", "tagline", "tech_stack"]
}
