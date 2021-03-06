export interface IMBTI {
  id: number;
  type: string;
  alias: string;
}

export const getAnalysisType: IMBTI[] = [
  {
    id: 1,
    type: 'INTJ',
    alias: '인티제',
  },
  {
    id: 2,
    type: 'INTP',
    alias: '인팁',
  },
  {
    id: 3,
    type: 'ENTJ',
    alias: '엔티제',
  },
  {
    id: 4,
    type: 'ENTP',
    alias: '엔팁',
  },
];

export const getDiplomacyType: IMBTI[] = [
  {
    id: 5,
    type: 'INFJ',
    alias: '인프제',
  },
  {
    id: 6,
    type: 'INFP',
    alias: '인프피',
  },
  {
    id: 7,
    type: 'ENFJ',
    alias: '엔프제',
  },
  {
    id: 8,
    type: 'ENFP',
    alias: '엔프피',
  },
];

export const getManagerType: IMBTI[] = [
  {
    id: 9,
    type: 'ISTJ',
    alias: '잇티제',
  },
  {
    id: 10,
    type: 'ISFJ',
    alias: '잇프제',
  },
  {
    id: 11,
    type: 'ESTJ',
    alias: '엣티제',
  },
  {
    id: 12,
    type: 'ESFJ',
    alias: '엣프제',
  },
];

export const getExplorerType: IMBTI[] = [
  {
    id: 13,
    type: 'ISTP',
    alias: '잇팁',
  },
  {
    id: 14,
    type: 'ISFP',
    alias: '잇프피',
  },
  {
    id: 15,
    type: 'ESTP',
    alias: '엣팁',
  },
  {
    id: 16,
    type: 'ESFP',
    alias: '엣프피',
  },
];

export const getMbti: IMBTI[] = [
  ...getAnalysisType,
  ...getDiplomacyType,
  ...getManagerType,
  ...getExplorerType,
];
