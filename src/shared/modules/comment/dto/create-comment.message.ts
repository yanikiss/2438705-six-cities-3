export const CreateCommentMessage = {
  comment: {
    invalidFormat: 'comment is required',
    lengthField: 'min length is 5, max is 2024'
  },
  rating: {
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
    invalidFormat: 'Must be Number',
  },
} as const;
