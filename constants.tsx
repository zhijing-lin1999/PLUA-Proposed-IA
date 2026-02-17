
import { Category, Article } from './types';

// Helper to generate articles with consistent structure and metadata
const createArticle = (id: string, title: string, category: any, subCategory: string): Article => ({
  id,
  title,
  category,
  subCategory,
  estimatedReadTime: '4 min read',
  summary: `Standard operating procedure for ${title.toLowerCase()} within the ${category} ${subCategory} workflow.`,
  sections: [
    { id: 'overview', title: 'Overview', content: 'Operational guidelines and technical requirements for tutors.' },
    { id: 'steps', title: 'Procedural Steps', content: 'Step-by-step instructions for completing this specific task during a live session.' },
    { id: 'troubleshooting', title: 'Common Obstacles', content: 'Guidelines for resolving technical or student-related issues.' },
  ]
});

export const HELP_CENTER_DATA: Category[] = [
  {
    id: 'PLUS',
    title: 'PLUS Application',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    subCategories: [
      {
        title: 'Training & Learning Progress',
        articles: [
          createArticle('p-tl-1', 'Navigating the Onboarding Learning Flow / Completing Onboarding Modules', 'PLUS', 'Training & Learning Progress'),
          createArticle('p-tl-2', 'Accessing Assigned Lessons', 'PLUS', 'Training & Learning Progress'),
          createArticle('p-tl-3', 'Understanding Lesson Statuses', 'PLUS', 'Training & Learning Progress'),
          createArticle('p-tl-4', 'Training Progress Indicators', 'PLUS', 'Training & Learning Progress'),
          createArticle('p-tl-5', 'Completing and Reviewing Lessons', 'PLUS', 'Training & Learning Progress'),
        ]
      },
      {
        title: 'Session Participation',
        articles: [
          createArticle('p-sp-1', 'Finding Your Assigned Sessions', 'PLUS', 'Session Participation'),
          createArticle('p-sp-2', 'Joining a Session', 'PLUS', 'Session Participation'),
          createArticle('p-sp-3', 'Understanding Session Statuses (upcoming, live, completed)', 'PLUS', 'Session Participation'),
          createArticle('p-sp-4', 'Viewing Session Details', 'PLUS', 'Session Participation'),
          createArticle('p-sp-5', 'Host Permissions & Session Passcodes (Lead Tutors)', 'PLUS', 'Session Participation'),
        ]
      },
      {
        title: 'Session Scheduling & Availability',
        articles: [
          createArticle('p-ss-1', 'Viewing and Filtering Your Sessions', 'PLUS', 'Session Scheduling & Availability'),
          createArticle('p-ss-2', 'Signing Up for Sessions', 'PLUS', 'Session Scheduling & Availability'),
          createArticle('p-ss-3', 'Editing or Cancelling a Sign-Up', 'PLUS', 'Session Scheduling & Availability'),
          createArticle('p-ss-4', 'Submitting a Call-Off', 'PLUS', 'Session Scheduling & Availability'),
          createArticle('p-ss-5', 'Claiming a Fill-In Session', 'PLUS', 'Session Scheduling & Availability'),
          createArticle('p-ss-6', 'Why a Session May Not Appear', 'PLUS', 'Session Scheduling & Availability'),
        ]
      },
      {
        title: 'Student Information',
        articles: [
          createArticle('p-si-1', 'Accessing the Student Dashboard', 'PLUS', 'Student Information'),
          createArticle('p-si-2', 'Understanding the Student Roster', 'PLUS', 'Student Information'),
          createArticle('p-si-3', 'Understanding Student Status Indicators', 'PLUS', 'Student Information'),
          createArticle('p-si-4', 'Interpreting Session Metrics (student count, tutor count)', 'PLUS', 'Student Information'),
          createArticle('p-si-5', 'Role-Based Access (Tutor vs Lead Tutor)', 'PLUS', 'Student Information'),
        ]
      },
      {
        title: 'Session Follow-Up & Documentation',
        articles: [
          createArticle('p-sf-1', 'Starting a Reflection', 'PLUS', 'Session Follow-Up & Documentation'),
          createArticle('p-sf-2', 'Completing the Reflection Form', 'PLUS', 'Session Follow-Up & Documentation'),
          createArticle('p-sf-3', 'Reflection Statuses (Incomplete vs Completed)', 'PLUS', 'Session Follow-Up & Documentation'),
          createArticle('p-sf-4', 'Uploading Zoom Recordings', 'PLUS', 'Session Follow-Up & Documentation'),
          createArticle('p-sf-5', 'When a Session “Did Not Happen”', 'PLUS', 'Session Follow-Up & Documentation'),
          createArticle('p-sf-6', 'Reflection Troubleshooting', 'PLUS', 'Session Follow-Up & Documentation'),
        ]
      }
    ]
  },
  {
    id: 'Zoom',
    title: 'Zoom Help',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    subCategories: [
      {
        title: 'General Zoom Basics',
        articles: [
          createArticle('z-gb-1', 'How Zoom Sessions Are Launched from PLUS', 'Zoom', 'General Zoom Basics'),
          createArticle('z-gb-2', 'Zoom Roles in PLUS (Host, Co-Host, Participant)', 'Zoom', 'General Zoom Basics'),
          createArticle('z-gb-3', 'Understanding the Zoom Interface', 'Zoom', 'General Zoom Basics'),
          createArticle('z-gb-4', 'Audio & Video Setup Before a Session', 'Zoom', 'General Zoom Basics'),
        ]
      },
      {
        title: 'Meetings & Host Controls',
        articles: [
          createArticle('z-hc-1', 'Claiming Host (Lead Tutors Only)', 'Zoom', 'Meetings & Host Controls'),
          createArticle('z-hc-2', 'Managing Participant Permissions', 'Zoom', 'Meetings & Host Controls'),
          createArticle('z-hc-3', 'Controlling Screen Share Settings', 'Zoom', 'Meetings & Host Controls'),
          createArticle('z-hc-4', 'Using the Waiting Room', 'Zoom', 'Meetings & Host Controls'),
          createArticle('z-hc-5', 'Managing Chat Settings', 'Zoom', 'Meetings & Host Controls'),
        ]
      },
      {
        title: 'Breakout Rooms',
        articles: [
          createArticle('z-br-1', 'Creating and Assigning Breakout Rooms', 'Zoom', 'Breakout Rooms'),
          createArticle('z-br-2', 'Rotating Between Breakout Rooms', 'Zoom', 'Breakout Rooms'),
          createArticle('z-br-3', 'Handling Late-Arriving Students', 'Zoom', 'Breakout Rooms'),
          createArticle('z-br-4', 'Broadcasting Messages to Breakout Rooms', 'Zoom', 'Breakout Rooms'),
          createArticle('z-br-5', 'Closing and Reopening Breakout Rooms', 'Zoom', 'Breakout Rooms'),
        ]
      },
      {
        title: 'Screen Sharing & Whiteboard',
        articles: [
          createArticle('z-sw-1', 'How to Share Your Screen', 'Zoom', 'Screen Sharing & Whiteboard'),
          createArticle('z-sw-2', 'Allowing Students to Share Their Screen', 'Zoom', 'Screen Sharing & Whiteboard'),
          createArticle('z-sw-3', 'Using Zoom Annotations', 'Zoom', 'Screen Sharing & Whiteboard'),
          createArticle('z-sw-4', 'Using the Zoom Whiteboard', 'Zoom', 'Screen Sharing & Whiteboard'),
        ]
      },
      {
        title: 'Recording & Compliance',
        articles: [
          createArticle('z-rc-1', 'When Recording Is Required in PLUS', 'Zoom', 'Recording & Compliance'),
          createArticle('z-rc-2', 'Starting and Stopping a Recording', 'Zoom', 'Recording & Compliance'),
          createArticle('z-rc-3', 'Breakout Room Recording Behavior', 'Zoom', 'Recording & Compliance'),
          createArticle('z-rc-4', 'Uploading Zoom Recordings to PLUS', 'Zoom', 'Recording & Compliance'),
          createArticle('z-rc-5', 'Privacy & Safety Guidelines', 'Zoom', 'Recording & Compliance'),
        ]
      },
      {
        title: 'Accessibility Features',
        articles: [
          createArticle('z-af-1', 'Enabling Live Translated Captions', 'Zoom', 'Accessibility Features'),
          createArticle('z-af-2', 'Adjusting Audio Settings', 'Zoom', 'Accessibility Features'),
          createArticle('z-af-3', 'Keyboard Navigation Basics', 'Zoom', 'Accessibility Features'),
          createArticle('z-af-4', 'Supporting Students with Limited Bandwidth', 'Zoom', 'Accessibility Features'),
        ]
      },
      {
        title: 'Best Practices for Tutors',
        articles: [
          createArticle('z-bp-1', 'Professional Zoom Setup (Background, Camera, Audio)', 'Zoom', 'Best Practices for Tutors'),
          createArticle('z-bp-2', 'Managing Transitions Between Students', 'Zoom', 'Best Practices for Tutors'),
          createArticle('z-bp-3', 'Maintaining Privacy in Breakout Rooms', 'Zoom', 'Best Practices for Tutors'),
          createArticle('z-bp-4', 'Recording Awareness & Safety Practices', 'Zoom', 'Best Practices for Tutors'),
        ]
      },
      {
        title: 'Zoom Troubleshooting',
        articles: [
          createArticle('z-ts-1', 'Microphone Not Working', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-2', 'Camera Not Working', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-3', 'Students Cannot Join', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-4', 'Breakout Rooms Not Opening', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-5', 'Unable to Claim Host', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-6', 'Internet Instability During Session', 'Zoom', 'Zoom Troubleshooting'),
          createArticle('z-ts-7', 'What to Do in an Urgent Technical Issue', 'Zoom', 'Zoom Troubleshooting'),
        ]
      },
    ]
  },
  {
    id: 'Slack',
    title: 'Slack Help',
    icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
    subCategories: [
      {
        title: 'Communication Channels',
        articles: [
          createArticle('s-cc-1', 'Understanding School Channels', 'Slack', 'Communication Channels'),
          createArticle('s-cc-2', 'What to Post in a School Channel', 'Slack', 'Communication Channels'),
          createArticle('s-cc-3', 'When to Use Direct Messages', 'Slack', 'Communication Channels'),
          createArticle('s-cc-4', 'Using @Mentions Correctly', 'Slack', 'Communication Channels'),
          createArticle('s-cc-5', 'Tagging the Tutor Team for Urgent Issues', 'Slack', 'Communication Channels'),
        ]
      },
      {
        title: 'Urgent vs Non-Urgent Issues',
        articles: [
          createArticle('s-uv-1', 'What Counts as an Urgent Issue', 'Slack', 'Urgent vs Non-Urgent Issues'),
          createArticle('s-uv-2', 'What Counts as a Non-Urgent Issue', 'Slack', 'Urgent vs Non-Urgent Issues'),
          createArticle('s-uv-3', 'What to Do If You Cannot Start a Session', 'Slack', 'Urgent vs Non-Urgent Issues'),
          createArticle('s-uv-4', 'Escalation Steps During a Live Session', 'Slack', 'Urgent vs Non-Urgent Issues'),
        ]
      },
      {
        title: 'Contacting the Right Person',
        articles: [
          createArticle('s-cp-1', 'Contacting the Lead Tutor', 'Slack', 'Contacting the Right Person'),
          createArticle('s-cp-2', 'Contacting Your Supervisor', 'Slack', 'Contacting the Right Person'),
          createArticle('s-cp-3', 'When to Tag the Tutoring Team', 'Slack', 'Contacting the Right Person'),
          createArticle('s-cp-4', 'Payroll & Administrative Questions', 'Slack', 'Contacting the Right Person'),
        ]
      },
      {
        title: 'Reporting Incidents',
        articles: [
          createArticle('s-ri-1', 'Reporting an Inappropriate Interaction', 'Slack', 'Reporting Incidents'),
          createArticle('s-ri-2', 'Reporting Technical Failures', 'Slack', 'Reporting Incidents'),
          createArticle('s-ri-3', 'Reporting Attendance Issues', 'Slack', 'Reporting Incidents'),
          createArticle('s-ri-4', 'When to Use Slack vs Reflection Form', 'Slack', 'Reporting Incidents'),
        ]
      },
      {
        title: 'Professional Communication Guidelines',
        articles: [
          createArticle('s-pg-1', 'Professional Tone Expectations', 'Slack', 'Professional Communication Guidelines'),
          createArticle('s-pg-2', 'Confidentiality & Student Privacy', 'Slack', 'Professional Communication Guidelines'),
          createArticle('s-pg-3', 'Avoiding Sensitive Information in Channels', 'Slack', 'Professional Communication Guidelines'),
          createArticle('s-pg-4', 'Communication During Live Sessions', 'Slack', 'Professional Communication Guidelines'),
        ]
      },
      {
        title: 'Slack Troubleshooting',
        articles: [
          createArticle('s-st-1', 'I Can’t Access a School Channel', 'Slack', 'Slack Troubleshooting'),
          createArticle('s-st-2', 'Notifications Not Appearing', 'Slack', 'Slack Troubleshooting'),
          createArticle('s-st-3', 'Not Receiving Mentions', 'Slack', 'Slack Troubleshooting'),
          createArticle('s-st-4', 'What to Do If Slack Is Down', 'Slack', 'Slack Troubleshooting'),
        ]
      },
    ]
  }
];
