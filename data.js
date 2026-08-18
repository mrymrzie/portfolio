// ─────────────────────────────────────────────────────────────────
//  SKILLS
//  Columns: category | sub_group (optional) | skill
// ─────────────────────────────────────────────────────────────────
// tagline appears once per category (set it on any one row in that category)
const SKILLS = [
  { category: 'Research',  tagline: 'understanding a problem space', sub_group: 'Data collection', skill: 'Semi-structured interviews'      },
  { category: 'Research',  tagline: '',                             sub_group: 'Data collection',  skill: 'Think-aloud protocols'            },
  { category: 'Research',  tagline: 'understanding a problem space', sub_group: 'Data collection', skill: 'In-the-wild sampling'      },
    { category: 'Research',  tagline: '',                             sub_group: 'Contextual inquiry', skill: 'Interaction logs'               },
  { category: 'Research',  tagline: '',                             sub_group: 'Contextual inquiry', skill: 'Observational coding'           },
  { category: 'Research',  tagline: '',                             sub_group: 'Contextual inquiry', skill: 'Video/screen analysis'          },
  { category: 'Research',  tagline: '',                             sub_group: 'Synthesis',       skill: 'Thematic analysis'               },
  { category: 'Research',  tagline: '',                             sub_group: 'Synthesis',       skill: 'Affinity diagramming'            },
  { category: 'Research',  tagline: '',                             sub_group: 'Synthesis',       skill: 'Literature review'               },
  { category: 'Design',         tagline: 'shaping interactions & visuals',           sub_group: 'Interaction design',   skill: 'Wireframing'                                     },
  { category: 'Design',         tagline: '',                                          sub_group: 'Interaction design',   skill: 'Prototyping'                                     },
  { category: 'Design',         tagline: '',                                          sub_group: 'Interaction design',   skill: 'Storyboarding'                                   },
  { category: 'Design',         tagline: '',                                          sub_group: 'Visualization design', skill: 'Visual encoding'                                 },
  { category: 'Design',         tagline: '',                                          sub_group: 'Visualization design', skill: 'Dashboard/interface layout'                      },
  { category: 'Design',         tagline: '',                                          sub_group: 'Visualization design', skill: 'Narrative'                                       },
  { category: 'Design',         tagline: '',                                          sub_group: 'Visualization design', skill: 'Legend and onboarding'                           },
  { category: 'Analyze & Build', tagline: 'making sense of data and building systems', sub_group: 'Interface prototype', skill: 'JS'                                              },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Interface prototype',  skill: 'D3.js'                                           },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Interface prototype',  skill: 'Observable'                                      },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Data analysis',        skill: 'Python (Pandas, NumPy, Matplotlib, Seaborn)'    },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Data analysis',        skill: 'SQL'                                             },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'ML',                   skill: 'OpenCV'                                          },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'ML',                   skill: 'Roboflow'                                       },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'ML',                   skill: 'CLIP'                                            },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'ML',                   skill: 'RAG'                                             },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Generative AI',        skill: 'AI image generation (for data viz)'              },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Generative AI',        skill: 'Python scripting'                                 },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Programming languages', skill: 'C#'                                            },
  { category: 'Analyze & Build', tagline: '',                                         sub_group: 'Programming languages', skill: 'Java'                                          },
  { category: 'Evaluate',  tagline: 'assessing how well a design works', sub_group: 'Qualitative evaluation', skill: 'Post-task interviews'                                      },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Qualitative evaluation', skill: 'Session observation'                                        },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Rigorous user studies', skill: 'Controlled experiments (between/within subjects)'           },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Rigorous user studies', skill: 'Usability testing'                                          },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Rigorous user studies', skill: 'Wizard of Oz'                                               },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Measurement',           skill: 'Task performance metrics (error, task completion time)'    },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Measurement',           skill: 'Standardized scales (SUS, Likert, ASQ)'                    },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Behavioral analysis',   skill: 'Interaction log analysis'                                   },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Behavioral analysis',   skill: 'Eye tracking'                                               },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'Behavioral analysis',   skill: 'A/B testing'                                                },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'AI-specific',           skill: 'Trust measurement'                                          },
  { category: 'Evaluate',  tagline: '',                                  sub_group: 'AI-specific',           skill: 'Decision making'                                            },
];

// ─────────────────────────────────────────────────────────────────
//  PROJECT STORY BLOCKS (Medium-style article inside the click modal)
//  Edit each project's `story` array. Supported types:
//    { type: 'paragraph', text: '...' }
//    { type: 'heading',   text: '...' }
//    { type: 'quote',     text: '...' }
//    { type: 'image',     src: 'your-image.jpg', caption: '...', alt: '...' }
//      Leave src empty ('') to show a gray placeholder box.
//    { type: 'link', text: 'lead-in text ', linkText: 'clickable words', href: 'https://...', after: '.' }
//      text/after are optional; opens in a new tab.
// ─────────────────────────────────────────────────────────────────
function placeholderStory(title) {
  return [
    {
      type: 'paragraph',
      text: 'This is placeholder copy for “' + title + '”. Replace these story blocks in data.js with your real write-up — problem, process, outcomes, and images.',
    },
    {
      type: 'heading',
      text: 'The problem',
    },
    {
      type: 'paragraph',
      text: 'Describe the user problem or research gap here. Keep it concrete: who struggled, what broke down, and why existing tools or models fell short.',
    },
    {
      type: 'image',
      src: '',
      caption: 'Placeholder image — add a path like "images/project-1.jpg" in the src field',
      alt: 'Placeholder for project figure',
    },
    {
      type: 'heading',
      text: 'What I did',
    },
    {
      type: 'paragraph',
      text: 'Walk through research, design, building, and evaluation. Mention methods, prototypes, and collaborators where it helps the story.',
    },
    {
      type: 'image',
      src: '',
      caption: 'Another placeholder — interface screenshot, study setup, or diagram',
      alt: 'Placeholder for process figure',
    },
    {
      type: 'quote',
      text: 'Optional pull-quote: a finding, user comment, or one-line takeaway you want readers to remember.',
    },
    {
      type: 'heading',
      text: 'What I learned',
    },
    {
      type: 'paragraph',
      text: 'Close with outcomes, limitations, and what you’d do next. Recruiters skim this section — keep it sharp.',
    },
  ];
}

// ─────────────────────────────────────────────────────────────────
//  PROJECTS
//  meta: location / org / year shown on the card
//  url: optional live link — makes the project title a hyperlink
//  skills: comma-separated skill categories
//  highlight_skills: exact skill names from SKILLS to bold on hover
//  story: Medium-style blocks for the click-to-open article modal
// ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    name:        'Make AI Understand Spatial Thinking',
    category:    'Human AI Interaction',
    description: 'Humans structure ideas in creative, unpredictable ways on boards. AI handles OCR and simple layouts but misses richer spatial meanings. This project teaches AI to read organization patterns from in-the-wild samples, unlocking truer digitization of physical ideation.',
    status:      'In progress',
    meta:        'SFU, 2024–2026',
    skills:      'Research, Analyze & Build',
    highlight_skills: [
      'In-the-wild sampling',
      'Thematic analysis',
      'Affinity diagramming',
      'Literature review',
      'OpenCV',
      'Roboflow',
      'CLIP',
    ],
    img_color:   '#c8d4e0',
    story: [
      { type: 'paragraph', text: 'People think spatially, they communicate through spatial structures that they make. Think about the last time you used a physical or digital board to brainstorm or organize your ideas. How did you arrange them? in clusters? in a tabular arrangement?'},
 { type: 'paragraph', text: 'But what happens when that board is digitized? does the machine understand and keep those structures for you for future reference or as you make progress? ' },

      { type: 'heading', text: 'The problem' },
{
    type: 'paragraph',
    text: 'Most board-digitization systems focus on recognizing individual objects and their content: detecting sticky notes, extracting handwritten text, and recording coordinates. These capabilities are useful, but they capture only part of the meaning that is being communicated. The creative structures people create get flattened or lost'
  },
      
      { type: 'image', src: 'images/spatialexample.png', caption: 'Examples from the in-the-wild dataset of more than 300 physical boards', alt: 'Whiteboard with clustered sticky notes' },

      { type: 'heading', text: 'What I did' },
 {
    type: 'heading',
    text: 'Studying how people organize space'
  },
  {
    type: 'paragraph',
    text: 'Before attempting to automate interpretation, I needed to understand what people actually create. With my collaborators, I collected more than 300 publicly available images of real-world sticky-note boards from sources such as Flickr, Pinterest, Medium, and Twitter/X. Unlike clean, researcher-designed examples, these boards were messy, incomplete, and highly varied. That was precisely what made them valuable: they revealed how people use space when they are not constrained by a predefined template.'},
  
    {
    type: 'paragraph',
    text: 'Through qualitative visual analysis, we identified recurring structures such as grids, clusters, hierarchies, and combinations of multiple patterns. People also used color, note size, distance, alignment, arrows, layering, and nesting to express relationships.'
  },
     
      { type: 'image', src: 'images/spatialtechniques.png', caption: 'Spatial organization patterns and visual techniques', alt: 'pattern and technique diagram' },
{ type: 'link', text: 'You can read more about this findings ', linkText: 'in this paper', href: 'https://dl.acm.org/doi/pdf/10.1145/3773068', after: '.' },
{
  type: 'heading',
  text: 'Teaching a vision-language model to recognize spatial patterns'
},
{
  type: 'paragraph',
  text: 'As a first step, I tested whether a vision-language model could recognize the overall organization of a board. CLIP initially performed close to random guessing when classifying boards as clustered, grid-based, or hierarchical. After fine-tuning it on my annotated dataset, I improved its classification accuracy to 78%.'
},
{
  type: 'paragraph',
  text: 'Recognizing the overall pattern is only the beginning. To interpret membership relationships, the system must first locate every sticky note on the board. I used Roboflow to automatically label sticky notes and prepare the annotations needed to train an object-detection model.'
},
{
  type: 'paragraph',
  text: 'The pipeline I envision will combine these two levels of understanding: object detection will identify the position of each note, while spatial analysis will determine which notes belong to the same cluster, row, level, or hierarchy. The eventual goal is to reconstruct a board as an editable digital structure that preserves both its content and the relationships expressed through its layout.'
},      

      { type: 'heading', text: 'What I learned' },
      {
  type: 'paragraph',
  text: 'My experiments revealed a gap between object detection and structural understanding. The model was effective at detecting clearly defined objects such as sticky notes, but struggled with diagrammatic annotations such as arrows, connecting lines, and curves.'
},
{
  type: 'quote',
  text: 'I continue to ask and investigate how far AI can go in understanding and preserving the creativity embedded in human spatial thinking.'
},
      
    ],
  },
  {
    name:        'Uncertainty in AI Generated Output',
    category:    'Human AI Interaction',
    description: 'AI-generated outputs carry uncertainty and that affects how people decide. This project explores how to surface uncertainty in ways that genuinely inform hard, multi-factor decisions. I led this project, from finding an underexplored angle, to designing, building, and evaluating the uncetainty communication interface.',
    status:      'In progress',
    meta:        'Autodesk, 2025',
    skills:      'Research, Design, Analyze & Build, Evaluate',
    highlight_skills: [
      'Literature review',
      'Prototyping',
      'Visual encoding',
      'Dashboard/interface layout',
      'Narrative',
      'Legend and onboarding',
      'JS',
      'D3.js',
      'SQL',
      'Post-task interviews',
      'Session observation',
      'Usability testing',
      'Standardized scales (SUS, Likert, ASQ)',
      'Trust measurement',
      'Decision making',
    ],
    img_color:   '#d4c8e0',
story: [
  {
    type: 'paragraph',
    text: 'AI workflows can recommend materials to designers, but those recommendations carry uncertainty at different levels. Material selection is already a complex, multi-factor decision; uncertainty makes evaluating the available trade-offs even more difficult.'
  },
{
    type: 'heading',
    text: 'What I Did'
  },

  {
    type: 'heading',
    text: 'Finding the right problem'
  },
  {
    type: 'paragraph',
    text: 'At Autodesk, I worked with a multidisciplinary team that included material scientists, developers, and machine-learning engineers. Through analyzing existing reports, prototypes and ongoing conversations of team members, I identified a specific dimension of uncertainty that remained underexplored in human–computer interaction.'
  },

  {
    type: 'heading',
    text: 'Turning the question into a tool'
  },
  {
    type: 'paragraph',
    text: 'I translated that gap into a practical design problem and built an interactive analytical tool around it. The interface helped users examine AI-generated recommendations, understand the uncertainty surrounding them, compare competing factors, and make better-informed decisions. I ran mixed-method studies with 100 Autodesk customers to tease apart the problem and evaluate my proposed tool.'
  },

  {
    type: 'heading',
    text: 'What this project brought together'
  },
  {
    type: 'paragraph',
    text: 'This project combined problem framing, human–AI interaction, visualization design, full-stack prototyping, and user evaluation. Because the work is confidential, I cannot share the interface or the specific uncertainty dimension, but I can share the process I used to turn an ambiguous AI challenge into an evaluated decision-support tool.'
  }
]
  },
  {
    name:        'AI-Illusterated Memorial Data Visualization',
    category:    'Human AI Interaction',
    description: 'Built an interactive visualization of WorkSafeBC fatality data where AI illustrations were generated directly from worker death stories, with computer vision–detected figures serving as clickable data points linked to individual records.',
    status:      'In progress',
    meta:        '2026',
    url:         'https://mrymrzie.github.io/WorkSafeBCVis/',
    skills:      'Design, Analyze & Build',
    highlight_skills: [
      'Visual encoding',
      'Dashboard/interface layout',
      'Narrative',
      'JS',
      'AI image generation (for data viz)',
      'Python scripting',
    ],
    img_color:   '#e0d8c8',
    story: [
  {
    type: 'paragraph',
    text: 'Workplace-fatality data is often presented as rows, categories, and totals. While these formats make the data measurable, they can also make it easy to forget that every record represents a person and a life lost.'
  },
  {
    type: 'paragraph',
    text: 'Using public data from WorkSafeBC, I created an interactive visualization that connects the overall patterns across industries with the individual stories behind the numbers.'
  },

  {
    type: 'heading',
    text: 'Designing the overview'
  },
  {
    type: 'paragraph',
    text: 'I used Google Flow and ChatGPT to create an illustrated landscape representing six industries. This scene became the landing page and visual overview of the dataset, giving users an immediate sense of the industries represented before asking them to examine individual records.'
  },
  {
    type: 'paragraph',
    text: 'I added transparent SVG regions over the illustration to make it interactive. Users can select an industry directly from the scene and move from the cross-industry overview into a more detailed exploration of its fatalities.'
  },
  {
    type: 'image',
    src: 'images/worksafebclanding.png',
    caption: 'The illustrated landing page provides an interactive overview of six industries.',
    alt: 'Illustrated landscape representing six industries included in the WorkSafeBC data'
  },

  {
    type: 'heading',
    text: 'Making every record visible'
  },
  {
    type: 'paragraph',
    text: 'Inside each industry scene, workers act as individual data points. Rather than reducing fatalities to a single total, the visualization shows one figure for every record, preserving both the scale of the loss and the individuality of each case.'
  },
  {
    type: 'paragraph',
    text: 'Users can select a worker to learn about the corresponding incident. This creates a progressive storytelling flow: begin with the overall distribution, explore a particular industry, and then encounter the individual stories represented within it.'
  },
  {
    type: 'image',
    src: 'images/workerstory.png',
    caption: 'Each worker represents an individual record and provides access to its story.',
    alt: 'Industry scene containing interactive worker figures'
  },

  {
    type: 'heading',
    text: 'Using computer vision to build the interaction'
  },
  {
    type: 'paragraph',
    text: 'The worker figures were embedded inside AI-generated illustrations rather than placed at predefined coordinates. Manually locating and mapping every figure would have been slow and difficult to maintain, so I used Roboflow to detect the people in each image.'
  },
  {
    type: 'paragraph',
    text: 'I used the resulting bounding-box coordinates to create interactive regions for the detected figures and connect each one to a record in the WorkSafeBC data. In this way, computer vision became part of the visualization-development pipeline: it transformed elements inside a static image into clickable data points.'
  },
  {
    type: 'image',
    src: 'images/wsbroboflow.png',
    caption: 'Roboflow detected the worker figures and provided the coordinates needed to make them interactive.',
    alt: 'AI-generated industry scene with bounding boxes around detected worker figures'
  },

  {
    type: 'heading',
    text: 'Illustrating individual stories'
  },
  {
    type: 'paragraph',
    text: 'The database also contained a written account associated with each fatality. I developed a Python pipeline that transformed each written account into a prompt and used the OpenAI API to generate a corresponding illustration, giving every record a visual entry point rather than presenting the incident as text alone.'
  },
  {
    type: 'paragraph',
    text: 'When a user selects a worker, the visualization connects the figure in the industry scene with the underlying record and its generated illustration. The intent was not to reconstruct the event literally, but to help users pause on each case and recognize the human story contained in the data.'
  },


  {
    type: 'heading',
    text: 'An AI-assisted visualization pipeline'
  },
  {
    type: 'paragraph',
    text: 'This project used generative AI, computer vision, data processing, and interactive visualization at different stages. Generative AI created the visual scenes, Roboflow located the people within them, Python connected stories to generated images, and SVG and JavaScript turned the results into an explorable interface.'
  },
  {
    type: 'paragraph',
    text: 'The result moves between two important views of the data: the overview reveals patterns across industries, while the interactive workers ensure that those patterns never obscure the individual lives they represent.'
  },

  {
    type: 'quote',
    text: 'Mourn for the dead. Fight for the living. ---Mary Harris'
  }
]
  },
  {
    name:        'Serendipitous Explanation',
    category:    'Designing for Complex Interfaces',
    description: 'People rarely read legends or onboarding text; they dive straight into interacting. This project leverages that behavior to deliver explanations serendipitously, meeting users where they already are and supporting non-linear, discovery-driven learning.',
    status:      'Done',
    meta:        'a contribution of PhD thesis, SFU, 2022–2026',
    skills:      'Research, Design, Analyze & Build, Evaluate',
    highlight_skills: [
      'Semi-structured interviews',
      'Think-aloud protocols',
      'In-the-wild sampling',
      'Observational coding',
      'Video/screen analysis',
      'Literature review',
      'Thematic analysis',
      'Wireframing',
      'Prototyping',
      'Storyboarding',
      'Visual encoding',
      'Dashboard/interface layout',
      'Narrative',
      'Legend and onboarding',
      'JS',
      'D3.js',
      'SQL',
      'Controlled experiments (between/within subjects)',
      'Task performance metrics (error, task completion time)',
      'Standardized scales (SUS, Likert, ASQ)',
      'Interaction log analysis',
      'Eye tracking',
      'A/B testing',
    ],
    img_color:   '#c8e0d4',
    story: [
      { type: 'paragraph', text: 'Watch anyone open a complex visualization and you see the same thing: they skip the legend, ignore the intro text, and start clicking/hovering around.' },

      { type: 'heading', text: 'The observation' },
      { type: 'paragraph', text: 'I studied how people actually interact with complex visualizations and found that explanation delivered up front, before interaction, mostly goes unread. Predifined learning paths as in step-by-step guides are not often preferred. People learn by poking at the thing.' },
      

      { type: 'heading', text: 'The design response' },
      { type: 'paragraph', text: 'Rather than fighting that behavior, I designed for it: explanations surface serendipitously, in the moment a user touches the element they are relevant to. Learning becomes non-linear and discovery-driven instead of front-loaded.' },
     
{
  type: 'paragraph',
  text: 'I built VisTips, the serendipitious explainations prototype, as a full-stack web application using JavaScript, D3.js, HTML, and CSS for the interactive visualization, with Node.js and Express supporting the back end and SQL managing the underlying data. I also used Python to analyze the study’s behavioral interaction data.'
},
      { type: 'heading', text: 'How I evaluated it' },
      { type: 'paragraph', text: 'Controlled experiments with task performance metrics and standardized scales, supported by interaction log analysis, eye tracking, and A/B comparison against conventional up-front explanation.' },

      { type: 'quote', text: 'Provide explanations people interact with the interface, without preventing their exploration. They will gain more insights. ' },

     
    ],
  },

  {
    name:        '3D User Interfaces for Smart Environments',
    category:    'Designing for Complex Interfaces',
    description: 'Built and evaluated 3D user interfaces for a smart game and a smart conference application at an early-stage startup. Used a quantitative approach to analyze how interface design decisions and room complexity affected user performance in smart environments.',
    status:      'Done',
    meta:        'iSimorgh, IoT startup, 2017–2019',
    skills:      'Research, Design, Analyze & Build, Evaluate',
    highlight_skills: [
      'Literature review',
      'Prototyping',
      'JS',
      'C#',
      'Java',
      'Controlled experiments (between/within subjects)',
      'Usability testing',
      'Wizard of Oz',
      'Task performance metrics (error, task completion time)',
      'Standardized scales (SUS, Likert, ASQ)',
    ],
    img_color:   '#e0c8d0',
    story: [
      { type: 'paragraph', text: 'At an early-stage IoT startup, the question was simple to ask and hard to answer: how should someone control a room full of connected devices without hunting through menus?' },

      { type: 'heading', text: 'The context' },
      { type: 'paragraph', text: 'I worked on 3D user interfaces for two products — a smart game and a smart conference application — where the interface had to map onto physical space rather than a flat screen.' },
      { type: 'image', src: '', caption: 'Add a screenshot or photo of the 3D interface in use', alt: '3D user interface' },

      { type: 'heading', text: 'What I built' },
      { type: 'paragraph', text: 'Prototyped and implemented the interfaces in C#, Java, and JavaScript, iterating on how spatial layout and room complexity were represented to the user.' },
      { type: 'image', src: '', caption: 'Add a diagram of the interaction model or room setup', alt: 'Interaction model diagram' },

      { type: 'heading', text: 'How I evaluated it' },
      { type: 'paragraph', text: 'This was my most quantitative project. I ran controlled experiments with usability testing and Wizard of Oz sessions, measuring task completion time, error rates, and standardized scales to isolate how design decisions and room complexity affected user performance.' },

      { type: 'quote', text: 'Replace with your strongest number — the performance difference you measured.' },

      { type: 'heading', text: 'What I learned' },
      { type: 'paragraph', text: 'Close with what the data showed about spatial interfaces, and what carried forward into your later research.' },
    ],
  },
];
