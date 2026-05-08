// Dummy Auth Data
export const DUMMY_USER = {
  email: 'dev@devflow.com',
  password: 'password123',
  name: 'Alex Rivera',
  role: 'Lead Developer',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaAbGpuBEm9V6lNHNma-TbSw8B3MvQReFYBt0_V3Hkwiynpfh6cLPfpomMTBTV7XFdO0emjtuGAVnk_pstuBdqbA-DYJox9O7fymsy-Lr36sDzTeacCfkqv1KeAQIvHCgauBKXfcrvQLUoqxhSx3ikbSkydykLGpXfSQZ76Pz1tpRzePmmezCqae2brzd_Mj4_7hcu8A1KAk4Zk5D5MVJDML2QoDIXVdQM7LFFBce-o2OuxD5PIv5WuLAet7hIvbJWd_UTt6eupqc',
};

// Dummy Tasks Data
export interface Task {
  id: string;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  estimate: string;
  project: string;
  dueDate: string;
  tags: string[];
  status: 'todo' | 'active' | 'blocked' | 'done';
  description?: string;
  subtasks?: { id: string; text: string; done: boolean }[];
  activityLog?: { action: string; time: string; icon: string }[];
}

export const DUMMY_TASKS: Task[] = [
  {
    id: 't1',
    title: 'Refactor Authentication Middleware',
    priority: 'High',
    estimate: '4h / 2.5h',
    project: 'Core Engine',
    dueDate: 'Oct 24, 2023',
    tags: ['#api', '#security'],
    status: 'active',
    description: 'The current JWT verification logic is tightly coupled with the route handlers. We need to abstract this into a standalone middleware layer to support OAuth2 and session-based fallbacks. This will also fix the redundant database calls occurring in every protected route.',
    subtasks: [
      { id: 'st1', text: 'Audit existing auth routes', done: true },
      { id: 'st2', text: 'Draft new middleware interface', done: true },
      { id: 'st3', text: 'Implement Redis caching for tokens', done: false },
      { id: 'st4', text: 'Run regression tests on login flow', done: false },
    ],
    activityLog: [
      { action: 'Alex Rivera updated description', time: '2 hours ago', icon: 'edit' },
      { action: 'Time tracking started for 45 mins', time: '4 hours ago', icon: 'timer' },
    ],
  },
  {
    id: 't2',
    title: 'Implement Bento Grid Dashboard',
    priority: 'Medium',
    estimate: '8h / 0h',
    project: 'Web Portal',
    dueDate: 'Oct 26, 2023',
    tags: ['#frontend', '#ui-ux'],
    status: 'todo',
  },
  {
    id: 't3',
    title: 'Update Documentation for Webhooks',
    priority: 'Low',
    estimate: '2h / 0h',
    project: 'Internal Docs',
    dueDate: 'Oct 28, 2023',
    tags: ['#docs'],
    status: 'todo',
  },
  {
    id: 't4',
    title: 'Fix Race Condition in CI Pipeline',
    priority: 'High',
    estimate: '3h / 1.5h',
    project: 'Infrastructure',
    dueDate: 'Oct 23, 2023',
    tags: ['#devops', '#urgent'],
    status: 'blocked',
  },
];

// Dummy Kanban Board Data
export interface KanbanCard {
  id: string;
  title: string;
  labels: { text: string; type: 'primary' | 'tertiary' | 'secondary' | 'error' | 'surface' }[];
  estimate: string;
  actual?: string;
  progress?: number;
  assignees?: string[];
  blockedReason?: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color: 'outline' | 'secondary' | 'error' | 'primary';
  cards: KanbanCard[];
}

export const DUMMY_KANBAN: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'Todo',
    color: 'outline',
    cards: [
      {
        id: 'k1',
        title: 'Implement responsive grid for dashboard layout',
        labels: [{ text: 'Frontend', type: 'primary' }],
        estimate: '8h',
        actual: '0h',
        progress: 0,
      },
      {
        id: 'k2',
        title: 'API endpoint for batch task updates',
        labels: [{ text: 'Backend', type: 'tertiary' }],
        estimate: '4h',
        actual: '0h',
        progress: 0,
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'secondary',
    cards: [
      {
        id: 'k3',
        title: 'Refactor auth context for SSR support',
        labels: [{ text: 'Frontend', type: 'primary' }],
        estimate: '12h',
        actual: '8h',
        progress: 66,
        assignees: ['AR'],
      },
      {
        id: 'k4',
        title: 'Fix race condition in webhook listener',
        labels: [{ text: 'Backend', type: 'tertiary' }, { text: 'Bug', type: 'error' }],
        estimate: '3h',
        actual: '2h',
        progress: 85,
        assignees: ['JD'],
      },
    ],
  },
  {
    id: 'blocked',
    title: 'Blocked',
    color: 'error',
    cards: [
      {
        id: 'k5',
        title: 'Migrate staging DB to new VPC',
        labels: [{ text: 'DevOps', type: 'surface' }],
        estimate: '6h',
        actual: '1h',
        progress: 16,
        blockedReason: 'Waiting for security clearance',
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    color: 'primary',
    cards: [
      {
        id: 'k6',
        title: 'Finalize design system tokens',
        labels: [{ text: 'Design', type: 'surface' }],
        estimate: '2h',
        actual: '2h',
        progress: 100,
      },
    ],
  },
];

// Dummy Calendar Events
export interface CalendarEvent {
  id: string;
  title: string;
  date: number;
  startTime: string;
  endTime?: string;
  type: 'primary' | 'secondary' | 'tertiary';
}

export const DUMMY_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'e1', title: 'API Auth Flow', date: 2, startTime: '09:00', endTime: '11:30', type: 'primary' },
  { id: 'e2', title: 'Design Sync', date: 4, startTime: '14:00', endTime: '15:00', type: 'secondary' },
  { id: 'e3', title: 'Deploy Alpha', date: 5, startTime: '10:00', endTime: '12:00', type: 'primary' },
  { id: 'e4', title: 'Code Review', date: 11, startTime: '11:00', type: 'tertiary' },
];

// Dummy Unscheduled Tasks
export const DUMMY_UNSCHEDULED = [
  { id: 'u1', title: 'Database Migration', category: 'Backend', priority: 'High' },
  { id: 'u2', title: 'Refactor Utils', category: 'Core', priority: '' },
  { id: 'u3', title: 'Stripe Integration', category: 'Payments', priority: 'Mid' },
  { id: 'u4', title: 'Landing Page UI', category: 'Frontend', priority: '' },
];
