export interface ISurveyItem {
  title: string;
  type: string;
}

export interface ISurvey {
  id: number;
  A: ISurveyItem;
  B: ISurveyItem;
}

export const getSurveyTypeEI: ISurvey[] = [
  {
    id: 1,
    A: {
      title: '사람',
      type: 'E',
    },
    B: {
      title: '장소',
      type: 'I',
    },
  },
  {
    id: 5,
    A: {
      title: '생각',
      type: 'I',
    },
    B: {
      title: '행동',
      type: 'E',
    },
  },
  {
    id: 7,
    A: {
      title: '넓다',
      type: 'E',
    },
    B: {
      title: '깊다',
      type: 'I',
    },
  },
  {
    id: 13,
    A: {
      title: '노는모임',
      type: 'E',
    },
    B: {
      title: '도서관',
      type: 'I',
    },
  },
  {
    id: 17,
    A: {
      title: '개인적',
      type: 'I',
    },
    B: {
      title: '공동체적',
      type: 'E',
    },
  },
  {
    id: 19,
    A: {
      title: '쓰다',
      type: 'I',
    },
    B: {
      title: '말하다',
      type: 'E',
    },
  },
  {
    id: 21,
    A: {
      title: '도시',
      type: 'E',
    },
    B: {
      title: '숲',
      type: 'I',
    },
  },
  {
    id: 27,
    A: {
      title: '보다',
      type: 'I',
    },
    B: {
      title: '뛰다',
      type: 'E',
    },
  },
  {
    id: 35,
    A: {
      title: '토론하다',
      type: 'E',
    },
    B: {
      title: '생각하다',
      type: 'I',
    },
  },
];

export const getSurveyTypeSN: ISurvey[] = [
  {
    id: 3,
    A: {
      title: '숲',
      type: 'N',
    },
    B: {
      title: '나무',
      type: 'S',
    },
  },
  {
    id: 9,
    A: {
      title: '사실',
      type: 'S',
    },
    B: {
      title: '가능성',
      type: 'N',
    },
  },
  {
    id: 11,
    A: {
      title: '관찰력',
      type: 'S',
    },
    B: {
      title: '상상력',
      type: 'N',
    },
  },
  {
    id: 15,
    A: {
      title: '이론적',
      type: 'N',
    },
    B: {
      title: '실제적',
      type: 'S',
    },
  },
  {
    id: 23,
    A: {
      title: '느긋하다',
      type: 'S',
    },
    B: {
      title: '조급하다',
      type: 'N',
    },
  },
  {
    id: 25,
    A: {
      title: '생산',
      type: 'S',
    },
    B: {
      title: '디자인',
      type: 'N',
    },
  },
  {
    id: 29,
    A: {
      title: '통찰력',
      type: 'N',
    },
    B: {
      title: '감각',
      type: 'S',
    },
  },
  {
    id: 31,
    A: {
      title: '변화하다',
      type: 'N',
    },
    B: {
      title: '보존하다',
      type: 'S',
    },
  },
  {
    id: 33,
    A: {
      title: '거북이',
      type: 'S',
    },
    B: {
      title: '토끼',
      type: 'N',
    },
  },
];

export const getSurveyTypeTF: ISurvey[] = [
  {
    id: 4,
    A: {
      title: '자비',
      type: 'F',
    },
    B: {
      title: '정의',
      type: 'T',
    },
  },
  {
    id: 10,
    A: {
      title: '머리',
      type: 'T',
    },
    B: {
      title: '가슴',
      type: 'F',
    },
  },
  {
    id: 12,
    A: {
      title: '열정',
      type: 'F',
    },
    B: {
      title: '일관성',
      type: 'T',
    },
  },
  {
    id: 20,
    A: {
      title: '냉정하다',
      type: 'T',
    },
    B: {
      title: '따뜻하다',
      type: 'F',
    },
  },
  {
    id: 24,
    A: {
      title: '진실',
      type: 'T',
    },
    B: {
      title: '재치',
      type: 'F',
    },
  },
  {
    id: 26,
    A: {
      title: '질서',
      type: 'T',
    },
    B: {
      title: '조화',
      type: 'F',
    },
  },
  {
    id: 28,
    A: {
      title: '가치',
      type: 'F',
    },
    B: {
      title: '논리',
      type: 'T',
    },
  },
  {
    id: 30,
    A: {
      title: '공평',
      type: 'T',
    },
    B: {
      title: '친절',
      type: 'F',
    },
  },
  {
    id: 34,
    A: {
      title: '관계중심적',
      type: 'F',
    },
    B: {
      title: '분석적',
      type: 'T',
    },
  },
];

export const getSurveyTypeJP: ISurvey[] = [
  {
    id: 2,
    A: {
      title: '조직',
      type: 'J',
    },
    B: {
      title: '자유',
      type: 'P',
    },
  },
  {
    id: 6,
    A: {
      title: '조직적',
      type: 'J',
    },
    B: {
      title: '융통적',
      type: 'P',
    },
  },
  {
    id: 8,
    A: {
      title: '호기심',
      type: 'P',
    },
    B: {
      title: '과단성',
      type: 'J',
    },
  },
  {
    id: 14,
    A: {
      title: '계획적',
      type: 'J',
    },
    B: {
      title: '즉흥적',
      type: 'P',
    },
  },
  {
    id: 16,
    A: {
      title: '질문',
      type: 'P',
    },
    B: {
      title: '대답',
      type: 'J',
    },
  },
  {
    id: 18,
    A: {
      title: '일',
      type: 'J',
    },
    B: {
      title: '놀이',
      type: 'P',
    },
  },
  {
    id: 22,
    A: {
      title: '지배인',
      type: 'J',
    },
    B: {
      title: '기업가',
      type: 'P',
    },
  },
  {
    id: 32,
    A: {
      title: '시작하다',
      type: 'P',
    },
    B: {
      title: '끝내다',
      type: 'J',
    },
  },
  {
    id: 36,
    A: {
      title: '과정',
      type: 'P',
    },
    B: {
      title: '결과',
      type: 'J',
    },
  },
];

export const getSurvey: ISurvey[] = [
  ...getSurveyTypeEI,
  ...getSurveyTypeSN,
  ...getSurveyTypeTF,
  ...getSurveyTypeJP,
].sort((a: ISurvey, b: ISurvey) => a.id - b.id);

export const getAnalysisMbti = (list: ISurveyItem[]): string => {
  let mbti: string = '';

  const statistics = list.reduce((acc, v) => {
    if (!acc[v.type]) acc[v.type] = 0;
    acc[v.type] += 1;
    return acc;
  }, {} as { [key: string]: number });

  if (statistics.I < statistics.E) mbti += 'E';
  else mbti += 'I';

  if (statistics.N < statistics.S) mbti += 'S';
  else mbti += 'N';

  if (statistics.F < statistics.T) mbti += 'T';
  else mbti += 'F';

  if (statistics.P < statistics.J) mbti += 'J';
  else mbti += 'P';

  return mbti;
};
